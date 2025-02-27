import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
    const [formData, setFormData] = useState({name: '', email: '', feedback: '', rating: ''}); //Set up states

    const handleChange = (event) => {   // Input change handler
        const {name, value} = event.target; // Extract name and value properties from the target element that triggered the event
        setFormData({...formData, [name]: value}); // Spreads existing form data and updates the property specified by the name variable gotten from the event with the value
    };

    const handleSubmit = (event) => {   // Form submission handler
        event.preventDefault();
        const confirmationMessage = `Name: ${formData.name}\nEmail: ${formData.email}\nFeedback: ${formData.feedback}\nRating: ${formData.rating}`;
        const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);
        if (isConfirmed) {
            console.log("Submitting feedback:", formData);
            setFormData({name: '', email: '', feedback: '', rating: ''}) // Reset state ready for next change event
            alert("Thank you for your valuable feedback!");
        }
    };

    return (
        <>
            <nav>
                Tell Us What You Think
            </nav>

            <form className="feedback-form" onSubmit={handleSubmit}>
                <h2>We'd Love to Hear From You!</h2>
                <p>Please share your feedback with us.</p>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange}/>
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange}/>
                <textarea name="feedback" placeholder="Your Feedback" value={formData.feedback} onChange={handleChange}/>
                <div>
                    <span>Rate Us:</span>
                        <p><input
                            type="radio"
                            name="rating"
                            value="1"
                            onChange={handleChange}
                        /> 1</p>
                        <p><input
                            type="radio"
                            name="rating"
                            value="2"
                            onChange={handleChange}
                        /> 2</p>
                        <p><input
                            type="radio"
                            name="rating"
                            value="3"
                            onChange={handleChange}
                        /> 3</p>
                        <p><input
                            type="radio"
                            name="rating"
                            value="4"
                            onChange={handleChange}
                        /> 4</p>
                        <p><input
                            type="radio"
                            name="rating"
                            value="5"
                            onChange={handleChange}
                        /> 5</p>
                </div>
                <button type="submit">Submit Feedback</button>
            </form>
        </>
    );
};

export default FeedbackForm;
