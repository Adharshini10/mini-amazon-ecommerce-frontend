let cart=JSON.parse(localStorage.getItem("cart"))||[];
let cartItems=document.getElementById("cartItems");
let cartTotal=document.getElementById("cartTotal");

function render(){
cartItems.innerHTML="";
let total=0;

cart.forEach((item,i)=>{
total+=item.price*item.qty;

cartItems.innerHTML+=`
<div class="cart-item">
<img src="${item.image}">
<div>
<h3>${item.name}</h3>
<p>₹${item.price}</p>

<button class="qty-btn" onclick="dec(${i})">-</button>
${item.qty}
<button class="qty-btn" onclick="inc(${i})">+</button>

<br><br>
<button class="remove-btn" onclick="removeItem(${i})">Remove</button>
</div>
</div>`;
});

cartTotal.innerText="Total: ₹"+total;
}

function inc(i){
cart[i].qty++;
update();
}

function dec(i){
if(cart[i].qty>1) cart[i].qty--;
update();
}

function removeItem(i){
cart.splice(i,1);
update();
}

function update(){
localStorage.setItem("cart",JSON.stringify(cart));
render();
}

render();