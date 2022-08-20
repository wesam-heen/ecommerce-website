 //define products
 let productsDom=document.querySelector('.products');
  let products=productsInfo;

//display product
let drawProductUi;
(drawProductUi= function (products=[]){
    let productUi=products.map(item=>{
          return  `
        <div class="product-item" style='border:${item.isMe=='yes' ? 'green' : '#999'} 1px solid'>
        <img src='${item.imageUrl}' alt="image1" class="product-item-img">
        <div class="product-item-desc">
            <a onclick='saveItemData(${item.id})'>${item.title}</a>
            <p>${item.des}</p>
            <span>size : ${item.size}</span>
            ${item.isMe=='yes' ? `<button class='edit-product' onclick='editProduct(${item.id})'>Edit Product</button>`:''}
        </div>
        <div class="product-item-action">
            <button class="add-to-cart" onclick='addToCart(${item.id})'>Add to cart</button>
            <i class="fa-solid fa-heart-circle-plus favorite" style='opacity:${item.liked=='true'? 1 : 0.5}'
            onclick='addToFavorite(${item.id})'></i>
        </div>
    </div>
        `
    })
    
    productsDom.innerHTML=productUi.map(item=>item).join('');
    
})(JSON.parse(localStorage.getItem('products')) || products);





//add to cart

function addToCart(id){
    let products=JSON.parse(localStorage.getItem('products'))
    //if user login in and save data in local storage
    if(localStorage.getItem('username')){
    //loop on all data and compare id 
    let product=products.find(item=> item.id==id);
    //check if the product in cart return true and false by use some
    let isProductInCart=addedItem.some(i=>i.id===product.id);
    //if product in cart true 
    if(isProductInCart){
        //loop in items array
        addedItem=addedItem.map(p=>{
        //if product id is return product.quantities+1
            if(p.id==product.id) p.quantities=+p.quantities+1;
            return p;
        })
    
        }else{
            addedItem.push(product)
        }
    cartProductDivDom.innerHTML='';
    //add items in div dom 
    addedItem.forEach(item=>cartProductDivDom.innerHTML+=`<p>${item.title}<span class='qty'>(${item.quantities})</span></p>`);
    //save data
    localStorage.setItem('productsInCarts',JSON.stringify(addedItem))
    //add counter of product
    let cartProductLength=document.querySelectorAll('.cart-product div p')
    badgeDom.style.display='block';
    badgeDom.innerHTML=cartProductLength.length;
    }else{
        
        window.location='login.html'
    }
}
    

//save item data to show
function saveItemData(id){
    localStorage.setItem('productId',id);
    window.location='cartdetails.html';
}

//search by name function
let searchInput=document.getElementById('search');
searchInput.addEventListener('keyup',(e)=>{
        searchByTitle(e.target.value,products);
    if(e.target.value===''){
        productsDom.innerHTML='';
        drawProductUi(products)
    }
})
function searchByTitle(title,myArray){
    let arr=myArray.filter(item=>item.title.toLowerCase().indexOf(title.toLowerCase())!== -1);
    productsDom.innerHTML='';
    drawProductUi(arr);
}



//check if products favorite in local storage
let favoritesItem=localStorage.getItem('productsFavorite') 
? JSON.parse(localStorage.getItem('productsFavorite'))
:[];

//add to favorite
function addToFavorite(id){
    //check if username in local storage
    let products=JSON.parse(localStorage.getItem('products'))
    if(localStorage.getItem('username')){
    let favorite=products.find(item=>item.id==id);
    favorite.liked='true';
    let isProductFavorite=favoritesItem.some(item=>item.id==favorite.id);   

    if(!isProductFavorite){
    favoritesItem.push(favorite);
    localStorage.setItem('productsFavorite',JSON.stringify(favoritesItem));
    }
    
    }else{
        
        window.location='login.html'
    }
    favoritesItemsFunction();
}

function favoritesItemsFunction(){
    let products=JSON.parse(localStorage.getItem('products'))
    products.map(p=>{
        favoritesItem.map(f=>{
            p.id===f.id ? p.liked='true' : p;
        })
    })
    drawProductUi(products)
}
favoritesItemsFunction();



//filter product by size
let sizeFilter=document.querySelector('.size-filter');
sizeFilter.addEventListener('change',getProductFilteredBySize);

function getProductFilteredBySize(e){
let value = e.target.value;
let products=JSON.parse(localStorage.getItem('products'));
if(value =='all'){
drawProductUi(products)
}else{
   products= products.filter(i=>i.size===value);
   drawProductUi(products)
}
}
//Edit product
function editProduct(id){
localStorage.setItem('editProductId',id);
window.location='editProduct.html'
}