$(window).scroll(function(){
	handleTopNavAnimation();
});

$(window).load(function(){
	handleTopNavAnimation();
});

function handleTopNavAnimation() {
	var top=$(window).scrollTop();

	if(top>10){
		$('#site-nav').addClass('navbar-solid'); 
	}
	else{
		$('#site-nav').removeClass('navbar-solid'); 
	}
}

smoothScroll.init();

// Make a Bit #1 div's height is equal to 4 of the left-side-morning events

$(window).on('resize', function(){
	if($(window).width() > 768){
		var margins = 4;

		// Make a Bit (right side) check in defines the height of the General Check in (left side)
		var mabCheckIn = $('#entry101').height()
		// Setting height of left side Check in which is longer than the right side one
		$('#entry1').height(mabCheckIn * 1.25);
		// Setting heigh vertical blue line height
		$('#entry1 .schedule-entry-title').height(mabCheckIn)

		var firstEntry = $('#entry1').height();
		var secondEntry = $('#entry2').height();
		var thirdEntry = $('#entry3').height();
		var fourthEntry = $('#entry4').height();
		var fifthEntry = $('#entry5').height();
		var sixthEntry = $('#entry6').height();
		var seventhEntry = $('#entry7').height();

		// Make a Bit #1 div's height is equal to 4 of the left-side-morning events and 0.2 of the left side checkin
		$('#entry102').height(mabCheckIn * 0.25 + secondEntry + thirdEntry + fourthEntry + fifthEntry + sixthEntry);
		// Setting heigh vertical blue line height
		$('#entry102 .schedule-entry-title').height(firstEntry * 0.25 + secondEntry + thirdEntry + fourthEntry + fifthEntry + sixthEntry - margins*6)

		// Make a Bit #2 div's height is equal to 2 of the left-side-morning events
		//$('#entry103').height(seventhEntry);
		// Setting heigh vertical blue line height
		//$('#entry103 .schedule-entry-title').height(seventhEntry  - margins*2)

	}	
});
$(window).trigger('resize');

// Switching between a plus and a minus sign when the user wants to collapse a schedule entry
$( ".schedule li a" ).bind( "click", function() {
  var i = $(this).find("i");
  if(i.hasClass("ion-android-add-circle")){
  	i.removeClass();
  	i.addClass("ion-android-remove-circle");
  }
  else{
  	i.removeClass();
  	i.addClass("ion-android-add-circle");
  }

  // This should have been enough :(
  //i.toggleClass("ion-plus-circle");
  //i.toggleClass("ion-minus-circled");
});