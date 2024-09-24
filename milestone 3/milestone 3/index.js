var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    //collect input values
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var exprience = document.getElementById("exprience").value;
    var Skills = document.getElementById("skills").value;
    //generated resume content dynamically
    var resumeHTML = "\n<h2><b>Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b>".concat(name, "</p>\n<p><b>Phone Number:</b>").concat(phone, "</p>\n<p><b>Email:</b>").concat(email, "</p>\n<h3>Education</h3>\n<p>").concat(education, "</p>\n<h3>Exprience</h3>\n<p>").concat(exprience, "</p>\n<h3>Skills</h3>\n<p>").concat(Skills, "</p>\n");
    // display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display is missing.');
    }
});
