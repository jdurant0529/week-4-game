
	$( document ).ready(function() {
		var playerChosen = false;
		var opponentChosen = false;
		var playerCharacter = [];
		var opponentCharacter = [];
		var pcAP = 0;
		var counter = 0;
		// var playerStats = '';
		// var opponentStats = '';
		var gameOver = false;

		//we store all the available characters in an array titled characters.
		var characters = [
		{id: "Obi-Wan-Kenobi", name: "Obi Wan Kenobi", HP: 120, AP:6, CP: 25, image: "<img src='assets/images/obi.jpg'>"},
		{id: "Darth-Vader", name: "Darth Vader", HP: 100, AP: 4, CP: 5, image: "<img src='assets/images/darth.jpg'>"},
		{id: "Luke-Skywalker", name: "Luke Skywalker", HP: 80, AP: 8, CP: 20, image: "<img src='assets/images/luke.jpg'>"},
		{id: "Count-Dooku", name: "Count Dooku", HP: 150, AP: 2, CP: 15, image: "<img src='assets/images/dooku.jpg'>"}];
		
		$('.resetButton').hide();  // hide reset button until game is over.

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
		  
		}

		$('.attackButton').on("click", function(){
			if (playerCharacter.name !== null && opponentCharacter.name !== null){
				
				pcAP = pcAP + playerCharacter.AP;
			
				pcAP = playerCharacter.AP + pcAP; // add attack power before attack - since current attack power starts at 0.

				opponentCharacter.HP = opponentCharacter.HP - pcAP; //opponent loses HP on attack

				opponentChosen = checkWin(opponentCharacter.HP, opponentCharacter.name, opponentCharacter.id);
				playerCharacter.HP = playerCharacter.HP - opponentCharacter.CP;
				gameOver = checkLoss(playerCharacter.HP);
				if (opponentChosen === false) {
					$('#opponent-stats').empty();
					opponentCharacter = [];
					$('#player-stats').html(playerCharacter.name + 
									'<br> Player Health: ' + playerCharacter.HP +
									'<br> Player Attack Power: ' + pcAP);
					$('#opponent-stats').html(opponentCharacter.name + 
									'<br> Player Health: ' + opponentCharacter.HP + 
									'<br> Opponent Counter-Attack: ' + opponentCharacter.CP);
				}else if(gameOver === true) {
					console.log("Game is over");
					$('.resetButton').show();
					$('.attackButton').hide();
										$('#player-stats').html(playerCharacter.name + 
									'<br> Player Health: ' + playerCharacter.HP +
									'<br> Player Attack Power: ' + pcAP);
					$('#opponent-stats').html(opponentCharacter.name + 
									'<br> Player Health: ' + opponentCharacter.HP + 
									'<br> Opponent Counter-Attack: ' + opponentCharacter.CP);
				} 

				else {
				
				
				$('#player-stats').html(playerCharacter.name + 
									'<br> Player Health: ' + playerCharacter.HP +
									'<br> Player Attack Power: ' + pcAP);
				
				$('#opponent-stats').html(opponentCharacter.name + 
									'<br> Player Health: ' + opponentCharacter.HP + 
									'<br> Opponent Counter-Attack: ' + opponentCharacter.CP);
				}
			}
			
		 });  // end of attackButton click
		
	    $('.character').on('click', function() {
	    	console.log(counter + " " + playerChosen +" " + opponentChosen);
	    	if(counter === 0 && playerChosen === false){
	    		counter++;
				playerChosen = true;
	    		$(this).appendTo($('#player'));
	    		
	    		playerCharacter = characters[$(this).data('num')];
	    		// playerStats = ($(this).data('name') + 
	    		// 					'<br> Player Health: ' + $(this).data('hp')+
	    		// 					'<br> Player Attack Power: ' + $(this).data('ap'));
	    		$('#player-stats').html($(this).data('name') + 
	    							'<br> Player Health: ' + $(this).data('hp')+
	    							'<br> Player Attack Power: ' + $(this).data('ap'));
			}else if (counter > 0 && $(this).data('name') == playerCharacter.name){
	    		alert ('Player can not be opponent');
	    	}else if (counter > 0 && opponentChosen === false) {
	    		counter++;
	    		opponentChosen = true;
	    		$(this).appendTo($('#opponent'));
	    		opponentCharacter = characters[($(this).data('num'))];
	    		// opponentStats = ($(this).data('name') + 
							// 		'<br> Player Health: ' + $(this).data('hp')+
							// 		'<br> Player Counter-Attack: ' + $(this).data('cp'))
	    		$('#opponent-stats').html($(this).data('name') + 
									'<br> Player Health: ' + $(this).data('hp')+
									'<br> Player Counter-Attack: ' + $(this).data('cp'));
	    		
	    	}else if (playerCharacter.name === null || opponentCharacter === null){
	    		alert ('Both players have yet to be chosen');
	    	}

		});  //end of character button click

	    function checkWin(HP, name, id){

	    	// console.log('start of checkWin process');
	    	if(HP<=0){
	    		console.log(characters.length);
	    		console.log(counter);
	    		if (counter < characters.length) {
	    			alert("You defeated " + name);
	    			opponentChosen = false;
	    			$('#'+id).appendTo('#defeated');
	    			$('#opponent-stats').empty();
	    		}else if (counter >= characters.length) { // if all players chosen (counter) no more enemies to defeat.
	    			alert("You defeated " + name);
	    			$('#'+id).appendTo('#defeated');  //move enemy to defeated area.
	    			// opponentStats = '';
	    			opponentChosen = false;  // current opponent is blank.
	    			//playerStats = ''
	    			$('#opponent-stats').empty();  //empty the opponent stats div
	    			// opponentCharacter = [];
	    			alert('You are the master of the universe.');  // you win all the gold.
	    			$('.resetButton').show();  // allow user to reset game.
	    		}
	    	}
	    	return opponentChosen;  //if opponent is defeated -- opponent chosen should be false
	    }  // end of checkwin

	    function checkLoss(HP){
	    	console.log("Player health = " + HP);
	    	if(HP<=0){
	    		alert("You lost, restart the game.");
	    		gameOver = true;
	    		
	    	}
	    	return gameOver;
	    }  // end of checkLoss
		
	    $('.resetButton').on("click", function() {
			playerChosen = false;
			opponentChosen = false;
			playerCharacter = [];
			opponentCharacter = [];
			pcAP = 0;
			counter = 0;
			// newEnemy = false;
			// playerStats = '';
			// opponentStats = '';
			gameOver = false;

			$('#allchars').empty();
			$('#defeated').empty();
			$('#player').empty();
			$('#opponent').empty();
			$('#player-stats').empty();
			$('#opponent-stats').empty();

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

		  	$('.resetButton').hide();
		  	$('.attackButton').show();
		  	
		}
console.log('player chosen = ' + playerChosen + 'opponent chosen = ' + opponentChosen);

	    });




	});
