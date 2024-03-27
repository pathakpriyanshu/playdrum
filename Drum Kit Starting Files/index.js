// document.querySelector("button").addEventListener('click',function(){
//     alert("I get clicked");
// });

// for all button
// var numberofvar = document.querySelector(".drum").length
// for (var i=0 ; i < numberofvar; i++){
//     document.querySelector(".drum")[i].addEventListener('click',function(){
//         alert("I get clicked");
//     });
// }



// var drums = document.querySelectorAll(".drum");


// for (var i = 0; i < drums.length; i++) {
//     drums[i].addEventListener('click', function () {
//         alert("I get clicked");
//     });
// }

// for (var i = 0; i < drums.length; i++) {
//     drums[i].addEventListener('click', function () {
//         // console.log(this)
//         this.style.color = 'white'
//     });
// }




// var audio = new Audio("sounds/tom-1.mp3");
//         audio.play();


var drums = document.querySelectorAll(".drum");

for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        switch (buttonInnerHTML) {
            case "w":
                var audio = new Audio("sounds/tom-1.mp3")
                audio.play()
                break;
            case "a":
                var audio = new Audio("sounds/tom-2.mp3")
                audio.play();
                break;
            case "s":
                var audio = new Audio("sounds/tom-3.mp3")
                audio.play();
                break;
            case "d":
                var audio = new Audio("sounds/tom-4.mp3")
                audio.play();
                break;
            case "j":
                var audio = new Audio("sounds/crash.mp3")
                audio.play();
                break;
            case "k":
                var audio = new Audio("sounds/kick-bass.mp3")
                audio.play();
                break;
            case "l":
                var audio = new Audio("sounds/snare.mp3")
                audio.play();
                break;


            default:
                console.log(buttonInnerHTML)
                break;
        }
    });
}



for (var i = 0; i < drums.length; i++) {
    drums[i].addEventListener("keypress", function () {
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });
}
    

document.addEventListener("keypress", function(event){
    makeSound(event.key);

    buttonAnimation(event.key);
});
// in notes concept of global event was written

function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play()
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3")
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3")
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3")
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3")
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3")
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3")
            audio.play();
            break;


        default:
            console.log(buttonInnerHTML)
            break;
    }

}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+ currentKey)

    activeButton.classList.add("pressed")
}











