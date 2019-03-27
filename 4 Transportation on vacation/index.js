function rentalCarCost(d) {
    switch (true) {
        case d >= 3 && d < 7:
            return d * 40 - 20;
        case d >= 7:
            return d * 40 - 50;
        default:
            return d * 40
    }
  }


  console.log(rentalCarCost(5))