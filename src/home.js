const home = `
  <div id="welcome" class="container-fluid column p-5">
  <h1 class="display-4 text-center name">Becca's Bakery</h1>
  <p class="welcome">
  Baking the difference.
  We create delicious memories.
  Just like home.
  Let us keep Your cookie jar filled.
  We make the impossible delicious.
  The Fresh maker.
  The home of fresh baking.
  The sweetest place in town.
  Freshly baked all day. Every day!
  Freshness baked Everyday.
  Fresh to you each day!
  Nothing beats Becca's Bakery!
  Everything we bake, we bake with love.
  Fun Family Memories begin here.
  Love at first bite.
  </p>

  </div>
  `;

const homeDiv = () => {
  const div1 = document.createElement('div');
  div1.innerHTML = home;

  return div1;
}

export default homeDiv;