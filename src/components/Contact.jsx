import React, { useState, forwardRef } from 'react';

const Contact = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle form submission using Formspree via fetch
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formId = 'myzedyvq'; // Replace with your actual Formspree Form ID
    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        setError('Submission failed. Please try again later.');
      }
    } catch (err) {
      console.error(err);
      setError('Submission failed. Please try again later.');
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative bg-gray-50 py-16"
      style={{ scrollMarginTop: '80px' }}  // Adjust to match your navbar height
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0284C7] mb-8">
          Contact Me
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          {/* Left: SVG Image */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img src="/Form.svg" alt="Contact" className="w-3/4 h-auto" />
          </div>
          {/* Right: Contact Form */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="bg-white p-6 rounded shadow max-w-[500px] w-full">
              {submitted ? (
                <div>
                  <h3 className="text-xl font-bold text-[#0284C7] mb-4">Thank you!</h3>
                  <p>Your message has been sent. I will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {error && <p className="text-red-500 mb-4">{error}</p>}
                  <div className="mb-4">
                    <label htmlFor="fullname" className="block text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#0284C7]"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#0284C7]"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#0284C7]"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#0284C7]"
                      rows="5"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold py-2 rounded"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
