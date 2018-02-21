/*!
 * uan Javascript Library v.1.0.0
 *
 * github.com/rluuan
 *
 * date: 2018-02-20
 */

 $(function() {


	// ------------------------------------------
	// This first function will see all the inputs of HTML, if on the input has attribute ob or kp 
	// This will get the content and will search if exists a input with id = content of ob or kp
	// if yes then gonna create a anonymous function blur or keypress

	$("input").each(function(i, obj) {
		let ob = $(obj).attr('ob');
		let kp = $(obj).attr('kp');

		$("#" + ob).blur(function() {
			$(obj).val(this.value);
		});
		$("#" + kp).keypress(function() {
			$(obj).val(this.value);
		});
	});

	// ------------------------------------------
	// function showImage
	// |
	// | This function will get a id with parameter (that will be a input[type=file]) and after of to choose the image 
	// | will to show the id (that will be a tag img) that was placed as parameter

	// ------------------------------------------
	$.fn.showImage = function(id) {
		$(this).change(function() {
			if (this.files && this.files[0]) {
				var reader = new FileReader();

				reader.onload = function(e) {
					$('#' +id).attr('src', e.target.result);
				}
				reader.readAsDataURL(this.files[0]);
			}
		});
		return $('#' + id);
	}
	// ------------------------------------------
	// function blockWords
	// |
	// | This function will to block all words that are on string that was placed as parameter
	// ------------------------------------------
	$.fn.blockWords = function(string) {
		var words;
		$(this).keypress(function(event) {
			
			words = String.fromCharCode(event.which);
			if (string.indexOf(words) >= 0) {
				return false;
			}	
		});
	}	
	/* -----------------------------------------
		function progressBar
		| This function will help you in effect loading
		| 
		| 1 parameter is the id of div that the progress it will be done
		| 2 parameter is where/ place of progress will start
		| 3 parameter is the time that the progress will load	
	*/ 
	$.fn.progressBar = function(id_div, start_width, time_load = '') {
		var div = $('#' + id_div);
		div.css('width', start_width + '%');
		var progress = 1;
		time_load = time_load ? time_load : 10;

		var interval_load = setInterval(loop, time_load);

		function loop() {
			if (progress >= 100) {
				clearInterval(interval_load);

			} else {
				progress++;
				div.css('width', progress + '%')
			}
		}
	}
	
	/* -----------------------------------------
		function returnSumClass
		| This function will sum all the values that the class and to put in this id
		| 
	
	*/ 
	$.fn.returnSumClass = function(classe, mode, format, output_format) {
		var sum = 0;
		$(classe).each(function(i, obj) {
			if (mode == 'text') {
				if (format) {
					sum += parseFloat($(obj).text().trim().replace('.', '').replace(',', '.'));
				} else {
					sum += parseFloat($(obj).text().trim());
					
				}
			} else {
				if (format) {
					sum += parseFloat($(obj).val().trim().replace('.', '').replace(',', '.'));

				} else {
					sum += parseFloat($(obj).val().trim());
					
				}
			}
		});
		var total = sum.toFixed(2);
		if (output_format == 'text') {
			$(this).text(total)

		} else {
			$(this).val(total)

		}
	}
});
 /*
	------------------------------------------
	|function returnDataCEP
	| This function gonna return 
	| 

 */
 function returnDataCEP(obj_ids) {

 	$.get('https://viacep.com.br/ws/' + obj_ids['cep'] + '/' + obj_ids['mode'], function(data) {
 		if (obj_ids['logradouro']) {
 			$(obj_ids['logradouro']).val(data['logradouro']);
 		}
 		if (obj_ids['complemento']) {
 			$(obj_ids['complemento']).val(data['complemento']);
 		}
 		if (obj_ids['bairro']) {
 			$(obj_ids['bairro']).val(data['bairro']);
 		}
 		if (obj_ids['localidade']) {
 			$(obj_ids['localidade']).val(data['localidade']);
 		}
 		if (obj_ids['uf']) {
 			$(obj_ids['uf']).val(data['uf']);
 		}
 		if (obj_ids['unidade']) {
 			$(obj_ids['unidade']).val(data['unidade']);
 		}
 		if (obj_ids['ibge']) {
 			$(obj_ids['ibge']).val(data['ibge']);
 		}
 		if (obj_ids['gia']) {
 			$(obj_ids['gia']).val(data['gia']);
 		}

 	});

 }
