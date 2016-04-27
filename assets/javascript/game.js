
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

		//we store all the available characters in an array titled characters.
		var characters = [

		//we store all the available characters in an array titled characters.
		
		{id: "Obi-Wan-Kenobi", name: "Obi Wan Kenobi", HP: 120, AP:8, CP: 12, image: "<img src='assets/images/obi.jpg'>"},
		{id: "Darth-Vader", name: "Darth Vader", HP: 100, AP: 10, CP: 10, image: "<img src='assets/images/darth.jpg'>"},
		{id: "Luke-Skywalker", name: "Luke Skywalker", HP: 80, AP: 12, CP: 8, image: "<img src='assets/images/luke.jpg'>"},
		{id: "Count-Dooku", name: "Count Dooku", HP: 150, AP: 6, CP: 14, image: "<img src='assets/images/dooku.jpg'>"}];
<<<<<<< HEAD
>>>>>>> parent of 132cf29... all in working order, kinda messy, but works
=======
>>>>>>> parent of 132cf29... all in working order, kinda messy, but works
		
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
			if (playerCharacter.name != null && opponentCharacter.name != null){
				
				pcAP = pcAP + playerCharacter.AP;
			
				pcAP = playerCharacter.AP + pcAP; // add attack power before attack - since current attack power starts at 0.

				opponentCharacter.HP = opponentCharacter.HP - pcAP; //opponent loses HP on attack

				opponentChosen = checkWin(opponentCharacter.HP, opponentCharacter.name, opponentCharacter.id);
<<<<<<< HEAD
<<<<<<< HEAD
				playerCharacter.HP = playerCharacter.HP - opponentCharacter.CP;
				gameOver = checkLoss(playerCharacter.HP);
				if (opponentChosen == false) {
					$('#opponent-stats').empty();
					opponentCharacter = [];
					$('#player-stats').html(playerCharacter.name + 
									'<br> Player Health: ' + playerCharacter.HP +
									'<br> Player Attack Power: ' + pcAP);
					$('#opponent-stats').html(opponentCharacter.name + 
									'<br> Player Health: ' + opponentCharacter.HP + 
									'<br> Opponent Counter-Attack: ' + opponentCharacter.CP);
				}else if(gameOver == true) {
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
=======
				// console.log('2nd opponent chosen = ' + opponentChosen);
			
				playerCharacter.HP = playerCharacter.HP - opponentCharacter.CP;
				 // console.log('after counter-attack player health = ' + playerCharacter.HP); 
				
				// checkLoss(playerCharacter.HP);
				var playerStats = ('<h2>'+playerCharacter.name + 
									'<br> Player Health: ' + playerCharacter.HP +
									'<br> Player Attack Power: ' + pcAP + '</h2>');
				$('#player-stats').html(playerStats);
				var opponentStats = ('<h2>'+ opponentCharacter.name + 
>>>>>>> parent of 132cf29... all in working order, kinda messy, but works
=======
				// console.log('2nd opponent chosen = ' + opponentChosen);
			
				playerCharacter.HP = playerCharacter.HP - opponentCharacter.CP;
				 // console.log('after counter-attack player health = ' + playerCharacter.HP); 
				
				// checkLoss(playerCharacter.HP);
				var playerStats = ('<h2>'+playerCharacter.name + 
									'<br> Player Health: ' + playerCharacter.HP +
									'<br> Player Attack Power: ' + pcAP + '</h2>');
				$('#player-stats').html(playerStats);
				var opponentStats = ('<h2>'+ opponentCharacter.name + 
>>>>>>> parent of 132cf29... all in working order, kinda messy, but works
									'<br> Player Health: ' + opponentCharacter.HP + 
									'<br> Opponent Counter-Attack: ' + opponentCharacter.CP + '</h2>');
				$('#opponent-stats').html(opponentStats);
			}
			
		 });  // end of attackButton click
		
	    $('.character').on('click', function() {
	    	console.log(counter + " " + playerChosen +" " + opponentChosen);
	    	if(counter == 0 && playerChosen == false){
	    		counter++;
				playerChosen = true;
	    		$(this).appendTo($('#player'));
	    		
	    		playerCharacter = characters[$(this).data('num')];
	    		var playerStats = ('<h2>'+$(this).data('name') + 
	    							'<br> Player Health: ' + $(this).data('hp')+
	    							'<br> Player Attack Power: ' + $(this).data('ap') +'</h2>');
			}else if (counter > 0 && $(this).data('name') == playerCharacter.name){
	    		alert ('Player can not be opponent');
	    	}else if (counter > 0 && opponentChosen == false && counter < characters.length) {
	    		counter++;
	    		opponentChosen = true;
	    		$(this).appendTo($('#opponent'));
	    		opponentCharacter = characters[($(this).data('num'))];
	    		var opponentStats = ('<h2>'+$(this).data('name') + 
									'<br> Player Health: ' + $(this).data('hp')+
<<<<<<< HEAD
<<<<<<< HEAD
									'<br> Player Counter-Attack: ' + $(this).data('cp'));
	    		
	    	}else if (playerCharacter.name === null || opponentCharacter === null){
	    		alert ('Both players have yet to be chosen');
	    	}

		});  //end of character button click
=======
=======
>>>>>>> parent of 132cf29... all in working order, kinda messy, but works
									'<br> Player Counter-Attack: ' + $(this).data('cp') +'</h2>')
	    	}else if (playerCharacter.name == null || opponentCharacter == null){
	    		alert ('Both players have yet to be chosen');
	    	}

	   




	    	// if(playerChosen == false) {
	    	// 	playerChosen = true;
	    	// 	console.log($(this).data('name'));
	    	// 	$(this).appendTo($('#player'));
	    	// 	playerCharacter = characters[$(this).data('num')];
	    	// 	console.log(playerCharacter);
	    		
	    	// 	$('#player-stats').html(playerStats);

	    	// } else if (opponentChosen == false) {
	    	// 	opponentChosen = true;
	    	// 	console.log($(this).data('name'));
	    	// 	$(this).appendTo($('#opponent'));
	    	// 	opponentCharacter = characters[$(this).data('num')];
	    	// 	var opponentStats = ('<h2>'+$(this).data('name') + 
	    	// 						'<br> Player Health: ' + $(this).data('hp')+
	    	// 						'<br> Player Counter-Attack: ' + $(this).data('cp') +'</h2>');
	    	// 	$('#opponent-stats').html(opponentStats);
	    	// 	console.log(opponentCharacter);
	    	// }

		});  
// end of other stuff i didnt understand
>>>>>>> parent of 132cf29... all in working order, kinda messy, but works

	    function checkWin(HP, name, id){

	    	// console.log('start of checkWin process');
	    	if(HP<=0){
	    		console.log(characters.length);
	    		console.log(counter);
	    		if (counter < characters.length) {
	    			alert("You defeated " + name);
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
	    			
	    			// console.log('.character ' + id)
	    			$('#'+id).appendTo('#defeated');
	    			opponentStats = '';
	    			$('#opponent-stats').empty();
=======
	    			
	    			// console.log('.character ' + id)
	    			$('#'+id).appendTo('#defeated');
	    			opponentStats = '';
	    			$('#opponent-stats').empty();
>>>>>>> parent of 132cf29... all in working order, kinda messy, but works
	    			opponentCharacter = [];

	    			// console.log(opponentCharacter);
	    		}else if (counter >= characters.length) { 
	    			alert("You defeated " + name);
	    			$('#'+id).appendTo('#defeated');
	    			opponentStats = '';
	    			alert('You are the master of the universe.');
	    		} else {
	    			console.log('I dont know if this ever appears.');
	    		} 
	    	} else {
	    		console.log('Keep fighting same character');
	    	}
	    	// console.log('end of checkWin process');
	    	
	    }
>>>>>>> parent of 132cf29... all in working order, kinda messy, but works

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
		return gameOver;

	    });




	});
