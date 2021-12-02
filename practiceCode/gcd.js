function gcd_1(a, b){
    while(a != b){
        if(a > b){
            a = a - b;
        }else{
            b = b - a;
        }
    }
    return a;
}

function gcd_2(a, b){
    let c = b;
    while(a % b != 0){
        c = a % b;
        a = b;
        b = c;
    }
    return c;
}

//而最小公倍数是(a*b) / gcd(a,b);
console.log(gcd_2(8,10));