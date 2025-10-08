import React, { useState } from 'react';

// --- Main Application Component ---
const App = () => {
    
    // Form state using useState, updated to include postcode and subject
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        postcode: '', // New field
        subject: '',  // New field
        message: ''
    });

    // State to manage the submission success message
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Handler for updating form data on input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        
        // Set success state for UI feedback (replaces alert())
        setIsSubmitted(true);
        
        // Reset form fields after submission
        setFormData({
            name: '',
            email: '',
            postcode: '',
            subject: '',
            message: ''
        });

        // Hide success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };
    
    // NOTE: The ImageCard helper component has been removed to simplify the structure.

    return (
        <div className="min-h-screen bg-neutral-700 font-sans text-white p-4 sm:p-8 md:p-12">
            
            <div className="max-w-6xl mx-auto">
                
                {/* New Contact Form Section */}
                <div className="mt-16 pt-8 mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 uppercase tracking-wider text-amber-500">
                        Get In Touch
                    </h2>
                    
                    <form 
                        onSubmit={handleSubmit}
                        className="max-w-xl mx-auto p-6 md:p-10 bg-neutral-800 rounded-xl shadow-2xl border border-amber-600 space-y-6"
                    >
                        {/* Success Message Display */}
                        {isSubmitted && (
                            <div className="bg-green-700 p-3 rounded-lg text-center font-semibold mb-4 animate-fadeIn">
                                Thank you! Your enquiry has been sent successfully.
                            </div>
                        )}

                        {/* Name Input */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-150"
                                placeholder="Your Name"
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-150"
                                placeholder="you@example.com"
                            />
                        </div>

                        {/* Postcode Input (New Field) */}
                        <div>
                            <label htmlFor="postcode" className="block text-sm font-medium text-slate-300 mb-2">
                                Postcode / Zip Code
                            </label>
                            <input
                                type="text"
                                id="postcode"
                                name="postcode"
                                value={formData.postcode}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-150"
                                placeholder="e.g., SW1A 0AA"
                            />
                        </div>

                        {/* Subject Input (New Field) */}
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-150"
                                placeholder="e.g., Request for a Quote"
                            />
                        </div>

                        {/* Message Textarea */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                                Your Enquiry / Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-150 resize-y"
                                placeholder="Tell us about the work you need done..."
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full px-6 py-3 mt-4 bg-amber-700 text-white font-bold rounded-lg shadow-lg hover:bg-amber-600 transition duration-200 uppercase tracking-widest text-base focus:outline-none focus:ring-4 focus:ring-amber-500/50"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
                
                {/* Optional: Separator for next section (if there was one) */}
                <div className="w-3/4 h-px mx-auto bg-neutral-600 mt-16"></div>

            </div>
            
        </div>
    );
};

export default App;
