// // variables
let products=JSON.parse(localStorage.getItem('products'));
let productId=JSON.parse(localStorage.getItem('editProductId'));
let getProduct=products.find(item=>item.id==productId) ;


let productName=document.getElementById('product-name');
let productDesc=document.getElementById('product-description');
let productSizeSelect=document.getElementById('product-size');
let updateForm=document.getElementById('update-form');
let inputFile=document.getElementById('image-upload-file')
let productSizeValue;
let productImage;

productName.value=getProduct.title;
productDesc.value=getProduct.des;
productSizeSelect.value=getProduct.size;
productImage=getProduct.imageUrl;



//Events
productSizeSelect.addEventListener('change',getProductSizeValue);
updateForm.addEventListener('submit',UpdateProductFun)
inputFile.addEventListener('change',uploadImage)

// let newProduct;
//Functions
function getProductSizeValue(e){
    productSizeValue=e.target.value;
}
function UpdateProductFun(e){
    e.preventDefault();
    getProduct.title=productName.value;
    getProduct.des=productDesc.value;
    getProduct.size=productSizeSelect.value;
    getProduct.imageUrl=productImage;
    localStorage.setItem('products',JSON.stringify(products))
    setTimeout(()=>{window.location='index.html'},500)
}
function uploadImage(){

    let file=this.files[0]
    let types=["image/jpeg","image/png"]

    if(types.indexOf(file.type)== -1){
    alert('File Not supported');
    return;
    }
    if(file.size > 2*1024*1024){
        alert('not excide 2Mb');
        return;
    }
    getImageBase64(file)
  //  productImage= URL.createObjectURL(file);

}

function getImageBase64(file){
let reader=new FileReader();
reader.readAsDataURL(file);
reader.onload=()=>{
  productImage= reader.result;
}
reader.onerror=()=>{alert('error!!!')}
}
