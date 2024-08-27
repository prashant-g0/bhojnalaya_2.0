document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedback-form');

    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(feedbackForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        console.log('Feedback Submitted:', data);
        alert('Thank you for your feedback!');
        feedbackForm.reset();
    });
});
