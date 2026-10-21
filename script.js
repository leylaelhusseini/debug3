const button = document.getElementById("toggle"); /* zabatna l id mn toggl la toggle */
const body = document.querySelector("body"); /* zabatna l selector mn bod la body */
button.addEventListener("click", toggleTheme);
function toggleTheme() { /* zdna l brackets () lal function */
body.classList.toggle("dark");
} /* zdna l closing } la tsakkar l function */