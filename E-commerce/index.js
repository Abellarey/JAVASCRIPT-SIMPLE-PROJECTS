const cartIcon = document.querySelector('.icon-cart');
const cart = document.querySelector('.cart');
const cartClose = document.getElementById('cart-close');

cartIcon.addEventListener('click', () => {
    cart.classList.toggle('active');
});
cartClose.addEventListener('click', () =>{
    cart.classList.remove('active');
});


// Add to cart functionality
const cartContent = document.querySelector('.cart-content');
const AddToCartBtn = document.querySelectorAll('.add-to-cart');

AddToCartBtn.forEach(button =>{
    button.addEventListener("click", event=>{
        const productBox = event.target.closest(".product");
        addToCart(productBox);
    });
});

function addToCart(productItem){
    const productImg = productItem.querySelector("img").src;
    const productName = productItem.querySelector("h2").textContent;
    const productPrice = productItem.querySelector(".price").textContent;
     
    const productSelected = cartContent.querySelectorAll("h2");
    for(let item of productSelected){
        if(item.textContent === productName){
            alert(`${productName} is already in cart`);
             return;
        }
    }

    const productContent = document.createElement("div");
    productContent.classList.add("cart-box");
    productContent.innerHTML = `<img src="${productImg}"class="cart-img">
                    <div class="cart-detail">
                        <h2>${productName}</h2>
                        <span class="cart-price">${productPrice}</span>
                        <div class="cart-quantity">
                            <button class="decrement">-</button>
                            <span class="number">1</span>
                            <button class="increment">+</button>
                        </div>
                    </div>
                    <i class='bx bxs-message-square-x remove-item'></i>`

        cartContent.appendChild(productContent);   
        
        productContent.querySelector(".remove-item").addEventListener("click", ()=> {
        productContent.remove();
        updateBadge(-1);
        updateTotal();      
});

//   cart button functionality
    productContent.querySelector(".cart-quantity").addEventListener("click", event =>{ 
        const numberAdd = productContent.querySelector(".number");  
        const decrement = productContent.querySelector(".decrement"); 
        let number = numberAdd.textContent;

        if(event.target.classList.contains("increment")){
        number++;  
        numberAdd.textContent = number;  
        decrement.style.backgroundColor = "white";
        updateTotal(); 
    }  
    else if(event.target.classList.contains("decrement") && number > 1){
        number--;
        numberAdd.textContent = number;
        decrement.style.backgroundColor = "grey" 
        updateTotal();
    }
         });
         updateBadge(1);
         updateTotal();
}
// functionality the total prices
function updateTotal(){
    const TotalPrice = document.querySelector(".total-price");
    const cartBoxes = cartContent.querySelectorAll(".cart-box");

    let Total = 0;
    cartBoxes.forEach(cartBox =>{
        const PriceElement = cartBox.querySelector(".cart-price");
        const quantityElement = cartBox.querySelector(".number");
        const price = PriceElement.textContent.replace('$', '').replace('P', ''); 
        const quantity = parseInt(quantityElement.textContent);
        Total+= price * quantity;
    });
    TotalPrice.textContent = `P${Total}`;
};

   let cartCount = 0;
   function updateBadge(Badge){
    const myBadge = document.getElementById("cart-count");
     cartCount+=Badge;
     if(cartCount > 0){
        myBadge.style.visibility = "visible";
        myBadge.textContent =  cartCount;
     }
     else{
         myBadge.style.visibility = "visible";
         myBadge.textContent = "";
     }
   }
   


