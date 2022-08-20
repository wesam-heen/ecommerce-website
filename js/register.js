//register user
let username=document.getElementById('username');
let email=document.getElementById('email');
let password=document.getElementById('password');
let signUP=document.getElementById('sign_up')


signUP.addEventListener('click',register);


//register function
function register(e){
        e.preventDefault();
        if(username ==='' || email.value==='' || password.value ===''){
            alert('Please fill data')
        }else{
           localStorage.setItem('username',username.value) 
           localStorage.setItem('email',email.value) 
           localStorage.setItem('password',password.value) 
           username.value='';
           email.value='';
           password.value='';
           setTimeout(()=>window.location='login.html',1500)
        }
}
