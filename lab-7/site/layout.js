const breakpoint = window.matchMedia("(max-width: 767px)");
const switches = document.querySelector(".view-switch");
const viewOptions = switches.querySelectorAll("input");
const planButtons = document.querySelectorAll(".choose");
const selection = document.querySelector(".selection");

function setView(view) {
  document.documentElement.dataset.view = view;
  for (const option of viewOptions) {
    option.checked = option.value === view;
  }
}

function syncWithWindow() {
  setView(breakpoint.matches ? "mobile" : "desktop");
}

switches.addEventListener("change", (event) => setView(event.target.value));
breakpoint.addEventListener("change", syncWithWindow);
syncWithWindow();
switches.hidden = false;

for (const button of planButtons) {
  button.addEventListener("click", () => {
    for (const option of planButtons) {
      option.setAttribute("aria-pressed", String(option === button));
      option.textContent = option === button ? "План выбран" : "Выбрать план";
    }
    selection.textContent = `Выбран тариф «${button.dataset.plan}».`;
  });
}
