// JavaScript Document
function hoverEffect(){

	"use strict";
	$('.card').mouseenter(function(){
		$(this).find('.card-border').animate({
			width: "100%"
		});
	}).mouseleave(function(){
		$(this).find('.card-border').animate({
			width: "60%"
		});
	});
}

//call main function when document is ready
$(document).ready(hoverEffect);