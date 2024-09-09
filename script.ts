// script.ts

// Function to handle form submission and generate resume
function generateResume(event: Event): void {
    event.preventDefault(); // Prevent the default form submission behavior

    // Fetch form elements
    const nameInput = document.getElementById('name') as HTMLInputElement | null;
    const emailInput = document.getElementById('email') as HTMLInputElement | null;
    const phoneInput = document.getElementById('phone') as HTMLInputElement | null;
    const skillsInput = document.getElementById('skills') as HTMLInputElement | null;
    const educationInput = document.getElementById('education') as HTMLTextAreaElement | null;
    const experienceInput = document.getElementById('experience') as HTMLTextAreaElement | null;

    // Validate inputs and extract values
    const name = nameInput?.value || '';
    const email = emailInput?.value || '';
    const phone = phoneInput?.value || '';
    const skills = skillsInput?.value.split(',').map(skill => skill.trim()) || [];
    const education = educationInput?.value || '';
    const experience = experienceInput?.value || '';

    // Generate resume content using the user input
    const resumeContent = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h4>Skills</h4>
        <ul>
            ${skills.map(skill => `<li>${skill}</li>`).join('')}
        </ul>
        <h4>Education</h4>
        <p>${education}</p>
        <h4>Work Experience</h4>
        <p>${experience}</p>
    `;

    // Display the generated resume
    const resumeSection = document.getElementById('resume-section');
    const resumeContentDiv = document.getElementById('resume-content');

    if (resumeSection && resumeContentDiv) {
        resumeContentDiv.innerHTML = resumeContent;
        resumeSection.classList.remove('hidden'); // Show the resume section
    } else {
        console.error('Resume section or content div not found.');
    }
}

// Attach the event listener to the form after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement | null;
    if (form) {
        form.addEventListener('submit', generateResume); // Add submit event listener to the form
    } else {
        console.error('Resume form not found.');
    }
});
