$(document).ready(function() {
    var playerChosen = false;
    var opponentChosen = false;
    var playerCharacter = [];
    var opponentCharacter = [];
    var defeatedCharacters = [];
    var pcAP = 0;
    var counter = 0;
    var newEnemy = false;
    var playerStats = '';
    var opponentStats = '';
    var gameOver = false;

    //we store all the available characters in an array titled characters.
    var characters = [
        { id: "Obi-Wan-Kenobi", name: "Obi Wan Kenobi", HP: 120, AP: 8, CP: 25, selected: 'false', image: "<img src='assets/images/obi.jpg'>" },
        { id: "Darth-Vader", name: "Darth Vader", HP: 100, AP: 6, CP: 5, selected: 'false', image: "<img src='assets/images/darth.jpg'>" },
        { id: "Luke-Skywalker", name: "Luke Skywalker", HP: 80, AP: 10, CP: 20, selected: 'false', image: "<img src='assets/images/luke.jpg'>" },
        { id: "Count-Dooku", name: "Count Dooku", HP: 150, AP: 4, CP: 15, selected: 'false', image: "<img src='assets/images/dooku.jpg'>" }
    ];

    $('.resetButton').hide();

    for (var i = 0; i < characters.length; i++) {
        var b = $('<button>');
        b.addClass('character ' + characters[i].id);
        b.attr('data-name', characters[i].name);
        b.attr('data-HP', characters[i].HP);
        b.attr('data-AP', characters[i].AP);
        b.attr('data-CP', characters[i].CP);
        b.attr('data-num', i);
        b.attr('id', characters[i].id);
        b.attr('data-selected', characters[i].selected)
        b.html(characters[i].image);
        $("#allchars").append(b);
    }


    $('.attackButton').on("click", function() {
        if (playerCharacter.name != null && opponentCharacter.name != null) {
            pcAP = pcAP + playerCharacter.AP;
            pcAP = playerCharacter.AP + pcAP; // add attack power before attack - since current attack power starts at 0.
            opponentCharacter.HP = opponentCharacter.HP - pcAP; //opponent loses HP on attack
            playerCharacter.HP = playerCharacter.HP - opponentCharacter.CP;
            opponentChosen = checkWin(opponentCharacter.HP, opponentCharacter.name, opponentCharacter.id);
            gameOver = checkLoss(playerCharacter.HP);
            if (opponentChosen == false) {
                $('#opponent-stats').empty();
                opponentCharacter = [];
            } else if (gameOver == true) {
                $('.resetButton').show();
                $('.attackButton').hide();
            } else {
                $('#player-stats').html(playerCharacter.name +
                    '<br> Player Health: ' + playerCharacter.HP +
                    '<br> Player Attack Power: ' + pcAP);
                $('#opponent-stats').html(opponentCharacter.name +
                    '<br> Player Health: ' + opponentCharacter.HP +
                    '<br> Opponent Counter-Attack: ' + opponentCharacter.CP);
            }
        }

    });
    // end of attackButton click


    $('.character').on('click', function() {

        if ($(this).attr('data-selected') == 'false') {
            console.log('data-selected: ' + $(this).attr('data-selected'));

            if (counter == 0 && playerChosen == false) {
                counter++;
                playerChosen = true;
                $(this).appendTo($('#player'));

                playerCharacter = characters[$(this).data('num')];
                $('#' + playerCharacter.id).attr('data-selected', 'true')

                console.log(playerCharacter.id);
                console.log('#' + playerCharacter.id).attr('data-selected');

                $('#player-stats').html($(this).data('name') +
                    '<br> Player Health: ' + $(this).data('hp') +
                    '<br> Player Attack Power: ' + $(this).data('ap'));
            } else if (counter > 0 && $(this).data('name') == playerCharacter.name) {
                alert('Player can not be opponent');
            } else if (counter > 0 && opponentChosen == false) {
                counter++;
                opponentChosen = true;
                $(this).appendTo($('#opponent'));
                opponentCharacter = characters[($(this).data('num'))];
                $('#' + opponentCharacter.id).attr('data-selected', 'true')
                $('#opponent-stats').html($(this).data('name') +
                    '<br> Player Health: ' + $(this).data('hp') +
                    '<br> Player Counter-Attack: ' + $(this).data('cp'));

            } else if (playerCharacter.name == null || opponentCharacter == null) {
                alert('Both players have yet to be chosen');
            }
        }
    });


    function checkWin(HP, name, id) {

        // console.log('start of checkWin process');
        if (HP <= 0) {
            console.log('characters length inside checkWin: ' + characters.length);
            console.log('counter inside checkWin: ' + counter);
            console.log('characters inside checkWin: ' + characters);
            console.log('playerCharacter.name: ' + playerCharacter.id);
            if (counter < characters.length) {
                alert("You defeated " + name);
                opponentChosen = false;
                $('#player-stats').html(playerCharacter.name +
                    '<br> Player Health: ' + playerCharacter.HP +
                    '<br> Player Attack Power: ' + pcAP);
                $('#' + id).appendTo('#defeated');
                $('#' + playerCharacter.id).data('data-selected', 'true')
                $('#opponent-stats').empty();
                console.log(opponentCharacter);

            } else if (counter >= characters.length) {
                alert("You defeated " + name);
                $('#player-stats').html(playerCharacter.name +
                    '<br> Player Health: ' + playerCharacter.HP +
                    '<br> Player Attack Power: ' + pcAP);
                $('#' + id).appendTo('#defeated');
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

    function checkLoss(HP) {
        console.log("Player health = " + HP);
        if (HP <= 0) {
            $('#player-stats').html(playerCharacter.name +
                '<br> Player Health: ' + playerCharacter.HP +
                '<br> Player Attack Power: ' + pcAP);
            $('#opponent-stats').html($(this).data('name') +
                '<br> Player Health: ' + $(this).data('hp') +
                '<br> Player Counter-Attack: ' + $(this).data('cp'));
            alert("You lost, restart the game.");

            gameOver = true;
        }
        return gameOver;
    }
    $('.resetButton').on('click', function() {
        alert('This button does nothing yet');
        
    }); // end of resetButton onclick
});
