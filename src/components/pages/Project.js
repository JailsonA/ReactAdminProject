import styles from "./Project.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../layout/Loading";
import Container from "../layout/Container";
import ProjectForm from "../project/ProjectForm";
import Message from "../layout/Message";
import ServiceForm from "../service/ServiceForm";
import { parse, v4 as uuidv4 } from 'uuid'
import ServiceCard from "../service/ServiceCard";

function Project() {
  let { id } = useParams();
  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("success");
  const [services, setServices] = useState([]);


  useEffect(() => {
    // Para ver o loading
    setTimeout(
      () =>
        fetch(`http://localhost:5000/projects/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setProject(data);
            setServices(data.services)
          }),
      300
    );
  }, [id]);

  function editPost(project) {
    setMessage("");
    // budget validation
    if (project.budget < project.cost) {
      setMessage("O Orçamento não pode ser menor que o custo do projeto!");
      setType("error");
      return false;
    }

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
        setShowProjectForm(!showProjectForm);
        setMessage("Projeto atualizado!");
        setType("success");
      });
  }

  function createService(project) {
    setMessage("");
    // last service
    const lastService = project.services[project.services.length - 1]

    lastService.id = uuidv4()

    const lastServiceCost = lastService.cost

    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

    // maximum value validation
    if (newCost > parseFloat(project.budget)) {
      setMessage('Orçamento ultrapassado, verifique o valor do serviço!')
      setType('error')
      project.services.pop()
      return false
    } else if (parseFloat(lastServiceCost) < 0) {
      setMessage('Introduza um valor positivo')
      setType('error')
      project.services.pop()
      return false
    }else if (!parseFloat(lastServiceCost)) {
      setMessage('Introduza um valor - O campo valor nao pode estar vazio')
      setType('error')
      project.services.pop()
      return false
    }

    // add service cost to project cost total
    project.cost = newCost
    // update project
    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setServices(data.services)
        setShowServiceForm(!showServiceForm)
        setMessage('Serviço adicionado!')
        setType('success')
      })
  }

  function removeService(id, cost) {
    const servicesUpdated = project.services.filter(
      (service) => service.id !== id,
    )

    const projectUpdated = project

    projectUpdated.services = servicesUpdated
    projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)

    fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectUpdated),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(projectUpdated)
        setServices(servicesUpdated)
        setMessage('Serviço removido com sucesso!')
      })

  }

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }
  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm);
  }

  return (
    <>
      <br />
      <div className="content-wrapper" >
        <section className="content">
          {/* Default box */}
          {project.name ? (
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Projects Detail</h3>
                <div className="card-tools">
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-card-widget="collapse"
                    title="Collapse"
                  >
                    <i className="fas fa-minus" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-tool"
                    data-card-widget="remove"
                    title="Remove"
                  >
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              {message && <Message type={type} msg={message} />}
              <div className="card-body">
                <div className="row">
                  <div className="col-12 col-md-12 col-lg-8 order-2 order-md-1">
                    <div className="row">
                      <div className="col-12 col-sm-4">
                        <div className="info-box bg-light">
                          <div className="info-box-content">
                            <span className="info-box-text text-center text-muted">
                              Total do orçamento:
                            </span>
                            <span className="info-box-number text-center text-muted mb-0">
                              {project.budget} €
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-4">
                        <div className="info-box bg-light">
                          <div className="info-box-content">
                            <span className="info-box-text text-center text-muted">
                              Total utilizado:
                            </span>
                            <span className="info-box-number text-center text-muted mb-0">
                              {project.cost} €
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-4">
                        <div className="info-box bg-light">
                          <div className="info-box-content">
                            <span className="info-box-text text-center text-muted">
                              Categoria:
                            </span>
                            <span className="info-box-number text-center text-muted mb-0">
                              {project.category.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <br />
                        <h4>Editar Projeto</h4>
                        <div className="post">
                          {!showProjectForm ? (
                            <div className={styles.form}>
                              <p>
                                <span>!!! Atenção aos dados do projeto a ser editado</span>
                              </p>
                            </div>
                          ) : (
                            <div className={styles.form}>
                              <ProjectForm
                                handleSubmit={editPost}
                                btnText="Concluir Edição"
                                projectData={project}
                              />
                            </div>
                          )}
                        </div>
                        <h4>Serviços</h4>
                        <br />
                        {services.length > 0 &&
                          services.map((service) => (
                            <ServiceCard
                              id={service.id}
                              name={service.name}
                              cost={service.cost}
                              description={service.description}
                              key={service.id}
                              handleRemove={removeService}
                            />
                          ))
                        }
                        {services.length === 0 && <p>Não há serviços cadastrados.</p>}
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-12 col-lg-4 order-1 order-md-2">
                    <h3 className="text-primary">
                      Projeto: {project.name}
                    </h3>
                    <p className="text-muted">
                      Raw denim you probably haven't heard of them jean shorts Austin.
                      Nesciunt tofu stumptown aliqua butcher retro keffiyeh dreamcatcher
                      synth. Cosby sweater eu banh mi, qui irure terr.
                    </p>
                    <br />
                    <div className="text-left">
                      <button className="btn btn-sm bg-info" onClick={toggleProjectForm}>
                        {!showProjectForm ? <i className="fas fa-pencil-alt"> Editar projeto </i> : "Fechar"}
                      </button>
                    </div>
                    <br />
                    <div className="text-muted">
                      <p className="text-sm">
                        Client Company
                        <b className="d-block">Deveint Inc</b>
                      </p>
                      <p className="text-sm">
                        Project Leader
                        <b className="d-block">Tony Chicken</b>
                      </p>
                    </div>
                    <h5 className="mt-5 text-muted">Project files</h5>
                    <ul className="list-unstyled">
                      <li>
                        <a href="" className="btn-link text-secondary">
                          <i className="far fa-fw fa-file-word" />
                          Functional-requirements.docx
                        </a>
                      </li>
                      <li>
                        <a href="" className="btn-link text-secondary">
                          <i className="far fa-fw fa-file-pdf" /> UAT.pdf
                        </a>
                      </li>
                      <li>
                        <a href="" className="btn-link text-secondary">
                          <i className="far fa-fw fa-envelope" />
                          Email-from-flatbal.mln
                        </a>
                      </li>
                      <li>
                        <a href="" className="btn-link text-secondary">
                          <i className="far fa-fw fa-image " /> Logo.png
                        </a>
                      </li>
                      <li>
                        <a href="" className="btn-link text-secondary">
                          <i className="far fa-fw fa-file-word" />
                          Contract-10_12_2014.docx
                        </a>
                      </li>
                    </ul>
                    <div className="text-center mt-5 mb-3">
                      <div className="text-left">
                        <button className="btn btn-sm bg-info" onClick={toggleServiceForm}>
                          {!showServiceForm ? <i className="fas fa-pencil-alt">  Adicionar Serviço </i> : "Fechar"}
                        </button>
                      </div>
                    </div>
                    <h4>Adicione um serviço:</h4>
                    <div className="post">
                      <div className={styles.form}>
                        {showServiceForm && (
                          <div>
                            <ServiceForm
                              handleSubmit={createService}
                              btnText="Salvar"
                              projectData={project}
                            />
                          </div>

                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.card-body */}
            </div>
          ) : (
            <Loading />
          )}
        </section>
      </div>
    </>
  );
}

export default Project;


