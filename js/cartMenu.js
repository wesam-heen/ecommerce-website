let cartProductDivDom=document.querySelector('.cart-product div');
let cartProductDom=document.querySelector('.cart-product');
let shoppingCart=document.querySelector('.shopping');
let badgeDom=document.querySelector('.badge');

//check if there is items in local storage
let addedItem=localStorage.getItem('productsInCarts') 
? JSON.parse(localStorage.getItem('productsInCarts'))
:[];
function cartMenuData(){
    if(addedItem){
        addedItem.map(item=>{
            cartProductDivDom.innerHTML+=`<p>${item.title} <span class='qty'>(${item.quantities})</span></p>`;
        })
        badgeDom.style.display='block';
        badgeDom.innerHTML+=addedItem.length;
    }
} 
cartMenuData();
//open cart menu
function openCartMenu(){
    if( cartProductDivDom.innerHTML !==''){
        cartProductDom.classList.toggle('active');
    }
}
//open cart menu
shoppingCart.addEventListener('click',openCartMenu)
