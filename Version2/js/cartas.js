console.log("si linkeo");
$(function datos(){
	
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "json/cartas.json?1", true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {

      let data = JSON.parse(this.responseText);
      console.log(data);
      //guardo el json en el local storage
      localStorage.setItem("cartas", JSON.stringify(data));
      var cartasArray = localStorage.getItem('cartas');


      let contenido = document.querySelector('#contenido');
      for(let item of data){
        console.log(item.Numero);
         contenido.innerHTML +=`
          <tr>
            <td>${item.Numero}</td>
            <td>${item.Carta}</td>
            <td>${item.Cantidad}</td>
          </tr>

    `
    }
               
}
}
});


