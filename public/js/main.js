
    // Listener for submit button click
    $('#submit').on('click', function(event) {

        // prevents the default submit button action
        event.preventDefault();

        // Set local variables
        let matchStatus = $('.modal-title');
        let modalBody = $('.modal-body');

        // Capture responses in local variables
        let name = $('#name').val().trim();
        let photo = $('#photo').val();
        let item1 = parseInt($('#item1').val());
        let item2 = parseInt($('#item2').val());
        let item3 = parseInt($('#item3').val());
        let item4 = parseInt($('#item4').val());
        let item5 = parseInt($('#item5').val());
        let item6 = parseInt($('#item6').val());
        let item7 = parseInt($('#item7').val());
        let item8 = parseInt($('#item8').val());
        let item9 = parseInt($('#item9').val());
        let item10 = parseInt($('#item10').val());

         // Create user oject to append to data file
         let userData = {
            name: name,
            photo: photo,
            scores: [
                item1,
                item2,
                item3,
                item4,
                item5,
                item6,
                item7,
                item8,
                item9,
                item10
            ]
        };

        console.log(userData);
        
        // Simple user input validation. Making sure that the required entries are not empty
        if (
            (name !== '') && (photo !== '') && (!isNaN(item1)) &&
            (!isNaN(item2)) && (!isNaN(item3)) && (!isNaN(item4)) &&
            (!isNaN(item5)) && (!isNaN(item6)) && (!isNaN(item7)) &&
            (!isNaN(item8)) && (!isNaN(item9)) && (!isNaN(item10))
        ) {
            // Grab the root url to add path for routing
            let currentURL = window.location.origin;``
            console.log(currentURL);
            console.table(userData);
            // post the data to the friends API. 
            $.post(currentURL + "/api/friends", userData, function(data) {
                console.log(currentURL+'/api/friends');
                    // If the data has a match, then show this
                if (data.name !== undefined) {
                    matchStatus.html('Your match...');
                    modalBody.html('<p>...is ' + data.name + '!</p><img src="' + data.photo + '" height="200">');
                } else {
                	// If no match, show this
                    matchStatus.html('Not enough data!');
                    modalBody.html('<p>Unfortunately there is not yet enough user data to match you</p>');
                }
                // Toggle modal on
                $('.modal').modal('toggle');
            });
        } else {
        		// If the form was not valid, this error is shown
            matchStatus.html('Error...');
            modalBody.html('Please answer all questions on the form.');
            // Toggle modal on
            $('.modal').modal('toggle');
        }
    });

    // $('#friend-form').reset();