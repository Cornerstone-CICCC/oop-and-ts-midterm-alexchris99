import { Component } from "../common/Component.js";

export class Footer extends Component {
  render() {
    const footer = document.createElement("div")
    const date = new Date().getFullYear()
    footer.innerHTML = `
    <p>All rigths reseved ${date} CL Shop</p>
    `
    return footer
  }
}