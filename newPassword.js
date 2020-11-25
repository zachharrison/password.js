const args = process.argv.slice(process.argv.length - 1);

const generatePassword = function (str) {
  str = str.join('').split('');
  let result = '';
  const codes = {
    a: '4',
    e: '3',
    o: '0',
    l: '1'
  };
  for(let i = 0; i < str.length; i++){
    if(codes.hasOwnProperty(str[i])){
      result += codes[str[i]];
    } else {
      result += str[i];
    }
  }
  return result;
};

const obfuscate = str => console.log(`Your generated password is ${generatePassword(str)}`);

obfuscate(args);