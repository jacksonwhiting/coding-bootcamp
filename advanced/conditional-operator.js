let team = ["Caleb", "Dillon", "RJ", "Harrison"];

let printTeam = team.length <= 4 ? `Team Size: ${team.length}` : "Too many people on your team";

console.log(printTeam);

let testTeam = {};

let teamMessage = () => testTeam[0] ? console.log("True") : console.log("false");

let players = []

let findPlayer = players.find((player) => player.name === "Test");

console.log(findPlayer);