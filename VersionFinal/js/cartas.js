$(".carta").click(function(){
  var data = localStorage.getItem('cartas');
  data = JSON.parse(data);
   var clk = $(this).attr("id");

  for(let item of data) {
    if(item.Numero == clk) {
      item.Cantidad ++;
    }
  }
  localStorage.setItem('cartas', JSON.stringify(data));
  pintarHtml();
});


function guardar(){
  var data = localStorage.getItem('cartas');
  data = JSON.parse(data);
  var carta = document.getElementById('carta');
  var descripcion = document.getElementById('descripcion');
  var actual = {Numero: carta.value, Carta: descripcion.value, Cantidad: 0}
  
 
    data.push(actual);
    localStorage.setItem("cartas", JSON.stringify(data));

     pintarHtml();
   }


$(function datos(){
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "json/cartas.json?1", true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {

      if (localStorage.getItem("cartas") === null) {
        let data = JSON.parse(this.responseText);
        localStorage.setItem("cartas", JSON.stringify(data)); 
      }else{
        var data = localStorage.getItem('cartas');
        data = JSON.parse(data);
      }
      pintarHtml();
               
}
}
});



function pintarHtml(){

   var data = localStorage.getItem('cartas');
   let contenido = document.querySelector('#contenido');
   contenido.innerHTML='';
    

    var data = JSON.parse(data);
    var orden = data.sort(function(a,b){
      if (a.Cantidad > b.Cantidad) {
        return -1;

      }
     });
 
      for(let item of data){
         contenido.innerHTML +=`
          <tr>
            <td>${item.Numero}</td>
            <td>${item.Carta}</td>
            <td>${item.Cantidad}</td>
          </tr>

    `
    }

  }



