
var oldArr = [1,"Apple",-3,"orange",0.5];
var newArr = [];

function numbersOnly(myArr) {
    var myNew = [];
    for (x=0; x<myArr.length; x++) {
        console.log("index of "+x+" is "+myArr[x]);
        if (typeof myArr[x] === "number") {
            myNew.push(myArr[x]);
            console.log("Pushing ("+myArr[x]+") into new array");
        }
    }
    return myNew
}

console.log("old array is "+oldArr);
newArr = numbersOnly(oldArr);
console.log("new array is "+newArr);