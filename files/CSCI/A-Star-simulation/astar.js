
var gridX = 10;
var gridY = 10;
var gridArray,boxHeight,boxWidth,startIndex=-1,stopIndex=-1;
var hasDimension = false, reachedGoal = false;
var visited = new Array();
var transitionSpeed = 0;
var frameNum = 0;
var img = new Image();
var isGameify = false;
var path = [];
var hvalue = '';
var searching = '';

window.onload = init; 

function init(){
    gridcanvas = document.getElementById('grid');
    gridctx = gridcanvas.getContext('2d');
    gridctx.font = "15px Georgia";
    controlctx = document.getElementById('controls').getContext('2d');
    controlctx.font = "12px Georgia";
    img.src = './pixels.png';
    setInterval(start_drawing, 1000/60); //60fps

}

function start_drawing(){
    frameNum++;
    clear(gridctx);
    clear(controlctx);
    if (hasDimension){updateGrid();}
    document.getElementById('uploadedFile').onchange = function() {//Uploads file and puts in textArea
        var selectedFile = document.getElementById('uploadedFile').files[0];
        var textType = /text.*/;
        if(selectedFile.type.match(textType)){
            var reader = new FileReader();
            reader.onload=function(e){
                document.getElementById('textArea').value = reader.result;
            }
            reader.readAsText(selectedFile);
        }else{
            document.getElementById('textArea').value = "File not supported!";
        }
        //controlctx.fillText(document.getElementById('textArea').value[0],50,50);
    }
    if(transitionSpeed != 0 && startIndex!=-1 && stopIndex!=-1 && frameNum%(Math.floor(100/transitionSpeed))==0){
        stepFunc();
    }
    hvalue = document.getElementById('hvalue').value;
    searching = document.getElementById('search').value;
}

function setSpeed(spd){
    document.getElementById('label').innerHTML = spd;
    transitionSpeed = spd;
}

function translateFunc(){
    path = [];
    visited = new Array(); //resets visited
    reachedGoal = false; isGameify = false;
    //Takes text from textArea and puts into an char array
    var inputGrid = document.getElementById('textArea').value;
    inputGridArray = String(inputGrid).split()[0];
    var tempX = 0,maxX = 0, isValue = true;
    lineArray = inputGridArray.split('\n');
    for (var i = 0; i < lineArray.length; i++){
        tempX = lineArray[i].length;
        if(maxX == 0){ maxX = tempX;}
        if(maxX != tempX){isValue = false;}
    }
    //checks to see if valid grid 
    if (isValue && lineArray[0].length != 0){
        gridX = maxX; gridY = lineArray.length;
        setUpGrid(); 
        boxWidth = gridcanvas.width/gridX;
        boxHeight = gridcanvas.height/gridY;
        hasDimension = true;
        //document.getElementById('label').innerHTML = 'Valid grid' + gridArray.length;
    }else{
        document.getElementById('label').innerHTML = 'Invalid Grid';
    }
    //or if random grid is wanted
    var randW = document.getElementById('randLength').value;
    var randH = document.getElementById('randHeight').value;
    var randNum;
    if(inputGridArray.length == 0 && randW != null && randH != null){
        inputGridArray = new Array(randH*randW);
        for(var i = 0; i < inputGridArray.length; i++){
            randNum = Math.floor((Math.random() * 10) + 1);
            if(randNum > 7){ inputGridArray[i] = 'o';}
            else{inputGridArray[i] = 'e';}
        }
        inputGridArray[Math.floor(Math.random() * randW*randH)] = 'a';
        inputGridArray[Math.floor(Math.random() * randW*randH)] = 'b';
        gridX = randW; gridY = randH;
        setUpGrid(); 
        boxWidth = gridcanvas.width/gridX;
        boxHeight = gridcanvas.height/gridY;
        hasDimension = true;
        document.getElementById('label').innerHTML = randW;
    }
    
    //takes data from input and places on grid
    var gridIndex = 0;
    for(var i = 0; i < inputGridArray.length; i++){
        if(inputGridArray[i] == 'e'){//empty
            gridArray[gridIndex].color = 'black';
            gridArray[gridIndex].sprite = 'tile';
            gridIndex++;
        }else if(inputGridArray[i]=='o'){//obstacle
            gridArray[gridIndex].color = 'blue';
            gridArray[gridIndex].sprite = 'tree';
            gridIndex++;
        }else if(inputGridArray[i]=='a'){//start
            gridArray[gridIndex].color = '#e60099';
            gridArray[gridIndex].sprite = 'pacman';
            startIndex = gridIndex;
            gridIndex++;
            gridArray[startIndex].g = 0;
            visited.push(gridArray[startIndex]);
        }else if(inputGridArray[i]=='b'){//stop
            gridArray[gridIndex].sprite = 'ghost';
            gridArray[gridIndex].color = 'red';
            stopIndex = gridIndex;
            gridIndex++;
        }
    }
    document.getElementById('information').innerHTML = 'data will be displayed here';
    //var randW = document.getElementById('randWidth').value;
}

function calcValues(){//calculates g/h/f values
    var minF = gridArray[0];
    if(startIndex != -1 && stopIndex != -1){//if there is a valid start and stop location
        for(var i = 0; i < gridArray.length; i++){//draw in all values
            if(hvalue == 'Manhattan'){
                gridArray[i].h = (Math.abs(gridArray[i].x-gridArray[stopIndex].x)+Math.abs(gridArray[i].y-gridArray[stopIndex].y))*10;
            }else if(hvalue == 'Euclidean'){
                gridArray[i].h = Math.floor(Math.sqrt((Math.pow(gridArray[i].x-gridArray[stopIndex].x,2)+Math.pow(gridArray[i].y-gridArray[stopIndex].y,2)))*10);
            }else if(hvalue == 'Diagonal'){
                gridArray[i].h = Math.max(Math.abs(gridArray[i].x-gridArray[stopIndex].x),Math.abs(gridArray[i].y-gridArray[stopIndex].y))*10;
            }
            for(var j = 0; j < visited.length; j++){
                if((gridArray[i].x == visited[j].x-1 || gridArray[i].x == visited[j].x+1 || gridArray[i].x == visited[j].x) && (gridArray[i].y == visited[j].y-1 || gridArray[i].y == visited[j].y+1 || gridArray[i].y == visited[j].y)){
                    var newG = Math.floor(Math.sqrt(Math.pow(Math.abs(gridArray[i].x-visited[j].x),2)+Math.pow(Math.abs(gridArray[i].y-visited[j].y),2))*10);
                    if(newG<gridArray[i].g-visited[j].g && gridArray[i].color != '#006622'){
                        gridArray[i].g = newG+visited[j].g;
                        gridArray[i].p = visited[j];
                    }
                }
            }
            gridArray[i].f = gridArray[i].h+gridArray[i].g;
        }
    }
}

function gamifyFunc(){
    isGameify = true;
    updateGrid();
}

function stepFunc(){//moves 1 'step'
    if(reachedGoal == false){
        var minF = gridArray[0];
        var minH = gridArray[0];
        var minG = gridArray[stopIndex];
        for(var i = 0; i < gridArray.length; i++){//draw in all values
            if(searching == 'Astar'){
                if(gridArray[i].f < minF.f && gridArray[i].color =='black' && isAdjacent(gridArray[i])){
                    minF = gridArray[i];
                    //document.getElementById('label').innerHTML = gridArray[i].x + " " + gridArray[i].y + " " +gridArray[i].f;
                }else if(gridArray[i].f < minF.f && gridArray[i].color =='red' && isAdjacent(gridArray[i])){//when the goal is reached
                    reachedGoal = true;
                    minF = gridArray[i];
                    //document.getElementById('label').innerHTML = gridArray[i].x + " " + gridArray[i].y + " " +gridArray[i].f;
                }
            }else if(searching == 'BestFirst'){
                if(gridArray[i].h < minH.h && gridArray[i].color =='black' && isAdjacent(gridArray[i])){
                    minH = gridArray[i];
                    //document.getElementById('label').innerHTML = gridArray[i].x + " " + gridArray[i].y + " " +gridArray[i].f;
                }else if(gridArray[i].h < minH.h && gridArray[i].color =='red' && isAdjacent(gridArray[i])){//when the goal is reached
                    reachedGoal = true;
                    minH = gridArray[i];
                    //document.getElementById('label').innerHTML = gridArray[i].x + " " + gridArray[i].y + " " +gridArray[i].f;
                }
            }else if(searching == 'Dijkstra'){
                if(gridArray[i].g <= minG.g && gridArray[i].color =='black' && isAdjacent(gridArray[i])){
                    minG = gridArray[i];
                    document.getElementById('label').innerHTML = gridArray[i].x + " " + gridArray[i].y + " " +gridArray[i].g;
                }else if(gridArray[i].g <= minG.g && gridArray[i].color =='red' && isAdjacent(gridArray[i])){//when the goal is reached
                    reachedGoal = true;
                    minG = gridArray[i];
                    document.getElementById('label').innerHTML = gridArray[i].x + " " + gridArray[i].y + " " +gridArray[i].g;
                }
            }
        }
        if(searching == 'Astar'){
            visited.push(minF);
            minF.color = '#006622';
        }else if(searching == 'BestFirst'){
            visited.push(minH);
            minH.color = '#006622';
        }else if(searching == 'Dijkstra'){
            visited.push(minG);
            minG.color = '#006622';
        }
    }else if (path.length == 0 && gridArray[stopIndex].sprite != 'pacman'){
        var tempNode = gridArray[stopIndex];
        var length = 0;
        while(tempNode.p != null ){
            path.push(tempNode);
            length ++;
            tempNode.color = 'yellow';
            tempNode = tempNode.p;
            //document.getElementById('label').innerHTML = tempNode.x + " " + tempNode.y;
        }
        document.getElementById('information').innerHTML = "Number of steps: " + length + "\nFinal Length: " + gridArray[stopIndex].f;
    }else if (path.length>0 && isGameify && reachedGoal == true){
        var nextSpot = path.pop();
        try{
            nextSpot.p.sprite = 'tile';}
        catch(err){}
        nextSpot.sprite = 'pacman';
    }
}

function isAdjacent(boxObj){
    var isValid = false;
    for(var i = 0; i <visited.length; i++){
        if((boxObj.x == visited[i].x-1 || boxObj.x == visited[i].x+1 || boxObj.x == visited[i].x) && (boxObj.y == visited[i].y-1 || boxObj.y == visited[i].y+1 || boxObj.y == visited[i].y)){
            isValid = true;
        }
    }
    return isValid;
}

function rect(x,y,w,h,c,s) {
    gridctx.beginPath();
    gridctx.rect(x*boxWidth+1,y*boxHeight+1,w-2,h-2);
    gridctx.closePath();
    gridctx.fillStyle = c;
    if(isGameify && x%2 ==0 && s=='tile'){
        gridctx.drawImage(img,140,0,70,70,x*boxWidth+.1,y*boxHeight+.1,w-.2,h-.2);
        gridctx.lineWidth = '6';
        gridctx.strokeStyle =c;
    }else if(isGameify && s=='tile'){
        gridctx.drawImage(img,210,0,70,70,x*boxWidth+.1,y*boxHeight+.1,w-.2,h-.2);
        gridctx.lineWidth = '6';
        gridctx.strokeStyle = c;
    }else if(isGameify && s=='pacman'){
        gridctx.drawImage(img,0,0,70,70,x*boxWidth+.1,y*boxHeight+.1,w-.2,h-.2);
        gridctx.lineWidth = '6';
        gridctx.strokeStyle = c;
    }else if(isGameify && s=='ghost'){
        gridctx.drawImage(img,70,0,70,70,x*boxWidth+.1,y*boxHeight+.1,w-.2,h-.2);
        gridctx.lineWidth = '6';
        gridctx.strokeStyle = c;
    }else if(isGameify && s=='tree'){
        gridctx.drawImage(img,280,0,70,70,x*boxWidth+.1,y*boxHeight+.1,w-.2,h-.2);
        gridctx.lineWidth = '6';
        gridctx.strokeStyle = c;
    }
    if(!isGameify){
        gridctx.fill();
        gridctx.lineWidth = '.1';
        gridctx.strokeStyle = 'white';}
    gridctx.stroke();
    //document.getElementById('label').innerHTML = document.getElementById('label').innerHTML +' ' + x + ' ' + y;
}

function setUpGrid(){
    gridArray = new Array();
    for(var y = 0; y < gridY; y++){
        for(var x = 0; x < gridX; x++){
            gridArray.push({x:x, y:y,color:'black',h:-1,g:999,f:-1,p:null,sprite:'none'});
        }
    }
}
function updateGrid(){
    for(var i = 0; i < gridArray.length; i++){//draw all the grid boxes and color
        rect(gridArray[i].x,gridArray[i].y,boxWidth,boxHeight,gridArray[i].color,gridArray[i].sprite); 
        if((gridArray[i].color == 'black' || gridArray[i].color == '#006622' || gridArray[i].color == 'yellow')&& isAdjacent(gridArray[i])){
            gridctx.fillStyle = 'white';
            if(gridArray[i].h != -1) gridctx.fillText(gridArray[i].h,gridArray[i].x*boxWidth+1,(gridArray[i].y+1)*boxHeight-5);//h values
            if(gridArray[i].g != -1) gridctx.fillText(gridArray[i].g,(gridArray[i].x+1)*boxWidth-25,(gridArray[i].y+1)*boxHeight-5);//g values
            if(gridArray[i].f != -1) gridctx.fillText(gridArray[i].f,gridArray[i].x*boxWidth+1,(gridArray[i].y)*boxHeight+15);//f values
        }
    }
    calcValues();
}
function clear(inputctx) {
    inputctx.clearRect(0, 0, 900,900 );
}