(function($) {
	$.uniprogy.uFacebook = function(appId,loginUrl,mobile)
	{
		$('<div />').attr({id: "fb-root"}).appendTo('body');
		var e = document.createElement('script');
		e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
		e.async = true;
		document.getElementById('fb-root').appendChild(e);	
		
		$('.facebookShare').click(function(){
			var link = $(this).attr('href').replace(/http:\/\/([w|\.]+)?facebook\.com\/share.php\?u=/,'');
			$.uniprogy.facebook.share(link);
			return false;
		});
		
		window.fbAsyncInit = function() {
			FB.init({
				appId   : appId,
				status  : true, // check login status
				cookie  : true, // enable cookies to allow the server to access the session
				xfbml   : true // parse XFBML
			});
			
			// whenever the user logs in, we refresh the page
			FB.Event.subscribe('auth.login', function() {
				$.uniprogy.uFacebookLoggedIn(loginUrl,mobile);
			});
		};
	};
	
	$.uniprogy.facebook = {
		share: function(url)
		{
			FB.ui({
		  	    method: 'stream.share',
		  	    u: url
		  	});
		}
	};
	
	$.uniprogy.uFacebookLoggedIn = function(loginUrl,mobile)
	{
		$.ajax({
			url: loginUrl,
			success: function(data)
			{
				if(data)
					if(mobile)
						$('.wlt-FacebookLoginButton').html(data);
					else
						$('#wlt-UserMenu').uWorklet().process({
							content: {
								replace: data
							}
						});
			}
		});
	}
})(jQuery);