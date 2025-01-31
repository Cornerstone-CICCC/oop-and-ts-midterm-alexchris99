import { Component } from "../common/Component.js";


export class CartItem extends Component {
  constructor(props){
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
    this.handdleRemove = this.handdleRemove.bind(this)
    this.handdleSubstract = this.handdleSubstract.bind(this)
  }

handleAdd(){
    this.props.cartContext.updateQuantity(this.props.item.id)
  }

  handdleSubstract(){
    if(this.props.item.quantity > 1){
      this.props.cartContext.restProduct(this.props.item.id)
    }else{
      this.handdleRemove()
    }
  }

  handdleRemove(){
    this.props.cartContext.removeProduct(this.props.item.id)
  }


  render() {
    const cartItem = document.createElement("li")
    cartItem.className = "cart-item "
    cartItem.id = `Id-${this.props.item.id}`
    cartItem.innerHTML = `
      <p class="cart-item-name">Name: ${this.props.item.title}</p>
      <div class="cart-item-info">
        <div class="cart-item-quantity"><button class="rest btn btn-dark" onClick="checkQuantity(${this.props.item.quantity},${this.props.item.id})">-</button><span>${this.props.item.quantity}</span><button class="add btn btn-dark">+</button></div>
        <p class="cart-item-total">Total: $${this.props.item.total}</p>
        <img src=${this.props.item.image}>
      </div>
      <button class="remove btn btn-dark" onClick="removeItem(${this.props.item.id})">Remove</button>
    `
    cartItem.querySelector(".add").addEventListener("click", this.handleAdd)

    cartItem.querySelector(".rest").addEventListener("click", this.handdleSubstract)

    cartItem.querySelector(".remove").addEventListener("click", this.handdleRemove)


    cartItem.querySelector(".add").addEventListener("click",()=>{
      Toastify({
        text: "Product added",
        className: "info",
        offset: {
          x: "0", // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: "36em" // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast()
    })

    cartItem.querySelector(".remove").addEventListener("click",() =>{
      Toastify({
        text: "Product Removed",
        className: "info",
        offset: {
          x: "0", // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: "38em" // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        style: {
          background: "linear-gradient(to right,rgb(176, 0, 0),rgb(201, 61, 61))",
        }
      }).showToast()
    })

    cartItem.querySelector(".rest").addEventListener("click", ()=>{
      Toastify({
        text: "Product Deducted",
        className: "info",
        offset: {
          x: "0", // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: "38em" // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        style: {
          background: "linear-gradient(to right,rgb(94, 0, 176),rgb(201, 61, 61))",
        }
      }).showToast()
    })

    return cartItem
  }
}