let userInfo=document.querySelector('#user_info');
let userDom=document.querySelector('#user ');
let links=document.getElementById('links');
let logOut=document.getElementById('logout');

let username=localStorage.getItem('username')
if(username){
    links.remove();
    userInfo.style.display='flex';
    userDom.innerHTML=username;
}
logOut.addEventListener('click',(e)=>{
    e.preventDefault()
    localStorage.clear();
    setTimeout(()=>window.location='register.html',1500)
 })
