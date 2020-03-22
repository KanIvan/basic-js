module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
  var res = [];
  var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (i = 0; i < members.length; i++) {
    if (typeof(members[i]) === "string") {
      for (j=0; j < members[i].length; j++) {
          for (t = 0; t < caps.length; t++){
              members[i] = members[i].trim();
              if (caps[t] == members[i][j]) {
              res = res.concat(members[i][j].toUpperCase());
          }}
      break;
      }}}
  res.sort();
  var b = res.join('');
  return b;
  }
  else {
    return false
  }}