const createNav = () => {
  let nav = document.querySelector(".navbar");

  nav.innerHTML = `
        <div class="nav">
            <img src="../img/LOGO.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a>
                    <img src="../img/user.png" id="user-img" alt="">
                    <div class="login-logout-popup hide">
                        <p class="account-info">Log in as, name</p>
                        <button cass="btn" id="user-btn">Log out</button>
                    </div>
                </a>
                <a href="/cart"><img src="../img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">home</a></li>
            <li class="link-item"><a href="#" class="link">women</a></li>
            <li class="link-item"><a href="#" class="link">men</a></li>
            <li class="link-item"><a href="#" class="link">kids</a></li>
            <li class="link-item"><a href="#" class="link">accessories</a></li>
        </ul>
    `;
};

createNav();

//nav popup
const userImageButton = document.querySelector("#user-img");
const userPop = document.querySelector(".login-logout-popup");
const popupText = document.querySelector(".account-info");
const actionBtn = document.querySelector("#user-btn");

userImageButton.addEventListener("click", () => {
  userPop.classList.toggle("hide");
});

window.onload = () => {
  let user = JSON.parse(sessionStorage.user || null);
  if (user != null) {
    // user is logged in
    popupText.innerHTML = `log in as, ${user.name}`;
    actionBtn.innerHTML = "log out";
    actionBtn.addEventListener("click", () => {
      sessionStorage.clear();
      location.reload();
    });
  } else {
    //user is logged out
    popupText.innerHTML = "log in to place order";
    actionBtn.innerHTML = "log in";
    actionBtn.addEventListener("click", () => {
      location.href = "/login";
    });
  }
};
