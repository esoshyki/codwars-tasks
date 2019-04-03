function isSantaClausable(obj) {
    return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every((name) => typeof obj[name] == 'function');
  }