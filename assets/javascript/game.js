
	$( document ).ready(function() {
		var playerChosen = false;
		var opponentChosen = false;
		var playerCharacter = [];
		var opponentCharacter = [];
		var pcAP = 0;
		var counter = 0;
		var newEnemy = false;
		var playerStats = '';
		var opponentStats = '';
		var gameOver = false;

		//we store all the available characters in an array titled characters.
		var characters = [
		{id: "Obi-Wan-Kenobi", name: "Obi Wan Kenobi", HP: 120, AP:8, CP: 25, image: "<img src='assets/images/obi.jpg'>"},
		{id: "Darth-Vader", name: "Darth Vader", HP: 100, AP: 6, CP: 5, image: "<img src='assets/images/darth.jpg'>"},
		{id: "Luke-Skywalker", name: "Luke Skywalker", HP: 80, AP: 10, CP: 20, image: "<img src='assets/images/luke.jpg'>"},
		{id: "Count-Dooku", name: "Count Dooku", HP: 150, AP: 4, CP: 15, image: "<img src='assets/images/dooku.jpg'>"}];
		
		$('.resetButton').hide();
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
			if (playerCharacter.name != null && opponentCharacter.name != null){
				// console.log(playerCharacter.name +' '+ opponentCharacter.name)
				// console.log('start of attack');
				pcAP = pcAP + playerCharacter.AP;
				// console.log("current player = "+ playerCharacter.name +" player attack power = " + playerCharacter.AP);
				// console.log('player health = ' + playerCharacter.HP + ' player current attack power = ' + pcAP);
				pcAP = playerCharacter.AP + pcAP; // add attack power before attack - since current attack power starts at 0.
		 		// console.log('opponent name = ' + opponentCharacter.name + ' opponent counter-attack = ' + opponentCharacter.CP);
		 		// console.log('opponent health = ' + opponentCharacter.HP);
				opponentCharacter.HP = opponentCharacter.HP - pcAP; //opponent loses HP on attack
				playerCharacter.HP = playerCharacter.HP - opponentCharacter.CP;
				opponentChosen = checkWin(opponentCharacter.HP, opponentCharacter.name, opponentCharacter.id);
				gameOver = checkLoss(playerCharacter.HP);
				// console.log('2nd opponent chosen = ' + opponentChosen);
				if (opponentChosen == false) {
					$('#opponent-stats').empty();
					opponentCharacter = [];
				}else if (gameOver == true){
					$('.resetButton').show();
					$('.attackButton').hide();
				}

				
				 // console.log('after counter-attack player health = ' + playerCharacter.HP); 
				
				// checkLoss(playerCharacter.HP);
				// playerStats = (playerCharacter.name + 
				// 					'<br> Player Health: ' + playerCharacter.HP +
				// 					'<br> Player Attack Power: ' + pcAP);
				else {$('#player-stats').html(playerCharacter.name + 
									'<br> Player Health: ' + playerCharacter.HP +
									'<br> Player Attack Power: ' + pcAP);
				// opponentStats = (opponentCharacter.name + 
				// 					'<br> Player Health: ' + opponentCharacter.HP + 
				// 					'<br> Opponent Counter-Attack: ' + opponentCharacter.CP);
				$('#opponent-stats').html(opponentCharacter.name + 
									'<br> Player Health: ' + opponentCharacter.HP + 
									'<br> Opponent Counter-Attack: ' + opponentCharacter.CP);
				}
			}
			// }
			
			// console.log('end of attack');
			 // $('player').html('Player choose = ' + oc.label + 'Player health = ' oc.HP + '<br>Player attack Power = ')

		 });  
		// end of attackButton click

//this I dont understand either
	    $('.character').on('click', function() {
	    	if(counter == 0 && playerChosen == false){
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
	    	}else if (counter > 0 && opponentChosen == false) {
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
	    		
	    	}else if (playerCharacter.name == null || opponentCharacter == null){
	    		alert ('Both players have yet to be chosen');
	    	}

		});  
// end of other stuff i didnt understand

	    function checkWin(HP, name, id){

	    	// console.log('start of checkWin process');
	    	if(HP<=0){
	    		console.log(characters.length);
	    		console.log(counter);
	    		if (counter < characters.length) {
	    			alert("You defeated " + name);
	    			opponentChosen = false;
	    			$('#player-stats').html(playerCharacter.name + 
									'<br> Player Health: ' + playerCharacter.HP +
									'<br> Player Attack Power: ' + pcAP);
	    			// console.log('.character ' + id)
	    			$('#'+id).appendTo('#defeated');
	    			// opponentStats = '';
	    			$('#opponent-stats').empty();
	    			console.log(opponentCharacter);
	    			// opponentCharacter = [];
	    			console.log(opponentCharacter);
	    			// console.log(opponentCharacter);
	    		}else if (counter >= characters.length) { 
	    			alert("You defeated " + name);
	    			$('#player-stats').html(playerCharacter.name + 
									'<br> Player Health: ' + playerCharacter.HP +
									'<br> Player Attack Power: ' + pcAP);
	    			$('#'+id).appendTo('#defeated');
	    			opponentStats = '';
	    			opponentChosen = false;
	    			//playerStats = ''
	    			$('#opponent-stats').empty();
	    			// opponentCharacter = [];
	    			alert('You are the master of the universe.');
	    			gameOver = true;
	    			$('.attackButton').hide();
	    			$('.resetButton').show();
	    		} 
	    	}
	    	// console.log('end of checkWin process');
	    	return opponentChosen;
	    }

	    function checkLoss(HP){
	    	console.log("Player health = " + HP);
	    	if(HP<=0){
	    		$('#player-stats').html(playerCharacter.name + 
									'<br> Player Health: ' + playerCharacter.HP +
									'<br> Player Attack Power: ' + pcAP);
	    		$('#opponent-stats').html($(this).data('name') + 
									'<br> Player Health: ' + $(this).data('hp')+
									'<br> Player Counter-Attack: ' + $(this).data('cp'));
	    		alert("You lost, restart the game.");

	    		gameOver = true;
	    	}
	    	return gameOver;
	    }
		$('.resetButton').on('click', function() {
			alert('This button does nothing yet');
		});  // end of resetButton onclick
	});
