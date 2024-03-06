import React from 'react'
import "./styles/noticia.scss"
import noticia from '../../interface/noticia'

interface props
{
    noticia:noticia
}

export default function Noticia({noticia}:props) 
{
  const{title}=noticia

  return (
    <li className='noticia'>{title}</li>
  )
}
