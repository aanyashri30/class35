var ball;
var hypnoticBall,database,position,hypnoticballPosition;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    hypnoticBall = createSprite(250,250,10,10);
    hypnoticBall.shapeColor = "red";
    hypnoticballPosition = database.ref('Ball/Position');
    hypnoticballPosition.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(position!==undefined)
    {

    
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
}
function writePosition(x,y)
{
database.ref('Ball/Position').set({
    'x':position.x+x,
    'y':position.y+y
})
}
function  readPosition(x,y){
    position = data.val();
    hypnoticBall.x = position.x;
    hypnoticBall.y = position.y;
    
}

function showError()
{
   console.log("error inwriting to the database ");
}

