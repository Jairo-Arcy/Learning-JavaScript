function message(){
    var number = Math.trunc((Math.random() * 3) + 1);
    switch(number) {
      case 1:
          console.log('olá');
      break;
      case 2: 
          console.log('hello');
      break;
      case 3:
          console.log('hello javaScript');
      break;
    }
  }