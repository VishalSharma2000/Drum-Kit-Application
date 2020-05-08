var totalDrums = document.querySelectorAll(".drum").length;


for(var i=0; i < totalDrums; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var drum = this.innerHTML;
        makeSound(drum);
        buttonPressed(drum);
    })
}

//we are applying event listener to whole document, bcoz the user will not press the key,
//particulary for any one object on the document
document.addEventListener("keypress", function(event) {
   makeSound(event.key);  
   buttonPressed(event.key);      
})

function makeSound(key) {
    var sound ;
    switch(key) {
        case "w" :
            sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;

        case "a":
            sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;
        
        case "s":
            sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;

        case "d":
            sound = new Audio("sounds/tom-1.mp3");
            sound.play();
            break;

        case "j":
            sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;

        case "k":
            sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;

        case "l":
            sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            break;

        default:
            console.log(this.innerHTML);
    }
}

function buttonPressed (currentKey) {
    var btn1 = document.querySelector("." + currentKey);
    btn1.classList.add("pressed");

    // the function will be called after time(given as second parameter)
    setTimeout(function() {
        btn1.classList.remove("pressed")
    },100); 
}