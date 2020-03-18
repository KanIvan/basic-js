module.exports = function countCats(matrix) {
  var a = [];
  for (i = 0; i < matrix.length; i++) {
  a = a.concat(matrix[i]);
  }
  var arr = [];
  for (i = 0; i < a.length; i++) {
    if (a[i] === "^^"){
        arr = arr.concat(a[i])
    }
}
return arr.length;
};