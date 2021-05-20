let goTop = document.querySelector('.go-top')

let arriba = window.pageYOffset;

if(arriba <= 600){
    goTop.style.right = '-100px'
}else{
    goTop.style.right = '2%'
    goTop.style.transition = '0.5s'
}

goTop.addEventListener('click', ()=>{
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})
