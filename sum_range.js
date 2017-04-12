/**
 * Created by illiach on 12.04.2017.
 */
// Your code here.
function range (startofArray, endofArray, step){
    var array = [];
    if (step == null) {
        for (startofArray; startofArray <= endofArray; startofArray++) {
            array.push(startofArray)
        }
        } else {
            while(startofArray-endofArray+1) {
            array.push(startofArray);
                startofArray--;
        }
    }
    return array;
}

function sum(array){
    var sumofArray=array[0];
    var j=1;
    for (var i=2;i<=array.length;i++){
        sumofArray+=array[j];
        j++;
    }
    return sumofArray;
}
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55