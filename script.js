let productList=document.getElementById("productList");
let search=document.getElementById("search");
let filter=document.getElementById("filter");

let modal=document.getElementById("modal");
let selected=null;

function display(data){
productList.innerHTML="";
data.forEach(p=>{
productList.innerHTML+=`
<div class="card" onclick="openModal(${p.id})">
<img src="${p.image}">
<div class="card-body">
<h3>${p.name}</h3>
<p>₹${p.price}</p>
</div>
</div>`;
});
}

display(products);

function openModal(id){
selected=products.find(p=>p.id===id);
document.getElementById("modalImg").src=selected.image;
document.getElementById("modalName").innerText=selected.name;
document.getElementById("modalDesc").innerText=selected.description;
document.getElementById("modalPrice").innerText="₹"+selected.price;
modal.style.display="flex";
}

document.getElementById("close").onclick=()=>modal.style.display="none";

document.getElementById("addToCartBtn").onclick=()=>{
let cart=JSON.parse(localStorage.getItem("cart"))||[];
let exist=cart.find(i=>i.id===selected.id);

if(exist){
exist.qty++;
}else{
cart.push({...selected,qty:1});
}

localStorage.setItem("cart",JSON.stringify(cart));
alert("Added to cart");
};

search.oninput=()=>{
let val=search.value.toLowerCase();
display(products.filter(p=>p.name.toLowerCase().includes(val)));
};

filter.onchange=()=>{
filter.value==="all"
?display(products)
:display(products.filter(p=>p.category===filter.value));
};