exports.min = function min (array) {
  var armin = 0;
  if(typeof(array) != "undefined") {
  array.forEach(element => {
    if (armin > element) {
      armin = element;
    }
});
  return armin;
  } else {return 0}
}

exports.max = function max (array) {
  if(typeof(array) != "undefined") {
  var armin = 0;
  array.forEach(element => {
    if (armin < element) {
      armin = element;
    }
});
  return armin;
}  else {return 0}
}

exports.avg = function avg (array) {
  if(typeof(array) != "undefined") {
  if(array.length != 0) {
  var count = array.length;
  var aravg = array.reduce(function(sum,current) {
     return sum+current
  },0)

return aravg/count;
} else {return 0}} else {return 0}
}