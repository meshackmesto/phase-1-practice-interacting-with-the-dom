"use strict";

let playing = true,
    interval = null,
    counterElement = document.getElementById("counter");

window.onload = function() {
    interval = setInterval(function() {
        let counter = parseInt(counterElement.innerText);
        counterElement.innerText = counter + 1;
    }, 1000);
};

let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let heart = document.getElementById("heart");
let pause = document.getElementById("pause");
let commentForm = document.getElementsByTagName("form")[0];

minus.addEventListener("click", function() {
    let counter = parseInt(counterElement.innerText);
    counterElement.innerText = counter - 1;
});

plus.addEventListener("click", function() {
    let counter = parseInt(counterElement.innerText);
    counterElement.innerText = counter + 1;
});

heart.addEventListener("click", function() {
    let counter = parseInt(counterElement.innerText);
    let likesElement = document.querySelector(".likes");
    let likes = Array.from(likesElement.children).map(function(a) {
        return parseInt(a.dataset.num);
    });

    if (likes.includes(counter)) {
        let likeElement = document.querySelector(`[data-num=""]`);
        let likesCount = parseInt(likeElement.children[0].innerText);
        likeElement.innerHTML = counter + " has been liked <span>" + (likesCount + 1) + "</span> times";
    } else {
        let likeElement = document.createElement("li");
        likeElement.setAttribute("data-num", counter);
        likeElement.innerHTML = counter + " has been liked <span>1</span> time";
        likesElement.appendChild(likeElement);
    }
});

pause.addEventListener("click", function() {
    if (playing) {
        playing = false;
        clearInterval(interval);
        this.innerText = "resume";
        Array.from(document.getElementsByTagName("button")).forEach(function(a) {
            a.disabled = true;
        });
    } else {
        playing = true;
        interval = setInterval(function() {
            let counter = parseInt(counterElement.innerText);
            counterElement.innerText = counter + 1;
        }, 1000);
        this.innerText = "pause";
        Array.from(document.getElementsByTagName("button")).forEach(function(a) {
            a.disabled = "";
    }
});

commentForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let commentInput = this.children[0];
    let comment = commentInput.value;
    commentInput.value = "";
    let commentsElement = document.querySelector(".comments");
    let commentElement = document.createElement("p");
    commentElement.innerText = comment;
    commentsElement.appendChild(commentElement);
});