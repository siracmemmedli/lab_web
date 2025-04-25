let left = document.getElementById("left")
let right = document.getElementById("right")
let mainImage = document.getElementById("main-image")

images=["images/tech.avif","images/tech.jpeg","images/tech.webp"]
var currentImage=0

function resetImageCount(count){
    if (count>2) {
        currentImage=0;
    }
    if (count<0){
        currentImage= 2;
    };
};

left.addEventListener("click", ()=>{
    currentImage=currentImage-1
    resetImageCount(currentImage)
    mainImage.src=images[currentImage]
    console.log(currentImage)

});
right.addEventListener("click", ()=>{
    currentImage=currentImage+1
    resetImageCount(currentImage)

    mainImage.src=images[currentImage]
});

function toggleDropdown() {
    var dropdown = document.getElementById("dropdown");
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  }