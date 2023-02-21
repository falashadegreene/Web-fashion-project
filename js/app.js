"use strict";

// Event listner for image 

const images = document.querySelectorAll(".img_item img");
let imgIndex
let imgAtt;

// forEach loop for event listner to execute click on each image

images.forEach((img, i) => {
  img.addEventListener("click", (e) => {
    imgAtt = e.target.src;
    console.log(imgAtt);
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
  modal.append(newImage);
};

//closing image button 

const closeImg = document.createElement("i");
closeImg.setAttribute("class", "fas fa-times closeImg");

closeImg.onclick = () => {
  modal.remove();
};
modal.append(newImage, closeImg);

// Next and previous arrows for images 

const nextBtn = document.createElement("i");
nextBtn.setAttribute("class", "fas fa-angle-right nextBtn");

nextBtn.onClick = () => {
  nextImage.setAttribute("src", "nextImg"())
};

const prevBtn = document.createElement("i");
prevBtn.setAttribute("class", "fas fa-angle-left prevBtn");

prevBtn.onClick = () => {
  prevImage.setAttribute("src", "prevImg"())
}
modal.append(newImage, closeImg, nextBtn, prevBtn);


// next image function 

let nextImg = () => {
  imgIndex++;

  if(imgIndex >= images.length) {
    imgIndex = 0
  }
  return images[imgIndex].src;
};

// prev image function 

let prevImg = () => {
  imgIndex--;

  if(imgIndex < 0 ) {
    imgIndex = images.length - 1
  }
  return images[imgIndex].src
}




