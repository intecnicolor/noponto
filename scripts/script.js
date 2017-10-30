
// TRANSICAO DAS SECTIONS
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

var bolinhas = document.querySelectorAll(".bolinha");
var containerImagens = document.querySelectorAll("#sliderContainer > img");
var sliderTextos = document.querySelectorAll(".sliderTextos");

for(var i = 0; i < bolinhas.length; i++) {
  bolinhas[i].addEventListener("click", function(event) {
    for(var j = 0; j < bolinhas.length; j++) {
      bolinhas[j].classList.remove("ativa");
    }
    event.srcElement.classList.add("ativa");
    for(var k = 0; k < containerImagens.length; k++) {
      containerImagens[k].classList.remove("visivel");
      sliderTextos[k].classList.remove("visivel");
      if(containerImagens[k].getAttribute("data-show") == event.srcElement.getAttribute("data-slide")) {
        containerImagens[k].classList.add("visivel");
      }
      if(sliderTextos[k].getAttribute("data-show") == event.srcElement.getAttribute("data-slide")) {
        sliderTextos[k].classList.add("visivel");
      }
    }
  })
}

// var telefone1 = document.querySelector(".telefone1");
var telefone2 = document.querySelector(".telefone2");

setInterval(function() {
  telefone2.classList.toggle("visivel");
}, 4000)


// FORMULARIO
var nomeParada;
var botaoBusca;

botaoBusca = document.querySelector(".botaoBusca");

  function Buscar() {
    nomeParada = document.getElementById("ponto").value;
    if (nomeParada == ("helvetia 660")){
      window.location.href = 'lista.html';
    }else{ 
      window.location.href = 'sorry.html';
    }
}

botaoBusca.onclick = Buscar;