let username=document.getElementById('username');
let password=document.getElementById('password');
let signIn=document.getElementById('sign_in');


let getUser=localStorage.getItem('username');
let getPassword=localStorage.getItem('password');
signIn.addEventListener('click',(e)=>{
    e.preventDefault();
if(username ==='' || password.value ===''){
    alert('Please fill data')
}else{

    if((getUser && getUser===username.value) && (getPassword && getPassword===password.value) ){
   username.value='';
   password.value='';
   setTimeout(()=>window.location='index.html',1500)
}else{
    alert("user name or password is wrong")
}


}
})