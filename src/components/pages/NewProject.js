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
                  <a href="#">Dashboard</a>
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
          <div className="col-md-8">
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
          <div class="col-4" id="accordion">
            <div class="card card-primary card-outline">
              <a class="d-block w-100" data-toggle="collapse" href="#collapseOne">
                <div class="card-header">
                  <h4 class="card-title w-100">
                    1. Descrição sobre o registo
                  </h4>
                </div>
              </a>
              <div id="collapseOne" class="collapse show" data-parent="#accordion">
                <div class="card-body">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                </div>
              </div>
            </div>
            <div class="card card-primary card-outline">
              <a class="d-block w-100" data-toggle="collapse" href="#collapseTwo">
                <div class="card-header">
                  <h4 class="card-title w-100">
                    2. Nome
                  </h4>
                </div>
              </a>
              <div id="collapseTwo" class="collapse" data-parent="#accordion">
                <div class="card-body">
                  Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </div>
              </div>
            </div>
            <div class="card card-primary card-outline">
              <a class="d-block w-100" data-toggle="collapse" href="#collapseThree">
                <div class="card-header">
                  <h4 class="card-title w-100">
                    3. Orçamento
                  </h4>
                </div>
              </a>
              <div id="collapseThree" class="collapse" data-parent="#accordion">
                <div class="card-body">
                  Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </div>
              </div>
            </div>
            <div class="card card-warning card-outline">
              <a class="d-block w-100" data-toggle="collapse" href="#collapseFour">
                <div class="card-header">
                  <h4 class="card-title w-100">
                    4. Categoria
                  </h4>
                </div>
              </a>
              <div id="collapseFour" class="collapse" data-parent="#accordion">
                <div class="card-body">
                  Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                </div>
              </div>
            </div>
            <div class="card card-warning card-outline">
              <a class="d-block w-100" data-toggle="collapse" href="#collapseFive">
                <div class="card-header">
                  <h4 class="card-title w-100">
                    5. Serviço
                  </h4>
                </div>
              </a>
              <div id="collapseFive" class="collapse" data-parent="#accordion">
                <div class="card-body">
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
                </div>
              </div>
            </div>
            <div class="card card-warning card-outline">
              <a class="d-block w-100" data-toggle="collapse" href="#collapseSix">
                <div class="card-header">
                  <h4 class="card-title w-100">
                    6. Custo Serviço
                  </h4>
                </div>
              </a>
              <div id="collapseSix" class="collapse" data-parent="#accordion">
                <div class="card-body">
                  Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /.content */}
    </div>
  );
}

export default NewProject;


