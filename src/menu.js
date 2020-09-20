import lava from './images/lava.jpg';
import croissants from './images/croissants.jpg';
import jumbo from './images/jumbo-choco.jpg';
import oreo from './images/oreo-pots.jpg';
import shirl from './images/shirl.jpg';
import crans from './images/glazed-cranberry.jpg';
import vals from './images/vals.jpg';
import velvet from './images/velvet.jpg';
import choco from './images/choco-cup.jpg';

const menu = `
  <h3 class="text-center menu-header">Yummy menu list!</h3></br>
<div class="food-menu text-center">
<div class="food-item ">
  <figure>
    <img src=${shirl} alt="food">
    <figcaption>Shirley Temple cupcakes and cherries at <span>$3</span> only</figcaption>
  </figure>
</div>
<div class="food-item">
  <figure>
    <img src=${oreo} alt="food">
    <figcaption>Yummy Oreo pots at <span>$3</span> only</figcaption>
  </figure>
</div>
<div class="food-item">
  <figure>
    <img src=${croissants} alt="food">
    <figcaption>Perfectly baked breakfast croissants at <span>$3</span> only</figcaption>
  </figure>
</div>
<div class="food-item">
  <figure>
    <img src=${crans} alt="food">
    <figcaption>Cranberry and banana bread at <span>$3</span> only</figcaption>
  </figure>
</div>
<div class="food-item">
  <figure>
    <img src=${jumbo} alt="food">
    <figcaption>Double-choco jumbo cookies at <span>$3</span> only</figcaption>
  </figure>
</div>
<div class="food-item">
  <figure>
    <img src=${lava} alt="food">
    <figcaption>Chocolate lava cake at <span>$3</span> only</figcaption>
  </figure>
</div>

<div class="food-item">
  <figure>
    <img src=${velvet} alt="food">
    <figcaption>Red velvet and cheesecream cake at <span>$3</span> only</figcaption>
  </figure>
</div>

<div class="food-item">
  <figure>
    <img src=${vals} alt="food">
    <figcaption><span class="text-danger">Special order only:</span> Valentines day cupcakes at <span>$3</span> only</figcaption>
  </figure>
</div>

<div class="food-item">
  <figure>
    <img src=${choco} alt="food">
    <figcaption>Chocolate and caramel iced cupcakes at <span>$3</span> only</figcaption>
  </figure>
</div>
</div>
  `;

const menuDiv = () => {
  const div = document.createElement('div');
  div.innerHTML = menu;

  return div;
};

export default menuDiv;
