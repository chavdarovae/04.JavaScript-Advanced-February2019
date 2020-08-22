function validate() {
	let userName = $('#username');
	let email = $('#email');
	let password = $('#password');
	let passwordConfirmation = $('#confirm-password');

	let userNameRegExp = /^[A-Za-z0-9]{3,20}$/;
	let emailRegExp = /^(.+)?@(.+)?\.(.+)?$/;
	let passwordRegExp = /^[\w]{5,15}$/;
	//let confirmPassRegExp = /^[\w]{5,15}$/;

	$('#company').change(updateForm);
	$('#submit').click(submitForm);

	function updateForm() {
		if ($('#company').is(':checked')) {
			$('#companyInfo').show();
		} else {
			$('#companyInfo').hide();
		}
	}

	function submitForm(event) {
		event.preventDefault();
		$('#registerForm input').css('border-color', 'darkblue');

		let userNameIsValid = userNameRegExp.test(userName.val());
		let emailIsValid = emailRegExp.test(email.val());
		let passwordIsValid =password.val() === passwordConfirmation.val() && passwordRegExp.test(password.val()) ;
		let passConfirmIsValid = password.val() === passwordConfirmation.val() && passwordRegExp.test(passwordConfirmation.val());
		let companyNumber;
		let companyNumIsValid=true;

		if ($('#companyInfo').css('display') === 'block') {
			companyNumber = $('#companyNumber').val();
			companyNumIsValid = 1000 <= companyNumber && companyNumber <= 9999;
		}

		if (userNameIsValid && emailIsValid && passwordIsValid && passConfirmIsValid && companyNumIsValid) {
			$('#valid').show();
		} else {
			if (!userNameIsValid) {
				userName.css('border-color', 'red')
			}
			if (!emailIsValid) {
				email.css('border-color', 'red')
			}
			if (!passwordIsValid) {
				password.css('border-color', 'red')
			}
			if (!passConfirmIsValid) {
				passwordConfirmation.css('border-color', 'red')
			}
			if ($('#companyInfo').css('display') === 'block') {
				if (!companyNumIsValid) {
					$('#companyNumber').css('border-color', 'red')
				}
			}
			$('#valid').hide();
		}
	}
}
