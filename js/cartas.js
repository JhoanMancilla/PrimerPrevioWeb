
html="";
$(function datos(){
	
    const xhttp= new XMLHttpRequest();
    xhttp.open("GET", "json/cartas.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
       
      let data =JSON.parse(this.responseText);
      
      //guardo el json en el local storage
      localStorage.setItem("cartas", JSON.stringify(data));
      var cartasArray = localStorage.getItem('cartas');
       dato=cartasArray;
       console.log(dato["Numero"]);
                $.each(dato["Cartas"], function(idx,dato) {
                	html+="<tr><td>"+dato["Numero"]+"</td><td>"+dato["Carta"]+"</td><td>"+dato["Cantidad"]+"</td></tr>";
                		$("#contenido").html(html);
                });
}
}
});


