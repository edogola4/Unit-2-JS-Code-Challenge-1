// Define a function that returns a game object
function gameObject() {
    return {
        // Home team information
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black ", "White"],
            // Object containing player statistics for the home team
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 3
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 11,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        // Away team information
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            // Object containing player statistics for the away team
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Benedict Mathurin": {
                    number: 22,
                    shoe: 17,
                    points: 17,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Ben Simmons": {
                    number: 25,
                    shoe: 15,
                    points: 15,
                    rebounds: 20,
                    assists: 5,
                    steals: 2,
                    blocks: 15,
                    slamDunks: 2
                },
                "Markieff Morris": {
                    number: 9,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Troy Brown": {
                    number: 11,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        }
    };
}

// Call the gameObject function and log the result to the console
console.log(gameObject());


// Building Functions
// Function to find the number of points scored by a given player
function numPointsScored(playerName){
    // Get the game object containing all team and player data
    let game = gameObject();

    // Iterate through each team in the game object
    for (let team in game){
        // Get the players object for the current team
        let players = game[team].players;
        // Check if the given player name exists in the current team
        if (players[playerName]) {
            // If found, return the number of points scored by the player
            return players[playerName].points;
        }
    }
    // If the player is not found, the function will implicitly return undefined
}

// Test the function by calling it with a player's name and logging the result
console.log(numPointsScored("Alan Anderson"));


// shoeSize
function shoeSize(playerName){
    let game = gameObject();
    for (let team in game){
        let players = game[team].players;
        if (players[playerName]) {
            return players[playerName].shoe;
        }
    }
}
console.log(shoeSize("Jason Terry"));

// teamColors
function teamColors(teamName){
    let game = gameObject();
    for (let team in game){
        if (game[team].teamName === teamName) {
            return game[team].colors;
        }
    }
}
console.log(teamColors("Brooklyn Nets"));

// teamNames
function teamNames(){
    let game = gameObject();
    return [game.home.teamName, game.away.teamName];
}
console.log(teamNames());

// playerNumbers
function playerNumbers(teamName){
    let game = gameObject();
    let players = [];
    for (let team in game){
        if (game[team].teamName === teamName) {
            for (let player in game[team].players) {
                players.push(game[team].players[player].number);
            }
        }
    }
    return players;
}
console.log(playerNumbers("Brooklyn Nets"));

// playerStats
function playerStats(playerName){
    let game = gameObject();
    for (let team in game){
        let players = game[team].players;
        if (players[playerName]) {
            return players[playerName];
        }
    }
}
console.log(playerStats("Alan Anderson"));

//bigShoeRebounds
function bigShoeRebounds(){
    let game = gameObject();
    let maxShoeSize = 0;
    let rebounds = 0;

    for (let team in game){
        let players = game[team].players;
        for (let player in players) {
            if (players[player].shoe > maxShoeSize) {
                maxShoeSize = players[player].shoe;
                rebounds = players[player].rebounds;
            }
        }
    }
    return rebounds;
}
console.log(bigShoeRebounds());