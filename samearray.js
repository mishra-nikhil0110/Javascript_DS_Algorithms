function sameNAive(arr, arre) {
  if (arr.length !== arre.length) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    let correctIndex = arre.indexOf(arr[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arre.splice(correctIndex, 1);
  }
  return true;
}

function sameOptimized(arr, arre){
if(arr.length != arre.length){
    return false;
}

var ob1 = {};
var ob2 = {};

for (let val of arr){
    ob1[val] = (ob1[val] || 0) + 1;
    
}
for (let val of arre){
    ob2[val] = (ob2[val] || 0) + 1;

}

for(let key in ob1){
    if(!(key**2 in ob2)){
        return false;
    }
    if(ob2[key**2] !== ob1[key]){
        return false;
    }
}
console.log(ob1);
return true;

}

let t1 = performance.now();

// console.log(sameNAive([1, 2, 3, 4, 3, 3, 12], [144, 1, 4, 9, 16, 9, 9]));
console.log(sameOptimized([1, 2, 3, 4, 3, 3, 12], [144, 1, 4, 9, 16, 9, 9]));
let t2 = performance.now();

console.log("the execution time is: ", t2 - t1);
