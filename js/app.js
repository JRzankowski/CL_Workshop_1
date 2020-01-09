const dropdown = document.querySelector(".left-panel__dropdown");
const dropdownOptionsContainer = document.querySelector(".dropdown__options");
const dropdownIcon = document.querySelector(".left-panel__dropdown .dropdown__options--icon");
const dropdownOptions = [...document.querySelectorAll('.dropdown__options .dropdown__options--option')];

const rightPanelDropdown = document.querySelector(".right-panel__item--package");


dropdown.addEventListener("click", function () {
    dropdownOptionsContainer.classList.toggle("active");
    dropdownIcon.classList.toggle("active");
});
for (let el of dropdownOptions) {
    el.addEventListener("click", function () {
        dropdown.firstChild.style.color = "black";
        dropdown.firstChild.textContent = el.textContent;
        dropdownOptionsContainer.classList.toggle("active");
        dropdownIcon.classList.toggle("active");
        rightPanelDropdown.firstElementChild.textContent = dropdown.firstElementChild.textContent;
        if (dropdown.firstElementChild.textContent === "Basic") {
            rightPanelDropdown.lastElementChild.textContent = "$5"
        }
        if (dropdown.firstElementChild.textContent === "Professional") {
            rightPanelDropdown.lastElementChild.textContent = "$10"
        }
        if (dropdown.firstElementChild.textContent === "Premium") {
            rightPanelDropdown.lastElementChild.textContent = "$15"
        }


        rightPanelDropdown.style.opacity = "1"


    })
}
// calculate
const inputProducts = document.querySelector(".calculator__input--products");
const inputOrders = document.querySelector(".calculator__input--orders");

const checkboxCalc1 = document.querySelector(".checkbox-calc1");


const rightPanelItems = [...document.querySelectorAll('.right-panel__item')];

const addRightPanelItem = function (leftPanelItem, rightPanelItemClass, price) {
    // for inputs
    if (leftPanelItem.type === "number") {
        leftPanelItem.addEventListener("input", function () {
            if (leftPanelItem.value) {

                for (const el of rightPanelItems) {
                    if (el.classList.contains(rightPanelItemClass)) {
                        el.style.opacity = "1";
                        el.firstElementChild.nextElementSibling.textContent = `${leftPanelItem.value} * ${price}`;
                        el.lastElementChild.textContent = `$${leftPanelItem.value * price}`;
                        console.log("sper");
                    }
                }
            } else {
                for (const el of rightPanelItems) {
                    if (el.classList.contains(rightPanelItemClass)) {
                        el.style.opacity = "0";
                    }
                }

            }

        });
    }else{
        console.log("asdf");
        leftPanelItem.addEventListener("change", function () {
            console.log("asdf");
            if(leftPanelItem.checked){
                rightPanelItemClass.lastElementChild.textContent = "23" ;
                leftPanelItem.style.opacity = "1"

            }else{
                leftPanelItem.style.opacity = "0"
            }
        })


    }

};



addRightPanelItem(inputProducts, "right-panel__item--products", "0.5");
addRightPanelItem(inputOrders, "right-panel__item--orders", "0.25");
addRightPanelItem(checkboxCalc1, "right-panel__item--accounting","35");


