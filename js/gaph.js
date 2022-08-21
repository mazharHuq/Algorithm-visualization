const canvas = document.getElementById("canvas");
const log = (f) => console.log(f);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var position = { x: 0, y: 0 };
var circleCount = 0;
var areaAllocated = [];

const setPosition = (e) => {
  position.x = e.clientX;
  position.y = e.clientY;
  console.log(position);
  //random color

  let color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)})`;

  let circleCanBeDrawn = true;
  areaAllocated.forEach((area) => {
    log(area);

    // drawRect(area.x-area.w,area.y-area.h,area.x+area.w,area.y+area.h,"yellow");
    if (
      area.x - area.w <= position.x &&
      area.x + area.w >= position.x &&
      area.y - area.h < position.y &&
      area.y + area.h > position.y
    )
      circleCanBeDrawn = false;
  });
  if (circleCanBeDrawn) {
    draw(position.x, position.y, 50, 0, color);
    circleCount++;
    writeText(position.x, position.y, circleCount, "black");
    let areaTake = {
      x: position.x,
      y: position.y,
      w: 100,
      h: 100,
    };
    areaAllocated.push(areaTake);
  } else {
    drawLine(
      position.x,
      position.y,
      position.x,
      position.y,
      "red",
      circleCount
    );
  }
};

function drawSomething(e) {
  if (e.buttons != 1) return;
  drawLine(position.x, position.y, e.clientX, e.clientY, "black", circleCount);
}

function mouseLeft() {
  log("mouse left");
}

function draw(x, y, w, h, color) {
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    ctx.beginPath();

    ctx.arc(x, y, w, 0, Math.PI * 2, false); // Outer circle
    ctx.fillStyle = color;
    ctx.fill();
  }
}
//function for drawing rectangles
function drawRect(x, y, w, h, color) {
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.fillStyle = color;

    ctx.fill();
  }
}

//function for drawing lines
function drawLine(x1, y1, x2, y2, color, number) {
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);

    ctx.strokeStyle = color;
    ctx.fillStyle = "black";
    ctx.fillText(number, x1, y1);
    ctx.stroke();
  }
}
function writeText(x, y, text, color) {
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
  }
}
let x = 0;
let y = 10,
  p = 200;
let nextXaxis = 0,
  nextYaxis = 0;
while (x--) {
  //loop for drawing 10 rectangles
  //drawing connected circles with drawLine()

  y + 100;
  let increasingY = 100;
  if (x < 4) {
    y -= 100;
    p = 400;
  } else {
    y += 100;
  }
  if (x < 5) increasingY = -100;
  let x_axis = p,
    y_axis = y;
  let radios = 30;
  let color =
    "rgb(" +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    ")";
  if (x > 0)
    drawLine(
      x_axis + radios / 2,
      y_axis + radios / 2,
      x_axis + 90,
      y_axis + increasingY,
      "black",
      x
    );
  draw(x_axis, y_axis, radios, 50, color);
  writeText(x_axis, y_axis, 9 - x, "black");
}
document.addEventListener("mouseup", mouseLeft);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mousemove", drawSomething);
