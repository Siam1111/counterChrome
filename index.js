let dec = document.getElementById('dec');
let inc = document.getElementById('inc');
let reset = document.getElementById('reset');
let count = document.getElementById('count');
let loc = [window.location.origin];


count.innerHTML = localStorage.getItem(`${loc[0]}`) ? localStorage.getItem(`${loc[0]}`) : 0;

dec.addEventListener('click', () => {
  console.log("Location ", loc[0]);
  count.innerHTML = Number(count.innerText) - 1
  localStorage.setItem(`${loc[0]}`, count.innerText);
});
inc.addEventListener('click', () => {
  count.innerHTML = Number(count.innerHTML) + 1
  localStorage.setItem(`${loc[0]}`, count.innerText);
});

reset.addEventListener('click', () => {
  count.innerHTML = 0;
  localStorage.setItem(`${loc[0]}`, 0);
});



