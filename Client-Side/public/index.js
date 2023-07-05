// menu max height 435
let ELEMENT_ID_PROFILE_IMAGE = "profile-top-center-image";
let ELEMENT_ID_SUBJECT_IMAGE_BUTTON = "profile-top-top-no-subject-bottom-add-subject-button";
let ELEMENT_ID_PROFILE_OPTIONS_BUTTON = "profile-top-nav-options-button";
let ELEMENT_ID_PROFILE_PREVIEW_OPTIONS_BUTTON = "float-profile-preview-button-options";
let ELEMENT_ID_PROFILE_EMPTY_SUBJECT_IMAGE = "profile-top-top-no-subject";
let ELEMENT_ID_SUBJECT_IMAGE_BOTTOM = "profile-top-top-no-subject-bottom";
let ELEMENT_ID_PROFILE_NAV_MORE = "profile-top-nav-button-more";

let menuEl = document.getElementById("float-menu");
let quoteEl = document.getElementById("float-menu-quote");

let MENU_DEFAULT_WIDTH = 344;
let MENU_TYPE_QUOTE = 2;
let MENU_TYPE_NORMAL = 1;

let MENU_POST_OPTIONS = `
  <div class="float-menu-button">
    <div class="float-menu-button-icon" style='background-image: url("https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/KuPhoR5GNni.png"); background-position: 0px -418px; background-size: 22px 484px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;'></div>
    <div class="float-menu-button-text">Pin post</div>
  </div>


  <div class="float-menu-button">
    <div class="float-menu-button-icon" style='background-image: url("https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/HxR_f_viddK.png"); background-position: 0px -92px; background-size: 26px 444px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;'></div>
    <div class="float-menu-button-text">Save post
    <div class="float-menu-button-subtext">Add this to your saved items.</div>
    </div>
  </div>

  <div class="float-menu-saperator"></div>


  <div class="float-menu-button">
    <div class="float-menu-button-icon" style='background-image: url("https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/Y3PwviycSM_.png"); background-position: 0px -504px; background-size: 26px 1490px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;'></div>
    <div class="float-menu-button-text">Who can comment on your post?</div>
  </div>


  <div class="float-menu-button">
    <div class="float-menu-button-icon" style='background-image: url("https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/HxR_f_viddK.png"); background-position: 0px -180px; background-size: 26px 444px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;'></div>
    <div class="float-menu-button-text">View edit history</div>
  </div>


  <div class="float-menu-button">
    <div class="float-menu-button-icon" style='background-image: url("https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/MIo7E0in8hl.png"); background-position: 0px -586px; background-size: 38px 812px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;'></div>
    <div class="float-menu-button-text">Edit post</div>
  </div>


  <div class="float-menu-button">
    <img class="float-menu-button-icon" src="https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/zM4vawISV9U.png" alt="" height="20" width="20">
    <div class="float-menu-button-text">Edit audience</div>
  </div>

  
  <div class="float-menu-button">
    <div class="float-menu-button-icon" style='background-image: url("https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/MIo7E0in8hl.png"); background-position: 0px -278px; background-size: 38px 812px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;'></div>
    <div class="float-menu-button-text">Turn off notifications for this post</div>
  </div>


  <div class="float-menu-button">
    <div class="float-menu-button-icon" style='background-image: url("https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/HxR_f_viddK.png"); background-position: 0px -422px; background-size: 26px 444px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;'></div>
    <div class="float-menu-button-text">Turn off translations</div>
  </div>


  <div class="float-menu-button">
    <div class="float-menu-button-icon" style='background-image: url("https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/Y3PwviycSM_.png"); background-position: 0px -350px; background-size: 26px 1490px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;'></div>
    <div class="float-menu-button-text">Edit date</div>
  </div>

  <div class="float-menu-button">
    <div class="float-menu-button-icon" style='background-image: url("https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/KuPhoR5GNni.png"); background-position: 0px -66px; background-size: 22px 484px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;'></div>
    <div class="float-menu-button-text">Embed</div>
  </div>

  <div class="float-menu-saperator"></div>

  <div class="float-menu-button">
    <div class="float-menu-button-icon" style='background-image: url("https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/HxR_f_viddK.png"); background-position: 0px -136px; background-size: 26px 444px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;'></div>
    <div class="float-menu-button-text">Move to archive</div>
  </div>


  <div class="float-menu-button">
    <div class="float-menu-button-icon" style='background-image: url("https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/Y3PwviycSM_.png"); background-position: 0px -1098px; background-size: 26px 1490px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;'></div>
    <div class="float-menu-button-text">Move to trash
    <div class="float-menu-button-subtext">Items in your trash are deleted after 30 days.</div>
    </div>
  </div>
  
`;

let MENU_EDIT_PROFILE_IMAGE = `
  <div class="float-menu-button">
    <div class="float-menu-button-icon" style='background-image: url("https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/ex9MPSIyuWN.png"); background-position: 0px -22px; background-size: 22px 110px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;'></div>
    <div class="float-menu-button-text">Add Photo</div>
  </div>
  <div class="float-menu-button">
    <div class="float-menu-button-icon" style='background-image: url("https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/ex9MPSIyuWN.png"); background-position: 0px 0px; background-size: 22px 110px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;'></div>
    <div class="float-menu-button-text">Create avatar profile picture</div>
  </div>
`;

let MENU_EDIT_SUBJECT_IMAGE = `
  <div class="float-menu-button">
      <div class="float-menu-button-icon" style='background-image: url("https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/HxR_f_viddK.png"); background-position: 0px -356px; background-size: 26px 444px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;'></div>
      <div class="float-menu-button-text">Select Photo</div>
    </div>
    <div class="float-menu-button">
      <div class="float-menu-button-icon" style='background-image: url("https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/RsovdqZbL5J.png"); background-position: -26px -114px; background-size: 50px 530px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;'></div>
      <div class="float-menu-button-text">Upload photo</div>
    </div>
`;

let MENU_PROFILE_OPTIONS = `
  <div class="float-menu-button">
        <img class="float-menu-button-icon" alt="" height="20" width="20" src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/7jguSbfMbG9.png"/>
        <div class="float-menu-button-text">View As</div>
  </div>
  <div class="float-menu-button">
        <img class="float-menu-button-icon" alt="" height="20" width="20" src="https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/EqK-TAKwmgn.png"/>
        <div class="float-menu-button-text">Search</div>
  </div>

  <div class="float-menu-button">
        <img class="float-menu-button-icon" alt="" height="20" width="20" src="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/UVzVF4HAgJU.png"/>
        <div class="float-menu-button-text">Account Status</div>
  </div>

  <div class="float-menu-button">
    <img class="float-menu-button-icon" alt="" height="20" width="20" src="https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/Yvan5TpvPd0.png"/>
        <div class="float-menu-button-text">Archive</div>
  </div>

  <div class="float-menu-button">
    <img class="float-menu-button-icon" alt="" height="20" width="20" src="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/f6I8h7mxL6L.png"/>
        <div class="float-menu-button-text">Story archive</div>
  </div>

  <div class="float-menu-button">
    <img class="float-menu-button-icon" alt="" height="20" width="20" src="https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/Tb3rCT6KmQK.png"/>
        <div class="float-menu-button-text">Activity log</div>
  </div>

  <div class="float-menu-button">
    <img class="float-menu-button-icon" alt="" height="20" width="20" src="https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/ZbG6eHe-usr.png"/>
        <div class="float-menu-button-text">Profile and tagging settings</div>
  </div>

  <div class="float-menu-button">
    <img class="float-menu-button-icon" alt="" height="20" width="20" src="https://static.xx.fbcdn.net/rsrc.php/v3/yf/r/MbdM7YZ9cIL.png"/>
        <div class="float-menu-button-text">Turn on professional mode</div>
  </div>
`;

let MENU_PROFILE_NAV_MORE = `
  <div class="float-menu-button" id="profile-nav-about">
    <div class="float-menu-button-text">About</div>
  </div>
  <div class="float-menu-button" id="profile-nav-friends">
    <div class="float-menu-button-text">Friends</div>
  </div>
  <div class="float-menu-button" id="profile-nav-photos">
    <div class="float-menu-button-text">Photos</div>
  </div>
  <div class="float-menu-button" id="profile-nav-videos">
    <div class="float-menu-button-text">Videos</div>
  </div>
  <div class="float-menu-button" id="profile-nav-checkins">
    <div class="float-menu-button-text">Check-ins</div>
  </div>
  <div class="float-menu-button">
    <div class="float-menu-button-text">Sports</div>
  </div>
  <div class="float-menu-button">
    <div class="float-menu-button-text">Music</div>
  </div>
  <div class="float-menu-button">
    <div class="float-menu-button-text">Movies</div>
  </div>
  <div class="float-menu-button">
    <div class="float-menu-button-text">TV shows</div>
  </div>
  <div class="float-menu-button">
    <div class="float-menu-button-text">Books</div>
  </div>
  <div class="float-menu-button">
    <div class="float-menu-button-text">Likes</div>
  </div>
  <div class="float-menu-button">
    <div class="float-menu-button-text">Events</div>
  </div>
  <div class="float-menu-button">
    <div class="float-menu-button-text">Questions</div>
  </div>
  <div class="float-menu-button">
    <div class="float-menu-button-text">Reviews given</div>
  </div>
  <div class="float-menu-button">
    <div class="float-menu-button-text">Groups</div>
  </div>
  <div class="float-menu-button">
    <div class="float-menu-button-text">Manage sections</div>
  </div>
`;

let MENU_COMMENT_OPTIONS = `
  <div class="float-menu-button">
    <div class="float-menu-button-text">Edit</div>
  </div>

  <div class="float-menu-button">
    <div class="float-menu-button-text">Delete</div>
  </div>
`;

let float_description = document.getElementById("float-description");
let aria_labeled_elements = document.querySelectorAll("*[aria-label]");
for (let element of aria_labeled_elements) {
  element.addEventListener("mouseover", () => {
    float_description.style = "";
    let elementCenterX = (getElementPosition(element).right + getElementPosition(element).left) / 2;

    float_description.style.transform = `translate(${elementCenterX}px, ${getElementPosition(element).bottom}px) translate(-50%, 8px)`;
    if (element.getAttribute("aria-label-side") == "top") float_description.style.transform += "translateY(-86px)";
    if (element.getAttribute("aria-label-bold") == "true") {
      float_description.style.fontWeight = "bold";
      float_description.style.fontSize = ".75rem";
      float_description.style.borderRadius = "15px";
      float_description.style.boxShadow = "rgba(0, 0, 0, 0.8)";
      float_description.style.padding = "3px 5px 3px 5px";
      float_description.style.color = "#FFFFFF";
    }
    float_description.innerText = element.getAttribute("aria-label");
    float_description.attachedTo = element;
    float_description.active = true;
    fixFloatDescriptionOutOfBound();
    float_description.style.opacity = 1;
  });
  element.addEventListener("mouseout", () => {
    float_description.active = false;
    float_description.style.transform = "none";
    float_description.style.opacity = 0;
  });
}

function fixFloatDescriptionOutOfBound() {
  if (float_description.active == true) {
    let elementCenterX = (getElementPosition(float_description.attachedTo).right + getElementPosition(float_description.attachedTo).left) / 2;
    float_description.style.transform = `translate(${elementCenterX}px, ${getElementPosition(float_description.attachedTo).bottom}px) translate(-50%, 8px)`;
    if (float_description.attachedTo.getAttribute("aria-label-side") == "top") float_description.style.transform += "translateY(-80px)";
    if (getElementPosition(float_description).left < 0) {
      float_description.style.transform += `translateX(${-getElementPosition(float_description).left + 8}px)`;
    }
    if (getElementPosition(float_description).right > document.body.clientWidth) {
      float_description.style.transform += `translateX(-${getElementPosition(float_description).right - document.body.clientWidth + 8}px)`;
    }
  }
}

function getElementPosition(element) {
  let position = element.getBoundingClientRect();
  return {
    top: position.top + window.scrollY,
    bottom: position.bottom + window.scrollY,
    left: position.left,
    right: position.right,
  };
}

for (let postOptButton of document.getElementsByClassName("post-options")) {
  postOptButton.addEventListener("click", () => {
    attachMenuToElement(postOptButton, MENU_TYPE_NORMAL, MENU_POST_OPTIONS);
  });
}

for (let commentOptsBtn of document.getElementsByClassName("comment-options")) {
  commentOptsBtn.addEventListener("click", () => {
    attachMenuToElement(commentOptsBtn, MENU_TYPE_NORMAL, MENU_COMMENT_OPTIONS);
  });
}

for (let replyOptsBtn of document.getElementsByClassName("reply-options")) {
  replyOptsBtn.addEventListener("click", () => {
    attachMenuToElement(replyOptsBtn, MENU_TYPE_NORMAL, MENU_COMMENT_OPTIONS);
  });
}

document.getElementById(ELEMENT_ID_PROFILE_IMAGE).addEventListener("click", (e) => {
  if (e.target != document.getElementById("profile-top-center-image-button-icon") && e.target != document.getElementById("profile-top-center-image-button")) {
    attachMenuToElement(document.getElementById(ELEMENT_ID_PROFILE_IMAGE), MENU_TYPE_QUOTE, MENU_EDIT_PROFILE_IMAGE);
  }
});

document.getElementById(ELEMENT_ID_PROFILE_NAV_MORE).addEventListener("click", () => {
  attachMenuToElement(document.getElementById(ELEMENT_ID_PROFILE_NAV_MORE), MENU_TYPE_NORMAL, MENU_PROFILE_NAV_MORE);
});

window.addEventListener("click", (e) => {
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
  if (menuEl.active == true) {
    if (!e.path.includes(menuEl) && !e.path.includes(menuEl.attachedTo)) {
      hideMenu();
    }
  }

  if (e.target == document.getElementById(ELEMENT_ID_PROFILE_EMPTY_SUBJECT_IMAGE) || e.target == document.getElementById(ELEMENT_ID_SUBJECT_IMAGE_BUTTON) || e.target.parentElement == document.getElementById(ELEMENT_ID_SUBJECT_IMAGE_BUTTON)) {
    attachMenuToElement(document.getElementById(ELEMENT_ID_SUBJECT_IMAGE_BUTTON), MENU_TYPE_NORMAL, MENU_EDIT_SUBJECT_IMAGE);
  }
});

document.getElementById(ELEMENT_ID_PROFILE_OPTIONS_BUTTON).addEventListener("click", () => {
  attachMenuToElement(document.getElementById(ELEMENT_ID_PROFILE_OPTIONS_BUTTON), MENU_TYPE_QUOTE, MENU_PROFILE_OPTIONS);
});

document.getElementById(ELEMENT_ID_PROFILE_PREVIEW_OPTIONS_BUTTON).addEventListener("click", () => {
  attachMenuToElement(document.getElementById(ELEMENT_ID_PROFILE_PREVIEW_OPTIONS_BUTTON), MENU_TYPE_QUOTE, MENU_PROFILE_OPTIONS);
});

function attachMenuToElement(element, type, menu, width = MENU_DEFAULT_WIDTH) {
  let elWidth = getElementWidth(element);
  let bodyWidth = document.body.clientWidth;
  let elementCenterX = (getElementPosition(element).right + getElementPosition(element).left) / 2;

  if (menuEl.attachedTo == element) return hideMenu();

  menuEl.attachedTo = element;
  menuEl.type = type;
  menuEl.active = true;

  if ((width - elWidth) / 2 < 0) width = MENU_DEFAULT_WIDTH;

  menuEl.innerHTML = menu;
  menuEl.style.display = "flex";
  menuEl.style.width = `${width}px`;

  menuEl.style.transform = `translate(${getElementPosition(element).left}px, ${getElementPosition(element).bottom}px) translateX(-${(width - elWidth) / 2}px)`;

  if (type == MENU_TYPE_QUOTE) {
    quoteEl.style.display = "block";
    quoteEl.style.transform = `translate(${elementCenterX}px, ${getElementPosition(element).bottom}px) translate(-6px,6px) rotate(-45deg)`;
  }

  fixMenuOutOfBound();
}

// let floatProfilePreview = document.getElementById("float-profile-preview");
// let profilePreviewElements = document.getElementsByClassName("profile-preview");
// for (let element of profilePreviewElements) {
//     element.addEventListener("mouseover", () => {
//         let elementCenterX = (getElementPosition(element).right + getElementPosition(element).left) / 2;
//         floatProfilePreview.style.transform = `translate(${getElementPosition(element).right}px,${getElementPosition(element).top}px) translate(-66%, -100%)`;
//         floatProfilePreview.style.display = "flex";
//         floatProfilePreview.attachedTo = element;
//         setTimeout(() => {
//             floatProfilePreview.style.opacity = "1";
//         }, 100);
//     });
// // }

// document.addEventListener("mouseover", (e) => {
//     if (!e.path) e.path = createEPath(e.relatedTarget);

//     e.path.concat(createEPath(floatProfilePreview.attachedTo));
//     e.path.concat(createEPath(document.getElementById("float-menu")));
//     // console.log(e.path);
//     if (floatProfilePreview.style.display == "flex") {
//         // console.log(e.relatedTarget);
//         if (!e.path.includes(floatProfilePreview) && !e.path.includes(floatProfilePreview.attachedTo)) {
//             if (e.path.includes(document.getElementById("float-menu"))) return; //FIX THIS
//             floatProfilePreview.style.opacity = "0";
//             floatProfilePreview.style.display = "none";
//         }
//     }
// });

function getChilds(element) {
  if (!element) return [];
  let childs = [];
  for (let child of element.querySelectorAll("*")) {
    childs.push(child);
  }
  return childs;
}

function createEPath(element) {
  let path = [];
  if (!element) return [];
  let currentElement = element;
  while (true) {
    if (!currentElement || currentElement.tagName == "BODY") {
      break;
    }
    path.push(currentElement);
    currentElement = currentElement.parentElement;
  }
  let childs = element.querySelectorAll("*");
  if (childs.length != 0) {
    for (let element of childs) {
      path.push(element);
    }
  }
  return path;
}

function hideMenu() {
  menuEl.attachedTo = undefined;
  menuEl.type = undefined;
  menuEl.active = false;
  menuEl.innerHTML = "";
  menuEl.style.display = "none";
  menuEl.style.width = "0px";
  menuEl.style.transform = "none";
  quoteEl.style.display = "none";
  quoteEl.style.transform = "none";

  menuEl.style.height = "auto";
}

function fixMenuOutOfBound() {
  let bodyWidth = document.body.clientWidth;
  let width = parseInt(menuEl.style.width.replace("px", ""));
  let elementCenterX = (getElementPosition(menuEl.attachedTo).right + getElementPosition(menuEl.attachedTo).left) / 2;

  menuEl.style.transform = `translate(${getElementPosition(menuEl.attachedTo).left}px, ${getElementPosition(menuEl.attachedTo).bottom}px) translateX(-${(width - getElementWidth(menuEl.attachedTo)) / 2}px)`;

  if (menuEl.type == MENU_TYPE_QUOTE) {
    menuEl.style.transform += "translateY(12px)";
    quoteEl.style.transform = `translate(${elementCenterX}px, ${getElementPosition(menuEl.attachedTo).bottom}px) translate(-6px,6px) rotate(-45deg)`;
  }

  if (elementOutOfBound(menuEl).right) {
    menuEl.style.transform += `translateX(-${getElementPosition(menuEl).right - bodyWidth + 8}px)`;
  } else if (elementOutOfBound(menuEl).left) {
    menuEl.style.transform += `translateX(${-getElementPosition(menuEl).left + 8}px)`;
  }

  if (elementOutOfBound(menuEl).bottom) {
    menuEl.style.transform += `translateY(-${getElementHeight(menuEl) + getElementHeight(menuEl.attachedTo)}px)`;
    if (menuEl.type == MENU_TYPE_QUOTE) {
      menuEl.style.transform += `translateY(-24px)`;
      quoteEl.style.transform = `translate(${elementCenterX}px, ${getElementPosition(menuEl.attachedTo).bottom - getElementHeight(menuEl.attachedTo) - 24}px) translate(-6px,6px) rotate(-45deg)`;
    }
  }

  // if(elementOutOfBound(menuEl).top){
  //   let newHeight = getElementPosition(menuEl).bottom - window.scrollY-60 + "px"
  //   menuEl.style.transform = newHeight;
  // }

  if (window.scrollY > getElementPosition(menuEl).bottom || window.scrollY + window.innerHeight < getElementPosition(menuEl).top) {
    hideMenu();
  }
}

function getElementHeight(element) {
  return getElementPosition(element).bottom - getElementPosition(element).top;
}

function elementOutOfBound(element) {
  return {
    top: getElementPosition(element).top < window.scrollY + 56,
    bottom: getElementPosition(element).bottom > window.scrollY + window.innerHeight,
    left: getElementPosition(element).left < 0,
    right: getElementPosition(menuEl).right > document.body.clientWidth,
  };
}

function getElementWidth(element) {
  return getElementPosition(element).right - getElementPosition(element).left;
}

function getElementPosition(element) {
  let position = element.getBoundingClientRect();
  return {
    top: position.top + window.scrollY,
    bottom: position.bottom + window.scrollY,
    left: position.left,
    right: position.right,
  };
}

window.addEventListener("resize", () => {
  if (menuEl.active == true) {
    fixMenuOutOfBound();
  }
  if (float_description.active == true) {
    fixFloatDescriptionOutOfBound();
  }
});
window.addEventListener("scroll", () => {
  if (menuEl.active == true) {
    fixMenuOutOfBound();
  }
  if (float_description.active == true) {
    fixFloatDescriptionOutOfBound();
  }
});
