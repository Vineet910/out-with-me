function playAudio() {
    $("#novideo").get(0).play();
}


function nextPage(){
    $("#ans").css("display","block");
    $("#ask-out").css("display","none");   
    $("#novideo").get(0).pause();
    $("#cheer").get(0).play();
}
function moveButton() {
    var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth);
    var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight);
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
    playAudio();
}

$("#noButton").mouseover(function(){
    moveButton();
})

$("#yesButton").click(function(){
    nextPage();
})