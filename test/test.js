const RLog =  require ("../src/index.js");



let a = { a: 2 };
let b = [1, 2, 3, 4, 5, 6];
let c = 4;

console.log('RLog', RLog)
RLog.disableRLog();
RLog.enableRLog();
// RLog.disableRLog();
// RLog(a, b, c)(a)(b)(c)()();
RLog(a, b, c)(a)(b)(c)()();
