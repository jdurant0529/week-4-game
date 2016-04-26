
	$( document ).ready(function() {
		//we store all the letters and underscore inside of an array called letters
		var characters = [
		{id: "Obi-Wan-Kenobi", Oname: "Obi Wan Kenobi", HP: 120, AP:8, CP: 12, image: "<img src='assets/images/obi.jpg'>"},
		{id: "Darth-Vader", name: "Darth Vader", HP: 100, AP: 10, CP: 10, image: "<img src='assets/images/darth.jpg'>"},
		{id: "Luke-Skywalker", name: "Luke Skywalker", HP: 80, AP: 12, CP: 8, image: "<img src='assets/images/luke.jpg'>"},
		{id: ""}];
		var pcAP = 0;

		// console.log(characters[0].name);
//i dont really understand this
		for (var i = 0; i < characters.length; i++) {    
		    var b = $('<button>');
		    b.addClass('character character-button ' + characters[i].name);
		    b.attr('data-name', characters[i].name); 
		    b.attr('data-HP', characters[i].HP);
		    b.attr('data-AP', characters[i].AP);
		    b.attr('data-CP', characters[i].CP);
		    b.attr('data-num', i);
		    // b.text(characters[i]);
		    b.html(characters[i].image);
		    // b.data(characters[i]);

		    $("#allchars").append(b); 
		    //alert('watch this');
		}
// end of stuff that I dont really understand.

		// var pc = choosePlayer();
		// var oc = chooseOpponent();


		function choosePlayer(k){
			console.log(k + 'I am in choose player function');
			var playerChosen = true
			var playerCharacter = characters[k];
			characters.splice(k,1);
			return playerCharacter;

		}
		function chooseOpponent(){
			// var j = prompt('Enter number between 0 and ' + (characters.length-1));
			var opponentCharacter = characters[$(this).data('num')];
			characters.splice($(this).data('num'),1);
			return opponentCharacter;
		}

		$('.attackButton').on("click", function(){
			 alert('Here we are');

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
			pc.HP = pc.HP - oc.CP;
			console.log(pcAP); 
			console.log(pc.HP);
			checkLoss(pc.HP);
			 // $('player').html('Player choose = ' + oc.label + 'Player health = ' oc.HP + '<br>Player attack Power = ')

		 });  
		// end of attackButton click

//this I dont understand either
	    $('.character-button').on('click', function() {
	    	console.log($(this).data('name'));
	    	// var pc = choosePlayer($(this).data('num'));
	    	// console.log(pc);
	    	$('.Obi Wan Kenobi').removeClass
	    	$('.allchars').removeClass
	  //   	for (var i = 0; i < characters.length; i++) {    
			//     var c = $('<button>');
			//     c.addClass('character character-button');
			//     c.attr('data-name', characters[i].name); 
			//     c.attr('data-HP', characters[i].HP);
			//     c.attr('data-AP', characters[i].AP);
			//     c.attr('data-CP', characters[i].CP);
			//     c.attr('data-num', i);
			//     // b.text(characters[i]);
			//     c.html(characters[i].image);
			//     // b.data(characters[i]);

			//     $("#opponent").append(c); 
			// }
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
