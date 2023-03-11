
// --------------------
// $(document).ready(function(){
//   $("button").click(function(){
//     $(".menu2").animate({
//       height: 'toggle'
//     });
//   });
// });

function closeMenu(x) {
  x.classList.toggle("change");
}
// -----------
var menu = document.getElementById('menu');
var down = false;

function menuDown() {
  if (down) {
    menu.style.width = "00px"

    down = false;
  } else {


    menu.style.width = "200px"

    down = true;
  }
}



//------- pageHome

var mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




//contact
var divContact = document.getElementById("contact");
function contactFunction() {
  document.body.scrollTop = 900;
  document.documentElement.scrollTop = 1500;
}


// formation
var divContact = document.getElementById("contact");

function formationFunction() {
  document.body.scrollTop = 950;
  document.documentElement.scrollTop = 950;
}

function showFormation() {
  // document.getElementById("form-3").style.display = "block";
  document.getElementById("form-3").style.left = "260px";
  // document.getElementById("form-4").style.display = "block";
  document.getElementById("form-4").style.left = "860px";
  document.getElementById("form-1").style.left = "1700px";
  document.getElementById("form-2").style.left = "1700px";
}

function showFormation2() {
  // document.getElementById("form-3").style.display = "block";
  document.getElementById("form-3").style.left = "-460px";
  // document.getElementById("form-4").style.display = "block";
  document.getElementById("form-4").style.left = "-660px";
  document.getElementById("form-1").style.left = "260px";
  document.getElementById("form-2").style.left = "860px";
}
//-----------login


var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
  
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "laghnimi" && password == "laghnimi123") {
    window.open('pageProf.html') ;
  }
  else
  if (username == "hamza" && password == "hamza123") {
    window.open('page2.html') ;
  }
  else
  if (username != "hamza" && password != "hamza123" && username != "laghnimi" &&  password != "laghnimi123") {
    document.getElementById("label").style.display='block';
  }
  

  else {
    document.getElementById("label").style.display='block';
   
  }
}


function confirmation(){
  var logOut = document.getElementById("logOut");
  logOut.style.display='block';
  
}
function ok(){
  window.open("pageLogin.html")
}
function annuler(){
  document.getElementById("logOut").style.display='none';
}

function imprimer(){
  window.print();
}

// ----------- les notes

function inserer(){
  n1=document.getElementById("hamzaLgh").value;
  document.getElementById("hamza").value=n1;
}