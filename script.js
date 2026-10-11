/* eslint-disable no-unused-vars */

function upDate(previewPic) {
  console.log("Mouse over triggered for: " + previewPic.alt);

  let imageDiv = document.getElementById("image");
  // Gán hình nền và nội dung chữ
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
  console.log("Mouse out triggered");

  let imageDiv = document.getElementById("image");
  // Trở về trạng thái ban đầu
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = "Hover over an image below to display here.";
}
