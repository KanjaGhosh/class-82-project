var mouseEvent="empty";

canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

color="aqua";

width_line=2;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    mouseEvent="mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove)

function my_mousemove(e){
    
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;

    console.log(current_x, current_y);

    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_line;
        
        console.log("last position of x and y coordinates");
        console.log("x="+ current_x + "y=" + current_y);

        ctx.arc(current_x, current_y, 10, 0, 2*Math.PI);
        ctx.stroke();
    }
}
