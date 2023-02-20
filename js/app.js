'use strict';

// Event listner for image 

const images = document.querySelectorAll('.img_item img');
let imgAtt;

// forEach loop for event listner to execute click on each image

images.forEach((img) => {
  img.addEventListener('click', (e) => {
    imgAtt = e.target.src;
    console.log(imgAtt);
    imgModal();
  });
});

// Modal 

let imgModal = (src) => {
  const modal = document.createElement('div');
  modal.setAttribute('class', 'modal');
  document.querySelector('.img-flex').append(modal);
  const nextImage = document.createElement('img');
  nextImage.setAttribute('src', src);
  modal.append(nextImage)
};



//closing image button 

const closeImg = document.createElement("i");
closeImg.setAttribute("class", "fas fa-times closeBtn");

closeImg.onclick = () => {
  modal.remove();
};
modal.append(nextImage, closeImg);

// Next and previous arrows for images 




