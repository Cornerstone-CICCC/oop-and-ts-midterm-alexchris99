import { Component } from "../common/Component.js";
import { CartItem } from "../components/CartItem.js";

export class CartList extends Component {
  constructor(props){
    super(props)
    this.uppdateCart = this.uppdateCart.bind(this)
    this.state = { cart:[] }
    this.props.cartContext.subscribe(this.uppdateCart)
    this.elementContainer = null
    this.quantity = 0
    this.total = 0
    this.header = null
    this.totalCant = null
  }

  uppdateCart(cart){// cart will come from cart context
    //iterate over all the items
    this.quantity = 0
    this.total = 0
    this.header.innerHTML = ""
    this.state.cart = cart
    this.elementContainer.innerHTML = " "
    //this.productElement.innerHTML = ""
    this.state.cart.forEach(item => {
      const element = new CartItem({
        item,
        cartContext: this.props.cartContext
      })
      this.quantity += element.props.item.quantity
      this.total += element.props.item.total 
      this.elementContainer.append(element.render())
    })
    this.totalCant.innerHTML = `Total ${this.total}`
    this.header.innerHTML = `Items ${this.quantity}`
  }



  render() {
    const cartElements = document.createElement("div")
    cartElements.innerHTML = `
      <h2 class="items-count">Items ${this.quantity}</h2>
      <ul class="cart-list-container"></ul>
      <h2 class="total">Total $${this.total}</h2>
    `
    this.header = cartElements.querySelector(".items-count")
    this.totalCant = cartElements.querySelector(".total")
    this.elementContainer = cartElements.querySelector
    (".cart-list-container")
    return cartElements
  }
}