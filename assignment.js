// https://github.com/pritom-dip/asaignment3


// Converting kilo meter to meter
function kilometerToMeter(kilometer) {
    if (kilometer == undefined || kilometer == null) {
        return "Please give a value first";
    }
    if (kilometer < 0) {
        return "Distance can not be negative";
    }
    var meter = kilometer * 1000; // 1 kilometer = 1000m
    return meter;
}


// Calculate budget for watch, mobile and laptop 
function budgetCalculator(watchQty, mobileQty, laptopQty) {

    // Check the given watch quantity is valid or not
    if (watchQty % 1 != 0 || watchQty == null || watchQty == undefined || watchQty < 0) {
        return "Please give valid watch quantity";
    }

    // Check the given mobile quantity is valid or not
    if (mobileQty % 1 != 0 || mobileQty == null || mobileQty == undefined || mobileQty < 0) {
        return "Please give valid mobile quantity";
    }

    // Check the given laptop quantity is valid or not
    if (laptopQty % 1 != 0 || laptopQty == null || laptopQty == undefined || laptopQty < 0) {
        return "Please give valid laptop quantity";
    }

    var watchCost = watchQty * 50; // 1 watch = 50 BDT
    var mobileCost = mobileQty * 100; // 1 mobile = 100 BDT
    var laptopCost = laptopQty * 500; // 1 laptop = 500 BDT
    var totalCost = watchCost + mobileCost + laptopCost;
    return totalCost;
}

// Total cost calculation for staying at the hotel
function hotelCost(day) {
    if (day == null || day == undefined) {
        return "Please give a value first";
    }
    if (day < 0) {
        return "Days can not be negative";
    }

    // Check the day is float or not. if float then make it integer
    if (day % 1 != 0) {
        day = Math.ceil(day);
    }

    var totalCost = 0;
    // check how many days are being stayed
    if (day <= 10) {
        var firstCost = 100 * day; // 1-10 - cost is 100/day
        totalCost = firstCost;
    } else if (day > 10 && day <= 20) {
        var firstCost = 100 * 10;
        var secondCost = 80 * (day - 10); // 11-20 - cost is 80/day
        totalCost = firstCost + secondCost;
    } else {
        var firstCost = 100 * 10;
        var secondCost = 80 * 10;
        var thirdCost = 50 * (day - 20); // 21-infinity - cost is 50/day
        totalCost = firstCost + secondCost + thirdCost;
    }
    return totalCost;
}

// Highest name calculator
function megaFriend(names) {
    // Check the names parameter is an array or not
    if (Array.isArray(names) == false) {
        return "Input must to be an array";
    }
    // Check if empty array passed or not
    if (names.length == 0) {
        return "Please input some value in the array first";
    }
    var biggestName = names[0];
    for (var i = 0; i < names.length; i++) {
        var currentElement = names[i];

        // Check if current elements length is greater than current biggest name length
        if (currentElement.length > biggestName.length) {
            biggestName = currentElement;
        }
    }
    return biggestName;
}