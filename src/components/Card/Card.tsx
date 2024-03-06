import { useQuery } from "react-query";
import Noticia from "./components/Noticia/Noticia";
import "./styles/card.scss"
import noticia from "./interface/noticia";
import VerMas from "./components/VerMas/VerMas";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Card() 
{
  const{data,isFetching,isFetched}=useQuery(["noticias"],request)
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
      <p className="card__title">últimas noticias</p>
      <span className="card__underscore"></span>
      {isFetched && (
        <>
          <ul className="card__list">
            {finalNotes.map((note) => (
              <Noticia key={note.id} {...note} />
            ))}
          </ul>
          <VerMas isOpen={isOpen} toogleIsOpenHandle={toogleIsOpenHandle} />
        </>
      )}
      {isFetching && <span className="card__loading"><FontAwesomeIcon icon={faSpinner} spin={true}/></span>}
    </div>
  );
}
