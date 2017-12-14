
var oldArr = [1,"Apple",-3,"orange",0.5];
var newArr = [];

function numbersOnly(myArr) {
    var myNew = [];
    for (x=0; x<myArr.length; x++) {
        console.log(x+" is "+myArr[x]);
        if (typeof myArr[x] === myArr[x]) {
            myNew.push(myArr[x]);
            console.log("Push into new array - "+myArr[x]);
        }
    }
    return myNew
}
newArr = numbersOnly(oldArr);
console.log("old array is "+oldArr);
console.log("new array is "+newArr);