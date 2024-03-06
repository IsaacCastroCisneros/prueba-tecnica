import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./styles/verMas.scss"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"


interface props
{
    toogleIsOpenHandle:()=>void
    isOpen:boolean
}

export default function VerMas({toogleIsOpenHandle,isOpen}:props) 
{
  const rotate = isOpen ? 180:0

  return (
    <button className="ver-mas" onClick={toogleIsOpenHandle}>
      {!isOpen && <span className="gradient"></span>}
      <span>ver mas</span>
      <FontAwesomeIcon icon={faChevronDown} transform={{ rotate }} />
    </button>
  );
}
