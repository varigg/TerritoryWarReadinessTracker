'use strict';
const fetch = require('node-fetch'); 
let toons;
fetch('https://swgoh.gg/api/guilds/39985/units')
    .then(res => res.json())
    .then(json => parse_toons(json))
    .catch(function(error) { console.log(error); });
function parse_toons(arg) {
    let players = [];
	for (var toon in arg) {
        //console.log(toon);
        arg[toon].forEach(element => {
            if(element.combat_type===1 && element.power>6000){ 
                if(players[element.player]===undefined) {
                    players[element.player]=[];
                    players[element.player].push(toon);
                } else {
                    players[element.player].push(toon);
                }
            }
        });
    }
    console.log(players);
}
