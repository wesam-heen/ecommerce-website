// variables
let productName=document.getElementById('product-name');
let productDesc=document.getElementById('product-description');
let productSizeSelect=document.getElementById('product-size');
let productForm=document.getElementById('create-form');
let inputFile=document.getElementById('image-upload-file')
let productSizeValue;
let productImage;

//events
productSizeSelect.addEventListener('change',getProductSizeValue);
productForm.addEventListener('submit',createProductFunction)
inputFile.addEventListener('change',uploadImage)

let newProduct;
//functions
function getProductSizeValue(e){
    productSizeValue=e.target.value;
}
function createProductFunction(e){
    e.preventDefault();
    let allProduct=JSON.parse(localStorage.getItem('products')) || productsInfo;
    let nameValue=productName.value;
    let descValue=productDesc.value;
    if(nameValue && descValue){
        let productObj={
            id: allProduct !== null ? `${allProduct.length+1}`: '1',
            title:nameValue,
            imageUrl:productImage,
            size:productSizeValue,
            quantities:'1',
            des:descValue,
            isMe:'yes',
        }
        newProduct=allProduct?[...allProduct,productObj]:[productObj] ;
        localStorage.setItem('products',JSON.stringify(newProduct));
        productsInfo.push(newProduct)
    //    drawProductUi(newProduct)
        productName.value='';
        productDesc.value='';
        productSizeSelect.value=''
        setTimeout(()=>{
            window.location='index.html'
        },500)
    }else{
        alert('please enter data')
    }

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
}

function getImageBase64(file){
let reader=new FileReader();
reader.readAsDataURL(file);
reader.onload=()=>{
  productImage= reader.result;
}
reader.onerror=()=>{alert('error!!!')}
}
