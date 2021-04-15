// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers=function(array){
    console.log (drivers[0] , drivers[1])
    return [array[0] , array[1]]
}


const returnLastTwoDrivers=function(array){
    console.log (drivers[2] , drivers[3])
    return [array[2] , array[3]]
    
}


const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]



const createFareMultiplier=function(int){
    return function(fare){
        fare*int
        return (fare*int)
    }

}

const fareDoubler = createFareMultiplier(2);
    
    
const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers (array,funct){
    return (funct(array))
} 

