export class CartContext {
    constructor(){
        this.cart = []
        this.listeners = [] // array of functions
    }

    // return the cart array
    getCart(){
        return this.cart
    }

    // manage the add to the cart
    addProduct(item){
        const inCart = this.cart.find(product => product.id === item.id)
        if(inCart){
            this.cart = this.cart.map(product =>{
                if(product.id === item.id){
                    return{
                        ...product,
                        quantity: product.quantity+=1,
                        total: product.price * product.quantity
                    }
                }else{
                    return product
                }
            })
        }else{
            const newProduct ={
                ...item,
                quantity: 1,
                total: item.price
            }
            this.cart.push(newProduct)
        }
        this.notifyListeners()
    }

    // manage the quantity of the same ittem in the cart
    updateQuantity(id){
        this.cart = this.cart.map(product => {
            if(product.id !== id){
                return product
            }else{
                return{
                    ...product,
                    quantity: product.quantity+=1,
                    total: product.price*product.quantity
                }
            }
        })
        this.notifyListeners()
    }

    // manage the rest from the cart
    restProduct(id){
        this.cart = this.cart.map(product => {
            if(id === product.id){
                return{
                    ...product,
                    quantity: product.quantity-=1,
                    total: product.price*product.quantity
                }
            }else{
                return product
            }
        })
        this.notifyListeners()
    }

    // manage the remove from the
    removeProduct(id){
        setTimeout(()=>{
            this.cart = this.cart.filter(product => product.id !== id)
            this.notifyListeners()
            return this.cart
        },1000)
    }

    // create the array of functions that are waiting for a changue
    subscribe(listener){
        this.listeners.push(listener)
    }

    // call the array of functions to run everysingle one
    notifyListeners(){
        this.listeners.forEach(listener => listener(this.cart))
    }
}
