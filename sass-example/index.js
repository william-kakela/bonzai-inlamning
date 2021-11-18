/*function myFunction() {
    var x = document.getElementsByClassName("navigation");
    if (x.className === "navigaton_wrapper") {
      x.className += " responsive";
    } else {
      x.className = "navigation_wrapper";
    }
  }*/

  function myFunction() {
    var x = document.getElement("nav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }