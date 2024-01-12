function reduccionArray(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(reduccionArray(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

let ejemploArray = [1, [2, 3, [4, 5, [6]]]];
let flattenedArray = reduccionArrayArray(ejemploArray);
console.log("Array original:", ejemploArray);
console.log("Array reducido:", reduccionArray);