function attack(defenders, attackers){
    let results = "";
    let defendersDice = [];
    let attackersDice = [];
    while(defenders > 0 && attackers > 0){
        // roll the max number of dice for each player
        defendersDice = [(1 + Math.floor(Math.random() * 6)), (1 + Math.floor(Math.random() * 6))];
        attackersDice = [(1 + Math.floor(Math.random() * 6)), (1 + Math.floor(Math.random() * 6)), (1 + Math.floor(Math.random() * 6))];
        // limit the rolls based on how many people people have
        defendersDice = defendersDice.slice(0, (defenders > 2? 2 : defenders));
        attackersDice = attackersDice.slice(0, (attackers > 3? 3 : attackers));
        // compare the max of each rolls to eachother and based on that, remove attackers and defenders from each side (defence advantage)
        defendersDice.sort().reverse();
        attackersDice.sort().reverse(); // we sort these in descending order to compare the max of these based on their position in the array
        if(attackersDice[0] > defendersDice[0]){ // here is the logic where if we have a greater roll for attackers, then the attackers win, otherwise the defence wins.
            defenders -= 1;
        } else {
            attackers -= 1;
        }
        // now we need to check to see if we have enough attackers and defenders to continue to roll
        if(attackersDice.length > 1 && defendersDice.length > 1){
            if(attackersDice[1] > defendersDice[1]){ // same rules, next set of dice
               defenders -= 1;
             } else {
               attackers -= 1;
             } 
        }
        results += "Attackers roll: " + attackersDice + " Defenders roll: " + defendersDice + " Remaining Attackers: " + attackers + " Remaining Defenders: " + defenders + " <br> ";
    }
    return results;
}
       document.querySelector('#risk').addEventListener('submit', function(e){
   e.preventDefault();
   var attackers = document.querySelector("#risk input[name='attackers']").value;
   var defenders = document.querySelector("#risk input[name='defenders']").value;
   document.querySelector("#result").innerHTML = attack(defenders, attackers);
});