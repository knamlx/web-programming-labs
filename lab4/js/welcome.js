// Значение time соответствует текущей локальной дате при открытии страницы.
const today = new Date();
document.querySelector('#today').dateTime = [today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, '0'),
    String(today.getDate()).padStart(2, '0')].join('-');
