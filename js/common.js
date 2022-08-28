//surprise colour!
var colourArray = [
  "#52bc69",
  "#ed5a7d",
  "#2ebbd1",
  "#d9513c",
  "#fec515",
  "#4b65ba",
  "#ff8a27",
  "#a7d41e",
];
//green, pink, blue, red, yellow, indigo, orange, lime
function getColours() {
  var generatedColours = new Array();
  while (generatedColours.length < 4) {
    var n = Math.floor(Math.random() * colourArray.length);
    if (generatedColours.indexOf(n) == -1) {
      generatedColours.push(n);
    }
  }
  return generatedColours;
}

var generatedColours = getColours();
var surpriseColour = colourArray[generatedColours[0]];
var colourTheSecond = colourArray[generatedColours[1]];
var colourTheThird = colourArray[generatedColours[2]];
var colourTheFourth = colourArray[generatedColours[3]];

$(document).ready(function () {
  $(".colour").css("color", surpriseColour); //name
  $("h4").css("background-color", surpriseColour); //about, contact us etc. button background
});
