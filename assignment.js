//Problem 1: ana to vori
function anaToVori(ana) {
    //error handling
    if (ana < 0 || typeof ana != 'number') {
        return 'input a positive number only'
    }
    let output = ana / 16
    return output
}


//problem 2: panda Cost
function pandaCost(singaraQuantity, samuchaQuantity, jilapiQuantity) {
    // error handling
    if ((singaraQuantity < 0 || samuchaQuantity < 0 || jilapiQuantity < 0) || (typeof singaraQuantity != 'number' || typeof samuchaQuantity != 'number' || typeof jilapiQuantity != 'number')) {
        return 'Pleae! input a valid number only'
    }
    // single pcs product price
    let singaraPrice = singaraQuantity * 7
    let samuchaPrice = samuchaQuantity * 10
    let jilapiPrice = jilapiQuantity * 15
    //total price 
    let totalPrice = singaraPrice + samuchaPrice + jilapiPrice
    return totalPrice
}

//problem 3: picnic Budget
function picnicBudget(person) {
    //error handling
    if (person < 0 || typeof person != 'number') {
        return 'Please! input a positive number only'
    }
    // 0-100 picnic budget
    if (person <= 100) {
        let totalAmount = person * 5000
        return totalAmount
    }
    // 101 to 200 picnic budget
    else if (person <= 200) {
        let personUnder100 = 100 * 5000
        let amount = (person - 100) * 4000
        let totalAmount = personUnder100 + amount
        return totalAmount
    }
    // This block is more than 200 picnic budget
    else {
        personUnder100 = 100 * 5000
        let personUnder200 = 100 * 4000
        amount = (person - 200) * 3000
        totalAmount = personUnder200 + amount + personUnder100
        return totalAmount
    }

}


//Problem 4: odd Friend
let myFriends = ['raihan', 'monotosh', 'rashed', 'lucky', 'alamin']
function oddFriend(arr) {
    //error handling
    if (typeof arr != 'object') {
        return 'Please! input an array'
    }
    if (arr.length % 2 == 0) {
        return 'No Odd found'
    }
    for (const element of arr) {
        if (element.length % 2 == 1) {
            return element
        }
    }
}

