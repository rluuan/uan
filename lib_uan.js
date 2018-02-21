/*!
 * uan Javascript Library v.1.0.0
 *
 * github.com/rluuan
 *
 * date: 2018-02-20
*/

$(function() {
	
	
	// ------------------------------------------
	// This first function will go see all the inputs of HTML, if on the input has attribute ob or kp 
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
	// | will go to show the id (that will be a tag img) that was placed as parameter

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

	
});
