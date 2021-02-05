$('.countdown').countdown('2018/01/20 09:00:00')
.on('update.countdown', function(event) {
	$(this).find('.counter.weeks .value').text(('0' + event.offset.weeks).slice(-2));
	$(this).find('.counter.days .value').text(('0' + event.offset.days).slice(-2));
	$(this).find('.counter.hours .value').text(('0' + event.offset.hours).slice(-2));
	$(this).find('.counter.minutes .value').text(('0' + event.offset.minutes).slice(-2));
	$(this).find('.counter.seconds .value').text(('0' + event.offset.seconds).slice(-2));
});
