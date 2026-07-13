/* index.js */
/* 1.목표: 팝업의 배경을 누르면 사라지고 다시 버튼을 누르면 뜨도록 함. */
const popup = document.querySelector ('.popup_wrap');
const popup_bg = document.querySelector ('.popup_bg');
console.log(popup);
console.log(popup_bg);

popup.style.display = 'none';
popup_bg.style.display = 'none';

function popup_open() {
    popup.style.display = 'flex';
    popup_bg.style.display = 'block';
}

function popup_hide() {
    popup.style.display = 'none';
    popup_bg.style.display = 'none';
}
/* 2. 목표: #birthday_write를 누르면 값 12가 입력 되도록 한다. */
const birthday_month = document.querySelector('#birthday_write');
birthday_month.vaule = '12';
console.log(birthday_month);
function birthday_month_write() {
    birthday_month.value = '12';
}