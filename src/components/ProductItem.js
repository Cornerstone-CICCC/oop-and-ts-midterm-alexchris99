
import { Component } from "../common/Component.js";


export class ProductItem extends Component {
  constructor(props){
    // to  pass the comunication
    super(props)
    this.handdleAdd = this.handdleAdd.bind(this)
  }

  handdleAdd(){
    this.props.cartContext.addProduct(this.props.product)
  }

  // generate the div that will contain the information
  render() {
    //<h4 class="category">${this.props.product.category}</h4>
    const product = document.createElement("div")
    product.className = "product-item"
    product.innerHTML = `
    <h4 class="title">${this.props.product.title}</h4>
    <img class="image-product" onClick="modal('${this.props.product.title}','${this.props.product.description}','${this.props.product.image}')" src=${this.props.product.image}>
    <div class="product-container">
      <p class="price">$${this.props.product.price}</p>
      <button value="${this.props.product.id}" class="add-cart btn btn-dark" onClick="addItem(${this.props.product.id})">Add to Cart<img class="image-cart" src="../img/shopping-cart.png"></button>
    </div>
    `
    product.querySelector(".add-cart").addEventListener("click",
      this.handdleAdd,
    )
    product.querySelector(".add-cart").addEventListener("click",()=>{
      Toastify({
        text: "Product added",
        className: "info",
        offset: {
          x: "0", // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: "38em" // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast()
    })
    return product
  }
}