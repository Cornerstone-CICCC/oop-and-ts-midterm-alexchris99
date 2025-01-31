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

function modal(title,description,image){
    const modal = document.querySelector(".modal")
    modal.classList.add = "modal"
    modal.classList.remove("fadeout")
    modal.innerHTML = " "
    modal.innerHTML = ` 
    <div class="modal-content"> 
        <span class="close">&times</span>
            <div>
                <h3 class = "modal-title">${title}</h3>
                <img class="item-image" src="${image}">
                <div class = "modal-description">
                    <p>${description}</p>
                </div>
            </div>
    </div>
    `
    console.log(modal)
    // display the modal
    modal.style.display = "block"
    // how to close the modal
    modal.querySelector(".close").addEventListener("click", ()=>{
        modal.classList.add = "fadeout"
        setTimeout(()=>{
            modal.style.display = "none"
        },499)
    })
}
