Array.from(document.getElementsByClassName("faqbox")).forEach((e) => {
    e.addEventListener("click", () => {
        if (Array.from(e.children[1].classList).includes("hidden")) {
            e.children[1].classList.remove("hidden");
            e.firstElementChild.children[1].firstElementChild.src = "assets/images/cancel.svg";
            e.firstElementChild.children[1].firstElementChild.style.filter = "invert(1)"
        }
        else {
            e.firstElementChild.children[1].firstElementChild.src = "assets/images/plus.svg";
            e.firstElementChild.children[1].firstElementChild.style.filter = "invert(0)"
            e.children[1].classList.toggle("hidden");
        }
    });
});
