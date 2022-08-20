let products=JSON.parse(localStorage.getItem('products'));
let myProducts=products.filter(item=>item.isMe==='yes');
let productsDom=document.querySelector('.products');
let noProductDom=document.querySelector('.no-product');

console.log(noProductDom,productsDom)
if(myProducts.length>0){
    drawMyProductsUi(myProducts)
    }else{
        noProductDom.style.display='block';
        noProductDom.innerHTML=`There is No products!!
        <a href='creatProduct.html'>Go to create products</a>
        `
    }




function drawMyProductsUi(products){
    let productUi=products.map(item=>{
        return  `
      <div class="product-item" style='border:${item.isMe=='yes' ? 'green' : '#999'} 1px solid'>
      <img src='${item.imageUrl}' alt="image1" class="product-item-img">
      <div class="product-item-desc">
          <a onclick='saveItemData(${item.id})'>${item.title}</a>
          <p>${item.des}</p>
          <span>size : ${item.size}</span>
          <button class='edit-product' onclick='editProduct(${item.id})' style='background-color:green;'>Edit Product</button>
          <button class='edit-product' onclick='deleteProduct(${item.id})' style='background-color:red;' >delete Product</button>
      </div>
  </div>
      `
  })
    for(let i=0;i<productUi.length;i++){
    productsDom.innerHTML+=productUi[i];
    }
}
//Edit product
function editProduct(id){
    localStorage.setItem('editProductId',id);
    window.location='editProduct.html'
}
//remove products
function deleteProduct(id){
    let newProducts=products.filter(item=>item.id != id)
    localStorage.setItem('products',JSON.stringify(newProducts));
    window.location='myProduct.html';
}