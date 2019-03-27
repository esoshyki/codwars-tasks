function getMiddle(s)
{
  var a = s.split('');
  while (a.length > 2) {
    a.shift();
    a.pop();
}
return a.join('')

}