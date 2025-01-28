import { Component } from "../common/Component.js";
import { CartList } from "../components/CartList.js"
import { ProductList } from "../components/ProductList.js";
import { Header } from "../components/Header.js";
import { Footer } from "./Footer.js";

export class App extends Component {
  // Landing Page
  render() {
    const appContainer = document.createElement("div")
    appContainer.className = "main-container"
    appContainer.innerHTML = `
      <header class="header"></header>
      <div>
        <main>
          <div class="main-container">
            <div class="item-list"></div>
            <div class="cart-list">
            </div>
          </div>
        </main>
      </div>
      <footer class="footer"></footer>
    `
    // new instance of Cart and pass cartContext
    const cart = new CartList({
      cartContext: this.props.cartContext
    }).render()

    // pass the cartContext component to the productList
    const productsList = new ProductList({
      cartContext: this.props.cartContext
    })

    const header = new Header().render()
    const footer = new Footer().render()

    appContainer.querySelector(".cart-list").appendChild(cart)
    appContainer.querySelector(".header").append(header)
    appContainer.querySelector(".footer").append(footer)
    productsList.mount(appContainer.querySelector(".item-list"))

    return appContainer
  }

}