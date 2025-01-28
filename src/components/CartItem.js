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
    this.props.cartContext.restProduct(this.props.item.id)
  }

  handdleRemove(){
    this.props.cartContext.removeProduct(this.props.item.id)
  }


  render() {
    const cartItem = document.createElement("li")
    cartItem.className = "cart-item"
    cartItem.innerHTML = `
      <p class="cart-item-name">Name: ${this.props.item.title}</p>
      <div class="cart-item-info">
        <div class="cart-item-quantity"><button class="rest btn btn-dark">-</button><span>${this.props.item.quantity}</span><button class="add btn btn-dark">+</button></div>
        <p class="cart-item-total">Total: $${this.props.item.total}</p>
        <img src=${this.props.item.image}>
      </div>
      <button class="remove btn btn-dark">Remove Item</button>
    `
    cartItem.querySelector(".add").addEventListener("click", this.handleAdd)

    cartItem.querySelector(".rest").addEventListener("click", this.handdleSubstract)

    cartItem.querySelector(".remove").addEventListener("click", this.handdleRemove)
    return cartItem
  }
}