//get data from local storage
let profilePage=document.querySelector('.profile-page')
let getUserName=localStorage.getItem('username');
let getEmail=localStorage.getItem('email');
let imageUrl=localStorage.getItem('userImage')
let productsProfile=JSON.parse(localStorage.getItem('products')).filter(item=>item.isMe!='No');


//inner profile Page
profilePage.innerHTML=`
<div class="container" style="display:flex;justify-content:space-around;align-items:center">
<img src=${imageUrl} alt="" class="user-avatar">
<div class='user-info'>
<h2 id="user-name">${getUserName}</h2>
<p id="email">${getEmail}</p>
<p class="product-length">Product Length : <span>${productsProfile.length==0?'No Product':productsProfile.length}</span></p>
<a href="editProfile.html" id='edit-profile-btn' >Edit Profile</a>
</div>
</div>
<!-- create product -->
<a href="creatProduct.html" class="create-product-icon"><i class=" fa fa-plus"></i></a>
<!-- End product -->
`


