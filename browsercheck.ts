let header = document.querySelector('.page-header');
let info = navigator.userAgent;

console.log(header.classList);
console.log(info);

if (info.includes('Safari/605.1.15')) {
  header.classList.add('safari-page-header');
} else {
  header.classList.remove('safari-page-header');
}
console.log(header.classList);
