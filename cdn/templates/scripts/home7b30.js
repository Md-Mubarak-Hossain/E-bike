
var useHeroVideo = false;
var useFooterVideo = true;

$(document).ready(function() {

	if(useHeroVideo && $(window).width() >= 960 && !("ontouchstart" in document.documentElement)) {
		// desktop: display video after short delay
		setTimeout(function() {
			var iframe = '<' + 'iframe ' + 
				'src="https://player.vimeo.com/video/480314701?h=ac0fa771a4&autoplay=1&title=0&byline=0&portrait=0&loop=1&controls=0" ' +
				'class="uk-cover" allow="autoplay; fullscreen; picture-in-picture" background="1" data-uk-cover' + 
				'></iframe>';
			var $player = $('<' + 'script' + ' />').attr('src', 'https' + '://player' + '.vimeo.com/api/player.js');
			$('#home-hero-video').html(iframe).append($player);
		}, 1500);
	} else {
		// mobile, touch device or narrow desktop
	}

	// validator doesn't like these attributes on this element (they were added by Uikit dropdown):
	$('.video-header').removeAttr('aria-expanded').removeAttr('aria-haspopup');
});

UIkit.scrollspy('#home-destinations', {});
UIkit.scrollspy('#home-featured-destinations', {});
UIkit.scrollspy('#home-featured-tours', {});

if(useFooterVideo) UIkit.util.on('#home-destinations', 'inview', function() {
	var video1 = '<' + 'iframe ' +  // hero video
		'src="https://player.vimeo.com/video/480314701?h=ac0fa771a4&autoplay=0&title=0&byline=0&portrait=0&loop=0&controls=1" ' +
		'class="uk-width-1-1 height-larger uk-margin-top" allow="autoplay; fullscreen; picture-in-picture" loading="lazy" ' + 
		'></iframe>';
	/*
	var video2 = '<' + 'iframe ' + // "this is how everyone wins" video
		'src="https://player.vimeo.com/video/497299958?h=63f89d168d&autoplay=0&loop=1&title=0&byline=0&portrait=0&controls=1" ' +
		'class="uk-width-1-1 height-larger uk-margin-top" allow="autoplay; fullscreen; picture-in-picture" loading="lazy" ' +
		'></iframe>';
	*/
	$('#home-destinations').append(video1);
});

UIkit.util.on('#home-featured-destinations', 'inview', function() {
	$('#home-featured-destinations').find('img.z').each(function() {
		var $img = $(this);
		$img.attr('src', $img.attr('data-src')).attr('srcset', $img.attr('data-srcset'));
	});
});

UIkit.util.on('#home-featured-tours', 'inview', function() {
	$('#home-featured-tours').find('img.z').each(function() {
		var $img = $(this);
		$img.attr('srcset', $img.attr('data-srcset'));
	});
}); 
