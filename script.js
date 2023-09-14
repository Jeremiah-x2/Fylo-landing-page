const input = document.getElementById("email");

document.getElementById("getStarted").addEventListener("submit", (e) => {
  e.preventDefault();
  if (!input.value.endsWith("@gmail.com")) {
    console.log("true");
    document.querySelector(".email-error").classList.add("block");
  } else {
    document.querySelector(".email-error").classList.remove("block");
  }
});
