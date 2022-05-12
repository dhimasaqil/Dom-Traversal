//event handling

//cara yang salah
// const close = document.querySelectorAll(".close");
// const card = document.querySelectorAll(".card");

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function () {
//     card[i].style.display = "none";
//   });
// }

//cara yang benar
// const close = document.querySelectorAll(".close");

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//   });
// }

//cara paling benar
const close = document.querySelectorAll(".close");

close.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
  });
});
