let spans = document.querySelectorAll('h1>span');
for(let i of [...spans]){
    i.addEventListener('mouseover',function(){
        this.classList.toggle('shareWithAnimation');
    })
    i.addEventListener('animationend',function(){
        this.classList.toggle('shareWithAnimation');
    })
}