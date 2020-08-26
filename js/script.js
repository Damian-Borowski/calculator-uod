const kwotaBrutto = document.querySelector('.kwota-brutto');
const btn = document.querySelector('.oblicz');
const zdrowotne = document.querySelector('.zdrowotne');
const koszty = document.querySelector('.koszty');
const naliczona = document.querySelector('.naliczona');
const pobrana = document.querySelector('.pobrana');
const wyplata = document.querySelector('.wyplata');
const uZdrowotne = 0;


const action = (e) => {
    e.preventDefault();
    zdrowotne.value = uZdrowotne;
    koszty.value = (kwotaBrutto.value * 20 / 100).toFixed(2);
    naliczona.value = ((kwotaBrutto.value - koszty.value) * 17 / 100).toFixed(2);
    pobrana.value = ((kwotaBrutto.value - koszty.value) * 17 / 100).toFixed();
    wyplata.value = (kwotaBrutto.value - pobrana.value).toFixed(2);
}


btn.addEventListener('click', action);