const getbutton = document.getElementById("btn");
const getBody = document.getElementById("cdbody");
const getThankbody = document.getElementById("thankbody");

getbutton.addEventListener("click", myFunction);
                  
function myFunction() {
  getBody.style.display = "none"; 
  getThankbody.style.display = "block"; 
}

const value = document.getElementById("value");

const rt1 = document.getElementById("rt1");
const rt2 = document.getElementById("rt2");
const rt3 = document.getElementById("rt3");
const rt4 = document.getElementById("rt4");
const rt5 = document.getElementById("rt5");

rt1.addEventListener("click", myFunction1);
                  
function myFunction1() {
  value.innerHTML = rt1.value;
}

rt2.addEventListener("click", myFunction2);
                  
function myFunction2() {
  value.innerHTML = rt2.value;
}

rt3.addEventListener("click", myFunction3);
                  
function myFunction3() {
  value.innerHTML = rt3.value;
}

rt4.addEventListener("click", myFunction4);
                  
function myFunction4() {
  value.innerHTML = rt4.value;
}

rt5.addEventListener("click", myFunction5);
                  
function myFunction5() {
  value.innerHTML = rt5.value;
}
