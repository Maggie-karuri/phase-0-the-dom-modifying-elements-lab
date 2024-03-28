const mainElement = document.querySelector('main#main');

if (mainElement) {
  mainElement.remove();
}
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Your Name is the champion';
document.body.appendChild(newHeader);
// Replace export statement with module.exports
module.exports = { newHeader };
ul.remove();