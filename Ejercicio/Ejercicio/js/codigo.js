const sum = () => {
    let n1=parseFloat(document.getElementById("txt1").value);
    let n2=parseFloat(document.getElementById("txt2").value);
    let s= n1+n2
    console.log("La suma es", s)
    document.getElementById("resp").innerHTML= `El resultado de la suma es de: ${s}`;   
}

const restar = () => {
    let n1=parseFloat(document.getElementById("txt1").value);
    let n2=parseFloat(document.getElementById("txt2").value);
    let s= n1-n2
    console.log("La resta es", s)
    document.getElementById("resp").innerHTML= `El resultado de la suma es de: ${s}`;
}

const multi = () => {
    let n1=parseFloat(document.getElementById("txt1").value);
    let n2=parseFloat(document.getElementById("txt2").value);
    let s= n1*n2
    console.log("La multiplicacion es", s)
    document.getElementById("resp").innerHTML= `El resultado de la suma es de: ${s}`;
}

const divi = () => {
    let n1=parseFloat(document.getElementById("txt1").value);
    let n2=parseFloat(document.getElementById("txt2").value);
    let s= n1/n2
    console.log("La division es", s)
    document.getElementById("resp").innerHTML= `El resultado de la suma es de: ${s}`;
}

const cuadrado = () => {
    let n1=parseFloat(document.getElementById("txt1").value);
    let n2=parseFloat(document.getElementById("txt2").value);
    let s= Math.sqrt(n1+n2)
    console.log("El cuadrado es", s)
    document.getElementById("resp").innerHTML= `El resultado de la suma es de: ${s}`;
}

const miti = () => {
    let n1=parseFloat(document.getElementById("txt1").value);
    let n2=parseFloat(document.getElementById("txt2").value);
    let s= (n1+n2)/2
    console.log("La mitad es", s)
    document.getElementById("resp").innerHTML= `El resultado de la suma es de: ${s}`;
}

const clean = () => {
    let n1=parseFloat(document.getElementById("txt1").value);
    let n2=parseFloat(document.getElementById("txt2").value);
    let s= n1+n2
    console.log("La suma es", s)
    document.getElementById("resp").innerHTML= `Se han limpiado las cajas de texto`;
}
