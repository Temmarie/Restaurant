const home = `
  <div id="welcome" class="container-fluid column p-5">
  <h1 class="display-4 text-center name">Becca's Bakery</h1>

  <p class="welcome">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
     veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
    aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>

  </div>
  `;

function homeDiv() {
  const div1 = document.createElement('div');
  div1.innerHTML = home;

  return div1;
}

export default homeDiv;