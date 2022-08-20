let productInCart=localStorage.getItem('productsInCarts');
let productsDom=document.querySelector('.products');
let noProductDom=document.querySelector('.no-product');
 
if(productInCart){
    let items=JSON.parse(productInCart);
    if(items.length>0){
        drawCartProductsUi(items);
    }else{
        noProductDom.style.display='block';
        noProductDom.innerHTML=`There is No products!!
        <a href='index.html'>Go to Shopping</a>
        `
    }

}



function drawCartProductsUi(products){
    let productUi=products.map(item=>{
          return  `
        <div class="product-item">
        <img src='${item.imageUrl}' alt="image1" class="product-item-img">
        <div class="product-item-desc">
            <h2>${item.title}</h2>
            <p>Lorem ipsum dolor sit amet</p>
            <span>size : ${item.size}</span>
            <span style='display:block'>quantities: ${item.quantities}</span>
        </div>
        <div class="product-item-action">
            <button class="add-to-cart" onclick='removeFromCart(${item.id})'>Remove From Cart</button>
        </div>
    </div>
        `
    })
    for(let i=0;i<productUi.length;i++){
    productsDom.innerHTML+=productUi[i];
    }
}

function removeFromCart(id){
    if(productInCart){
        let products=JSON.parse(productInCart);
        let filteredItems= products.filter((item)=>item.id !=id);
        localStorage.setItem('productsInCarts',JSON.stringify(filteredItems));
        window.location='cartproduct.html';
    }
}