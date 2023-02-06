import styles from '../project/ProjectCard.module.css'
import { BsFillTrashFill } from 'react-icons/bs'

function ServiceCard({ id, name, cost, description, handleRemove }) {
  const remove = (e) => {
    e.preventDefault()
    handleRemove(id, cost)
  }

  return (
    <div className="post">
      <div>
        <span className="username">
          <a href="#">{name}</a>
        </span>
        <br />
        <span className="description">
          {cost} €
        </span>
      </div>
      <br />
      {/* /.user-block */}
      <p>
        {description}
      </p>
      {<div className={styles.project_card_actions}>
        <button onClick={remove}>
          <BsFillTrashFill />
          Excluir
        </button>
      </div>}
    </div>
  )
}

export default ServiceCard;


