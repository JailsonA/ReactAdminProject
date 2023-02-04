import { useNavigate } from 'react-router-dom';
import style from "./NewProject.module.css";
import ProjectForm from "./../project/ProjectForm";
function NewProject() {

  const history = useNavigate()

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
        history('/projects',{state: {message: 'Projeto criado com sucesso!'}});
      })
      .catch((err) => console.log(err));

  }

  return (
    <div className={style.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie o seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar projeto"/>
    </div>
  );
}

export default NewProject;
