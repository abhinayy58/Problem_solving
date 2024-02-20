function RecursiveFibonacci(n){
    if(n<=1){
        return n
    }
    console.log(n)
    return RecursiveFibonacci(n-1) + RecursiveFibonacci(n-2)
}

console.log(RecursiveFibonacci(4))