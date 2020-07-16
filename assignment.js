//*****(Problem Solving Assignment.)*****


//Number-1: Program For Feet to Mile.

function feetToMile(feet){

    if(feet < 0){
        console.log("Invalid! feet cannot be a negative number.");
    }
    else{
        var mile = feet * 0.000189394;     // 1 feet = 0.000189394 mile.
        return mile;
    }
}

var feet = feetToMile(100);
console.log(feet);



//Number-2: Program for how many wood required to make chair, table and bed.

function woodCalculator(chair, table, bed){

    var i, totalWood = 0;

    //for a chair 1 cubic feet needed.
    for(i = 1; i <= chair; i++){
        totalWood++;
    }

    //for a table 3 cubic feet needed.
    for(i = 1; i <= table; i++){
        totalWood = totalWood + 3;
    }

    //for a bed 5 cubic feet needed.
    for(i = 1; i <= bed; i++){
        totalWood = totalWood + 5;
    }

    return totalWood;
}

var chairTableBed = woodCalculator(12, 2, 6);
console.log(chairTableBed);



//No: 3- Program for how many bricks needed for a building.

function brickCalculator(storey){

    var totalBrick, brickForTenStorey, brickForTwentyStorey;

    //for 1 feet, need 1000 brick.

    //for 1-10 storey, 15 feet needed for per storey.
    if(storey <= 10){
        totalBrick = storey * 15 * 1000;
    }

    //for 11-20 storey, 12 feet needed for per storey.
    else if(storey >10 && storey <= 20){
        brickForTenStorey = 10 * 15 * 1000;
        totalBrick = (storey-10) * 12 * 1000 + brickForTenStorey;
    }
    
    //for more than 20 storey, 10 feet needed for per storey.
    else{
        brickForTenStorey = 10 * 15 * 1000;
        brickForTwentyStorey = (20-10) * 12 * 1000 + brickForTenStorey;
        totalBrick = (storey-20) * 10 * 1000 + brickForTwentyStorey;
    }

    return totalBrick;
}

var storey = brickCalculator(10);
console.log(storey);

var storey = brickCalculator(20);
console.log(storey);

var storey = brickCalculator(30);
console.log(storey);



//No: 4- Program for find the small name in an array.

function tinyFriend(name){

    var min = name[0].length;
    for(var i = 0; i < name.length; i++){
        var element = name[i].length;
        if(element < min){
            min = element;
            tinyName = name[i];
        }
    }

    return tinyName;
}

var friendsName = ["Sarwar", "Mahin", "Mahdi", "Tahsin", "Muslam", "Heba", "Saima", "Rahib"];
console.log(tinyFriend(friendsName));