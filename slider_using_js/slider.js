const img_arr=document.querySelectorAll(".slide")

console.log(img_arr);

let temp=0;
//1st parameter : value of array
//2nd parameter : index
img_arr.forEach((img,idx)=>{
    img.style.left=`${idx *100}%`
})

const prev=()=>{
    temp = (temp - 1 + img_arr.length) % img_arr.length;

    slider();
}
const next=()=>{
    temp = (temp + 1) % img_arr.length;

    slider();
}

const slider=()=>{
    img_arr.forEach((img)=>{
        img.style.transform= `translateX(-${temp*100}%)`
    })
}
function showslides(n){


let slides = document.getElementsByClassName("mySlides");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
slides[slideIndex-1].style.display = "block";
}



// new code

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
