var canvas = wx.createCanvas();
console.log(canvas.width, canvas.height)
var context = canvas.getContext('2d')
context.fillStyle = 'red'
context.fillRect(10, 10, 200, 200)