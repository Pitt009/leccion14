function convertirFarenheit(){
  var grados = parseInt(document.getElementById("farenheit").value);
  var resultado = document.getElementById("celsius");
  var celsius = (grados - 32 ) * (5/9);
   resultado.value = celsius;
}
 function convertirCelsius(){
   var gradosCelsius = parseInt(document.getElementById("celsius").value);
   var resultadoCelsius = document.getElementById("farenheit")
   var farenheit = (gradosCelsius * 1.8 (+ 32));
   resultadoCelsius.value = farenheit;
 }
