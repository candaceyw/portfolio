function toggleClass(){
    let menu = document.querySelector(".main-nav");
    menu.classList.toggle("toggleCls");
}

let hamburger = document.querySelector(".hamIcon");

hamburger.addEventListener("click", toggleClass);

$(document).ready(function() {
	
	// Add class to mailto link
	// Needed to separate the disabling of the default action AND copy email to clipboard
	$('a[href^=mailto]').wrap('<span class="mailto-wrapper">');
	$('a[href^=mailto]').addClass('mailto-link');

	var mailto = $('.mailto-link');
	var mailtoWrapper = $('.mailto-wrapper');
	var messageCopy = 'Click to copy email address.';
	var messageSuccess = 'Email address copied to clipboard.';
	
	mailtoWrapper.append('<span class="mailto-message"></span>');
	$('.mailto-message').append(messageCopy);
	
	// Disable default action (opening your email client. yuk.)
	$('a[href^=mailto]').click(function() {
		return false;
	})
	
	// On click, get href and remove 'mailto:'
	// Store email address in a variable.
	mailto.click(function() {
		var href = $(this).attr('href');
		var email = href.replace('mailto:', '');
		copyToClipboard(email);
		$('.mailto-message').empty().append(messageSuccess);
		setTimeout(function() {
			$('.mailto-message').empty().append(messageCopy);}, 2000); 
	});
	
});

// Grabbed this from Stack Overflow.
// Copies the email variable to clipboard
function copyToClipboard(text) {
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
}