function convertirCelsius(farenheit)
{
 var numeroFarenheit = "";
 numeroFarenheit = parseInt(numeroFarenheit);
 var celsius = "";
 var resultado = 0;
 resultado = (numeroFarenheit - 32) * 5/9;
 return resultado;
}

function convertirFarenheit(farenheit)
{
 var numeroCelsius = "";
 numeroCelsius = parseInt(numeroCelsius);
 var farenheit = "";
 var resultado = 0;
 resultado = (numeroCelsius*9/5)+32;
 return resultado;
}
