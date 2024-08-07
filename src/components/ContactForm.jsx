// src/components/ContactForm.js
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x4jg1vc', 'template_fcn071h', form.current, 'R7M7T6qv1XYC0sxm5')
      .then((result) => {
          console.log(result.text);
          alert("Message Sent Successfully!");
      }, (error) => {
          console.log(error.text);
          alert("An error occurred, Please try again");
      });
  };

  return (
    <section className="contact py-12 bg-gray-200 dark:bg-gray-600" id="contact">
      <div className="container mx-auto">
        <h2 className="heading font-mono text-3xl font-bold text-center mb-8">
          You Can Say Me Hello!
        </h2>
        <h2 className="heading font-mono text-3xl font-bold text-center mb-8">
          And Share Your Feedback
        </h2>
        <div className="content justify-center flex flex-col lg:flex-row items-center">
          
          <form ref={form} onSubmit={sendEmail} className=" text-black w-full max-w-lg bg-gradient-to-t from-slate-600 to-gray-400 dark:bg-gradient-to-t dark:from-gray-300 dark:to-gray-400 p-8 rounded-lg shadow-lg">
            <div className="form-group space-y-4">
              <div className="field relative">
                <input type="text" name="name" placeholder="Name" required className="w-full py-3 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"/>
                <i className="fas fa-user absolute top-3 right-3 text-gray-400"></i>
              </div>
              <div className="field relative">
                <input type="email" name="email" placeholder="Email" required className="w-full py-3 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"/>
                <i className="fas fa-envelope absolute top-3 right-3 text-gray-400"></i>
              </div>
              <div className="field relative">
                <input type="text" name="phone" placeholder="Phone" className="w-full py-3 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700"/>
                <i className="fas fa-phone-alt absolute top-3 right-3 text-gray-400"></i>
              </div>
              <div className="message relative">
                <textarea name="message" placeholder="Message" required className="w-full py-3 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 h-32"></textarea>
                <i className="fas fa-comment-dots absolute top-3 right-3 text-gray-400"></i>
              </div>
            </div>
            <div className="button-area mt-6 text-center">
              <button type="submit" className="dark:bg-gray-800 dark:text-white  text-black bg-white font-bold py-3 px-6 rounded-lg hover:bg-blue-500 dark:hover:bg-blue-800 transition">
                Submit <i className="fa fa-paper-plane ml-2"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
