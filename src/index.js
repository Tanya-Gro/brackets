module.exports = function check(str, bracketsConfig) {
  // your solution
  // console.log(str, '***', bracketsConfig);
  const scope = [];
  let mark = false;

  for (let bracket of str) {
    // console.log('looking for: ', bracket);
    mark = false;

    for (let item of bracketsConfig) {
      if (item.includes(bracket)) {
        mark = true;
        if (item.indexOf(bracket) === 0) {
          if (item[1] !== bracket || (scope[scope.length - 1] !== bracket && item[1] === bracket)) {
            // console.log('push: ', item[1], ' total scope', scope);
            scope.push(item[1]);
          }
          else {
            // console.log(scope);
            scope.pop();
          }
        }
        else {
          if (scope[scope.length - 1] === bracket) {
            // console.log('close bracket ', scope);
            scope.pop();
          }
          else {
            // console.log('неверная закрывающая скобка');
            return false;
          }
        }
      }
    }
    if (!mark) {
      // console.log('символа из str нет в blancketConfig');
      return false;
    }
  }
  if (scope.length !== 0) {
    // console.log('остались незакрытые скобки');
    return false;
  }
  // console.log('дошли до конца - успех');
  return true;
}
