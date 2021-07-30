# RLog

## Intro

a module about log like console.log but is not only console.log

## install

yarn add rentoo

or:

npm install rentoo
## Example

```javascript

import RLog,{disableRLog, enableRLog} from "rentoo";

let a = { a: 2 };
let b = [1, 2, 3, 4, 5, 6];
let c = 4;

disableRLog();
enableRLog();
disableRLog();
// RLog(a, b, c)(a)(b)(c)()();
RLog(a, b, c)(a)(b)(c)()();


```
