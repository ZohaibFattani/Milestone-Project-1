//function for when left arrow key is pressed
function moveLeft(){
    //gets left position of character
    parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    //removes 100px
    left -= 100;
    //if statement so charcter stays within game div
    if(left>=0){
        //makes it go left
    character.style.left = left + 'px';
    }
}
//function for when right arrow key is pressed
function moveRight(){
    //gets right position of character
    parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    //adds 100 px
    left += 100;
    //if statement so charcter stays within game div
    if(left<300){
        //makes it go right
    character.style.left = left + 'px';
    }
}
//event listener wait for any of the keys to be pressed
document.addEventListener('keydown', event => {
    //if statements to check if left or right arrow key was pressed
    if(event.key==="ArrowLeft"){
        //left was pressed so moveLeft function is called
        moveLeft()
    }
    if(event.key==="ArrowRight"){
        //right was pressed so moveRight function is called
        moveRight()
    }
})
//function to change left position of block to either 0px, 100px, or 300px, so it comes down in one of the three columns
//function that runs everytime animation starts
let block = document.getElementById('block');
//counter that displays score at the end
let counter = 0;
//runs everytime animation runs
block.addEventListener('animationiteration', ()=>{
    //random = any random number under 3(0,1, or 2)
    let random = Math.floor(Math.random()*3);
    //multiply by 100, (0,100, or 200)
    left = random * 100
    //set new left position
    block.style.left = left + 'px';
    //increment everytime function runs
    counter++;
})
//hit detection
//interval function that checks if block is on top of character
//runs every millisecond
setInterval(function(){
    //gets left position of character
    let characterLeft = parseInt(window.getComputedStyle(character)
    .getPropertyValue('left'));
    //gets left position of block
    let blockLeft = parseInt(window.getComputedStyle(block)
    .getPropertyValue('left'));
    //gets top position of block
    let blockTop = parseInt(window.getComputedStyle(character)
    .getPropertyValue('top'));
    //checks if block is on top of character
    if(characterLeft == blockLeft &&
        blockTop<500 && blockTop>300){
//             alert('Game Over. Score:'+ counter)
            //removes animation 
            block.style.animation = 'none';
    }
}, 1);
