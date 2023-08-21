
//get input text
let comment = document.querySelector(".user-comment");


//get comment section output
let commentSection = document.querySelector(".list-group");

// get comments from local storage
let savedComments = JSON.parse(localStorage.getItem("saved-comments")) || [];

// add saved comments to comment section
commentSection.innerHTML += savedComments.join("");

//add comment button
function addComment() {


    //create new list item
    let newComment = `
    <a class="list-group-item" >
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">User comment</h5>
            <small>${dateMaker()}</small>
        </div>
        <p class="mb-1">${comment.value}</p>
    </a>
    `
    //clear input text
    comment.value = "";

    // save comment to local storage
    let savedComments = JSON.parse(localStorage.getItem("saved-comments")) || [];
    savedComments.push(newComment);
    localStorage.setItem("saved-comments", JSON.stringify(savedComments));

    //add new list item to comment section
    commentSection.innerHTML += newComment;
}


function dateMaker() {
    // Create a new Date object for the current date
    const currentDate = new Date();

    // Define an array of month names
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Get the day, month, and year
    const day = currentDate.getDate();
    const month = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    // Format the date string
    return `${day} ${month} ${year}`;

}