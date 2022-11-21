// Button Elements

var carButton = document.getElementById("car-button");
var trumpetButton = document.getElementById('charge-button');
var constructionButton = document.getElementById('construction-button');

// Audio Elements

var carSound = document.getElementById("car-sound");
var trumpetSound = document.getElementById('trumpet-sound');
var constructionSound = document.getElementById('construction-sound');


// Button Clicks
carButton.addEventListener('click', function () {
    carSound.play();
})
trumpetButton.addEventListener('click', function () {
    trumpetSound.play();
})
constructionButton.addEventListener('click', function () {
    constructionSound.play();
})


// Button Hover
carButton.addEventListener('mouseenter', function () {
    carSound.play();
})
trumpetButton.addEventListener('mouseenter', function () {
    trumpetSound.play();
})
constructionButton.addEventListener('mouseenter', function () {
    constructionSound.play();
})