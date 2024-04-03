function checkDemeritPoints(speed) {
    const speedLimit = 70;
    let demeritPoints = 0;

//if conditionals to check demerit points after passing a certain speedlimit
    if (speed <= speedLimit) {
        console.log("Ok");
        // if the speed is let or equal to 70, we'll get 'Ok' after console log
    } else {
        demeritPoints = Math.floor((speed - speedLimit) / 5);
        console.log(`Points: ${demeritPoints}`);
       // else we will get a calculation of demerit point which is calulated for each 5 km/s speed past the speed limit 
        if (demeritPoints > 12) {
            console.log("License suspended");
        }
        // although if the total demerit points accumulate and are more than 12, we are expected to get 'License suspended' after we console log
    }
//example tester to check the result of the if conditionals
}
    var speed = 80;
    checkDemeritPoints(speed);