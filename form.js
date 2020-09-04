class Form{
    constructor(){
        this.playButton = createButton("Play!");
        this.heading = createElement('h2');
    }

    displayPlayButton(){
        background(backgroundIMG);
    fill("blue");
    textSize(75);
    textFont('Helviteca');
    textStyle(BOLD);
    text("CONVERSION VOYAGE", displayWidth/5, displayHeight/2);
        this.playButton.position(displayWidth/2, displayHeight/2 + 100);
        this.playButton.style('width', '150px');
        this.playButton.style('height', '50px');
        this.playButton.style('background-color', "blue");
        this.playButton.style('color', "white");
        this.playButton.style('font-family', "Merriweather");
        this.playButton.style('font-size', '40px');

        this.heading.position(displayWidth/5, displayHeight/2);
        this.heading.style('color', "blue");
        this.heading.style('font-size', '75px');
        this.heading.style('font-family', 'Helviteca' )
        this.heading.style('font-weight', 'BOLD')


    this.playButton.mousePressed(()=>{
        this.heading.hide();
        this.playButton.hide();
        gameState = 1;
    })
    }
}