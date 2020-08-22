(function app() {
    $('#create-offers').hide();
    $('#offers').show();
    $('#create-offer-Btn');

    $('#loginBtn').click((e) => {
        if ($('#loginBtn').text() === 'Login') {
            logIn(e);
        } else if ($('#loginBtn').text() === 'Logout') {
            logOut(e);
        }
    });

    $('#create-offer-Btn').click(createOffer);



    function logIn(e) {
        e.preventDefault();
        let username = $('#username').val();
        if (username.length < 4 || 10 < username.length) {
            $('#notification').text('The username length should be between 4 and 10 characters.');
        } else {
            $('#create-offers').show();
            $('#notification').text('');
            $('#username').val(`Hello, ${username}!`);
            $('#username').attr('disabled', true);
            $('#username').addClass('border-0 bg-light');

            $('#loginBtn').text('Logout');
        }
    }


    function logOut(e) {
        e.preventDefault();
        $('#create-offers').hide();
        $('#offers').show();

        $('#username').val('');
        $('#username').attr('disabled', false);
        $('#username').removeClass('border-0 bg-light');
        $('#loginBtn').text('Login');
    }


    function createOffer(e) {
        e.preventDefault();

        let offerName = $('#offerName').val();
        let company = $('#company').val();
        let description = $('#description').val();

        if (offerName !== '' && company !== '' && description !== '') {

            let $currOffer = $(`
                                <div class="col-3">
                                    <div class="card text-white bg-dark mb-3 pb-3" style="max-width: 18rem;">
                                        <div class="card-header">${offerName}</div>
                                        <div class="card-body">
                                            <h5 class="card-title">${company}</h5>
                                            <p class="card-text">${description}</p>
                                        </div>
                                    </div>
                                </div>`);

            $('#offers-container').append($currOffer);

            $('#offerName').val('');
            $('#company').val('');
            $('#description').val('');
        }
    }
})();



