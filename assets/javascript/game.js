
	$( document ).ready(function() {
		var playerChosen = false;
		var opponentChosen = false;
		var playerCharacter = [];
		var opponentCharacter = [];
		var pcAP = 0;
		var counter = 0;
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
				// console.log('after attack, opponent health = ' + opponentCharacter.HP);
			
				

				// console.log('1st opponent chosen = ' + opponentChosen);
				opponentChosen = checkWin(opponentCharacter.HP, opponentCharacter.name, opponentCharacter.id);
				// console.log('2nd opponent chosen = ' + opponentChosen);
			
				playerCharacter.HP = playerCharacter.HP - opponentCharacter.CP;
				 // console.log('after counter-attack player health = ' + playerCharacter.HP); 
				
				// checkLoss(playerCharacter.HP);
				var playerStats = ('<h2>'+playerCharacter.name + 
									'<br> Player Health: ' + playerCharacter.HP +
									'<br> Player Attack Power: ' + pcAP + '</h2>');
				$('#player-stats').html(playerStats);
				var opponentStats = ('<h2>'+ opponentCharacter.name + 
									'<br> Player Health: ' + opponentCharacter.HP + 
									'<br> Opponent Counter-Attack: ' + opponentCharacter.CP + '</h2>');
				$('#opponent-stats').html(opponentStats);
			}
			// }
			
			// console.log('end of attack');
			 // $('player').html('Player choose = ' + oc.label + 'Player health = ' oc.HP + '<br>Player attack Power = ')

		 });  
		// end of attackButton click

//this I dont understand either
	    $('.character').on('click', function() {
	    	if(counter == 0 && playerCharacter == false){
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

	    function checkWin(HP, name, id){

	    	// console.log('start of checkWin process');
	    	if(HP<=0){
	    		console.log(characters.length);
	    		console.log(counter);
	    		if (counter < characters.length) {
	    			alert("You defeated " + name);
	    			
	    			// console.log('.character ' + id)
	    			$('#'+id).appendTo('#defeated');
	    			opponentStats = '';
	    			$('#opponent-stats').empty();
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

	    function checkLoss(HP){
	    	console.log("Player health = " + HP);
	    	if(HP<=0){
	    		alert("You lost, restart the game.");
	    	}

	    }
		
	});
