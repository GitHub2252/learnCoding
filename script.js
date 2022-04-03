'use strict';

let input = document.querySelector('#pass-input');

let span = document.querySelector('.my-span');


span.addEventListener('click', function(){
	if(span.innerText == "text" && input.type == "password") {
		span.innerText = "Password";
		input.type = "text";
	} else if (span.innerText == "Password" && input.type == "text") {
		span.innerText = "text";
		input.type = "password";
	}
})