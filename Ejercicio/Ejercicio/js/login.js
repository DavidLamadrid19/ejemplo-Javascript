const ingresar = () => {
    let n1=(document.getElementById("txt1").value).trim();
    let n2=(document.getElementById("txt2").value).trim();
if (n1 == "" || n2 == "" ){
    alert("Por favor rellene los datos")
}
else 
    if (n1=="Admin" || n1=="admin" && n2=="12345") {
        alert("Ingreso exitoso")
        window.location.href = "Redireccion.html";
    }
    else
    alert("Usuario o contraseña no validos")
}

const clean = () => {
    let n1=(document.getElementById("txt1").value);
    let n2=(document.getElementById("txt2").value);
    if (n1 !== "" || n2 !== "" ){
document.getElementById("txt1").value= "";
document.getElementById("txt2").value= "";

    }
}