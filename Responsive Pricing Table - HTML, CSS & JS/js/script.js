//Built By ZenRe
//Built By ZenRe
const checkbox = document.getElementById("checkbox");
const enterprise = document.getElementById("Enterprise");
const premium = document.getElementById("Premium");
const startup = document.getElementById("StartUp");

checkbox.addEventListener("click", () => {
  startup.textContent = startup.textContent === "$29.99" ? "$19.99" : "$29.99";
  premium.textContent =
    premium.textContent === "$39.99" ? "$24.99 " : "$39.99";
  enterprise.textContent = enterprise.textContent === "$60.00" ? "$39.99" : "$60.00";
});
