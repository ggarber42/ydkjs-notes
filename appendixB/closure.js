/**
 * 
 * @param {Number} start 
 * @param {Number} end 
 * @returns {Number[]} range of numbers
 */
function range(start,end) {
     const rangeArray = []
     if(start === end){
          rangeArray.push(start)
     } else if (start < end){
          let newStart = start
          while(newStart <= end){
               rangeArray.push(newStart)
               newStart += 1
          }
     }
     return rangeArray
 }

 /*

range(3,3);    // [3]
range(3,8);    // [3,4,5,6,7,8]
range(3,0);    // []
 
var start3 = range(3);
var start4 = range(4);
 
start3(3);     // [3]
start3(8);     // [3,4,5,6,7,8]
start3(0);     // []
 
start4(6);     // [4,5,6]

*/

module.exports = range