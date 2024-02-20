function RecursiveFact(n){
    if(n<2){
        return n
    }
    return n * RecursiveFact(n-1)
}


console.log(RecursiveFact(3))