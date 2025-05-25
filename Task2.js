const inputBox = document.getElementById("inputbox");
const listContainer = document.getElementById("listcontainer");

function AddTask() {
  if (inputBox.value.trim() === "") {
    alert("Please enter a task");
  } else {
    const li = document.createElement("li");
    li.textContent = inputBox.value;
    const span = document.createElement("span");
    span.textContent = "×";
    li.appendChild(span);
    listContainer.appendChild(li);
    saveData();
    inputBox.value = "";
  }
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data") || "";
}

showTask();

$(document).ready(function () {
  $("#registration-form").submit(function (e) {
    e.preventDefault();
    let isValid = true;

    const fname = $("#fname").val().trim();
    const lname = $("#lname").val().trim();
    const dob = $("#dob").val().trim();
    const email = $("#email").val().trim();
    const city = $("#city").val();
    const pwd = $("#pwd").val();
    const repwd = $("#repwd").val();
    const gender = $("input[name='gender']:checked").val();

    $(".container p").text("");

    if (!fname) { $("#fname-text").text("first name is Required"); isValid = false; }
    if (!lname) { $("#lname-text").text("last name is Required"); isValid = false; }
    if (!dob) { $("#dob-text").text("date of birth is Required"); isValid = false; }
    if (!email) { $("#mail-text").text("mail is Required"); isValid = false; }
    if (city === "Select City") { $("#city-text").text("Select a city"); isValid = false; }
    if (!gender) { $("#gender-text").text("Select gender"); isValid = false; }
    if (!pwd) { $("#pwd-text").text("password Required"); isValid = false; }
    if (!repwd) { $("#repwd-text").text("repassword Required"); isValid = false; }
    if (pwd && repwd && pwd !== repwd) { $("#repwd-text").text("Passwords do not match"); isValid = false; }

    if (isValid) {
      $("#button-text").text("Form submitted successfully").css("color", "green");
    } else {
      $("#button-text").text("Please fill all fields correctly").css("color", "red");
    }
  });
});
