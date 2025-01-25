function div (a, b){
    return a / b;
}
  
function containsNumbers(text){
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
     if (char >= '0' && char <= '9')
      return true;
    }
    return false;
}

exports.div = div;
exports.containsNumbers = containsNumbers;