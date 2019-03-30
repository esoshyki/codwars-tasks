function createSecretHolder(secret) {
    var a = new Object;
a.secr = secret
a.getSecret = () => a.secr
a.setSecret = function (newsecr) {
    a.secr = newsecr;
      }
return a
    }

var obj = createSecretHolder(5);
console.log(obj.getSecret());
obj.setSecret(2);
console.log(obj.getSecret())
