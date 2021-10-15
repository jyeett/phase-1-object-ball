const gameObject = () => {
    const obj = {
        "home": {
            "teamName": "Brooklyn Nets",
            "colors": "Black, White",
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
            "colors": "Turquoise, Purple",
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
console.log(gameObject());
const game = gameObject();

function numPointsScored(name) {
    for (const team in game) {
        let players = game[team]["players"];
        let player = Object.keys(players).find(p => p === name);
        if (player) {
            return players[player]['points'];
        }
    }
    return "Player not found.";
}

console.log(numPointsScored("Bismak Biyombo"));