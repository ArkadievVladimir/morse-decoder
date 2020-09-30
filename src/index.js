const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const symbolCount = expr.length/10;
    let message = '';
    let i = 1;

    while (i <= symbolCount) {
      if (expr.slice(0, 10) === '**********') {
        message = `${message} `;
      } else{ 
        message = `${message}${MORSE_TABLE[binToMorse(expr.slice(0, 10))]}`;
      }
      expr = expr.slice(10) 
      i++;
    }

    return message
}

function binToMorse(bin) {
  let resultMorse = '';
  let i = 1;

  while (i <= 5) {
    if (bin.slice(-2) === '10') resultMorse = `.${resultMorse}`;
    if (bin.slice(-2) === '11') resultMorse = `-${resultMorse}`;
    if (bin.slice(-2) === '00') return resultMorse;
    bin = bin.slice(0, -2);
    i++;
  }

  return resultMorse;
}




module.exports = {
    decode
}