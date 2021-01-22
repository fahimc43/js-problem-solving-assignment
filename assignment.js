
/************kilometerToMeter **********/
function kilometerToMeter (kilometer){
    var meter = kilometer * 1000;
    return meter;
}

/************budgetCalculator *********/
function budgetCalculator (clock, mobile, laptop){
    var clock = 50 * clock;
    var mobile = 100 * mobile;
    var laptop = 500 * laptop;
    var total = clock + mobile + laptop;
    return total;    
}

/*************hotelCost *************/
function hotelCost(stayDays) {
    var cost = 0;
    if (stayDays <= 10){
        cost = stayDays * 100;
    }
    else if (stayDays <= 20){
        var firstPart = 10 * 100;
        var remaining = stayDays - 10;
        var secondPart = remaining * 80;
        cost = firstPart + secondPart;
    }
    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = stayDays - 20;
        var thirdPart = remaining * 50;
        cost = firstPart + secondPart + thirdPart;
    }
    return cost;
}

/**************megaFriend ************/
function megaFriend (friendsName){
    var bigName = "";
    for (i = 0; i < friendsName.length; i ++){
        var name = friendsName [i];
        if (name.length > bigName.length){
            bigName = name;
        }
    }
    return bigName;
}
