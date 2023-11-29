

function on(){
    document.getElementById("lampada").src = "ligada.png"
}
function off(){
    document.getElementById("lampada").src = "desligada.png"
}
function piscar(){
    let intervalo = 0
    let contador = 0

    for(contador; contador < 10; contador++){
        intervalo +=300;
        setTimeout("document.getElementById('lampada').src = 'ligada.png' ", intervalo);
        intervalo +=300;
        setTimeout("document.getElementById('lampada').src = 'desligada.png' ", intervalo);
    }
}
function quebrar(){
    document.getElementById("lampada").src = "quebrada.png"
}

let lampada = document.getElementById("lampada")

lampada.addEventListener("dblclick", quebrar)
lampada.addEventListener("mouseover", on)
lampada.addEventListener("mouseleave", off)