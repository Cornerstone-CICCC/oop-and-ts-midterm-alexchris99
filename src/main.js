import { App } from "./components/App.js";
import { CartContext } from "./contexts/CartContext.js";

// assing the element to the var
const root = document.querySelector('#app')

// create a new instance
const cartContext = new CartContext()
// pass the context as an objetct 
const app = new App({ cartContext })
// pass al the information
app.mount(root)