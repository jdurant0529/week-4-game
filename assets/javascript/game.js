
	$( document ).ready(function() {
		//we store all the letters and underscore inside of an array called letters
		var characters = [
		{label: "Obi Wan Kenobi", HP: 120, AP:8, CP: 12, image: "<img src='assets/images/obi.jpg'>"},
		{label: "Darth Vader", HP: 100, AP: 10, CP: 10, image: "<img src='assets/images/darth.jpg'>"},
		{label: "Luke Skywalker", HP: 80, AP: 12, CP: 8, image: "<img src='assets/images/luke.jpg'>"},
		];
		var pcAP = 0;

		console.log(characters[0].label);
//i dont really understand this
		for (var i = 0; i < characters.length; i++) {    
		    var b = $('<button>');
		    b.addClass('character character-button');
		    b.attr('data-let', characters[i].label); 

		    b.text(characters[i]);
		    b.html(characters[i].image);
		    b.data(characters[i]);

		    $("#buttons").append(b); 
		    //alert('watch this');
		}
// end of stuff that I dont really understand.

		pc = choosePlayer();
		oc = chooseOpponent();


		function choosePlayer(){
			var k = prompt('Enter number between 0 and ' + (characters.length-1));
			var playerCharacter = characters[k];
			characters.splice(k,1);
			return playerCharacter;
		}
		function chooseOpponent(){
			var j = prompt('Enter number between 0 and ' + (characters.length-1));
			var opponentCharacter = characters[j];
			characters.splice(j,1);
			return opponentCharacter;
		}

		$('.attackButton').on("click", function(){
			// alert('Here we are');

			//new stuff
			
			// end of new stuff


			// var playerCharacter = characters[0];
			// var opponentCharacter = characters[1];
			console.log(pc);
			console.log(oc);	 

			console.log(pcAP);
			if (pcAP == 0){
				console.log("current player ="+ pcAP + "player attack power = " + pc.AP);
				pcAP = pc.AP;
			} 
			oc.HP = oc.HP - pcAP;
			pcAP = pcAP + pc.AP;
			console.log("Player current attack power = " + pcAP);
			checkWin(oc.HP, oc.label);
			pc.HP = pc.HP - oc.CP
			console.log(pcAP);
			console.log(pc.HP)
			checkLoss(pc.HP);
		 });  
		// end of attackButton click

//this I dont understand either
	    $('.character-button').on('click', function() {
	    	console.log($(this).label);
		});  
// end of other stuff i didnt understand

	    function checkWin(HP, name){
	    	console.log("Opponent health = " + HP);
	    	console.log("Opponent name =" + name);
	    	if(HP<=0){
	    		if (characters.length > 0) {
	    			alert("You defeated " + name);
	    			chooseOpponent();
	    		}else { 
	    			alert('You are the master of the universe.');
	    		}
	    	}

	    }

	    function checkLoss(HP){
	    	console.log("Player health = " + HP)
	    	if(HP<=0){
	    		alert("You lost, restart the game.");
	    	}

	    }
		
	});
