var fs = require('fs');

let regEx = /\S*@softwire.com\b/g;

var data = fs.readFileSync('sample.txt');
var names = simpleMatch(data.toString());
// var names = regExMatch(data.toString());
for (const name of names) {
  console.log(name);
}
console.log(`${names.length} entries`);
console.log('Finished');

function simpleMatch(data) {
  var names = [];
  for (var i = 0; i < data.length; i++) {
    if (data.substring(i, i + 13) == '@softwire.com') {
      names.push(data.substring(i, i + 13));
    }
  }
  return names;
}

function regExMatch(data) {
  var names = data.toString().match(regEx);
  return names;
}