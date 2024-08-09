const to = 'prxdevs@gmail.com';
const baseURL = 'https://mail.prxdevs.com:2011';

document.addEventListener('DOMContentLoaded', function () {
    // Select the form element
    const form = document.getElementById('rekha');

    // Add event listener for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Disable submit button to prevent multiple submissions
        const submitBtn = document.getElementById('submitBtn');
        submitBtn.disabled = true;
        console.log('submitdisabled');

        // Extract form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            date: document.getElementById('date').value,
            inquiryType: document.getElementById('inquiryType').value,
            message: document.getElementById('message').value,
            toEmail: to
        };

        // Send form data to the server using fetch
        fetch(`${baseURL}/submitForm`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Form submission response:', data);
                form.reset(); // Reset the form fields
                window.location.href = '/thankyou.html'; // Redirect to a thank you page
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error submitting form. Please try again.');
            })
            .finally(() => {
                submitBtn.disabled = false; // Re-enable the submit button
            });
    });
});

// Get the modal element
var modal = document.getElementById('modal');

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
    document.getElementById('inquiryType').value = "Trauma";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}