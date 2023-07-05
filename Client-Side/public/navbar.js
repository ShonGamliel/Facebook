navLeftSearchCheck();

function navLeftSearchCheck() {
  if (window.innerWidth < 1260.1) {
    if (document.getElementById("nav-left-search-last").style.display == "none" || document.getElementById("nav-left-search-last").style.display.length == 0) {
      document.getElementById("nav-left-search-input").style.opacity = 0;
      document.getElementById("nav-left-search-input").style.width = 0;
      document.getElementById("nav-left-search-input").style.position = "absolute";
      document.getElementById("nav-left-search-input").style.zIndex = -1;

      document.getElementById("nav-left-search-container").style.backgroundColor = "transparent";
    } else {
      document.getElementById("nav-left-search-input").style.opacity = 1;
      document.getElementById("nav-left-search-input").style.width = "100%";
      document.getElementById("nav-left-search-input").style.position = "static";
      document.getElementById("nav-left-search-input").style.zIndex = 4;

      document.getElementById("nav-left-search-container").style.backgroundColor = "#f0f2f5";
    }
  } else {
    document.getElementById("nav-left-search-input").style.opacity = 1;
    document.getElementById("nav-left-search-input").style.width = "100%";
    document.getElementById("nav-left-search-input").style.position = "static";
    document.getElementById("nav-left-search-input").style.zIndex = 4;

    document.getElementById("nav-left-search-container").style.backgroundColor = "#f0f2f5";
  }
}

window.onresize = (e) => {
  navLeftSearchCheck();
};

window.onclick = (e) => {
  if (!e.path) {
    e.path = [];
    let currentElement = e.target;
    if (currentElement.tagName == "HTML") {
      e.path = [];
    } else {
      while (true) {
        if (currentElement.tagName == "BODY") {
          break;
        }
        e.path.push(currentElement);
        currentElement = currentElement.parentElement;
      }
    }
  }
  if (document.getElementById("nav-left-search-last").style.display == "flex") {
    if (!e.path.includes(document.getElementById("nav-left"))) {
      document.getElementById("nav-left-logo").style.display = "block";
      document.getElementById("nav-left-back").style.display = "none";
      document.getElementById("nav-left-search-last").style.display = "none";
      navLeftSearchCheck();
    }
  } else {
    if (e.path.includes(document.getElementById("nav-left-search-container"))) {
      document.getElementById("nav-left-logo").style.display = "none";
      document.getElementById("nav-left-back").style.display = "flex";
      document.getElementById("nav-left-search-last").style.display = "flex";
      navLeftSearchCheck();
    }
  }
};

/*
Buttons
*/

for (let button of document.getElementsByClassName("nav-center-button")) {
  button.addEventListener("click", () => {
    for (let btn of document.getElementsByClassName("nav-center-button")) {
      btn.getElementsByClassName("nav-center-button-focus")[0].style.display = "none";
      btn.getElementsByClassName("nav-center-button-unfocus")[0].style.display = "flex";
      btn.className = btn.className.replace(" focus", "");
    }
    button.getElementsByClassName("nav-center-button-focus")[0].style.display = "flex";
    button.getElementsByClassName("nav-center-button-unfocus")[0].style.display = "none";
    button.className = button.className + " focus";
  });
}

for (let button of document.getElementsByClassName("nav-right-button")) {
  button.addEventListener("click", () => {
    for (let btn of document.getElementsByClassName("nav-right-button")) {
      if (btn.id == "nav-right-find-friends") {
        btn.style.color = "#1c1e21";
      } else {
        btn.getElementsByTagName("svg")[0].style.fill = "currentColor";
      }
      btn.style.backgroundColor = "#E4E6EB";
    }
    if (button.id == "nav-right-find-friends") {
      button.style.color = "#1877F2";
    } else {
      button.getElementsByTagName("svg")[0].style.fill = "hsl(214, 89%, 52%)";
    }
    button.style.backgroundColor = "#E7F3FF";
  });
}
