var count = 1;
var spriteWidth = 162,spriteHeight = 153;
var boxWidth, boxHeight;
var fps = 60;
var velocity = 1;
var ghostVelocity =2;
var setGhostVelocity =2;
var spriteSizeOnScreen = 25;
var ghostFearTimer=0;
var score = 0;
var lifeLeft =3;

var spriteSheet = new Image();
spriteSheet.src = 'spriteSheet.png';


var pacman = {x:250,y:445,dx:0,dy:0,direction:3,imgNum:1,width:spriteSizeOnScreen,height:spriteSizeOnScreen}
var peachGhost = {x:220,y:260,dx:0,dy:0,direction:4,imgNum:0,width:spriteSizeOnScreen,height:spriteSizeOnScreen}
var redGhost = {x:250,y:260,dx:0,dy:0,direction:5,imgNum:0,width:spriteSizeOnScreen,height:spriteSizeOnScreen}
var blueGhost = {x:270,y:260,dx:0,dy:0,direction:6,imgNum:0,width:spriteSizeOnScreen,height:spriteSizeOnScreen}
var purpleGhost = {x:300,y:260,dx:0,dy:0,direction:7,imgNum:0,width:spriteSizeOnScreen,height:spriteSizeOnScreen}
var spriteArray = new Array(pacman,peachGhost,redGhost,blueGhost,purpleGhost);

var wall1 = {x:40,y:40,width:60,height:40}
var wall2 = {x:140,y:40,width:80,height:40}
var wall3 = {x:260,y:0,width:20,height:80}
var wall4 = {x:320,y:40,width:80,height:40}
var wall5 = {x:440,y:40,width:60,height:40}
var wall6 = {x:40,y:120,width:60,height:20}
var wall7 = {x:140,y:120,width:20,height:140}
var wall8 = {x:160,y:180,width:60,height:20}
var wall9 = {x:200,y:120,width:140,height:20}
var wall10 = {x:260,y:140,width:20,height:60}
var wall11 = {x:320,y:180,width:60,height:20}
var wall12 = {x:380,y:120,width:20,height:140}
var wall13 = {x:440,y:120,width:60,height:20}
var wall14 = {x:0,y:180,width:100,height:80}
var wall15 = {x:440,y:180,width:100,height:80}
var wall16 = {x:0,y:300,width:100,height:80}
var wall17 = {x:140,y:300,width:20,height:80}
var wall18 = {x:200,y:360,width:140,height:20}
var wall19 = {x:380,y:300,width:20,height:80}
var wall20 = {x:440,y:300,width:100,height:80}
var wall21 = {x:260,y:380,width:20,height:60}
var wall22 = {x:40,y:420,width:40,height:20}
var wall23 = {x:80,y:420,width:20,height:80}
var wall24 = {x:140,y:420,width:80,height:20}
var wall25 = {x:320,y:420,width:80,height:20}
var wall26 = {x:440,y:420,width:60,height:20}
var wall27 = {x:440,y:440,width:20,height:60}
var wall28 = {x:0,y:480,width:40,height:20}
var wall29 = {x:140,y:480,width:20,height:60}
var wall30 = {x:40,y:540,width:180,height:20}
var wall31 = {x:200,y:480,width:140,height:20}
var wall32 = {x:260,y:500,width:20,height:60}
var wall33 = {x:380,y:480,width:20,height:60}
var wall34 = {x:320,y:540,width:180,height:20}
var wall35 = {x:500,y:480,width:40,height:20}
var wall36 = {x:200,y:240,width:50,height:5}
var wall37 = {x:200,y:240,width:5,height:80}
var wall38 = {x:200,y:315,width:140,height:5}
var wall39 = {x:335,y:240,width:5,height:80}
var wall40 = {x:290,y:240,width:50,height:5}
var wallArray = new Array(wall1,wall2,wall3,wall4,
                          wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,
                          wall13,wall14,wall15,wall16,wall17,wall18,wall19,
                          wall20,wall21,wall22,wall23,wall24,wall25,wall26,
                          wall27,wall28,wall29,wall30,wall31,wall32,wall33,
                          wall34,wall35,wall36,wall37,wall38,wall39,wall40);

var exception = {x:140,y:180,width:260,height:200}
var exception2 = {x:0,y:280,width:100,height:80}
var exception3 = {x:440,y:280,width:100,height:80}
var pelletExceptionArray = new Array(exception,exception2,exception3);

var pelletArray = new Array(246);
var pelletArrayCount = 0;
for(var i=1;i<27;i++){
    for(var j=1; j<30;j++){
        if(spotIsOpen(i*20,j*20,wallArray)&& spotIsOpen(i*20,j*20,pelletExceptionArray)){
            var pellet = {x:20*i,y:20*j,eaten:false};
            pelletArray[pelletArrayCount] = pellet;
            pelletArrayCount++;
        }
    }
}

window.onload = init; 

function onKeyDown(evt){	
    if(evt.keyCode == 39) {pacman.dx=velocity; pacman.x+=1; pacman.dy=0; pacman.direction= 3;}//Right key
    else if(evt.keyCode ==40) {pacman.dy=velocity; pacman.y+=1; pacman.dx=0; pacman.direction = 0;} //down key
    else if(evt.keyCode == 38) {pacman.dy=-velocity; pacman.y-=1; pacman.dx=0; pacman.direction = 2;}//up key
    else if(evt.keyCode == 37) {pacman.dx=-velocity; pacman.x-=1; pacman.dy=0; pacman.direction = 1;}//Left Key
    else if(evt.keyCode == 32){if(setGhostVelocity==2){setGhostVelocity=.5;} else{setGhostVelocity=2;}}//space key
} // end function
function init(){
    canvas = document.getElementById('canvas');
    ctx = document.getElementById('canvas').getContext('2d');
    boxWidth = canvas.width;
    boxHeight = canvas.height;
    ctx2 = document.getElementById('score').getContext('2d');
    ctx2.font = "20px Georgia";
    ctx.font = "20px Georgia";

    window.addEventListener('keydown',onKeyDown,true);

    setInterval(start_drawing, 1000/fps); 

}

var tempDx,tempDy,rand;
function start_drawing() {
    clear();
    if(score<25400&&lifeLeft>0){
        rect(0,0,boxWidth,boxHeight,'black');//background
        for(var k = 0; k < wallArray.length; k++){//draws all the walls in blue
            rect(wallArray[k].x,wallArray[k].y,wallArray[k].width,wallArray[k].height,'blue');
        }
        score = 0;
        for(var l = 0; l <pelletArray.length; l++){//draws all the pellets that haven't been eaten
            if(pelletArray[l].eaten == false){
                if(isBigPellet(pelletArray[l].x,pelletArray[l].y)){circle(pelletArray[l].x,pelletArray[l].y,10);}
                else {circle(pelletArray[l].x,pelletArray[l].y,2);}
            }
            else{
                if(isBigPellet(pelletArray[l].x,pelletArray[l].y)){score+=300;}
                else{score+=100;}
            }
        }
        for(var i = 0; i < spriteArray.length; i++){
            ctx.drawImage(spriteSheet,spriteArray[i].imgNum*spriteWidth,spriteArray[i].direction*spriteHeight,spriteWidth,spriteHeight,spriteArray[i].x,spriteArray[i].y,spriteSizeOnScreen,spriteSizeOnScreen);//draw the individual sprites
            if(i ==0){
                for(var j = 0; j < wallArray.length; j++){//checking pacman collision with blue walls
                    checkWallCollision(wallArray[j],spriteArray[i])
                }
                for(var n = 1; n <spriteArray.length; n++){//if pacman collides with a ghost
                    if(checkGhostCollision(spriteArray[n],spriteArray[0])){
                        if(ghostFearTimer<1){//if pacman can not eat the ghost
                            spriteArray[0].x = 250; spriteArray[0].y = 445; spriteArray[0].dx = 0; spriteArray[0].dy =0;
                            peachGhost.x = 220; peachGhost.y= 260; 
                            redGhost.x=250; redGhost.y=260;
                            blueGhost.x=270;blueGhost.y=260;
                            purpleGhost.x=300;purpleGhost.y=260;
                            lifeLeft--;}
                        else{spriteArray[n].x = 250; spriteArray[n].y=260;}//if pacman can eat the ghost
                    }
                }
            }

            if(i!=0 && count %(fps)==0){ //Ghost sprites move in random direction
                rand = Math.floor((Math.random()*4)+1);
                if(rand == 1){spriteArray[i].dx=ghostVelocity; spriteArray[i].dy = 0; spriteArray[i].imgNum = 0;}
                if(rand == 2){spriteArray[i].dx=-ghostVelocity; spriteArray[i].dy = 0; spriteArray[i].imgNum = 1;}
                if(rand == 3){spriteArray[i].dy=-ghostVelocity; spriteArray[i].dx = 0; spriteArray[i].imgNum = 2;}
                if(rand == 4){spriteArray[i].dy=ghostVelocity; spriteArray[i].dx = 0; spriteArray[i].imgNum = 3;}
            }
            checkSideCollision(spriteArray[i]);//checks the side collision

            spriteArray[i].x += spriteArray[i].dx;//the sprites move
            spriteArray[i].y += spriteArray[i].dy;
        }
        for(var m = 0; m<pelletArray.length;m++){//makes the pellets dissappear if pacman eats them
            if(pelletArray[m].eaten == false && spriteArray[0].x<pelletArray[m].x && spriteArray[0].x+spriteSizeOnScreen>pelletArray[m].x && spriteArray[0].y <pelletArray[m].y && spriteArray[0].y+spriteSizeOnScreen > pelletArray[m].y){
                pelletArray[m].eaten = true;
                if(isBigPellet(pelletArray[m].x,pelletArray[m].y)){ghostFearTimer=800;}

            }
        }

        for(var o =1;o<spriteArray.length;o++){//makes ghost afraid if pacman eats a big pellet
            if(ghostFearTimer>0){
                spriteArray[o].direction = 8;
                if(ghostFearTimer%28==0) {spriteArray[o].imgNum = 0;}
                if(ghostFearTimer%39==0){spriteArray[o].imgNum = 1;}
                ghostVelocity=.5;
            }
            else{spriteArray[o].direction = o+3; ghostVelocity = setGhostVelocity;}
        }
        ghostFearTimer--;

        count++;
        if(count%(fps/5)==0){pacman.imgNum++; if(pacman.imgNum == 3) pacman.imgNum = 0;}
    }
    if(lifeLeft<1){
        ctx.fillStyle = 'black';
        ctx.fillText("You have lost!!",200,300);
    }
    if(score==25400){
       ctx.fillStyle = 'black';
        ctx.fillText("You have won!!",200,300); 
    }
    ctx2.clearRect(0,0,540,625);
    ctx2.fillText("Score: "+score,10,620);
    ctx2.fillText("Life: "+lifeLeft,470,620);
}
function clear() {
    ctx.clearRect(0, 0, boxWidth,boxHeight );
}
function checkGhostCollision(ghost,pacman){
    if(pacman.y < ghost.y+ghost.height && pacman.y > ghost.y && pacman.x > ghost.x && pacman.x < ghost.x+ghost.width) { return true;}//bot side
    if(pacman.y+spriteSizeOnScreen > ghost.y && pacman.y <ghost.y+ghost.height && pacman.x > ghost.x && pacman.x < ghost.x+ghost.width) { return true;}//top side
    if(pacman.x < ghost.x+ghost.width && pacman.x >ghost.x && pacman.y > ghost.y && pacman.y < ghost.y+ghost.height) {return true;}//right side
    if(pacman.x+spriteSizeOnScreen > ghost.x && pacman.x <ghost.x+ghost.width && pacman.y > ghost.y && pacman.y < ghost.y+ghost.height) { return true;}//left side
}
function checkWallCollision(wall,object){
    if(object.y < wall.y+wall.height && object.y > wall.y && object.x > wall.x && object.x < wall.x+wall.width) { object.dy = 0; object.dx = 0;object.y += 2;}//bot side
    if(object.y+spriteSizeOnScreen > wall.y && object.y <wall.y+wall.height && object.x > wall.x && object.x < wall.x+wall.width) { object.dy = 0; object.dx = 0;object.y -= 2;}//top side
    if(object.x < wall.x+wall.width && object.x >wall.x && object.y > wall.y && object.y < wall.y+wall.height) { object.dx = 0; object.dy = 0;object.x += 2;}//right side
    if(object.x+spriteSizeOnScreen > wall.x && object.x <wall.x+wall.width && object.y > wall.y && object.y < wall.y+wall.height) { object.dx = 0; object.dx = 0;object.x -= 2;}//left side

}
function rect(x,y,w,h,c) {
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.closePath();
    ctx.fillStyle = c;
    ctx.fill();
}
function circle(x,y,r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fillStyle = 'yellow';
    ctx.fill();
}
function checkSideCollision(object){
    if(object.x+spriteSizeOnScreen>boxWidth){
        object.dx = 0; object.x -=2;
    }
    if(object.x<0){
        object.dx = 0; object.x+=2;
    }
    if(object.y+spriteSizeOnScreen>boxHeight){
        object.dy = 0; object.y -=2;
    }
    if(object.y<0){
        object.dy = 0; object.y+=2;
    }
}
function spotIsOpen(x,y,inputArray){
    returnValue = true;
    for(var i = 0; i < inputArray.length;i++){
        if(x>=inputArray[i].x && x<=inputArray[i].x+inputArray[i].width && y >= inputArray[i].y && y <= inputArray[i].y+inputArray[i].height){
            returnValue = false;
        }
    }
    return returnValue;
}
function isBigPellet(x,y){
    if((x==20 && y==60)||(x==520 && y==60)||(x==20 && y==460)||(x==520 && y==460)){
        return true;
    }
    return false;
}