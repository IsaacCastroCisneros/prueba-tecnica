import React from 'react'
import "./styles/noticia.scss"
import noticia from '../../interface/noticia'

interface props extends noticia
{
    
}

export default function Noticia({title}:props) 
{
  return (
    <li className='noticia'>{title}</li>
  )
}
