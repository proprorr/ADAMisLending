
var btncolor = document.getElementById('btn1')
btncolor.onclick = function () {
   var title = document.querySelector('a.planslink');
   title.classList.add('backgroundblue');
   var title = document.querySelector('a.planslink2');
   title.classList.add('backgroundwhite2');
   var title = document.querySelector('a.planslink');
   title.classList.add('colorwhite');
   var title = document.querySelector('a.planslink2');
   title.classList.add('colorblack2');
}
var btn = document.getElementById('button')
btn.onclick = function () {
   var text = document.querySelector('.planslink');
   text.classList.add('backgroundwhite');
   var text = document.querySelector('.planslink2');
   text.classList.add('background');
   var text = document.querySelector('.planslink2');
   text.classList.add('color');
   var text = document.querySelector('.planslink');
   text.classList.add('colorblack');
}