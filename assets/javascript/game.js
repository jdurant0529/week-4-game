
	$( document ).ready(function() {
		//we store all the letters and underscore inside of an array called letters
		var characters = [
		{name: "Obi Wan Kenobi", HP: 120, AP:8, CP: 25, image: "<img src='assets/images/obi.jpg'>"},
		{name: "Darth Vader", HP: 100, AP: 10, CP: 20, image: "<img src='assets/images/darth.jpg'>"},
		{name: "Luke Skywalker", HP: 80, AP: 12, CP: 15, image: "<img src='assets/images/luke.jpg'>"},
		];
		
		/*
		REMEMBER USE jQuery!

		step 1: loop over the letters 
			step 2: inside the loop
				* make a variable named b 
					* set it equal to a button with 
						- the following classes: letter-button letter letter-button-color
						- a data-let attribute set equal to letters[i]
						- text of letters[i]
				* step 3: append b to the div with an id of buttons
		*/
		for (var i = 0; i < characters.length; i++) {    
		    var b = $('<button>');
		    b.addClass('letter-button letter letter-button-color');
		    b.attr('data-let', characters[i].name);
		    b.text(characters[i].name);
		    b.html(characters[i].image);
		//    b.height(150);
		 //   b.width(150);
		 //   b.style.maxHeight = 100%
		 //   b.style.maxWidth = 100%
		  //  c.html(characters[i.image]);  b.background(url (source));

		    //alternatively you could do it in one line but it'll be harder to read
		    //var b = $('<button class="letter-button letter letter-button-color" data-let="'+ letters[i] +'">').text(letters[i]);   
		    
		    $("#buttons").append(b); 
		    //alert('watch this');
		}


	    $('.letter-button').on('click', function() {
	    	/*
	    		Step 4:

	    		* inside this anonymous function that gets passed to the click event
	    			* create a variable called fridgeMagnet 
	    				* set the variable equal to a new div 
	    					* with the following classes: letter fridge-color
	    					* chain this onto the div: 
	    						.text($(this).data('let'))
	    	*/

	    	//$('<p>') //that will do <p></p> for you
	    	//$('<a>') // that will do <a></a> for you

			var fridgeMagnet = $('<div class="letter fridge-color">').text($(this).data('let'));

			/* Step 5: append the fridgeMagnet variable to the element with an id of display */
			//$("#displayplayer").append(fridgeMagnet);
			alert('watch this')
		});

	    //Step 6: on the element with an id of clear, attach an on click function
	    	/*
	    		Step 7: inside ththeis anonymous function that gets passed to the click event
	    			* use the empty() function on the element with an id of display 
	    	*/
		$('#clear').on('click', function() {
			$("#displayplayer").empty(); 
		});

	});
