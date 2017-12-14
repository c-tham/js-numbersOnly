
var oldArr = [1,"Apple",-3,"orange",0.5];
var newArr = [];

function numbersOnlyRemove(myArr) {
    var currIndex = myArr.length-1;
    for (x=currIndex; x>=0; x--) {
        console.log("index of "+x+" is "+myArr[x]);
        if (typeof myArr[x] === "number") {
            // do nothing
        } else {
            console.log("Popping ("+myArr[x]+") out from current array");
            myArr.splice(x,1);
            console.log("current array is ("+myArr+")");
        }
    }
    return myArr
}

console.log("old array is ("+oldArr+")");
newArr = numbersOnlyRemove(oldArr);
console.log("new array is ("+oldArr+")");