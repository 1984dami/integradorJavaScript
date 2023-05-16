// alert("Hola js");

function calcularPrecioFinal() {
    // lo coloco para ver si ingresó a la función
    console.log("ingreso a calcularPrecioFinal");

    // en cantEnt almaceno la cantidad de entradas que ingreso el usuario
    let cantEnt=document.getElementById("cantEntradas").value;  
    console.log("cantEnt:" + cantEnt);
    
    // en desc almaceno el tipo de usuario y el descuento que elijió el usuario
    let desc=document.getElementById("porcDescuento").value;
    console.log("desc:" + desc);

    // obtento el descuento que hay que realizar
    let descTotal= (cantEnt*200) * desc/100;
    //10 *1000 * 10/ 100=1000
    console.log("descTotal" + descTotal);

    // resto el descuento total del precio total
    let precioFin=(cantEnt*200) - descTotal;
    console.log("precioFin:" + precioFin);


    // coloco en el html el valor de las entradas - el descuento
    document.getElementById("apagar").innerHTML="Total a pagar: " ;
    document.getElementById("apagar").className="text-success fw-bold";
    document.getElementById("precioFinal").value="$"+`${precioFin}`;
    
}

//Limpiar formulario

function limpiarFormulario() {
    document.getElementById("compra").reset();
    document.getElementById("apagar").innerHTML="";
  }

//Scroll up

document.getElementById("botonUp").addEventListener("click", irArriba);

function irArriba(){
    var currentScroll = document.documentElement.scrollTop;
    if (currentScroll>0) {
        window.scrollTo (0, 0);

    }
}

buttonUp = document.getElementById("botonUp");

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;

    if (scroll>500){

        buttonUp.style.transform = "scale(1)";
    }else if (scroll<500){

        buttonUp.style.transform = "scale(0)";
    }
}