function popGrowth(popStart, percent, people, popSurpass){
    let years = 0
    let percentDec = percent / 100
    while(popStart < popSurpass){
        let newPop = popStart + (popStart * percentDec) + people
        popStart = newPop
        years++
    }
    return years
}

console.log(popGrowth(1500000, 2.5, 10000, 2000000))


function popGrowth1(popStart, percent, people){
    let years = 0
    let percentDec = percent / 100
    while(popStart > 0){
        let newPop = popStart + (popStart * percentDec) - people
        popStart = newPop
        years++
    }
    return years
}

console.log(popGrowth1(1500, 5, 100))

