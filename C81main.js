canvas = document.getElementById("myCanvas");
color = "goldenrod";
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 3;
ctx.arc (200, 200, 50, 0, 2 * Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value

    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + " ,Y = " + mouse_y);
    circle(mouse_x , mouse_y);

}

function circle(mouse_x , mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.linewidth = 3;
    ctx.arc(mouse_x, mouse_y, 50, 0, 2 * Math.PI);
    ctx.stroke();
}

function clear_area()
{

    ctx.clearRect (0 , 0 , canvas.width , canvas.height )
}

