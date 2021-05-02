var input = document.getElementsByTagName('input')[0];
var body = document.getElementsByTagName('body')[0];

var convertToHexCode = function(str) {
  var chars = str.split('');
  var code = 0;

  chars.forEach(function(char) {
    code += +char.charCodeAt(0) * 987654;
  });

  return code.toString(16).substr(0, 6);
};

input.onkeyup = function(e) {
  var code = convertToHexCode(e.target.value);
  
  if (code === '0') {
    body.style.backgroundColor = '#ffffff';
    return;
  }
  
  body.style.backgroundColor = '#' + code;
};


