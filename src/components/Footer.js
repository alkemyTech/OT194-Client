import React from 'react'

export const Footer = () => {

  /* TODO:
    Conectar con el endpoint de datos publicos
    Cambiar el logo placeholder por el logo de la fundacion
    Colocar los links de cada seccion de la web
  */

  const publicData = {
    name: 'Somos Más!',
    sections: [
      {
        title: 'Inicio',
        link: ''
      },
      {
        title: 'Novedades',
        link: ''
      },
      {
        title: 'Actividades',
        link: ''
      },
      {
        title: 'Miembros',
        link: ''
      },
      {
        title: 'Testimonios',
        link: ''
      },
      {
        title: 'Contacto',
        link: ''
      },
    ],
    socials: [
      {
        web: 'Instagram',
        name: 'SomosMás',
        link: ''
      },
      {
        web: 'Facebook',
        name: 'Somos_Más',
        link: ''
      },
    ]
  }

  return (
    <div 
      className="sm:grid sm:grid-cols-3 sm:gap-0 flex flex-col gap-6 bg-violet-500 py-10 text-white text-center"
    >
      <div className="flex flex-col items-center gap-1">
        <img src="/favicon.ico" width={70} alt="logo de la fundacion" />
        <p className="font-bold">{publicData.name}</p>
      </div>
      <div className="w-20 mx-auto rounded-md h-0.5 bg-white flex sm:hidden" />
      <div className="flex flex-col gap-1">
        {
          publicData.sections.map(section => (
            <p className="hover:scale-105 transition-transform font-medium">
              <a href={section.link}>{section.title}</a>
            </p>
          ))
        }
      </div>
      <div className="w-20 mx-auto rounded-md h-0.5 bg-white flex sm:hidden" />
      <div className="flex flex-col gap-3">
        {
          publicData.socials.map(social => (
            <span className="flex flex-col">
              <p className="font-bold">
                {social.web}
              </p>
              <a href={social.link}>{social.name}</a>
            </span>
          ))
        }
      </div>
    </div>
  )
}
