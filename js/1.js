'use strict';
/// находим кнопки и img

var showPrevBth = document.getElementById('show-prev-bth');
var showNextBth = document.getElementById('show-next-bth');
var slideImage = document.getElementById('slide-img');

/// привязываем обработчки событий на кнопки

showPrevBth.addEventListener('click',onShowPrevClick);
showNextBth.addEventListener('click',onShowNextClick);
////создать масив картинок

var imgsUrls = [];
imgsUrls.push('../img/4.jpg');
imgsUrls.push('../img/5.jpg');
imgsUrls.push('../img/6.jpg');
imgsUrls.push('../img/7.jpg');
imgsUrls.push('../img/8.jpg');
imgsUrls.push('../img/9.jpg');
imgsUrls.push('../img/10.jpg');
imgsUrls.push('../img/11.jpg');
///по элемету img вывести src с массива
var currentImageIndex = 0;/// создаем переменую,чтобы не прописывать идыксы
slideImage.src = imgsUrls[currentImageIndex];////путь картинок
showPrevBth.disabled = true;/// блокировка кнопки


///функция на перелистывание каритнок
function onShowPrevClick() {
    currentImageIndex--;
    slideImage.src = imgsUrls[currentImageIndex];
    showNextBth.disabled = false;
    if(currentImageIndex === 0) {
        showPrevBth.disabled = true
    }
}
function onShowNextClick() {
    currentImageIndex++;
  slideImage.src = imgsUrls[currentImageIndex];
  showPrevBth.disabled = false;
  if(currentImageIndex === (imgsUrls.length -1)) {
    showNextBth.disabled = true;////когда доходит до поелседней картинки убрать ошибку
};
}
