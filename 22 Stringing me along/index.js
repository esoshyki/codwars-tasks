function createMessage(x) {
    var str = x;
    var funcrec =  function(arg) {
        if (!arg) { return str}
        else {
            str += ' ' + arg
            str = str.trim()
            return funcrec
        }
    }
    return funcrec
  }


  console.log(createMessage("Hello")("World!")("how")("are")("you?")())