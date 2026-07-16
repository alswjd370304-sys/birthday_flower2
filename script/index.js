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
// 자바스크립트에서 diplay=none으로 숨겼다가 특정 이벤트애 따라 다시 보이고 싶을 때
// 무조건 block을 쓰는게 아닌 그 선택자가 원래 가지고 있는  display속성으로 되돌리기
// display:flex가 선택자에 있었다면 자바스크립트도 display:flex
// 없었다면 고유 속성을 기입 (inline, block)
/* 2. 목표: #birthday_write를 누르면 값 12가 입력 되도록 한다. */
const birthday_month = document.querySelector('#birthday_write');
// birthday_month.value = '12';
console.log(birthday_month);
function birthday_month_write() {
    birthday_month.value = '12';
}