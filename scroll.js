$(document).ready(function () {
	$('a[href^="#"]').click(function() {
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 500);
	});
});
// для работы необходимы: скачанный JQ, CDN, интернет;