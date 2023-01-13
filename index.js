function saturdayFun(argument1 = 'roller-skate') {
    return `This Saturday, I want to ${argument1}!`
  }

function mondayWork(work ='go to the office'){
    return `This Monday, I will ${work}.`
}


function wrapAdjective(adj){
    return function(special){
        return `You are ${adj}${special}${adj}!` 
    }
}
