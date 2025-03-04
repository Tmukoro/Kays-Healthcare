const img = document.getElementById("wimg");

const span_block = document.querySelector(".span_nav");

const nav_list = document.querySelector(".nav_list");

img.addEventListener("mouseover", () =>{
    img.src = "images/tree3.png";
});

img.addEventListener("mouseout", () => {
    img.src = "images/Nature.jpg";
});

span_block.addEventListener( "click", () => {

    span_block.classList.toggle("active");

    nav_list.classList.toggle("active");

})