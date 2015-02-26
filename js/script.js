/**
 * Created by Keddon Campbell on 2/26/15.
 * Functions
 */


var total = calcArea(30, 20); //whatever the function calcArea returns , place it in 'total.

function calcArea(w, h){
    var area = w * h;
    console.log(area);
    return area; //return the value of 'area' to 'total'.
}
console.log(total);







function dogYears(age){ //'age' is the parameter. it stores the valse of the argument so that it can be used in the function
    var dogYears = age * 7;
    console.log("Sparky is " + dogYears + " years old.")
}

dogYears(4); //'4' is the argument being passed into the parameter 'age'
dogYears(6);

