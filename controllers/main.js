import ChosenItem from '../models/chosenItem.js';
import ListChosen from '../models/listChosen.js';
import { domID } from './controller.js';

const listChosenItems = new ListChosen();

const putOnItemClick = (item) => {
  const name = item.name;
  const imgSrc = item.imgSrc_png;
  const type = item.type;

  const tryOnImgSrc = imgSrc.replace('_show.jpg', '.png');
  const chosenItem = new ChosenItem('', type, name, imgSrc, tryOnImgSrc);
  listChosenItems.addItem(chosenItem);

  // Update the corresponding image element with the selected item's image source
  const hairstyleImg = domID('hairstyleImg');
  const necklaceImg = domID('necklaceImg');
  const bikinitopImg = domID('bikinitopImg');
  const bikinibottomImg = domID('bikinibottomImg');
  const handbagImg = domID('handbagImg');
  const feetImg = domID('feetImg');
  const backgroundImg = domID('backgroundImg');

  if (type === 'hairstyle') {
    hairstyleImg.setAttribute('src', tryOnImgSrc);
  } else if (type === 'necklaces') {
    necklaceImg.setAttribute('src', tryOnImgSrc);
  } else if (type === 'topclothes') {
    bikinitopImg.setAttribute('src', tryOnImgSrc);
    domID('bikinitopImg').style = 'width:100%;height:100%;'
  } else if (type === 'botclothes') {
    bikinibottomImg.setAttribute('src', tryOnImgSrc);
    domID('bikinibottomImg').style = 'width:100%;height:100%;'
  } else if (type === 'handbags') {
    handbagImg.setAttribute('src', tryOnImgSrc);
  } else if (type === 'shoes') {
    feetImg.setAttribute('src', tryOnImgSrc);
  } else if (type === 'background') {
    backgroundImg.setAttribute('src', tryOnImgSrc);
    domID('backgroundImg').style = 'width:100%;height:100%;'
  }
};

const getItemFromData = (button) => {
  const card = button.closest('.card');
  const img = card.querySelector('.card-img-top');
  const name = card.querySelector('.card-title').innerText;
  const type = img.dataset.dressType;
  const imgSrc_jpg = img.getAttribute('src');
  const imgSrc_png = card.querySelector('.card-img-top:nth-child(2)').getAttribute('src');
  return new ChosenItem('', type, name, imgSrc_jpg, imgSrc_png);
};

const buttons = document.getElementsByClassName('btnPutOn');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (event) => {
    const item = getItemFromData(event.target);
    putOnItemClick(item);
  });
});



