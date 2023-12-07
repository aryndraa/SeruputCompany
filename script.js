// sidebar
var red1 = document.getElementById("red1");
var red2 = document.getElementById("red2");
var blue1 = document.getElementById("blue1");
var blue2 = document.getElementById("blue2");
var textblue1 = document.getElementById("linkblue1");
var textblue2 = document.getElementById("linkblue2");
var textred1 = document.getElementById("linkred1");
var textred2 = document.getElementById("linkred2");

function redCircel1() {
  red1.classList.add("active");
  textred1.classList.add("active");
  if (
    red2.classList.contains("active") ||
    blue1.classList.contains("active") ||
    blue2.classList.contains("active")
  ) {
    red2.classList.remove("active");
    textblue1.classList.remove("active");
    blue1.classList.remove("active");
    textblue2.classList.remove("active");
    textred2.classList.remove("active");
    blue2.classList.remove("active");
  }
}

function blueCircel1() {
  textblue1.classList.add("active");
  blue1.classList.add("active");
  if (
    red1.classList.contains("active") ||
    red2.classList.contains("active") ||
    blue2.classList.contains("active")
  ) {
    red2.classList.remove("active");
    textred1.classList.remove("active");
    red1.classList.remove("active");
    textblue2.classList.remove("active");
    textred2.classList.remove("active");
    blue2.classList.remove("active");
  }
}

function redCircel2() {
  red2.classList.add("active");
  textred2.classList.add("active");
  if (
    red1.classList.contains("active") ||
    blue1.classList.contains("active") ||
    blue2.classList.contains("active")
  ) {
    red1.classList.remove("active");
    textblue1.classList.remove("active");
    textblue2.classList.remove("active");
    textred1.classList.remove("active");
    textred1.classList.remove("active");
    blue1.classList.remove("active");
    blue2.classList.remove("active");
  }
}

function blueCircel2() {
  blue2.classList.add("active");
  textblue2.classList.add("active");
  if (
    red1.classList.contains("active") ||
    red2.classList.contains("active") ||
    blue1.classList.contains("active")
  ) {
    red2.classList.remove("active");
    textblue1.classList.remove("active");
    textred1.classList.remove("active");
    textred2.classList.remove("active");
    red1.classList.remove("active");
    blue1.classList.remove("active");
  }
}

// side left
var itemSidebar = document.getElementById("item");
function leftSide() {
  if (itemSidebar.classList.contains("active")) {
    itemSidebar.classList.remove("active");
    itemSidebar.classList.add("disable");
  } else {
    itemSidebar.classList.add("active");
    itemSidebar.classList.remove("disable");
  }
}
