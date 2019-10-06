function factorial(n) {
    let fact =1;
    let i;
    for(i=1;i<=n;i++){
        fact=fact * i;
    }
    return fact;
}

console.log(factorial(5));