 var api ='AIzaSyD9zGB81ScMisRYuC9JEhW_HPO69IqnMxc';
 var map;
 function initMap() {
   var myLatlng = {lat: -34.605095553689345, lng: -58.3923876285553};

   var map = new google.maps.Map(document.getElementById('mapa'), {
     zoom: 13,
     center: myLatlng
   });

   var contenido = '<h2>GDLWEBCAMP</h2>'+
                    '<p>Del 10 al 12 de Diciembre</p>'+
                    '<p>Visitanos!!!</p>';
    var informacion = new google.maps.InfoWindow({
      content: contenido
    });

   var marker = new google.maps.Marker({
     position: myLatlng,
     map: map,
     title: 'GDLWEBCAMP'
   });

   map.addListener('center_changed', function() {
     // 3 seconds after the center of the map has changed, pan back to the
     // marker.
     window.setTimeout(function() {
       map.panTo(marker.getPosition());
     }, 3000);
   });

   marker.addListener('click', function() {
     informacion.open(map,marker);
   });
 }


(function() {
  "use strict";
  var regalo = document.querySelector('#regalo');
  document.addEventListener('DOMContentLoaded',function(){

//CAMPOS DATOS Usuarios
  var nombre = document.querySelector('#nombre');
  var apellido = document.querySelector('#apellido');
  var email = document.querySelector('#email');

  /*CAMPOS PASESS**/

  var pase_dia = document.querySelector('#pase_dia');
  var pase_dosdias = document.querySelector('#pase_dosdias');
  var pase_completo = document.querySelector('#pase_completo');
  //BOTONES Y div

  var calcular = document.querySelector('#calcular');
  var errorDiv = document.querySelector('#error');
  var botonRegistro = document.querySelector('#btnRegistro');
  var listaProductos = document.querySelector('#lista-productos');
  var sumaTotal = document.querySelector('#suma-total');
  var viernes = document.querySelector('#viernes');
  var sabado = document.querySelector('#sabado');
  var domingo = document.querySelector('#domingo');

  //EXTRASSS

  var etiqueta = document.querySelector('#etiquetas');
  var camisa = document.querySelector('#camisa_evento');
  if (document.getElementById('calcular')) {


  calcular.addEventListener('click', calcularMontos);
  pase_dia.addEventListener('blur',mostrarDia);
  pase_dosdias.addEventListener('blur',mostrarDia);
  pase_completo.addEventListener('blur',mostrarDia);

  nombre.addEventListener('blur',validarCampos);
  apellido.addEventListener('blur',validarCampos);
  email.addEventListener('blur',validarEmail);

  function validarCampos() {
    if (this.value == '') {
    errorDiv.style.display ='block';
    errorDiv.innerHTML=" * este campo es obligatorio";
    this.style.border = '1px solid red';
    errorDiv.style.border= '1px solid red';
  }else{
    errorDiv.style.display ='none';
    this.style.border = '1px solid #cccccc';
  }
  }
  function validarEmail() {
    if(this.value.indexOf('@') > -1){
      errorDiv.style.display ='none';
      this.style.border = '1px solid #cccccc';
    }else {
      errorDiv.style.display ='block';
      errorDiv.innerHTML=" *debe ser una direccion valida";
      this.style.border = '1px solid red';
      errorDiv.style.border= '1px solid red';
    }
  }

  function calcularMontos(event) {
    event.preventDefault();
    if (regalo.value === ''){
      alert('Debes elegir un regalo');
      regalo.focus();

    }else{
      console.log('elegiste regalo');
    }
    var boletodia = parseInt( pase_dia.value, 10)|| 0,
        boletodosdias = parseInt(pase_dosdias.value, 10)|| 0,
        boletocompleto = parseInt(pase_completo.value, 10)|| 0,
        cantCamisa = parseInt(camisa.value, 10)|| 0,
        cantEtiqueta = parseInt(etiqueta.value, 10)|| 0;

    var totalPagar = (boletodia * 30)+(boletodosdias * 45)+(boletocompleto * 50)+((cantCamisa*10)*0.93)+(cantEtiqueta*2);
    console.log(totalPagar);

    var listadoProductos = [];

    if (boletodia >0) {
  listadoProductos.push(boletodia+ ' Boletos por dia');
}

  if (boletodosdias >0) {listadoProductos.push(boletodosdias+ ' Boletos por 2 dias');}
  if (boletocompleto >0){listadoProductos.push(boletocompleto+ ' Boletos Completos');}
  if (cantCamisa >0){listadoProductos.push(cantCamisa+ ' Camisas');}
  if (cantEtiqueta >0){ listadoProductos.push(cantEtiqueta+ ' Etiquetas');}
    listaProductos.style.display="block";
    listaProductos.innerHTML = '';
    for (var i = 0; i < listadoProductos.length; i++) {
      listaProductos.innerHTML += listadoProductos[i] + '<br>';
    }

    sumaTotal.innerHTML = '';

    if (totalPagar>0) {
      sumaTotal.innerHTML = totalPagar.toFixed(2) + ' $';
    }
  }

  function mostrarDia() {
    var boletodia =pase_dia.value,
        boletodosdias = pase_dosdias.value,
        boletocompleto = pase_completo.value;

        var diasElegidos = [];

        if (boletodia > 0) {
          diasElegidos.push('viernes');}else {
            viernes.style.display='none';
          }

        if (boletodosdias > 0) {
            diasElegidos.push('viernes','sabado');}else{
              viernes.style.display='none';
              sabado.style.display='none';
            }

        if (boletocompleto > 0) {
              diasElegidos.push('viernes','sabado','domingo');    }else{
                viernes.style.display='none';
                sabado.style.display='none';
                domingo.style.display='none';

              }
              console.log(diasElegidos);
              for (var i = 0; i < diasElegidos.length; i++) {
        document.getElementById(diasElegidos[i]).style.display='block';

              }
  }
}
  });//DOM CONTENT LOADED
})();



$(function () {

  //lettering
    $('.nombre-sitio').lettering();

    //menufijo
    var windowHeight = $(window).height();
    var barraAltura = $('.barra').innerHeight();
    $(window).scroll(function () {
      var scroll =$(window).scrollTop();
      if(scroll > windowHeight){
        $('.barra').addClass('fixed');
        $('body').css({'margin-top':barraAltura+'px'});

      }else{
        $('.barra').removeClass('fixed');
        $('body').css({'margin-top':'0px'});
      }
    })

  //Programa conferencias
  $('#talleres').show();
  $('.menu-programa a:first').addClass('activo');
  $('.menu-programa a').on('click',function () {
    $('.menu-programa a').removeClass('activo');
    $(this).addClass('activo');
    var enlace = $(this).attr('href');
    console.log(enlace);
    $('.programa-evento .info-curso').fadeOut();
    $(enlace).fadeIn();
    return false;
  });

  //Animacion de numeros
  $('.resumen-evento li:nth-child(1) p').animateNumber({number: 6}, 1500);
  $('.resumen-evento li:nth-child(2) p').animateNumber({number: 15}, 1500);
  $('.resumen-evento li:nth-child(3) p').animateNumber({number: 3}, 1500);
  $('.resumen-evento li:nth-child(4) p').animateNumber({number: 9}, 1500);

  $(".cuenta-regresiva").countdown("2018/12/20 09:00:00", function(event) {
    $('#dias').html(event.strftime('%D'));
    $('#horas').html(event.strftime('%H'));
    $('#minutos').html(event.strftime('%M'));
    $('#segundos').html(event.strftime('%S'));
  });
  //MENU Responsive
  $('.menu-movil').on('click',function () {
    $('.navegacion-principal').slideToggle();

  })

});
