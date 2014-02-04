/*  ================================================================================
 DEFAULT PARAMETERS
 ================================================================================  */
var mobileWidth = 650,
	defaultAnimationSpeed = 300,
	$smallClass = 'small',
	$mediumClass = 'medium',
	$largeClass = 'large';


/*  ================================================================================
 CHECKS AND STUFF
 ================================================================================  */
function onResize() {
	var windowWidth = $(window).width();
	if (windowWidth <= mobileWidth) {
		//Small window
	}
	else {
		//Big window
	}
}
function onScroll() {
	var h = $(this).scrollTop();
	if (h >= 200) {
		//We've scrolled 200px down from the top
	}
	else {
		//we are above 200px
	}
}

// Are we dealing with a touch device?
if (Modernizr.touch) {
	//If so, put your touch script here
}
else {
	//If not, jam stuff in here
}


/*  ================================================================================
 DOCUMENT READY
 ================================================================================  */
$(document).ready(function() {

});

/*  ================================================================================
 WINDOW LOAD
 ================================================================================  */
$(window).load(function() {

});


/*  ================================================================================
    ON RESIZE
 ================================================================================  */
$(window).resize(onResize);


/*  ================================================================================
 ON SCROLL
 ================================================================================  */
$(window).scroll(onScroll);