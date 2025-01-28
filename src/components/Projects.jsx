import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Gestor de Tareas",
      description: "Aplicación para organizar tareas con React y .NET.",
      link: "#",
    },
    {
      title: "E-commerce",
      description:
        "Tienda en línea con carrito de compras y pasarela de pagos.",
      link: "#",
    },
    {
      title: "E-commerce",
      description:
        "Tienda en línea con carrito de compras y pasarela de pagos.",
      link: "#",
    },
    {
      title: "E-commerce",
      description:
        "Tienda en línea con carrito de compras y pasarela de pagos.",
      link: "#",
    },
    {
      title: "E-commerce",
      description:
        "Tienda en línea con carrito de compras y pasarela de pagos.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="prose mx-auto p-6 my-8">
      <h2 className="text-center text-4xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-4 border rounded-md shadow-md hover:shadow-lg transition-shadow"
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline">
              Ver más
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
