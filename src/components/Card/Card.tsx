import { useQuery } from "react-query";
import { useState } from "react";
import Noticia from "./components/Noticia/Noticia";
import VerMas from "./components/VerMas/VerMas";
import Loading from "./components/Loading/Loading";
import noticia from "./interface/noticia";
import "./styles/card.scss"

const request = async()=>
{
   const res = await fetch("https://api.jsonbin.io/v3/b/63654b012b3499323bf58225")
   const data = await res.json()
   return data
}

export default function Card() 
{
  const{data,isFetching,isFetched}=useQuery<{record:{notes:Array<noticia>}}>(["noticias"],request)
  const[isOpen,setIsOpen]=useState<boolean>(false)

  const {record:{notes}} = data || {record:{notes:[]}} 

  const finalNotes = isOpen ? notes : notes.slice(0,6)

  const toogleIsOpenHandle=()=>
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
            {finalNotes?.map((note) => (
              <Noticia key={note?.id} noticia={note} />
            ))}
          </ul>
          <VerMas isOpen={isOpen} toogleIsOpenHandle={toogleIsOpenHandle} />
        </>
      )}
      {isFetching && <Loading/>}
    </div>
  );
}
