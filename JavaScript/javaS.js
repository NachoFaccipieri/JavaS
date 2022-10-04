let precioLibro=parseFloat(prompt("Ingrese el precio del libro: "));

while (isNaN(precioLibro)){
    alert("Error. No se ingresó un número.");
    precioLibro=parseFloat(prompt("Ingrese el precio del libro: "));
}

console.log("Impuestos a calcular sobre el precio: " + precioLibro);

//Pregunto si el libro será importado o no. Dependiendo de ello, se aplicarán cierto impuestos
let importado = getImportado();


//la variables precioLibro pasa a tener el valor del libro con sus impuestos
precioLibro = productoImportado(importado, precioLibro);

//Se aplica el descuento en caso de haber
precioLibro = precioLibro * aplicarDescuento();



//Se informa el precio del libro sea importado o no, y su iva.
alert("Precio del libro: " + precioLibro.toFixed(2));




//Función en la que pregunto si un libro es importado o no. 
//En caso de ser importado debe ingresarse una S, en caso una contrario una N. Si no se ingresa una S o una N
//queda en un loop hasta que se ingrese una u otra.
function getImportado(){
    let importado= prompt("El producto es importado? S/N");
    let bool = false;

    // ------>>> No funciona este while. Sólo sale cuando importado toma el valor de "S". No pude hacer que funcione.

    // while (importado !== ('S' || 'N')){
    //     alert(importado);
    //     importado = prompt("El producto es importado? S/N");
    // }
    // return importado;


    while (!bool){
        if (importado === 'S'){
            bool = true;
            return importado;
        }else if(importado === 'N'){
            bool = true;
            return importado;
        }
        importado = prompt("El producto es importado?\nIngrese S si es importado\nN en caso contrario");
    }
}




//Función que calcula el precio del libro recibiendo dos parámetros: Si es importado y su precio sin impuestos. 
//Si es importado, se utiliza la función "Calcular precio importado". En caso contrario, sólo se calcula el iva.
function productoImportado (importado, precio){
    if (importado == "S"){
        let precioImportado = calcularPrecioImportado(precio);
        const precioTotal = precio => precio * (1.21);
        return precioTotal(precioImportado);
    }else{
        if(importado == "N"){
        alert("El producto no es importado. Sólo se calculará el IVA");
        precioTotal = calcularIVA(precio); //Hace lo mismo que la función flecha "const precioTotal = precio => precio * (1.21);". Implementé dos formas distintas de resolver
        return precioTotal;
        }
    }
}



//Función en la que se calcula el precio del libro en caso de ser importado
function calcularPrecioImportado(precio){

    if(precio > 15000){
        return precio * 1.5;
    }else{
        return precio *1.15;
    }
}

//Se calcula el precio del libro con el iva.
function calcularIVA(precio){
    return (precio * 1.21);
}


//Función que sirve para aplicar descuentos. En caso de que no haya, no se aplica ningún descuento
function aplicarDescuento(){
    let desc = prompt("Descuentos: \n1) Jubilados\n2) Estudiantes\n3) Efectivo\nE) Sin descuento");
    switch (desc){
        case '1':
            alert("Se aplicará descuento de jubilados");
            return 0.70;
        case '2':
            alert("Se aplicará descuento de estudiantes");
            return 0.85;
        case '3':
            alert("Se aplicará descuento en efectivo");
            return 0.80;
        default:
            alert("No se aplicará descuento");
            return 1;
    }
}