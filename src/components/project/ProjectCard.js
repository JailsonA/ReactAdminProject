import styles from "./ProjectCard.module.css";
import { Link } from 'react-router-dom'
import { BsPencil, BsFillTrashFill } from "react-icons/bs";

function ProjectCard({ id, name, budget, category, handleRemove }) {

  const remove = (e) => {
    e.preventDefault()
    handleRemove(id)
  }

  return (
    <>



      <div className="col-12 col-sm-6 col-md-3 d-flex align-items-stretch flex-column">
        <div className="card bg-light d-flex flex-fill">
          <div className="card-header text-muted border-bottom-0">
            Projeto Detalhes
          </div>
          <div className="card-body pt-0">
            <div className="row">
              <div className="col-7">
                <h2 className="lead">
                  <b>{name}</b>
                </h2>
                <p className="text-muted text-sm">
                  <span>Orçamento:</span> {budget} €
                </p>
                <ul className="ml-4 mb-0 fa-ul text-muted">
                  <li className="small">
                    <p className={styles.category_text}>
                      <span className={`${styles[category.toLowerCase()]}`}></span> {category}
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-5 text-center">
                <img
                  src="../../dist/img/AdminLTELogo.png"
                  alt="user-avatar"
                  className="img-circle img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="text-right">
              <Link className="btn btn-sm bg-info" to={"/project/" + id}>
                <i className="fas fa-pencil-alt" /> Editar
              </Link>
              <button className="btn btn-sm btn-danger" onClick={remove}>
                <i className="fas fa-trash" />
                Excluir
              </button>
            </div>
          </div>
        </div>
      </div>

    </>

  );
}

export default ProjectCard;
