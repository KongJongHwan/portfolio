/* stickyjs
--------------------------------------------------------------------------------------------------------------------------------*/
$(window).load(function(){
	$("#header").sticky({topSpacing:0});
});

/* Home BG
--------------------------------------------------------------------------------------------------------------------------------*/
$(".screen-height").height($(window).height());
$(window).resize(function(){
	$(".screen-height").height($(window).height());
});
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
	$('#home').css({'background-attachment': 'scroll'});
} else {
	$('#home').parallax('50%', 0.1);
}


