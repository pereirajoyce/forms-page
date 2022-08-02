// JQuery codes 

 $(document).ready(function(){
  $('.card').fadeTo("fast", 0.3);
});

$('.card').click('.selecionado', function() {
  $('.selecionado').addClass('naoSelecionado').removeClass('selecionado').fadeTo("fast", 0.3);
  $(this).addClass('selecionado').removeClass('naoSelecionado').fadeTo("fast", 1);;
});

