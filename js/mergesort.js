const canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');


const data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
const barGraph = new Bar(0, 0, canvas.width, canvas.height, data, color, ctx);



