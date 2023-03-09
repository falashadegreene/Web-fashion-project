"use strict";

// Event listner for image 

const images = document.querySelectorAll(".img_item img");
let imgIndex
let imgAtt;

// forEach loop for event listner to execute click on each image
images.forEach((img, i) => {
  img.addEventListener("click", (e) => {
    imgAtt = e.target.src;
    // console.log(imgAtt);
    imgModal(imgAtt);
    imgIndex = i;
  });
});

// Creating Modal 

let imgModal = (src) => {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  document.querySelector(".img-flex").append(modal);

  // adding image to Modal 
  const newImage = document.createElement("img");
  newImage.setAttribute("src", src);
  //closing image button  
  const closeImg = document.createElement("i");
  closeImg.setAttribute("class", "fas fa-times closeImg");
  // close img
  closeImg.onclick = () => {
    modal.remove();
  };
  // Next and previous arrows for images 
  const nextBtn = document.createElement("i");
  nextBtn.setAttribute("class", "fas fa-angle-right nextBtn");
  // button to change to next image
  nextBtn.onClick = () => {
    newImage.setAttribute("src", nextImg())
  };
  const prevBtn = document.createElement("i");
  prevBtn.setAttribute("class", "fas fa-angle-left prevBtn");
 // button to change to previous image
  prevBtn.onClick = () => {
    newImage.setAttribute("src", prevImg())
  }
  modal.append(newImage, closeImg, nextBtn, prevBtn);
};

// next image function 

// let nextImg = () => {
//   imgIndex++;

//   if (imgIndex >= images.length) {
//     imgIndex = 0
//   }
//   return images[imgIndex].src;
// };

// // prev image function 

// let prevImg = () => {
//   imgIndex--;
//   // console.log(imgIndex);
//   if (imgIndex < 0) {
//     imgIndex = images.length - 1
//   }
//   return images[imgIndex].src
// }




