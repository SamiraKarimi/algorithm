//Intersect Sorted Arrays -- Given two arrays, return the overlapping points of the arrays.
let x = [1,2,2,2,7]
let y = [2,2,6,6,7]

function intersectSortedArrays(arr1, arr2){
    let newArr = [];
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(arr1[i] == arr2[j]){
                newArr.push(arr2[j])
                i++
            }
            continue
        }
    }
    return newArr;
}
console.log(intersectSortedArrays(x,y))


//Intersect Sorted Arrays[duped] -- Given two arrays return the values that overlapped, not the amount of times the overlapped.
// let x = [1,2,2,2,7]
// let y = [2,2,6,6,7]

// function noNestedLoops(arr1,arr2){
//     let x = 0;
//     let y = 0;
//     var newArr = []
//     while(x < arr1.length && y < arr2.length){
//         if (arr1[x] == arr2[y]){
//             newArr.push(arr1[x])
//             x++
//             y++
//         }
//         else{
//             if(arr1[x] > arr2[y]){
//                 y++
//             }
//             else{
//                 x++
//             }
//         }
//     }
//     return newArr
// }

// console.log(noNestedLoops(x,y))

//Intersect Sorted Arrays[duped] -- Given two arrays return the values that overlapped, not the amount of times the overlapped.
// let x = [1,2,2,2,7]
// let y = [2,2,6,6,7]