console.log("about.js loaded");
//get like button status from local storage
let like = JSON.parse(localStorage.getItem("about-liked")) || false;

//set like icon based on like status
let aboutEl = document.querySelector(".card-body > img");
aboutEl.src = like == true ? "../assets/heart_filled.png" : "../assets/heart_outline.png";

//like button
function liked(e) {

    //Change image on click
    e.target.src = like ? "../assets/heart_outline.png" : "../assets/heart_filled.png";

    //Toggle like status
    like = !like;

    //Save like status to local storage
    localStorage.setItem("about-liked", like)
}

