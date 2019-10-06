'use strict';

function main() {

    const radius = readLine();
    let PI= Math.PI;
    console.log(PI* radius *radius);
    console.log(PI*radius *2);


    try {
        PI = 0;
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}