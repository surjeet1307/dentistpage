let slide_id=1

let plusSlide=(n)=>{
slideShow(slide_id+=n);
}

let slideShow=(n)=>{
    let slides=document.getElementsByClassName('slide')
    if(n>slides.length){
        slide_id=1
    }
    if(n<1){
        slide_id=slides.length
    }

    console.log(slides.length);
for(let i=0;i<slides.length;i++){
    slides[i].style.display='none'
}
slides[slide_id-1].style.display='flex'
}

slideShow(slide_id)

document.getElementById('review_right').addEventListener('click',()=>{
    plusSlide(1)
})

document.getElementById('review_left').addEventListener('click',()=>{
    plusSlide(-1)
})

document.getElementById('month').addEventListener('click',()=>{
    document.getElementById('year').classList.remove('active')
    document.getElementById('month').classList.add('active')
    document.getElementById('price_1').innerHTML='$23'
    document.getElementById('price_2').innerHTML='$27'
    document.getElementById('price_3').innerHTML='$30'

})
document.getElementById('year').addEventListener('click',()=>{
    document.getElementById('month').classList.remove('active')
    document.getElementById('year').classList.add('active')
    document.getElementById('price_1').innerHTML='$250'
    document.getElementById('price_2').innerHTML='$300'
    document.getElementById('price_3').innerHTML='$350'
})