"use strict";
const form = document.getElementById(`resume-form`);
const resumeDisplayElement = document.getElementById(`resume-display`);
form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    //collect input values
    const name = document.getElementById(`name`).value;
    const phone = document.getElementById(`phone`).value;
    const email = document.getElementById(`email`).value;
    const education = document.getElementById(`education`).value;
    const exprience = document.getElementById(`exprience`).value;
    const Skills = document.getElementById(`skills`).value;
    //generated resume content dynamically
    const resumeHTML = `
<h2><b> Editable Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b><span contenteditable="true">${name}</span></p>
<p><b>Phone Number:</b><span contenteditable="true">${name}</span></p>
<p><b>Email:</b><span contenteditable="true">${name}</span>$</p>
<h3>Education</h3>
<p contenteditable="true>${education}</p>
<h3>Exprience</h3>
<p contenteditable="true>${exprience}</p>
<h3>Skills</h3>
<p contenteditable="true">${Skills}</p>
`;
    // display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display is missing.');
    }
});
