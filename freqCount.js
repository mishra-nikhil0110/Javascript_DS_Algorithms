function charCount(str) {
    
  let nik = {};
  for (let i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (nik[char] > 0) {
      nik[char]++;
    } else {
      nik[char] = 1;
    }
  }
  return nik;
}

function charCountOpti(str) {
  var nik = {};
  for (let i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (nik[char] > 0) {
        nik[char]++;
      } else {
        nik[char] = 1;
      }
    }
  }
  return nik;
}
function charCountOM(str) {
  var nik = {};
  for (var char of str) {
     char  = char.toLowerCase();
      nik[char] =  /[a-z0-9]/.test(char) ? nik[char]++ : 1;
  }
  return nik;
}
// console.log(charCount("Your pin Numnber is : 33324, hi my name is john yy"));
// console.log(
//   charCountOpti("Your pin Numnber is : 33324, hi my name is john yy")
// );
console.log(charCountOM("hii>>>>>>>>>>>>>>>>> ,Your pin Numnber is : 33324, hi my name is john yy"));
// console.log([
//   charCount("Your pin Numnber is : 33324, hi my name is john yy"),
//   charCountOpti("Your pin Numnber is : 33324, hi my name is john yy"),
// ]);
