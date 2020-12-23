$('.drop-1').click(function(event) { $('.primeira-semana').fadeIn('slow'); });
$('.drop-1').click(function(event) { $('.segunda-semana,.terceira-semana,.quarta-semana,.quinta-semana,.txt-1,.txt-2,.txt-4,.txt-3').fadeOut('slow'); });
$('.drop-2').click(function(event) { $('.segunda-semana,.txt-1').fadeIn('slow'); });
$('.drop-2').click(function(event) { $('.primeira-semana,.terceira-semana,.quarta-semana,.quinta-semana,.txt-2,.txt-3,.txt-4').fadeOut('slow'); });
$('.drop-3').click(function(event) { $('.terceira-semana,.txt-2').fadeIn('slow'); });
$('.drop-3').click(function(event) { $('.primeira-semana,.segunda-semana,.quarta-semana,.quinta-semana,.txt-1,.txt-3,.txt-4').fadeOut('slow'); });
$('.drop-4').click(function(event) { $('.quarta-semana,.txt-3').fadeIn('slow'); });
$('.drop-4').click(function(event) { $('.primeira-semana,.segunda-semana,.terceira-semana,.quinta-semana,.txt-1,.txt-2,.txt-4').fadeOut('slow'); });
$('.drop-5').click(function(event) { $('.quinta-semana,.txt-4').fadeIn('slow'); });
$('.drop-5').click(function(event) { $('.primeira-semana,.segunda-semana,.terceira-semana,.quarta-semana,.txt-1,.txt-2,.txt-3').fadeOut('slow'); });

function evitarSeleccion(target) {
    if (typeof target.onselectstart != "undefined") { target.onselectstart = function() { return false; } } else if (typeof target.style.MozUserSelect != "undefined") { target.style.MozUserSelect = "none" } else { target.onmousedown = function() { return false; } }
    target.style.cursor = "default"
}
evitarSeleccion(document.body);