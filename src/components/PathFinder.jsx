import React from 'react';

const PathFinder = () => {

var w = window.innerWidth

var Width
var Height
var tileW
var tileH
var output


if(w>1000){
    Width = w-100
    Height = 500
    tileH=30
    tileW=30
}else if(w>400){
    Width = w-50
    Height = 550
    tileH=25
    tileW=25
}else if(w<=400){
    Width = w-25
    Height = 450
    tileH=17
    tileW=17
}


const start=0

const tileGap =1

const gridColumn = Math.floor(Width / (tileW+tileGap))
const gridRow  = Math.floor(Height/(tileH+tileGap))

var boundX=0
var boundY=0



const tiles = []

for(var c=0;c<gridColumn;c++){
    tiles[c]=[]
    for(var r=0;r<gridRow;r++){
        tiles[c][r]={x:c*(tileW+tileGap),y:r*(tileH+tileGap),state:'e'}
    }
}


tiles[start][start].state='s'
tiles[gridColumn-1][gridRow-1].state='f'


// console.table(tiles)


let canvas
let ctx

const rect=(x,y,w,h,state)=>{
    if (state == 's') {
        ctx.fillStyle = '#80ff80';
      }
      else if (state == 'f') {
        ctx.fillStyle = '#FF3855';
      }
      else if (state == 'e') {
        // ctx.fillStyle = '#ccf2ff';
        ctx.fillStyle = 'white';
      }
      else if (state == 'w') {
        ctx.fillStyle = '#b300b3';
      }
      else if (state == 'x') {
        ctx.fillStyle = '#00ace6';

      }
      else {
        ctx.fillStyle = '#ccf2ff';
      }

    ctx.beginPath()
    ctx.rect(x,y,w,h);
    ctx.closePath()
    ctx.fill()
}

const draw=()=>{
    ctx.clearRect(0,0,Width,Height)
    for(var c=0;c<gridColumn;c++){
        for(var r=0;r<gridRow;r++){
            rect(tiles[c][r].x,tiles[c][r].y,tileW,tileH,tiles[c][r].state)
        }
    }
}

window.onload=()=>{
    canvas = document.getElementById("myCanvas");
        ctx = canvas.getContext("2d");
        canvas.onmousedown = myDown
        canvas.onmouseup = myUp
        document.getElementById('start').addEventListener('click',()=>solve(45))
        document.getElementById('quick').addEventListener('click',()=>solve(0))
        document.getElementById('restart').addEventListener('click',()=>reset())
        output = document.getElementById('output')
        return setInterval(draw,10)
}

const myMove=(e)=>{
    var x = e.pageX - canvas.offsetLeft;
    var y = e.pageY - canvas.offsetTop;
  
    for(c=0; c < gridColumn; c++) {
      for(r=0; r < gridRow; r++) {
        if (c*(tileW+tileGap) < x && x < c*(tileW+tileGap)+tileW && r*(tileH+tileGap) < y && y < r*(tileH+tileGap)+tileH) {
          if (tiles[c][r].state == "e" && (c != boundX || r != boundY)) {
            tiles[c][r].state = "w";
            boundX = c;
            boundY = r;
          }
          else if (tiles[c][r].state == "w" && (c != boundX || r != boundY)) {
            tiles[c][r].state = "e";
            boundX = c;
            boundY = r;
          }
        }
      }
    }
}

const myDown=(e)=> {
      canvas.onmousemove = myMove;
      var x = e.pageX - canvas.offsetLeft;
      var y = e.pageY - canvas.offsetTop;
    
      for(var c=0; c < gridColumn; c++) {
        for(var r=0; r < gridRow; r++) {
          if (c*(tileW+tileGap) < x && x < c*(tileW+tileGap)+tileW && r*(tileH+tileGap) < y && y < r*(tileH+tileGap)+tileH) {
            if (tiles[c][r].state == "e") {
              tiles[c][r].state = "w";
              boundX = c;
              boundY = r;
            }
            else if (tiles[c][r].state == "w") {
              tiles[c][r].state = "e";
              boundX = c;
              boundY = r;
            }
          }
        }
      }
    }

const solve=(t)=>{
    var queue = [[start,start]]
    var locX
    var locY

    var pathFound = false

    var o = 'Solving...'
        o=o.split('')
        var out =''
        var i=0
        const dispOutput = setInterval(()=>{

            out = out+o[i]
            output.innerHTML = out

            if(i>o.length-2 || queue.length == 0)clearInterval(dispOutput)
            i++
        },100)

    const maze= setInterval(()=>{


        locX = queue[0][0]
        locY = queue[0][1]

        queue.shift()

        if(locX>0){
            if(tiles[locX-1][locY].state == 'f'){
                pathFound = true
            }
        }

        if(locX<gridColumn-1){
            if(tiles[locX+1][locY].state == 'f'){
                pathFound = true
            }
        }

        if(locX < gridColumn - 1 && locY < gridRow - 1 ){
            if(tiles[locX+1][locY+1].state == 'f'){
              pathFound = true;
            }
          }

          if(locX > 0 && locY < gridRow - 1 ){
            if(tiles[locX-1][locY+1].state == 'f'){
              pathFound = true;
            }
          }
        
          if(locX > 0 && locY >0 ){
            if(tiles[locX-1][locY-1].state == 'f'){
              pathFound = true;
            }
          }

          if(locX < gridColumn - 1 && locY > 0 ){
            if(tiles[locX+1][locY-1].state == 'f'){
              pathFound = true;
            }
          }

        if(locY>0){
            if(tiles[locX][locY-1].state == 'f'){
                pathFound = true
            }
        }

        if(locY<gridRow-1){
            if(tiles[locX][locY+1].state == 'f'){
                pathFound = true
            }
        }

        if (locX > 0) {
            if (tiles[locX-1][locY].state == 'e') {
              queue.push([locX-1, locY]);
              tiles[locX-1][locY].state = tiles[locX][locY].state + 'l';
            }
          }
          if (locX < gridColumn - 1) {
            if (tiles[locX+1][locY].state == 'e') {
              queue.push([locX+1, locY]);
              tiles[locX+1][locY].state = tiles[locX][locY].state + 'r';
            }
          }
      
          if(locX < gridColumn - 1 && locY < gridRow - 1){
            if(tiles[locX+1][locY+1].state == 'e'){
              queue.push([locX+1, locY+1]);
              tiles[locX+1][locY+1].state = tiles[locX][locY].state + 'm';
            }
          }
          if(locX < gridColumn - 1 && locY > 0){
            if(tiles[locX+1][locY-1].state == 'e'){
              queue.push([locX+1, locY-1]);
              tiles[locX+1][locY-1].state = tiles[locX][locY].state + 'p';
            }
          }
          if(locX > 0 && locY < gridRow - 1){
            if(tiles[locX-1][locY+1].state == 'e'){
              queue.push([locX-1, locY+1]);
              tiles[locX-1][locY+1].state = tiles[locX][locY].state + 'z';
            }
          }
          if(locX > 0  && locY > 0){
            if(tiles[locX-1][locY-1].state == 'e'){
              queue.push([locX-1, locY-1]);
              tiles[locX-1][locY-1].state = tiles[locX][locY].state + 'q';
            }
          }
      
          if (locY > 0) {
            if (tiles[locX][locY-1].state == 'e') {
              queue.push([locX, locY-1]);
              tiles[locX][locY-1].state = tiles[locX][locY].state + 'u';
            }
          }
          if (locY < gridRow - 1) {
            if (tiles[locX][locY+1].state == 'e') {
              queue.push([locX, locY+1]);
              tiles[locX][locY+1].state = tiles[locX][locY].state + 'd';
            }
          }

          if(pathFound || queue.length == 0){
            clearInterval(maze)
            console.log('whooo')
            getMazeWay()
        }
    },0)

    const mazeWay = ()=>{
        var currX=start
        var currY = start
        var i=0
        var path = tiles[locX][locY].state
        console.log(path)
        var pathLength = path.length
    
        const animation = setInterval(()=>{
            
            if(i>pathLength-1){
                clearInterval(animation)
            }
    
            if(path.charAt(i+1)=='u'){
                currY-=1
            }
            if(path.charAt(i+1)=='p'){
                currY-=1
                currX+=1
            }
            if(path.charAt(i+1)=='r'){
                currX+=1
            }
            if(path.charAt(i+1)=='m'){
                currX+=1
                currY+=1
            }
            if(path.charAt(i+1)=='d'){
                currY+=1
            }
            if(path.charAt(i+1)=='z'){
                currX-=1
                currY+=1
            }
            if(path.charAt(i+1)=='l'){
                currX-=1
            }
            if(path.charAt(i+1)=='q'){
                currX-=1
                currY-=1
            }
    
            tiles[currX][currY].state = 'x'
    
            i++
    
    
        },t)
    }

    
const getMazeWay=()=>{
    if(!pathFound){
        var o = 'Every Possible Path is Blocked :-('
        o=o.split('')
        var out =''
        var i=0
        const dispOutput = setInterval(()=>{

            out = out+o[i]
            output.innerHTML = out

            if(i>o.length-2)clearInterval(dispOutput)
            i++
        },60)

    }
    else{
        mazeWay()
        var o = 'Path Has Been Found!!! :-)'
        o=o.split('')
        var out =''
        var i=0
        const dispOutput = setInterval(()=>{

            out = out+o[i]
            output.innerHTML = out

            if(i>o.length-2)clearInterval(dispOutput)
            i++
        },60)
    }
}  
}

const reset=()=>{
    for(var c=0;c<gridColumn;c++){
        for(var r=0;r<gridRow;r++){
            if((c!=0 || r!=0)&&(c!=gridColumn-1 || r!=gridRow-1)){
                tiles[c][r].state = 'e'
            }
        }
    }

    tiles[start][start].state='s'
    tiles[gridColumn-1][gridRow-1].state='f'
    var o = 'Press Start to Solve'
        o=o.split('')
        var out =''
        var i=0
        const dispOutput = setInterval(()=>{

            out = out+o[i]
            output.innerHTML = out

            if(i>o.length-2)clearInterval(dispOutput)
            i++
        },40)
}


const myUp=()=>{
    canvas.onmousemove = null
}
    
      return (
        <div>
            <div className="grid grid-cols-3 md:flex items-center justify-around py-2 pt-4 text-white txt-sha ">
              <div className="text-center">
                  <div className="w-6 h-6 bg-[#80ff80] border-2  mx-auto"></div>
                  <p>Start</p>
              </div>
              <div className="text-center">
                  <div className="w-6 h-6 bg-[#FF3855] border-2 mx-auto"></div>
                  <p>End</p>
              </div>
              <div className="text-center">
                  <div className="w-6 h-6 bg-[#b300b3] border-2 mx-auto"></div>
                  <p>Wall</p>
              </div>
              <div className="text-center col-span-2">
                  <div className="w-6 h-6 bg-[#ccf2ff] border-2 mx-auto "></div>
                  <p>Explored Nodes</p>
              </div>
              <div className="text-center">
                  <div className="w-6 h-6 bg-[#00ace6] border-2 mx-auto"></div>
                  <p>Shortest Path</p>
              </div>
              
          </div>
          <canvas
            id="myCanvas"
            width={Width}
            height={Height}
            className=' mx-auto py-4 '
          >
          </canvas>
          <h1 id='output' className='bg-black text-white md:text-4xl text-2xl text-center w-screen txt-sha py-2 border-b-2 shadow-lg shadow-white'>Press Start to Solve</h1>
        </div>
      );}

export default PathFinder;
