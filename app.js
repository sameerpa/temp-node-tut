// npm - global command, comes with node
// npm --version

// local dependency  - use it only particular project
// npm i <packagename>


//global dependency - use it in any project
// npm install -g <packagename>

const _ = require('lodash');

const items = [1 ,2 ,[3,4 , [5,6,[7,8,9]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);