"use strict";

var bg1 = document.getElementById('bgColor-1');
var bg2 = document.getElementById('bgColor-2');
var bg3 = document.getElementById('bgColor-3');
var blur = document.querySelector('.blur');
document.querySelector('#bgChange').addEventListener('click', function () {
  blur.style.background = "linear-gradient(90deg, ".concat(bg1.value, " 14%, ").concat(bg2.value, " 47%, ").concat(bg3.value, " 100%)");
});

if ($(window).width() <= 650) {
  document.querySelector('#bgChange').addEventListener('click', function () {
    blur.style.background = "linear-gradient(180deg, ".concat(bg1.value, " 14%, ").concat(bg2.value, " 47%, ").concat(bg3.value, " 100%)");
  });
}