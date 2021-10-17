const gameObject = () => {
    const obj = {
        "home": {
            "teamName": "Brooklyn Nets",
            "colors": ["Black", "White"],
            "players": {
                "Alan Anderson": {
                    "number": "0",
                    "shoe": "16", 
                    "points": "22",
                    "rebounds": "12",
                    "assists": "12",
                    "steals": "3",
                    "blocks": "1",
                    "slam dunks": "1"
                },
                "Reggie Evans": {
                    "number": "30",
                    "shoe": "14", 
                    "points": "12",
                    "rebounds": "12",
                    "assists": "12",
                    "steals": "12",
                    "blocks": "12",
                    "slam dunks": "7"
                },
                "Brook Lopez": {
                    "number": "11",
                    "shoe": "17", 
                    "points": "17",
                    "rebounds": "19",
                    "assists": "10",
                    "steals": "3",
                    "blocks": "1",
                    "slam dunks": "15"
                },
                "Mason Plumlee": {
                    "number": "1",
                    "shoe": "19", 
                    "points": "26",
                    "rebounds": "12",
                    "assists": "6",
                    "steals": "3",
                    "blocks": "8",
                    "slam dunks": "5"
                },
                "Jason Terry": {
                    "number": "31",
                    "shoe": "15", 
                    "points": "19",
                    "rebounds": "2",
                    "assists": "2",
                    "steals": "4",
                    "blocks": "11",
                    "slam dunks": "1"
                }
            }
        },
        "away": {
            "teamName": "Charlotte Hornets",
            "colors": ["Turquoise", "Purple"],
            "players": {
                "Jeff Adrien": {
                    "number": "4",
                    "shoe": "18", 
                    "points": "10",
                    "rebounds": "1",
                    "assists": "1",
                    "steals": "2",
                    "blocks": "7",
                    "slam dunks": "2"
                },
                "Bismak Biyombo": {
                    "number": "0",
                    "shoe": "16", 
                    "points": "12",
                    "rebounds": "4",
                    "assists": "7",
                    "steals": "7",
                    "blocks": "15",
                    "slam dunks": "10"
                },
                "DeSagna Diop": {
                    "number": "2",
                    "shoe": "14", 
                    "points": "24",
                    "rebounds": "12",
                    "assists": "12",
                    "steals": "4",
                    "blocks": "5",
                    "slam dunks": "5"
                },
                "Ben Gordon": {
                    "number": "8",
                    "shoe": "15", 
                    "points": "33",
                    "rebounds": "3",
                    "assists": "2",
                    "steals": "1",
                    "blocks": "1",
                    "slam dunks": "0"
                },
                "Brendan Haywood": {
                    "number": "33",
                    "shoe": "15", 
                    "points": "6",
                    "rebounds": "12",
                    "assists": "12",
                    "steals": "22",
                    "blocks": "5",
                    "slam dunks": "12"
                }
            }
        }
    }
    return obj;
}
const game = gameObject();

function numPointsScored(name) {
    return playerStats(name)["points"];
}

function shoeSize(name) {
    return playerStats(name)["shoe"];
}

function teamColors(teamName) {
    for (const team in game) {
        let teamStats = game[team];
        if (teamStats["teamName"] === teamName) {
            return teamStats["colors"];
        }
    }
    return "Team not found.";
}

function teamNames() {
    let teams = [];
    for (const team in game) {
        teams.push(game[team]["teamName"]);
    }
    return teams;
}

function playerNumbers(teamName) {
    let playerNums = [];
    for (const team in game) {
        let teamStats = game[team];
        if (teamStats["teamName"] === teamName) {
            const players = teamStats["players"];
            for (const player in players) {
                playerNums.push(players[player]["number"])
            }
            return playerNums;
        }
    }
    return "Team not found.";
}

function playerStats(name) {
    for (const team in game) {
        let players = game[team]["players"];
        let player = Object.keys(players).find(p => p === name);
        if (player) {
            return players[player];
        }
    }
    return "Player not found.";
}

function bigShoeRebounds() {
    let shoeSize = [];
    let playersArr = [];
    for (const team in game) {
        const players = game[team]["players"];
        for (const player in players) {
            const playerObj = players[player];
            shoeSize.push(playerObj["shoe"]);
            playersArr.push(playerObj);
        }
    }
    const largestShoe = Math.max(...shoeSize);
    return playersArr.find(p => p["shoe"] == largestShoe)["rebounds"];
}

function mostPointsScored() {
    let pointsArr = [];
    let playersArr = [];
    let namesArr = [];
    for (const team in game) {
        const players = game[team]["players"];
        for (const player in players) {
            const playerObj = players[player];
            pointsArr.push(playerObj["points"]);
            playersArr.push(playerObj);
        }
        namesArr.push(players);
    }
    const mostPoints = Math.max(...pointsArr);
    const pointsStats = playersArr.find(p => p["points"] == mostPoints);
    for (const i in namesArr) {
        const keyObj = namesArr[i];
        const playerWithPoints = Object.keys(keyObj).find(n => keyObj[n] === pointsStats);
        if (playerWithPoints) {
            return playerWithPoints;
        }
    }
    return "No players available";
}

function winningTeam() {
    let playersArr = [];
    let finalScore = [];
    let currTeam;

    for (const team in game) {
        const players = game[team]["players"];
        currTeam = game[team]["teamName"]
        playersArr.push([currTeam, players]);
    }
    for (const i in playersArr) {
        const playerStats = Object.values(playersArr[i][1])
        let totalPoints = 0;
        for (const p in playerStats) {
            totalPoints += parseInt(playerStats[p]["points"])
        }
        finalScore.push([playersArr[i][0], totalPoints]);
    }
    let higherScore = 0;
    let winner;
    for (const score of finalScore) {
        if (score[1] > higherScore) {
            higherScore = score[1];
            winner = score[0];
        }
    }
    return winner;
}

function playerWithLongestName() {
    let playersArr = [];
    for (const team in game) {
        const players = game[team]["players"];
        for (const player in players) {
            playersArr.push(player);
        }
    }
    let longestName;
    let longestNameLen = 0;
    for (const name of playersArr) {
        if (name.length > longestNameLen) {
            longestNameLen = name.length;
            longestName = name;
        }
    }
    return longestName;
}

function doesLongNameStealATon() {
    longNameSteals = playerStats(playerWithLongestName())["steals"];
    let numSteals = [];
    for (const team in game) {
        const players = game[team]["players"];
        for (const player in players) {
            const playerObj = players[player];
            numSteals.push(playerObj["steals"]);
        }
    }
    return longNameSteals == Math.max(...numSteals);
}

console.log(doesLongNameStealATon());