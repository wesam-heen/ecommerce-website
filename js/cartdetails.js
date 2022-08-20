let products=JSON.parse(localStorage.getItem('products'));
let productId=localStorage.getItem('productId');
let itemDom=document.querySelector('.item-details')

let productDetailsItem=products.find(item =>item.id==productId);

itemDom.innerHTML=`
<img src="${productDetailsItem.imageUrl}" alt="">
<div class="product-info">
    <h2>${productDetailsItem.title}</h2>
    <span>size:${productDetailsItem.size}</span>
    <p>${productDetailsItem.des}</p>
    <span>Quantities:${productDetailsItem.quantities}</span>
    <button class='edit-product' onclick='editProduct(${productId})' style='background-color:green;'>Edit Product</button>
</div>
`
//Edit product
function editProduct(id){
    localStorage.setItem('editProductId',id);
    window.location='editProduct.html'
    }
