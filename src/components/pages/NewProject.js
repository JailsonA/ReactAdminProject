import { useNavigate } from 'react-router-dom';
import style from "./NewProject.module.css";
import ProjectForm from "./../project/ProjectForm";
import Container from '../layout/Container';
function NewProject() {

  const history = useNavigate()
  /* criar post projecto */
  function createPost(project) {
    // initialize cost and services
    project.cost = 0;
    project.services = [];

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        // redirect to project
        history('/projects', { state: { message: 'Projeto criado com sucesso!' } });
      })
      .catch((err) => console.log(err));

  }

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Criar Projeto</h1>
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Criar Projeto</li>
              </ol>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.content-header */}
      {/* Main content */}
      <section className="content">

        {/* /.container-fluid */}
        <div className="row">
          <div className="col-md-12">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Formulario Projeto</h3>
                <div className="card-tools">
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-card-widget="collapse"
                    title="Collapse"
                  >
                    <i className="fas fa-minus" />
                  </button>
                </div>
              </div>
              <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
        </div>
      </section>
      {/* /.content */}
    </div>
  );
}

export default NewProject;


