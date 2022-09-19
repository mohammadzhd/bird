let block = document.querySelector('#block');
let hole = document.querySelector('#hole');
let bird = document.querySelector('#bird');
var Counter = 0;
let jumping = 0;


alert("برای شروع کلیک کنید!\n سازنده بازی : 'محمد زهدی'")


hole.addEventListener("animationiteration" , () => {
    let random1 = -(((Math.random()*10)*30)+150);
    hole.style.top = random1 + "px";
    Counter++
})

let birdAnimation = () => {
    let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if(jumping == 0){
        bird.style.top = (birdTop+3) + "px";
    }

  

    let blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let holetop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    
    let cTop = -(500-birdTop)

    
    
    if((birdTop > 470) || (60>= blockleft) && (blockleft>-20) && ((cTop<holetop) || (cTop > holetop+100))){
        alert('Game Over! Score : ' + Counter);
        bird.style.top = 100 + "px"
        Counter = 0;
        numCounter =0;
        } 
        
        let numCounter = parseInt(document.querySelector('#Counter').innerText)
        numCounter = Counter
        document.querySelector('#Counter').innerText = numCounter;
 }




setInterval(birdAnimation , 20)




function jump(){

    jumping = 1
    let jumpCount =0
    
    let jumpInterval = setInterval( function(){

        let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
        
       

        if((birdTop > 6) ){
            bird.style.top = (birdTop-3) + "px"
        }

        if(jumpCount>20){
            clearInterval(jumpInterval)
            jumping = 0;
            jumpCount = 0;

        }
        jumpCount++

    }, 13)

    

    
}