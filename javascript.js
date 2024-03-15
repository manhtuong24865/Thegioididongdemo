const addressbtn = document.querySelector('#address-form')
addressbtn.addEventListener("click",function(){
    document.querySelector('.address-form').style.display = "flex"
})
const addressclose = document.querySelector(("#address-close"))
addressclose.addEventListener("click",function(){
    document.querySelector('.address-form').style.display = "none"
})

// slider img -------------
const iconright = document.querySelector(".fa-chevron-right");
const iconleft = document.querySelector(".fa-chevron-left");
const imgnumber = document.querySelectorAll(".slider-content-left-top img")
let index = 0;

iconright.addEventListener("click", function(){
    index = index +1 ;
    if(index > imgnumber.length-1){
        index = 0;
    }
    document.querySelector(".slider-content-left-top").style.right = index*100+"%"
})
iconleft.addEventListener("click",function(){
    index = index -1;
    if(index <=0){
        index = imgnumber.length-1;
    }
    document.querySelector(".slider-content-left-top").style.right = index*100+"%"
})
// slider text--------------------------------------------------------------------
const imgtext = document.querySelectorAll(".slider-content-left-bottom li")
imgtext.forEach(function(image,index){
    image.addEventListener("click",function(){
        removeActive()
        document.querySelector(".slider-content-left-top").style.right = index*100+"%"
        image.classList.add("active")
    })
})
function removeActive(){
    imgActive = document.querySelector(".active")
    imgActive.classList.remove("active")
}
// imgauto----------------------------------------------------------------------------------
function imgAuto(){
    index += 1;
    if(index > imgnumber.length-1){
        index = 0;
    }
    removeActive();
    document.querySelector(".slider-content-left-top").style.right = index*100+"%"
    imgtext[index].classList.add("active")
}
setInterval(imgAuto,5000)
// slider product --------------------------------------------------
const rightbtntwo = document.querySelector('.fa-chevron-right-two')
const leftbtntwo = document.querySelector('.fa-chevron-left-two')
console.log(rightbtntwo)
console.log(leftbtntwo)

const imgnumberbtn = document.querySelectorAll(".slider-product-one-content-items")
// console.log(imgnumberbtn)
rightbtntwo.addEventListener("click", function(){
    index = index + 1;
    if (index > imgnumberbtn.length-1){
        index = 0
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index*100 + "%"
})
leftbtntwo.addEventListener("click", function(){
    index = index - 1 ;
    if(index <= 0){
        index = imgnumberbtn.length-1;
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index*100 +"%"
})
