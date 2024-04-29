const containerBox = document.getElementById('container-box');
const shuffleButton = document.getElementById('shuffle');
const sortButton = document.getElementById('sort');
const boxArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

boxArray.forEach((val) => {
  containerBox.innerHTML += `<li data="${val}">${val}</li>`;
});

shuffleButton.addEventListener('click', () => {
  boxArray.sort(() => 0.5 - Math.random());
  renderBox();
})

sortButton.addEventListener('click', () => {
  boxArray.sort((a, b) => a - b);
  renderBox();
})

const renderBox = () => {
  containerBox.innerHTML = '';
  boxArray.forEach((item) => {
    let boxItem = document.createElement("li");
    boxItem.innerHTML = item;
    boxItem.setAttribute('data', item);
    containerBox.appendChild(boxItem);
  });

};
