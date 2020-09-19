import bf1 from './images/bf1.jpg';
import bf2 from './images/bf2.jpg';
import bg1 from './images/bg1.jpg';
import salad1 from './images/salad1.jpg';
import st1 from './images/st1.jpg';
import st2 from './images/st2.jpg';


const menu = `
  <div class="food-menu">
    <div class="food-item">
      <figure>
        <img src=${bf1} alt="food">
        <figcaption>Delicious Toast breakfast at only <span>$3</span></figcaption>
      </figure>
    </div>
    <div class="food-item">
      <figure>
        <img src=${bf2} alt="food">
        <figcaption>Delicious Pancake breakfast at only <span>$5</span></figcaption>
      </figure>
    </div>
    <div class="food-item">
      <figure>
        <img src=${bg1} alt="food">
        <figcaption>Delicious Double Burger at only <span>$6</span></figcaption>
      </figure>
    </div>
    <div class="food-item">
      <figure>
        <img src=${salad1} alt="">
        <figcaption>Salad Delight at only <span>$7</span></figcaption>
      </figure>
    </div>
    <div class="food-item">
      <figure>
        <img src=${st1} alt="">
        <figcaption>Tasty Steaks at only <span>$8.99</span></figcaption>
      </figure>
    </div>
    <div class="food-item">
      <figure>
        <img src=${st2} alt="">
        <figcaption>Steak Surprise at only <span>$10</span></figcaption>
      </figure>
    </div>
  </div>
  `;

function menuDiv() {
  const div = document.createElement('div');
  div.innerHTML = menu;

  return div;
}

export default menuDiv;
