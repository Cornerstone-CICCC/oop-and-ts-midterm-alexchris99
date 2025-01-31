import { Component } from "../common/Component.js";
import { ProductItem } from "./ProductItem.js";

export class ProductList extends Component {
  constructor(props){
    super(props)
    this.state = {products: []}
  }

  // create the list of items from the appi request
  mount(container){
    fetch("https://fakestoreapi.com/products")
    .then(respose => respose.json())
    .then(data =>{
      // asing the request to the state
      this.state.products = data
      // appen the items
      container.appendChild(this.render())
    })
    .catch(error => console.log(error))
  }

  // render the componet
  render() {
    const productList = document.createElement("div")
    productList.id = "list"
    productList.className  = "product-list"

    //loop the array of products
    this.state.products.forEach(product =>{
      const item = new ProductItem({
        product,
        cartContext: this.props.cartContext
      }) 
      productList.appendChild(item.render())
    })
    return productList
  }
}