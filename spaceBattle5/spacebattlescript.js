let player = {
    name: "USS Schwarzenneger",
    hull:20,
    firepower:5,
    accuracy: .7,
    attack(ship) {
        let prob = Math.random();
        if(prob <= this.accuracy) { 
            ship.hull-= this.firepower; 
            console.log("%cHit alien "+ ship.name + " with "+this.firepower + " damage!", "font-size:12pt; font-weight:bold; color:blue");
            
        }
        else { 
            console.log("Missed alien " + ship.name); 
        }
    }
};
class alienShip {
    constructor(index) {
        this.name="Ship " + (index+1);
        this.hull = Math.floor(Math.random()*4) + 3; 
        this.firepower =Math.floor(Math.random()*3) + 2; 
        this.accuracy =(Math.floor(Math.random()*3) + 6)/10; 
    }

    attack (ship) {
        let prob = Math.random();
        if(prob <= this.accuracy) { 
            ship.hull-= this.firepower; 
            console.log("%cYou have been hit with "+ this.firepower +" damage.", "font-size:12pt; font-weight:bold; color:blue");
            console.log("You have "+ ship.hull + " hull remaining.");
        }
        else { 
            console.log("You have been missed.");
        }
    }

};
let aliens = []; 
for(let i=0; i<6; i++) {
    aliens[i]=new alienShip(i); 
}

function playGame(){
    let gameOver = false;
    let count =0; 

    while(!gameOver && count<6) { 
        console.log("Attacking alien " + aliens[count].name);
        player.attack(aliens[count]); 
        console.log("Alien "+ aliens[count].name + " has " + aliens[count].hull + " hull remaining");
        if(aliens[count].hull <=0) { 
            console.log("%c Destroyed " + aliens[count].name,"font-size:14pt; font-weight:bold; color:red");
            if(count <5){  
                let choice = prompt("Would you like to attack the next ship or retreat?");
                if(choice ==="attack") {
                    count++; 
                }
                else{ 
                    gameOver=true;
                }
            }
            else { 
                count++; 
            }
        }
        else { 
            console.log("You are being attacked by alien "+ aliens[count].name);
            aliens[count].attack(player); 
            if(player.hull <=0) { 
                console.log("%c Sorry, your ship has been destroyed!", "font-size:14pt; font-weight:bold; color:red");
                gameOver = true;
            }
        }
    }

    if(count === 6) { 
        console.log("%cYou have destroyed all six alien ships! You win!", "font-size:20pt; font-weight:bold; color:green");
    }
    else { 
        console.log("%cGame over! You lose!", "font-size:20pt; font-weight:bold; color:green");
    }
}