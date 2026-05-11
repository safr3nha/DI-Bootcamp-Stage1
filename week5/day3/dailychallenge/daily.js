function isAnagram(string1, string2) {
  const str1 = string1.replace(/\s+/g, '').toLowerCase();
  const str2 = string2.replace(/\s+/g, '').toLowerCase();

  if (str1.length !== str2.length) {
    return false;
  }

  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

console.log(isAnagram("Astronomer", "Moon starer"));
console.log(isAnagram("School master", "The classroom"));
console.log(isAnagram("The Morse Code", "Here come dots"));