// Code your solution in this file!

const returnFirstTwoDrivers = function(driver){

return driver.slice(0,2)    
}

const returnLastTwoDrivers= function(driver){
    return driver.slice(-2)
}

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers ]


const createFareMultiplier=function (multiply){
    return function(fare){
        return multiply * fare
    }
}

const fareDoubler=createFareMultiplier(2);

const fareTripler=createFareMultiplier(3);


function selectDifferentDrivers(arrayOfDrivers,driverfunction){
    return driverfunction(arrayOfDrivers);
}



