let productsInfo=[
    {
        id:'1',
        title:'black T-Shirt',
        size:'large',
        imageUrl:'images/1.jpg',
        quantities: '1',
        des:'this is perfect product',
        isMe:'No',         
    },
    {
        id:'2',
        title:'black T-Shirt',
        size:'large',
        imageUrl:'images/2.jpg',
        quantities: '1',
        des:'this is perfect product',
        isMe:'No',
    },
    {
        id:'3',
        title:'black T-Shirt',
        size:'small',
        imageUrl:'images/3.jpg',
        quantities: '1',
        des:'this is perfect product',
        isMe:'No',
    },
    {
        id:'4',
        title:'black T-Shirt',
        size:'small',
        imageUrl:'images/4.jpg',
        quantities: '1',
        des:'this is perfect product',
        isMe:'No' },
    {
        id:'5',
        title:'black T-Shirt',
        size:'large',
        imageUrl:'images/5.jpg',
        quantities: '1',
        des:'this is perfect product',
        isMe:'No' },
    {
        id:'6',
        title:'yellow T-Shirt',
        size:'medium',
        imageUrl:'images/6.jpg',
        quantities: '1',
        des:'this is perfect product',
        isMe:'No' },
    {
        id:'7',
        title:'blue T-Shirt',
        size:'medium',
        imageUrl:'images/7.jpg',
        quantities: '1',
        des:'this is perfect product',
        isMe:'No' },
    {
        id:'8',
        title:'blue T-Shirt',
        size:'large',
        imageUrl:'images/8.jpg',
        quantities: '1',
        des:'this is perfect product',
        isMe:'No' },
    ];
    if(!localStorage.getItem('products')){
localStorage.setItem('products',JSON.stringify(productsInfo))
    }