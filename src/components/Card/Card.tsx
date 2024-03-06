import { useQuery } from "react-query";
import Noticia from "./components/Noticia/Noticia";
import "./styles/card.scss"
import noticia from "./interface/noticia";
import VerMas from "./components/VerMas/VerMas";
import { useState } from "react";

export default function Card() 
{
  const{data}=useQuery(["noticias"],request)
  const[isOpen,setIsOpen]=useState<boolean>(false)

  async function request()
  {
     const res = await fetch("https://api.jsonbin.io/v3/b/63654b012b3499323bf58225")
     const data = await res.json()
     return data
  }

  const finalData:{record:{notes:Array<noticia>}} = data || {record:{notes:[]}} 
  const{notes}=finalData.record 

  const finalNotes = isOpen ? notes : notes.slice(0,6)

  function toogleIsOpenHandle()
  {
    setIsOpen(prev=>!prev)
  }

  return (
    <div className="card">
      <p className="card__title">ultimas noticias</p>
      <span className="card__underscore"></span>
      {notes.length > 0 && (
        <ul className="card__list">
          {finalNotes.map((note) => (
            <Noticia key={note.id} {...note} />
          ))}
        </ul>
      )}
      <VerMas isOpen={isOpen} toogleIsOpenHandle={toogleIsOpenHandle}/>
    </div>  
  );
}
