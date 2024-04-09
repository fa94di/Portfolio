// Toggle Navbar Button
function myFunction() {
    var element = document.getElementById("div");
    element.classList.toggle("mystyle");
  }
// Tabs
function openCity(evt, tab) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tab).style.display = "block";
  if(evt) evt.currentTarget.className += " active";
    else document.querySelector('button.tablinks').className += " active";
  }
document.body.addEventListener('DOMContentLoaded', openCity(event, 'ui-ux'));



// Videos Hover
var clip = document.querySelector(".vid-mawjuud");
clip.addEventListener("mouseover", function (e) { 
    clip.play(); 
});
var nam = document.querySelector(".vid-namoothaj");
nam.addEventListener("mouseover", function (e) { 
    nam.play(); 
});
var plan = document.querySelector(".vid-planet");
plan.addEventListener("mouseover", function (e) { 
    plan.play(); 
});

// Links toggle classe
var btns = document.getElementsByClassName("link");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    (document.querySelector('.active')) ? document.querySelector('.active').classList.remove('active') : '';
    this.classList.add('active');
});
}

// Send Button
btn_send = document.querySelector(".btn-send");
btn_send.onclick = function() {
    this.innerHTML = "<div class='loader'></div>";
    setTimeout(() => {
        this.innerHTML = "Thanks";
    }, 2000);
    setTimeout(function () {
        window.location.href = '#nav';
    }, 4000);
} 

// Empty & Error Input 
function updateButtonState() {
  var inputs = document.getElementsByClassName('myInput');
  var submitButton = document.querySelector('.myButton');
  var emailError = document.getElementById('emailError');
  
  var isEmailValid = Array.from(inputs).some(input => isEmail(input.value.trim()));

  var allInputsFilled = Array.from(inputs).every(input => input.value.trim() !== '');

  emailError.textContent = isEmailValid ? '' : 'Please write your email address';

  submitButton.disabled = !(isEmailValid && allInputsFilled);
}

function isEmail(email) {
  return email.includes('@');
}

