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
    const product = document.createElement("div")
    product.className = "product-item"
    product.innerHTML = `
    <h3 class="title">${this.props.product.title}</h3>
    <h4 class="category">Category${this.props.product.category}</h4>
    <img class="image-product" src=${this.props.product.image}>
    <p class="description-product">${this.props.product.description}</p>
    <div class="product-container">
      <p class="price">$${this.props.product.price}</p>
      <button class="add-cart btn btn-dark">Add to Cart</button>
    </div>
    `
    product.querySelector(".add-cart").addEventListener("click",
      this.handdleAdd
    )
    return product
  }
}