// import React from 'react';
import React, { useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2j4ig4n",
        "template_vcmt7eb",
        form.current,
        "HBocGiWPceGhGPSWU"
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          form.current.reset(); // Resetea el formulario tras enviarlo
        },
        (error) => {
          setStatus("Something went wrong, please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-12"
    >
      <div className="prose container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-6 text-gray-800">
          Get <span className="text-indigo-500">in Touch</span>
        </h2>
        <p className="text-lg font-light text-gray-600 text-center mb-8 text-lg">
          Feel free to reach out to me through any of the platforms below or
          send me a direct message 🙃 I am always open to exciting new
          opportunities and collaborations. Whether it's a remote position or
          one that requires relocation, I am eager to bring my skills and
          experience to new challenges and environments!!
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
          {/* Location */}
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-blue-500 text-xl dark:text-gray-300" />
            <p className="text-lg text-gray-700 mb-0 mt-0 dark:text-gray-400">Bilbao, Spain</p>
          </div>
          {/* Email */}
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-blue-500 text-xl dark:text-gray-300" />
            <a
              href="mailto:jefre123@hotmail.com"
              className="text-lg text-gray-700 hover:text-blue-600 transition dark:text-gray-400 dark:hover:text-gray-300"
            >
              jefre123@hotmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-blue-500 text-xl dark:text-gray-300" />
            <a
              href="tel:+34646217559"
              className="text-lg text-gray-700 hover:text-blue-600 transition dark:text-gray-400 dark:hover:text-gray-300"
            >
              +34 646 217 559
            </a>
          </div>
          {/* GitHub */}
          <div className="flex items-center space-x-4">
            <FaGithub className="text-blue-500 text-xl dark:text-gray-300" />
            <a
              href="https://github.com/Jefffer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-700 hover:text-blue-600 transition dark:text-gray-400 dark:hover:text-gray-300"
            >
              GitHub
            </a>
          </div>
          {/* LinkedIn */}
          <div className="flex items-center space-x-4">
            <FaLinkedin className="text-blue-500 text-xl dark:text-gray-300" />
            <a
              href="https://www.linkedin.com/in/jefferson-rodr%C3%ADguez-rodr%C3%ADguez-354759155/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-700 hover:text-blue-600 transition dark:text-gray-400 dark:hover:text-gray-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-12 max-w-xl mx-auto bg-white shadow-lg rounded-xl p-8 transform transitionhover:shadow-xl border border-gray-200 dark:border-gray-600 dark:bg-transparent">
          <h5 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Send me a message
          </h5>
          {/* <form action="#" method="POST"> */}
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2 dark:text-gray-200"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:ring-1 focus:ring-gray-300 focus:outline-none transition duration-300 dark:bg-transparent dark:text-gray-200 dark:border-gray-600"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2 dark:text-gray-200"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm focus:ring-1 focus:ring-gray-300 focus:outline-none transition duration-300 dark:bg-transparent dark:text-gray-200 dark:border-gray-600"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2 dark:text-gray-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-1 focus:ring-gray-300 focus:outline-none transition duration-300 dark:bg-transparent dark:text-gray-200 dark:border-gray-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:bg-indigo-500 hover:shadow-lg transition duration-300 dark:text-indigo-950 dark:bg-indigo-200 dark:hover:bg-indigo-300"
            >
              Send Message
            </button>
          </form>
          {status && (
            <p className="text-center text-green-600 mt-4">{status}</p>
          )}
        </div>
      </div>
    </section>
  );
};

// Formulario de Contacto
// const Contact = () => {
//     return (
//       <section id="contact" className="prose mx-auto p-6 my-8 bg-gray-100 rounded-md shadow-md">
//         <h2 className="text-center text-4xl font-bold">Contacto</h2>
//         <p>Si deseas colaborar en proyectos interesantes, no dudes en contactarme.</p>
//         <form className="flex flex-col gap-4 mt-4">
//           <input type="text" placeholder="Nombre" className="p-3 border rounded-md" />
//           <input type="email" placeholder="Correo Electrónico" className="p-3 border rounded-md" />
//           <textarea placeholder="Mensaje" className="p-3 border rounded-md"></textarea>
//           <button type="submit" className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">Enviar</button>
//         </form>
//       </section>
//     );
//   };

const sectionStyle = {
  padding: "20px",
  margin: "20px auto",
  maxWidth: "800px",
  textAlign: "center",
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
};

const listStyle = {
  listStyle: "none",
  padding: "0",
  margin: "0",
};

export default Contact;
