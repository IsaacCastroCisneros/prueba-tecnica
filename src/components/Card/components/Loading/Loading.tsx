import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Loading() 
{
  return (
    <span className="card__loading"><FontAwesomeIcon icon={faSpinner} spin={true}/></span>
  )
}
