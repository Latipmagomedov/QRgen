let qrBtn = document.querySelector(".qr-btn");
let qrInp = document.querySelector(".qr-inp");
let qrColor = document.querySelectorAll(".qr-color");

let bgColor;
let color;

qrColor.forEach((item) => {
  item.addEventListener("click", () => {
    bgColor = item.dataset.bgcolor;
    color = item.dataset.color;
    qrColor.forEach((item) => {
      item.classList.remove('col-active');
    });
    item.classList.add('col-active');

    if (qrInp.value != "") {
      let url = `https://api.qrserver.com/v1/create-qr-code/?size=190x190&data=${qrInp.value}&bgcolor=${bgColor}&color=${color}`;
      let qrImg = document.querySelector(".qr-img");
      qrImg.src = url;
      function addActive() {
        qrImg.classList.add("active");
      }
  
      setTimeout(addActive, 400);
    } else {
      alert("Текстовое поле не должно быть пустым !");
    }
  });
});



qrBtn.addEventListener("click", () => {
  if (qrInp.value != "") {
    let url = `https://api.qrserver.com/v1/create-qr-code/?size=190x190&data=${qrInp.value}&bgcolor=${bgColor}&color=${color}`;
    let qrImg = document.querySelector(".qr-img");
    qrImg.src = url;
    function addActive() {
      qrImg.classList.add("active");
    }

    setTimeout(addActive, 400);
  } else {
    alert("Текстовое поле не должно быть пустым !");
  }
});
