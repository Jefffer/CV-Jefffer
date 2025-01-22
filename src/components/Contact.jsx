import React from 'react';

const Contact = () => {
    return (
      <section id="contact" className="prose mx-auto p-6 my-8 bg-gray-100 rounded-md shadow-md">
        <h2 className="text-center text-4xl font-bold">Contacto</h2>
        <p>Si deseas colaborar en proyectos interesantes, no dudes en contactarme.</p>
        <form className="flex flex-col gap-4 mt-4">
          <input type="text" placeholder="Nombre" className="p-3 border rounded-md" />
          <input type="email" placeholder="Correo Electrónico" className="p-3 border rounded-md" />
          <textarea placeholder="Mensaje" className="p-3 border rounded-md"></textarea>
          <button type="submit" className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">Enviar</button>
        </form>
      </section>
    );
  };

const sectionStyle = {
  padding: '20px',
  margin: '20px auto',
  maxWidth: '800px',
  textAlign: 'center',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
};

const listStyle = {
  listStyle: 'none',
  padding: '0',
  margin: '0',
};

export default Contact;
