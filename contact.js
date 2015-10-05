$(function() {
	// Get the form
	var form = $('#form-contact');

	// Get the messages div

	// contact form event listener
	$(form).submit(function(event) {
		event.preventDefault();

		// serialize form data
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		}).done(function (response) {
			// Update the user feedback message
			// TODO:

			// Clear the form
			$('#name').val('');
			$('#email').val('');
			$('#message').val('');
		}).fail(function (data) {
			// change the div to error state

			// Set the message text
		});
		
	});
});