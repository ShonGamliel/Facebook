document.getElementById("profile-sticky-container").style.display = "none";
document.getElementById("profile-top-sticky-profile").style.opacity = 0;

window.addEventListener("scroll", () => {
    if (window.scrollY + 56 >= getElementPosition(document.getElementById("profile-top-nav")).top) {
        if (document.getElementById("profile-top-nav-options-button").parentElement != document.getElementById("profile-top-sticky")) {
            document.getElementById("profile-top-sticky").appendChild(document.getElementById("profile-top-nav-options-button"));
        }
        document.getElementById("profile-sticky-container").style.display = "flex";
        document.getElementById("profile-top-sticky-profile").style.opacity = 1;
    } else {
        if (document.getElementById("profile-top-nav-options-button").parentElement != document.getElementById("profile-top-nav")) {
            document.getElementById("profile-top-nav").appendChild(document.getElementById("profile-top-nav-options-button"));
        }
        document.getElementById("profile-sticky-container").style.display = "none";
        document.getElementById("profile-top-sticky-profile").style.opacity = 0;
    }
});
window.onload = () =>
    setTimeout(() => {
        // if (window.innerWidth > 957) {
        //     window.scrollTo(0, getElementPosition(document.getElementById("profile-top-center-image")).top - 87.5);
        // } else {
        //     window.scrollTo(0, 0);
        // }
        window.scrollTo(0, 600);
        if (window.scrollY + 56 >= getElementPosition(document.getElementById("profile-top-nav")).top) {
            if (document.getElementById("profile-top-nav-options-button").parentElement != document.getElementById("profile-top-sticky")) {
                document.getElementById("profile-top-sticky").appendChild(document.getElementById("profile-top-nav-options-button"));
            }
            document.getElementById("profile-sticky-container").style.display = "flex";
            document.getElementById("profile-top-sticky-profile").style.opacity = 1;
        }
    }, 10);

window.addEventListener("resize", () => {
    if (window.location.href.search("profile") != -1) {
        profileTopNavButtonsShrink();
    }
});

document.getElementById("nav-left").style.width = "360px";
document.getElementById("nav-left").style.maxWidth = "100vw";

function profileTopNavButtonsShrink() {
    let buttons = document.getElementsByClassName("profile-top-nav-button");
    let moreButton = buttons[buttons.length - 1];
    let lastButton = buttons[buttons.length - 2];
    let optionsButton = document.getElementById("profile-top-nav-options-button");

    if (getElementPosition(optionsButton).left - 2 < getElementPosition(moreButton).right) {
        for (let i = buttons.length - 2; i > 0; i--) {
            if (buttons[i].style.display == "flex" || buttons[i].style.display.length == 0) {
                buttons[i].style.display = "none";
                break;
            }
        }
    }

    if (getElementPosition(optionsButton).left - 98 > getElementPosition(moreButton).right) {
        for (let btn of buttons) {
            if (btn.style.display == "none") {
                btn.style.display = "flex";
                break;
            }
        }
    }
}
