//get variable from local storage
let userName=localStorage.getItem('username');
let userEmail=localStorage.getItem('email');
let password=localStorage.getItem('password');
let inputFile=document.getElementById('image-upload-file');
let editProfileBtn=document.getElementById('update-profile');
let productImage;

//events
inputFile.addEventListener('change',uploadImage);
editProfileBtn.addEventListener('click',updateProfile)



//get input
let user=document.getElementById('profile-user-name');
let email=document.getElementById('user-email');
let UserPassword=document.getElementById('user-password');



user.value=userName;
email.value=userEmail;
UserPassword.value=password;


function updateProfile(e){
    e.preventDefault();
    localStorage.setItem('username',user.value);
    localStorage.setItem('email',email.value);
    localStorage.setItem('password',UserPassword.value);
    localStorage.setItem('userImage',JSON.stringify(productImage));
    setTimeout(clearInput,500)
    setTimeout(()=>{
        window.location='profile.html'
    },750)

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

function clearInput(){
    user.value='';
    email.value='';
    UserPassword.value='';
}
clearInput();