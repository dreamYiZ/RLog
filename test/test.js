import RLog from '../src/index.js';


// console.log(RLog({}));
// RLog({})([]);
// RLog();

let obj = {
    a: 1,   
    b: 2    
};

let arr = [1,2,3];

RLog(obj)(obj)(arr, arr, 4);
