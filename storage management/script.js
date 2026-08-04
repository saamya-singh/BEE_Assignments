const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const courseError = document.getElementById("courseError");
const feedbackError = document.getElementById("feedbackError");

const storedFeedback = document.getElementById("storedFeedback");
const sessionUser = document.getElementById("sessionUser");



function submitFeedback() {

    
    const name = document.getElementById("studentName").value.trim();
    const email = document.getElementById("email").value.trim();
    const course = document.getElementById("course").value;
    const feedback = document.getElementById("feedback").value.trim();


    
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    courseError.innerHTML = "";
    feedbackError.innerHTML = "";


   
    let isValid = true;


    
    if (name === "") {

        nameError.innerHTML =
            "Name cannot be empty.";

        isValid = false;

    }


   
    if (email === "") {

        emailError.innerHTML =
            "Email cannot be empty.";

        isValid = false;

    }
    else {

       
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            emailError.innerHTML =
                "Enter a valid email.";

            isValid = false;

        }

    }


 
    if (course === "") {

        courseError.innerHTML =
            "Please select a course.";

        isValid = false;

    }


  
    if (feedback === "") {

        feedbackError.innerHTML =
            "Please enter feedback.";

        isValid = false;

    }



    if (isValid === false) {

        return;

    }


   

    localStorage.setItem("studentName", name);

    localStorage.setItem("email", email);

    localStorage.setItem("course", course);

    localStorage.setItem("feedback", feedback);


    

    sessionStorage.setItem("currentUser", name);


    

    displayStoredData();

    displaySessionUser();


    

    document.getElementById("studentName").value = "";

    document.getElementById("email").value = "";

    document.getElementById("course").value = "";

    document.getElementById("feedback").value = "";

}



function displayStoredData() {

    

    const name = localStorage.getItem("studentName");

    const email = localStorage.getItem("email");

    const course = localStorage.getItem("course");

    const feedback = localStorage.getItem("feedback");


    

    if (
        name !== null &&
        email !== null &&
        course !== null &&
        feedback !== null
    ) {

        storedFeedback.innerHTML =

            "Student Name : " + name + "<br>" +

            "Email : " + email + "<br>" +

            "Course : " + course + "<br>" +

            "Feedback : " + feedback;

    }
    else {

        storedFeedback.innerHTML =
            "No feedback stored.";

    }

}



function displaySessionUser() {

   

    const currentUser =
        sessionStorage.getItem("currentUser");



    if (currentUser !== null) {

        sessionUser.innerHTML =
            "Current Session User: " + currentUser;

    }
    else {

        sessionUser.innerHTML =
            "Current Session User:";

    }

}



function deleteStoredData() {

    

    localStorage.removeItem("studentName");

    localStorage.removeItem("email");

    localStorage.removeItem("course");

    localStorage.removeItem("feedback");


    

    sessionStorage.removeItem("currentUser");


   

    storedFeedback.innerHTML =
        "No feedback stored.";


    sessionUser.innerHTML =
        "Current Session User:";


   

    nameError.innerHTML = "";

    emailError.innerHTML = "";

    courseError.innerHTML = "";

    feedbackError.innerHTML = "";

}



displayStoredData();

displaySessionUser();



document.getElementById("studentName").addEventListener("input", function() {

    if (this.value.trim() !== "") {

        nameError.innerHTML = "";

    }

});


document.getElementById("email").addEventListener("input", function() {

    const email = this.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {

        emailError.innerHTML = "";

    }

});


document.getElementById("course").addEventListener("change", function() {

    if (this.value !== "") {

        courseError.innerHTML = "";

    }

});


document.getElementById("feedback").addEventListener("input", function() {

    if (this.value.trim() !== "") {

        feedbackError.innerHTML = "";

    }

});