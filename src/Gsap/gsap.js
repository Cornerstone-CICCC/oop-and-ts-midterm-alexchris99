setTimeout(()=>{
    gsap.registerPlugin(ScrollTrigger)

    const section = gsap.timeline()
    section 
    .from(".cart-list",{x: "100vw", opacity: 0, duration: 1},1)
    .from(".product-item",{y: "-100vh", opacity: 0, duration: 1},1)
    .from("header",{x: "-100vw", opacity: 0, duration: 1})
    .from("footer",{x: "-100vw", opacity: 0, duration: 1})
},700)


function addItem(id){
    setTimeout(()=>{
        const gsapItem = gsap.timeline()
        gsapItem
            .from(`#Id-${id}`,{ y: "100vh", opacity:0, duration: 1})
    },1)
}

function checkQuantity(quantity,id){
    if(quantity == 1){
        removeItem(id)
    }
}

function removeItem(id) {
    const gsapRemove =gsap.timeline()
    gsapRemove
        .fromTo(`#Id-${id}`,{y: 0},{duration: 1, y: "-100vh"})
}
