let productFavorite=localStorage.getItem('productsFavorite');
let productsDom=document.querySelector('.products');
let noProductDom=document.querySelector('.no-product');
 
if(productFavorite){
    let items=JSON.parse(productFavorite);
    if(items.length>0){
        drawFavoriteProductsUi(items);
    }else{
        noProductDom.style.display='block';
        noProductDom.innerHTML=`There is No products!!
        <a href='index.html'>Go to Shopping</a>
        `
    }

}



function drawFavoriteProductsUi(products){
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
            <button class="add-to-cart" onclick='removeFromFavorite(${item.id})' >Remove From Favorite</button>
        </div>
    </div>
        `
    })
    for(let i=0;i<productUi.length;i++){
    productsDom.innerHTML+=productUi[i];
    }
}

function removeFromFavorite(id){
    if(productFavorite){
        let products=JSON.parse(productFavorite);
        let filteredItems= products.filter((item)=>item.id !=id);
        localStorage.setItem('productsFavorite',JSON.stringify(filteredItems));
        window.location='favorite.html';
    }
}