$('.landing-countdown').countdown('2019/01/26 09:00:00')
.on('update.countdown', function(event) {
	//$(this).find('.counter.weeks .value').text(('0' + event.offset.weeks).slice(-2));
    $(this).find('.countdown-elem.days .value').text(('0' + event.offset.totalDays).slice(-2));
	$(this).find('.countdown-elem.hours .value').text(('0' + event.offset.hours).slice(-2));
	$(this).find('.countdown-elem.minutes .value').text(('0' + event.offset.minutes).slice(-2));
	$(this).find('.countdown-elem.seconds .value').text(('0' + event.offset.seconds).slice(-2));
});
