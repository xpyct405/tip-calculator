// определяем все переменные
let amount = document.querySelector('#amount');
let guests = document.querySelector('#guests');
let tip = document.querySelector('#tip');
let calculateBtn = document.querySelector('#calculate');
let snackbar = document.querySelector('#snackbar-wrapper');

// пишем функцию калькуляции и при выполнение условий изменения текста snackbar h2
calculateBtn.addEventListener('click', function() {
    let tipAmount = ((amount.value * tip.value) / (guests.value)).toFixed(2);
    amount.value = '';
    guests.value = '';
    tip.value = '';
    if(tipAmount === NaN|| tipAmount === 0 ) {
        snackbar.querySelector('h2').textContent = `Tip 0$ each`;
        showSnackbar()
    } else {
        snackbar.querySelector('h2').textContent = `Tip ${tipAmount}$ each`;
        showSnackbar()
    }
})

// Пишем функцию добавления класса, а через интервал в 3 секунды класс удаляется
function showSnackbar() {
    snackbar.classList.add('show');
    setTimeout( ()=> {
        snackbar.classList.remove('show')
    }, 3000);
}
