
	$( document ).ready(function() {
		var playerChosen = false;
		var opponentChosen = false;
		var playerCharacter = [];
		var opponentCharacter = [];
		var pcAP = 0;
		//we store all the available characters in an array titled characters.
		var characters = [
		{id: "Obi-Wan-Kenobi", name: "Obi Wan Kenobi", HP: 120, AP:8, CP: 12, image: "<img src='assets/images/obi.jpg'>"},
		{id: "Darth-Vader", name: "Darth Vader", HP: 100, AP: 10, CP: 10, image: "<img src='assets/images/darth.jpg'>"},
		{id: "Luke-Skywalker", name: "Luke Skywalker", HP: 80, AP: 12, CP: 8, image: "<img src='assets/images/luke.jpg'>"},
		{id: "Count-Dooku", name: "Count Dooku", HP: 150, AP: 6, CP: 14, image: "<img src='assets/images/dooku.jpg'>"}];
		
//i dont really understand this
		for (var i = 0; i < characters.length; i++) {    
		    var b = $('<button>');
		    b.addClass('character ' + characters[i].id);
		    b.attr('data-name', characters[i].name); 
		    b.attr('data-HP', characters[i].HP);
		    b.attr('data-AP', characters[i].AP);
		    b.attr('data-CP', characters[i].CP);
		    b.attr('data-num', i);
		    b.attr('id',characters[i].id);
		    b.html(characters[i].image);


		    $("#allchars").append(b); 
		    //alert('watch this');
		}
// end of stuff that I dont really understand.


		$('.attackButton').on("click", function(){

			if (pcAP == 0){
				console.log("current player ="+ playerCharacter.name +"player attack power = " + playerCharacter.AP);
				
				pcAP = playerCharacter.AP;
				console.log('player current attack power = ' + pcAP)
			} 
			opponentCharacter.HP = opponentCharacter.HP - pcAP;
			pcAP = pcAP + playerCharacter.AP;
			console.log("Player current attack power = " + pcAP);
			checkWin(opponentCharacter.HP, opponentCharacter.name);
			if(opponentCharacter != ''){
				playerCharacter.HP = playerCharacter.HP - opponentCharacter.CP;
				console.log(pcAP); 
				console.log(playerCharacter.HP);
				checkLoss(playerCharacter.HP);
			}
			
			 // $('player').html('Player choose = ' + oc.label + 'Player health = ' oc.HP + '<br>Player attack Power = ')

		 });  
		// end of attackButton click

//this I dont understand either
	    $('.character').on('click', function() {
	    	if(playerChosen == false) {
	    		playerChosen = true;
	    		console.log($(this).data('name'));
	    		$(this).appendTo($('#player'));
	    		playerCharacter = characters[$(this).data('num')];
	    		console.log(playerCharacter);

	    	} else if (opponentChosen == false) {
	    		opponentChosen = true;
	    		console.log($(this).data('name'));
	    		$(this).appendTo($('#opponent'));
	    		opponentCharacter = characters[$(this).data('num')];
	    		console.log(opponentCharacter);
	    	}

		});  
// end of other stuff i didnt understand

	    function checkWin(HP, name){
	    	console.log("Opponent health = " + HP);
	    	console.log("Opponent name =" + name);
	    	if(HP<=0){
	    		if (characters.length > 0) {
	    			alert("You defeated " + name);
	    			opponentChosen = false;
	    			$('#opponent').appendTo('#defeated');
	    			opponentCharacter = [];
	    			console.log(opponentCharacter);
	    		}else { 
	    			alert("You defeated " + name);
	    			alert('You are the master of the universe.');
	    		}
	    	}

	    }

	    function checkLoss(HP){
	    	console.log("Player health = " + HP);
	    	if(HP<=0){
	    		alert("You lost, restart the game.");
	    	}

	    }
		
	});
