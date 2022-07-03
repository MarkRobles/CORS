// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function reqListener () {
    console.log(this.responseText);
  }
  

  //Using XMLHttpRequest to make api calls
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "https://app-aliveblog-qa-scus-001.azurewebsites.net/api/v1/publicaciones");
  oReq.send();
  


var invocation = new XMLHttpRequest();
//invocation.addEventListener("load", reqListener);
var url = "https://app-aliveblog-qa-scus-001.azurewebsites.net/api/v1/publicaciones";
var body = `{
  "titulo": "Obras de Patiselli",
  "descripcion": "Judith killing someone",
  "comentarios": [
    {
      "descripcion": "I just forgot who she killed"
    }
  ]
}`;




//Solicitudes Verificadas
//https://developer.mozilla.org/es/docs/Web/HTTP/CORS#solicitudes_verificadas


  if(invocation)
  {
  
      invocation.open('POST', url, true);
      invocation.setRequestHeader('X-PINGOTHER', 'pingpong');
      invocation.setRequestHeader('Content-Type', 'application/json');
      invocation.onreadystatechange = reqListener;
      invocation.send(body);
    }

