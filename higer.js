function higherOrder() {
    return function() {
      console.log("I'm a returned function!");
    }
  }
  higherOrder()();