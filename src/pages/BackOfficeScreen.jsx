import React from 'react'
import { OptionCard } from "../components/Backoffice/OptionCard"
import { FaNewspaper, FaList, FaTable, FaComments, FaSitemap, FaSlideshare, FaUsers, FaUserFriends } from "react-icons/fa"

export const BackOfficeScreen = () => {

  /* TODO:
    Permitir acceso a las opciones segun el rol del usuario (No posible actualmente ya que no hay conexion con back-end, ni redux configurado).
    Que cada opcion redireccione a su pagina correspondiente (No posible ya que no esta react-router instalado)
  */

  return (
    <div className="flex justify-center items-center">
      <div className="flex gap-14 flex-wrap justify-center items-center my-14" style={{width: "80%", height: "80%"}}>
        <OptionCard title={'Novedades'} icon={<FaNewspaper size={70} />} />
        <OptionCard title={'Actividades'} icon={<FaList size={70} />} />
        <OptionCard title={'Categorias'} icon={<FaTable size={70} />} />
        <OptionCard title={'Testimonios'} icon={<FaComments size={70} />} />
        <OptionCard title={'Organizacion'} icon={<FaSitemap size={70} />} />
        <OptionCard title={'Slides'} icon={<FaSlideshare size={70} />} />
        <OptionCard title={'Usuarios'} icon={<FaUsers size={70} />} />
        <OptionCard title={'Miembros'} icon={<FaUserFriends size={70} />} />
      </div>
    </div>
  )
}
