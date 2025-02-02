import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

// const experiences = [
//   {
//     period: "May 2023 – Present",
//     location: "Bilbao",
//     company: "Ditech Group – Versia",
//     role: "Senior .Net Developer",
//     activities:
//       "Support in analysis and custom development of the AcceXible application using .NET 5 for Backend (Entity Framework) and Angular 12 for Frontend. Also, for Banco Laboral Kutxa – Outsourcing Versia: Developed custom solutions for Online Banking and provided support for legacy systems on .NET 4.5 (web) and .NET 6 (Document Managers).",
//     image: "https://www.versia.com/contenido/uploads/2018/03/logo-800x400.png",
//     },
//   {
//     period: "January 2022 – May 2023",
//     location: "Bilbao",
//     company: "Ditech Group – SISTEPLANT",
//     role: "Senior .Net Developer",
//     activities:
//       "Custom developments (DPM) and version migrations of the CAPTOR system from .NET Framework 3.5 to 4.5 for client GESTAMP, using .NET for Backend, custom views (xui, xml) for Frontend, and SQL Server for relational database management.",
//   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJWQ9jFRpq96bx2aVkT7rirbNJ9Uc-C6vXQ&s"
//     },
//   {
//     period: "April 2021 – January 2022",
//     location: "Bogotá D.C",
//     company: "Tata Consultancy Services – AON",
//     role: ".Net Developer",
//     activities:
//       "Provided bilingual (Spanish and English) support for ticket resolution within the EMMA applications for client AON, managing .NET developments and SQL Server databases.",
//   },
//   {
//     period: "June 2017 – April 2021",
//     location: "Bogotá D.C",
//     company: "Exsis Digital Angels",
//     role: "FullStack Semi Senior Developer",
//     activities:
//       "Gathered requirements and developed various projects, including an internal onboarding project (OutSystems), the 'TeamTimes' application for employee hour reporting (MVC, Python), the 'IDDEA' web app (SOAP services in .NET), a mobile Android app (Java, Kotlin), and architectural design and development of systems like 'Cartera para Seguros del Estado ICSG' (Angular 7, RESTful, Clean Architecture in .NET Core) as well as the 'Exsis Recruitment Platform' (NET Core 3.1 with AWS integrations).",
//   },
//   {
//     period: "June 2019 – July 2020",
//     location: "Bogotá D.C",
//     company: "CHUBB – Outsourcing Exsis",
//     role: ".Net Developer",
//     activities:
//       "Developed and supported functionalities in the Annualization module for Banco de Chile's insurance area using Clean Architecture in .NET Framework 4.5 and SQL Server (Entity Framework).",
//   },
//   {
//     period: "January 2018 – June 2019",
//     location: "Bogotá D.C",
//     company: "Seguros del Estado (ICSG) – Outsourcing Exsis",
//     role: "DBA, .Net Developer",
//     activities:
//       "Administered SQL Server databases, managed Windows Server and IIS, and supported/developed new modules for internal applications (Financing, Counter-guarantees, SARLAFT, etc.) using .NET Framework 3.5.",
//   },
//   {
//     period: "October 2017 – December 2017",
//     location: "Bogotá D.C",
//     company: "AXA Colpatria – Outsourcing Exsis",
//     role: "Junior .Net Developer",
//     activities:
//       "Performed functional tests for the Gemela system, and handled requirements analysis, design, and development of a complementary module for the SOAT insurance area using .NET Framework, SOAP services, and external APIs.",
//   },
//   {
//     period: "May 2018 – September 2019",
//     location: "Bogotá D.C",
//     company: "Viata Inmobiliaria – Freelance Web Design",
//     role: "Web Designer & Developer",
//     activities:
//       "Designed, developed, implemented, and supported the website (https://www.viatainmobiliaria.com/) using PHP for backend, HTML & CSS for frontend, and phpMyAdmin on Linux hosting managed by cPanel.",
//   },
// ];

const experiences = [
  
  {
    consultant: "Ditech Group",
    consultantLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJWQ9jFRpq96bx2aVkT7rirbNJ9Uc-C6vXQ&s",
    period: "January 2022 - Present",
    location: "Bilbao, Spain",
    clients: [
      {
        name: "Banco Laboral Kutxa",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Logo_Laboral_Kutxa.JPG",
        role: "Senior .Net Developer",
        period: "May 2023 – Present",
        activities:
          "Developed custom solutions for Online Banking and provided support for legacy systems on .NET 4.5 (web) and .NET 6 (Document Managers).",
      },
      {
        name: "Versia",
        logo: "https://www.versia.com/contenido/uploads/2017/11/logo.png",
        role: "Senior .Net Developer",
        period: "May 2023 – Present",
        activities:
          "Support in analysis and custom development of the AcceXible application using .NET 5 for Backend (Entity Framework) and Angular 12 for Frontend.",
      },
      {
        name: "Sisteplant",
        logo: "https://sisteplant.com/wp-content/uploads/2022/02/Sisteplant-Logo.png",
        role: "Senior .Net Developer",
        period: "May 2023 – Present",
        activities:
          "Custom developments (DPM) and version migrations of the CAPTOR system from .NET Framework 3.5 to 4.5 for client GESTAMP, using .NET for Backend, custom views (xui, xml) for Frontend, and SQL Server for relational database management.",
      },
    ],
  },
  {
    consultant: "Tata Consultancy Services",
    period: "April 2021 - January 2022",
    consultantLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgdN5uaq0RMWIAydcXeyqdkm4dtErZs3sw0w&s",
    location: "Bogotá D.C",
    clients: [
      {
        name: "AON",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ5seiuluH7Tp2HPnNshe9luEaqK6b7-NHnA&s",
        role: ".Net Developer",
        period: "April 2021 – January 2022",
        activities:
          "Provided bilingual (Spanish and English) support for ticket resolution within the EMMA applications, managing .NET developments and SQL Server databases.",
      },
    ],
  },
  {
    consultant: "Exsis Digital Angels",
    period: "June 2017 - April 2021",
    consultantLogo: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/et5zwmwaqsmtyao23keh",
    location: "Bogotá D.C",
    clients: [
      {
        name: "CHUBB",
        logo: "https://1000marcas.net/wp-content/uploads/2021/10/Chubb-logo-tm-1280x720.png",
        role: ".Net Developer",
        period: "June 2019 - July 2020",
        activities:
          "Developed and supported functionalities in the Annualization module for Banco de Chile's insurance area using Clean Architecture in .NET Framework 4.5 and SQL Server (Entity Framework).",
      },
      {
        period: "January 2018 - June 2019",
        logo: "https://seeklogo.com/images/S/Seguros_del_Estado_S_A_-logo-1C31DF4CFE-seeklogo.com.png",
        name: "Seguros del Estado (ICSG)",
        role: "DBA, .Net Developer",
        activities:
          "Administered SQL Server databases, managed Windows Server and IIS, and supported/developed new modules for internal applications (Financing, Counter-guarantees, SARLAFT, etc.) using .NET Framework 3.5.",
      },
      {
        period: "October 2017 - December 2017",
        logo: "https://entelgy.com/wp-content/uploads/2015/07/ASA_COLPATRIA_Entelgy.png",
        name: "AXA Colpatria",
        role: "Junior .Net Developer",
        activities:
          "Performed functional tests for the Gemela system, and handled requirements analysis, design, and development of a complementary module for the SOAT insurance area using .NET Framework, SOAP services, and external APIs.",
      },
    ],
  },
  {
    consultant: "Freelance",
    consultantLogo: "https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/300788621_490409453088863_7310934356003262293_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=kIEXcsm83CoQ7kNvgERtno0&_nc_zt=23&_nc_ht=scontent-mad2-1.xx&_nc_gid=AjpMwJh6cZmBAO2XPXu1Wwx&oh=00_AYA1RrVRlWkZXOTSMGd-C6TRDz4gxsKYEJpM_I4N8XY_-w&oe=67A528BE",
    location: "Bogotá D.C",
    clients: [
      {
        name: "Viata Real State",
        logo: "https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/300788621_490409453088863_7310934356003262293_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=kIEXcsm83CoQ7kNvgERtno0&_nc_zt=23&_nc_ht=scontent-mad2-1.xx&_nc_gid=AjpMwJh6cZmBAO2XPXu1Wwx&oh=00_AYA1RrVRlWkZXOTSMGd-C6TRDz4gxsKYEJpM_I4N8XY_-w&oe=67A528BE",
        role: "Web Designer & Developer",
        period: "May 2018 - September 2019",
        activities:
          "Designed, developed, implemented, and supported their website using PHP for backend, HTML & CSS for frontend, and phpMyAdmin on Linux hosting managed by cPanel.",
      },
    ],
  },
];

const Experience = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="py-12 bg-gray-50">
      <div className="prose container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-center mb-10 text-gray-800"
        >
          Professional <span className="text-indigo-500">Experience</span>
        </motion.h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setExpanded(expanded === index ? null : index)}
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={exp.consultantLogo}
                    alt={exp.consultant}
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mt-0">
                      {exp.consultant}
                    </h3>
                    <p className="text-gray-500 text-sm mb-0">{exp.location}</p>
                  </div>
                </div>
                {expanded === index ? (
                  <ChevronUpIcon className="w-6 h-6 text-gray-600" />
                ) : (
                  <ChevronDownIcon className="w-6 h-6 text-gray-600" />
                )}
              </div>

              {expanded === index && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 space-y-4"
                >
                  {exp.clients.map((client, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-100 p-4 rounded-lg shadow-sm flex items-start space-x-4"
                    >
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="w-16 h-12 object-contain"
                      />
                      <div>
                        <h4 className="text-xl font-semibold text-gray-700">
                          {client.name}
                        </h4>
                        <p className="text-sm text-gray-500">{client.period}</p>
                        <p className="text-m text-gray-500">{client.role}</p>
                        <p className="mt-2 text-gray-600 leading-relaxed">
                          {client.activities}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;