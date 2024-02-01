const tabBtns = document.querySelectorAll(".departments-tab-btn");
const tabInfos = document.querySelectorAll(".departments-tab-info");

function removeClassNamesElement(elements, className) {
  elements.forEach((el) => {
    el.classList.remove(className);
  });
}

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    removeClassNamesElement(tabInfos, "active");
    removeClassNamesElement(tabBtns, "active");

    const dataValue = btn.getAttribute("data-tab");
    const selectTabInfo = document.getElementById(dataValue);

    btn.classList.add("active");
    selectTabInfo.classList.add("active");
  });
});
