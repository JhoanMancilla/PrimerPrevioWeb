

function envia(){
    document.form.action = 'main.html';
        document.form.submit();
}
 
function valida(){
    var usuario = document.getElementById('usuario');
    var pass = document.getElementById("password");
    if((usuario.value == "")||(pass.value == "")){
    	console.log("vacio");
        window.alert("Los campos usuario y contraseña no pueden estar vacios");
    }else if((usuario.value=="admin") && (pass.value=="1234")){
        localStorage.setItem("Usuario", usuario.value);
        envia();
    }else{
    	window.alert("Datos incorrectos");
    }

    
}



