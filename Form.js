class Form {

  constructor() {

    this.button = createButton('Play');
    this.title1 = createElement('h1');
    this.title2 = createElement('h3');
    this.reset = createButton('Reset');
  }
  hide(){
    this.button.hide();

    this.title1.hide();
    this.title2.hide();
  }

  display(){
    background (255);
    this.title1.html("Defend the tower");
    this.title1.position (525 , 20);

    this.title2.html("Click play");
    this.title2.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(620 , 400);
    //this.reset.position(displayWidth-100,20);

    this.button.mousePressed(()=>{
      hide();
    //  this.title2.hide()
    //  this.button.hide()
      gameState = 1;
    });

  }
}
