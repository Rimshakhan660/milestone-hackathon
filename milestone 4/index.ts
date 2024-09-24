const form=document.getElementById(`resume-form`) as HTMLFormElement;
const resumeDisplayElement=document.getElementById(`resume-display`) as HTMLDivElement;
form.addEventListener(`submit`,(event:Event)=>{
 event.preventDefault();

 //collect input values
 const name=(document.getElementById(`name`) as HTMLInputElement).value
 const phone=(document.getElementById(`phone`) as HTMLInputElement).value
 const email=(document.getElementById(`email`) as HTMLInputElement).value
 const education=(document.getElementById(`education`) as HTMLInputElement).value
 const exprience=(document.getElementById(`exprience`) as HTMLInputElement).value
 const Skills=(document.getElementById(`skills`) as HTMLInputElement).value

//generated resume content dynamically
const resumeHTML=`
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
`
// display the generated resume
if(resumeDisplayElement){
 resumeDisplayElement.innerHTML=resumeHTML;
}else{
 console.error('The resume display is missing.');
}
});