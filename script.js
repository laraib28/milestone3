var formInput = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-content');
var resumeSection = document.getElementById('resume-display');
if (!formInput || !resumeDisplayElement || !resumeSection) {
    console.error("Form or display element not found!");
}
else {
    formInput.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log("Form submitted!");
        // Fetch form values
        var nameInput = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var skills = document.getElementById('skills').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        // Generate resume HTML
        var resumeHTML = "\n            <h3>".concat(nameInput, "</h3>\n            <p>Email: ").concat(email, "</p>\n            <p>Phone: ").concat(phone, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n        ");
        // Display resume
        resumeDisplayElement.innerHTML = resumeHTML;
        resumeSection.classList.remove('hidden'); // Unhide the resume section
    });
}
