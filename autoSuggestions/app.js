// ternory operators (condition ?true :false)
// short circuits (true(first) || true) | (true(must) && true)
const suggestions = {
  a: "hmedabad",
  b: "ombay",
  c: "hennai",
  d: "elhi",
  e: "llahbad",
  f: "aislabad",
};
const input = document.getElementById("input");
const userValueSpan = document.getElementById("user-input");
const suggestionSpan = document.getElementById("suggestions");
// keypress

input.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key === "Tab") {
    const userValue = e.target.value;
    e.preventDefault();
    input.value = userValue + (suggestions[userValue.toLowerCase()] || "");
    input.style.zIndex = 1;
    input.style.color = "black";
  }
});
input.addEventListener("blur", () => {
  input.style.zIndex = 1;
  input.style.color = "black";
});
input.addEventListener("input", (event) => {
  const userValue = event.target.value;
  userValueSpan.innerText = userValue;
  suggestionSpan.innerText = suggestions[userValue.toLowerCase()] || "";
});
