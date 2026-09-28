let dropdowns = document.querySelectorAll(".w-dropdown");

dropdowns.forEach(dropdown => {

    let dropdownList = dropdown.querySelector(".w-dropdown-list");

    dropdown.addEventListener("mouseenter", () => {
        dropdownList.classList.add("w--open");
    });

    dropdown.addEventListener("mouseleave", () => {
        dropdownList.classList.remove("w--open");
    });

});