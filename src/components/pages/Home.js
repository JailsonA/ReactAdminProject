
import savings from "../../img/savings.svg";
import LinkButton from "../layout/LinkButton";
function Home() {
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Dashboard</h1>
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
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
        <div className="container-fluid">
          {/* Small boxes (Stat box) */}
          <div className="row">
            <div className="col-lg-4 col-6">
              {/* small box */}
              <div className="small-box bg-info">
                <div className="inner">
                  <h3>150</h3>
                  <p>Projetos</p>
                </div>
                <div className="icon">
                  <i className="ion ion-bag" />
                </div>
                <a href="#" className="small-box-footer">
                  ver <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-4 col-6">
              {/* small box */}
              <div className="small-box bg-success">
                <div className="inner">
                  <h3>
                    53<sup style={{ fontSize: 20 }}>%</sup>
                  </h3>
                  <p>Clientes</p>
                </div>
                <div className="icon">
                  <i className="ion ion-stats-bars" />
                </div>
                <a href="#" className="small-box-footer">
                  Ver <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-4 col-6">
              {/* small box */}
              <div className="small-box bg-warning">
                <div className="inner">
                  <h3>44</h3>
                  <p>Fundo</p>
                </div>
                <div className="icon">
                  <i className="ion ion-person-add" />
                </div>
                <a href="#" className="small-box-footer">
                  Ver <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
          </div>
          {/* /.row */}
          {/* Main row */}
          <div className="row">
            {/* Left col */}
            <section className="col-lg-7 connectedSortable">
              {/* TO DO List */}
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">
                    <i className="ion ion-clipboard mr-1" />
                    To Do List
                  </h3>
                  <div className="card-tools">
                    <ul className="pagination pagination-sm">
                      <li className="page-item">
                        <a href="#" className="page-link">
                          «
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          »
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                  <ul className="todo-list" data-widget="todo-list">
                    <li>
                      {/* drag handle */}
                      <span className="handle">
                        <i className="fas fa-ellipsis-v" />
                        <i className="fas fa-ellipsis-v" />
                      </span>
                      {/* checkbox */}
                      <div className="icheck-primary d-inline ml-2">
                        <input
                          type="checkbox"
                          defaultValue=""
                          name="todo1"
                          id="todoCheck1"
                        />
                        <label htmlFor="todoCheck1" />
                      </div>
                      {/* todo text */}
                      <span className="text">Design a nice theme</span>
                      {/* Emphasis label */}
                      <small className="badge badge-danger">
                        <i className="far fa-clock" /> 2 mins
                      </small>
                      {/* General tools such as edit or delete*/}
                      <div className="tools">
                        <i className="fas fa-edit" />
                        <i className="fas fa-trash-o" />
                      </div>
                    </li>
                    <li>
                      <span className="handle">
                        <i className="fas fa-ellipsis-v" />
                        <i className="fas fa-ellipsis-v" />
                      </span>
                      <div className="icheck-primary d-inline ml-2">
                        <input
                          type="checkbox"
                          defaultValue=""
                          name="todo2"
                          id="todoCheck2"
                          defaultChecked=""
                        />
                        <label htmlFor="todoCheck2" />
                      </div>
                      <span className="text">Make the theme responsive</span>
                      <small className="badge badge-info">
                        <i className="far fa-clock" /> 4 hours
                      </small>
                      <div className="tools">
                        <i className="fas fa-edit" />
                        <i className="fas fa-trash-o" />
                      </div>
                    </li>
                    <li>
                      <span className="handle">
                        <i className="fas fa-ellipsis-v" />
                        <i className="fas fa-ellipsis-v" />
                      </span>
                      <div className="icheck-primary d-inline ml-2">
                        <input
                          type="checkbox"
                          defaultValue=""
                          name="todo3"
                          id="todoCheck3"
                        />
                        <label htmlFor="todoCheck3" />
                      </div>
                      <span className="text">Let theme shine like a star</span>
                      <small className="badge badge-warning">
                        <i className="far fa-clock" /> 1 day
                      </small>
                      <div className="tools">
                        <i className="fas fa-edit" />
                        <i className="fas fa-trash-o" />
                      </div>
                    </li>
                    <li>
                      <span className="handle">
                        <i className="fas fa-ellipsis-v" />
                        <i className="fas fa-ellipsis-v" />
                      </span>
                      <div className="icheck-primary d-inline ml-2">
                        <input
                          type="checkbox"
                          defaultValue=""
                          name="todo4"
                          id="todoCheck4"
                        />
                        <label htmlFor="todoCheck4" />
                      </div>
                      <span className="text">Let theme shine like a star</span>
                      <small className="badge badge-success">
                        <i className="far fa-clock" /> 3 days
                      </small>
                      <div className="tools">
                        <i className="fas fa-edit" />
                        <i className="fas fa-trash-o" />
                      </div>
                    </li>
                    <li>
                      <span className="handle">
                        <i className="fas fa-ellipsis-v" />
                        <i className="fas fa-ellipsis-v" />
                      </span>
                      <div className="icheck-primary d-inline ml-2">
                        <input
                          type="checkbox"
                          defaultValue=""
                          name="todo5"
                          id="todoCheck5"
                        />
                        <label htmlFor="todoCheck5" />
                      </div>
                      <span className="text">
                        Check your messages and notifications
                      </span>
                      <small className="badge badge-primary">
                        <i className="far fa-clock" /> 1 week
                      </small>
                      <div className="tools">
                        <i className="fas fa-edit" />
                        <i className="fas fa-trash-o" />
                      </div>
                    </li>
                    <li>
                      <span className="handle">
                        <i className="fas fa-ellipsis-v" />
                        <i className="fas fa-ellipsis-v" />
                      </span>
                      <div className="icheck-primary d-inline ml-2">
                        <input
                          type="checkbox"
                          defaultValue=""
                          name="todo6"
                          id="todoCheck6"
                        />
                        <label htmlFor="todoCheck6" />
                      </div>
                      <span className="text">Let theme shine like a star</span>
                      <small className="badge badge-secondary">
                        <i className="far fa-clock" /> 1 month
                      </small>
                      <div className="tools">
                        <i className="fas fa-edit" />
                        <i className="fas fa-trash-o" />
                      </div>
                    </li>
                  </ul>
                </div>
                {/* /.card-body */}
                <div className="card-footer clearfix">
                  <button type="button" className="btn btn-primary float-right">
                    <i className="fas fa-plus" /> Add item
                  </button>
                </div>
              </div>
              {/* /.card */}
            </section>
            {/* /.Left col */}
            {/* right col (We are only adding the ID to make the widgets sortable)*/}
            <section className="col-lg-5 connectedSortable">
              {/* Calendar */}
              <div className="card bg-gradient-success">
                <div className="card-header border-0">
                  <h3 className="card-title">
                    <i className="far fa-calendar-alt" />
                    Calendar
                  </h3>
                  {/* tools card */}
                  <div className="card-tools">
                    {/* button with a dropdown */}
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-success btn-sm dropdown-toggle"
                        data-toggle="dropdown"
                        data-offset={-52}
                      >
                        <i className="fas fa-bars" />
                      </button>
                      <div className="dropdown-menu" role="menu">
                        <a href="#" className="dropdown-item">
                          Add new event
                        </a>
                        <a href="#" className="dropdown-item">
                          Clear events
                        </a>
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item">
                          View calendar
                        </a>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-success btn-sm"
                      data-card-widget="collapse"
                    >
                      <i className="fas fa-minus" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-success btn-sm"
                      data-card-widget="remove"
                    >
                      <i className="fas fa-times" />
                    </button>
                  </div>
                  {/* /. tools */}
                </div>
                {/* /.card-header */}
                <div className="card-body pt-0">
                  {/*The calendar */}
                  <div id="calendar" style={{ width: "100%" }} />
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </section>
            {/* right col */}
          </div>
          {/* /.row (main row) */}
        </div>
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
              <form action="">
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="name">Project Name</label>
                    <input type="text" id="name" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputEstimatedBudget">Orçamento</label>
                    <input
                      type="number"
                      id="inputEstimatedBudget"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputStatus">Categoria</label>
                    <select id="inputStatus" className="form-control custom-select">
                      <option selected="" disabled="">
                        Seleciona uma categoria
                      </option>
                      <option>On Hold</option>
                      <option>Canceled</option>
                      <option>Success</option>
                    </select>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <input
                        type="submit"
                        defaultValue="Salvar"
                        className="btn btn-success"
                      />
                      <a href="#" className="btn btn-secondary">
                        Cancel
                      </a>
                    </div>
                  </div>
                </div>
              </form>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
        </div>
        {/* Default box */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Projects</h3>
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
          <div className="card-body p-0">
            <table className="table table-striped projects">
              <thead>
                <tr>
                  <th style={{ width: "1%" }}>#</th>
                  <th style={{ width: "20%" }}>Project Name</th>
                  <th style={{ width: "30%" }}>Team Members</th>
                  <th>Project Progress</th>
                  <th style={{ width: "8%" }} className="text-center">
                    Status
                  </th>
                  <th style={{ width: "20%" }}></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#</td>
                  <td>
                    <a>AdminLTE v3</a>
                    <br />
                    <small>Created 01.01.2019</small>
                  </td>
                  <td>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="../../dist/img/avatar.png"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="../../dist/img/avatar2.png"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="../../dist/img/avatar3.png"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="../../dist/img/avatar4.png"
                        />
                      </li>
                    </ul>
                  </td>
                  <td className="project_progress">
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-green"
                        role="progressbar"
                        aria-valuenow={57}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "57%" }}
                      ></div>
                    </div>
                    <small>57% Complete</small>
                  </td>
                  <td className="project-state">
                    <span className="badge badge-success">Success</span>
                  </td>
                  <td className="project-actions text-right">
                    <a className="btn btn-primary btn-sm" href="#">
                      <i className="fas fa-folder"></i>
                      View
                    </a>
                    <a className="btn btn-info btn-sm" href="#">
                      <i className="fas fa-pencil-alt"></i>
                      Edit
                    </a>
                    <a className="btn btn-danger btn-sm" href="#">
                      <i className="fas fa-trash"></i>
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>#</td>
                  <td>
                    <a>AdminLTE v3</a>
                    <br />
                    <small>Created 01.01.2019</small>
                  </td>
                  <td>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="../../dist/img/avatar.png"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="../../dist/img/avatar2.png"
                        />
                      </li>
                    </ul>
                  </td>
                  <td className="project_progress">
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-green"
                        role="progressbar"
                        aria-valuenow={47}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "47%" }}
                      ></div>
                    </div>
                    <small>47% Complete</small>
                  </td>
                  <td className="project-state">
                    <span className="badge badge-success">Success</span>
                  </td>
                  <td className="project-actions text-right">
                    <a className="btn btn-primary btn-sm" href="#">
                      <i className="fas fa-folder"></i>
                      View
                    </a>
                    <a className="btn btn-info btn-sm" href="#">
                      <i className="fas fa-pencil-alt"></i>
                      Edit
                    </a>
                    <a className="btn btn-danger btn-sm" href="#">
                      <i className="fas fa-trash"></i>
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>#</td>
                  <td>
                    <a>AdminLTE v3</a>
                    <br />
                    <small>Created 01.01.2019</small>
                  </td>
                  <td>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="../../dist/img/avatar.png"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="../../dist/img/avatar2.png"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="../../dist/img/avatar3.png"
                        />
                      </li>
                    </ul>
                  </td>
                  <td className="project_progress">
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-green"
                        role="progressbar"
                        aria-valuenow={77}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "77%" }}
                      ></div>
                    </div>
                    <small>77% Complete</small>
                  </td>
                  <td className="project-state">
                    <span className="badge badge-success">Success</span>
                  </td>
                  <td className="project-actions text-right">
                    <a className="btn btn-primary btn-sm" href="#">
                      <i className="fas fa-folder"></i>
                      View
                    </a>
                    <a className="btn btn-info btn-sm" href="#">
                      <i className="fas fa-pencil-alt"></i>
                      Edit
                    </a>
                    <a className="btn btn-danger btn-sm" href="#">
                      <i className="fas fa-trash"></i>
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>#</td>
                  <td>
                    <a>AdminLTE v3</a>
                    <br />
                    <small>Created 01.01.2019</small>
                  </td>
                  <td>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="../../dist/img/avatar.png"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="../../dist/img/avatar2.png"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="../../dist/img/avatar3.png"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="../../dist/img/avatar4.png"
                        />
                      </li>
                    </ul>
                  </td>
                  <td className="project_progress">
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-green"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                    <small>60% Complete</small>
                  </td>
                  <td className="project-state">
                    <span className="badge badge-success">Success</span>
                  </td>
                  <td className="project-actions text-right">
                    <a className="btn btn-primary btn-sm" href="#">
                      <i className="fas fa-folder"></i>
                      View
                    </a>
                    <a className="btn btn-info btn-sm" href="#">
                      <i className="fas fa-pencil-alt"></i>
                      Edit
                    </a>
                    <a className="btn btn-danger btn-sm" href="#">
                      <i className="fas fa-trash"></i>
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>#</td>
                  <td>
                    <a>AdminLTE v3</a>
                    <br />
                    <small>Created 01.01.2019</small>
                  </td>
                  <td>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="../../dist/img/avatar.png"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="../../dist/img/avatar4.png"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="../../dist/img/avatar5.png"
                        />
                      </li>
                    </ul>
                  </td>
                  <td className="project_progress">
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-green"
                        role="progressbar"
                        aria-valuenow={12}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "12%" }}
                      ></div>
                    </div>
                    <small>12% Complete</small>
                  </td>
                  <td className="project-state">
                    <span className="badge badge-success">Success</span>
                  </td>
                  <td className="project-actions text-right">
                    <a className="btn btn-primary btn-sm" href="#">
                      <i className="fas fa-folder"></i>
                      View
                    </a>
                    <a className="btn btn-info btn-sm" href="#">
                      <i className="fas fa-pencil-alt"></i>
                      Edit
                    </a>
                    <a className="btn btn-danger btn-sm" href="#">
                      <i className="fas fa-trash"></i>
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>#</td>
                  <td>
                    <a>AdminLTE v3</a>
                    <br />
                    <small>Created 01.01.2019</small>
                  </td>
                  <td>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="../../dist/img/avatar.png"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="../../dist/img/avatar2.png"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="../../dist/img/avatar3.png"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="../../dist/img/avatar4.png"
                        />
                      </li>
                    </ul>
                  </td>
                  <td className="project_progress">
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-green"
                        role="progressbar"
                        aria-valuenow={35}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "35%" }}
                      ></div>
                    </div>
                    <small>35% Complete</small>
                  </td>
                  <td className="project-state">
                    <span className="badge badge-success">Success</span>
                  </td>
                  <td className="project-actions text-right">
                    <a className="btn btn-primary btn-sm" href="#">
                      <i className="fas fa-folder"></i>
                      View
                    </a>
                    <a className="btn btn-info btn-sm" href="#">
                      <i className="fas fa-pencil-alt"></i>
                      Edit
                    </a>
                    <a className="btn btn-danger btn-sm" href="#">
                      <i className="fas fa-trash"></i>
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>#</td>
                  <td>
                    <a>AdminLTE v3</a>
                    <br />
                    <small>Created 01.01.2019</small>
                  </td>
                  <td>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="../../dist/img/avatar4.png"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="../../dist/img/avatar5.png"
                        />
                      </li>
                    </ul>
                  </td>
                  <td className="project_progress">
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-green"
                        role="progressbar"
                        aria-valuenow={87}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "87%" }}
                      ></div>
                    </div>
                    <small>87% Complete</small>
                  </td>
                  <td className="project-state">
                    <span className="badge badge-success">Success</span>
                  </td>
                  <td className="project-actions text-right">
                    <a className="btn btn-primary btn-sm" href="#">
                      <i className="fas fa-folder"></i>
                      View
                    </a>
                    <a className="btn btn-info btn-sm" href="#">
                      <i className="fas fa-pencil-alt"></i>
                      Edit
                    </a>
                    <a className="btn btn-danger btn-sm" href="#">
                      <i className="fas fa-trash"></i>
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>#</td>
                  <td>
                    <a>AdminLTE v3</a>
                    <br />
                    <small>Created 01.01.2019</small>
                  </td>
                  <td>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="../../dist/img/avatar.png"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="../../dist/img/avatar3.png"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="../../dist/img/avatar4.png"
                        />
                      </li>
                    </ul>
                  </td>
                  <td className="project_progress">
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-green"
                        role="progressbar"
                        aria-valuenow={77}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "77%" }}
                      ></div>
                    </div>
                    <small>77% Complete</small>
                  </td>
                  <td className="project-state">
                    <span className="badge badge-success">Success</span>
                  </td>
                  <td className="project-actions text-right">
                    <a className="btn btn-primary btn-sm" href="#">
                      <i className="fas fa-folder"></i>
                      View
                    </a>
                    <a className="btn btn-info btn-sm" href="#">
                      <i className="fas fa-pencil-alt"></i>
                      Edit
                    </a>
                    <a className="btn btn-danger btn-sm" href="#">
                      <i className="fas fa-trash"></i>
                      Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>#</td>
                  <td>
                    <a>AdminLTE v3</a>
                    <br />
                    <small>Created 01.01.2019</small>
                  </td>
                  <td>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="../../dist/img/avatar.png"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="../../dist/img/avatar3.png"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="../../dist/img/avatar4.png"
                        />
                      </li>
                      <li className="list-inline-item">
                        <img
                          alt="Avatar"
                          className="table-avatar"
                          src="../../dist/img/avatar5.png"
                        />
                      </li>
                    </ul>
                  </td>
                  <td className="project_progress">
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-green"
                        role="progressbar"
                        aria-valuenow={77}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "77%" }}
                      ></div>
                    </div>
                    <small>77% Complete</small>
                  </td>
                  <td className="project-state">
                    <span className="badge badge-success">Success</span>
                  </td>
                  <td className="project-actions text-right">
                    <a className="btn btn-primary btn-sm" href="#">
                      <i className="fas fa-folder"></i>
                      View
                    </a>
                    <a className="btn btn-info btn-sm" href="#">
                      <i className="fas fa-pencil-alt"></i>
                      Edit
                    </a>
                    <a className="btn btn-danger btn-sm" href="#">
                      <i className="fas fa-trash"></i>
                      Delete
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
        {/* Default box */}
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
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-8 order-2 order-md-1">
                <div className="row">
                  <div className="col-12 col-sm-4">
                    <div className="info-box bg-light">
                      <div className="info-box-content">
                        <span className="info-box-text text-center text-muted">
                          Estimated budget
                        </span>
                        <span className="info-box-number text-center text-muted mb-0">
                          2300
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-4">
                    <div className="info-box bg-light">
                      <div className="info-box-content">
                        <span className="info-box-text text-center text-muted">
                          Total amount spent
                        </span>
                        <span className="info-box-number text-center text-muted mb-0">
                          2000
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-4">
                    <div className="info-box bg-light">
                      <div className="info-box-content">
                        <span className="info-box-text text-center text-muted">
                          Estimated project duration
                        </span>
                        <span className="info-box-number text-center text-muted mb-0">
                          20
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <h4>Recent Activity</h4>
                    <div className="post">
                      <div className="user-block">
                        <img
                          className="img-circle img-bordered-sm"
                          src="../../dist/img/user1-128x128.jpg"
                          alt="user image"
                        />
                        <span className="username">
                          <a href="#">Jonathan Burke Jr.</a>
                        </span>
                        <span className="description">
                          Shared publicly - 7:45 PM today
                        </span>
                      </div>
                      {/* /.user-block */}
                      <p>
                        Lorem ipsum represents a long-held tradition for designers,
                        typographers and the like. Some people hate it and argue for
                        its demise, but others ignore.
                      </p>
                      <p>
                        <a href="#" className="link-black text-sm">
                          <i className="fas fa-link mr-1" /> Demo File 1 v2
                        </a>
                      </p>
                    </div>
                    <div className="post clearfix">
                      <div className="user-block">
                        <img
                          className="img-circle img-bordered-sm"
                          src="../../dist/img/user7-128x128.jpg"
                          alt="User Image"
                        />
                        <span className="username">
                          <a href="#">Sarah Ross</a>
                        </span>
                        <span className="description">
                          Sent you a message - 3 days ago
                        </span>
                      </div>
                      {/* /.user-block */}
                      <p>
                        Lorem ipsum represents a long-held tradition for designers,
                        typographers and the like. Some people hate it and argue for
                        its demise, but others ignore.
                      </p>
                      <p>
                        <a href="#" className="link-black text-sm">
                          <i className="fas fa-link mr-1" /> Demo File 2
                        </a>
                      </p>
                    </div>
                    <div className="post">
                      <div className="user-block">
                        <img
                          className="img-circle img-bordered-sm"
                          src="../../dist/img/user1-128x128.jpg"
                          alt="user image"
                        />
                        <span className="username">
                          <a href="#">Jonathan Burke Jr.</a>
                        </span>
                        <span className="description">
                          Shared publicly - 5 days ago
                        </span>
                      </div>
                      {/* /.user-block */}
                      <p>
                        Lorem ipsum represents a long-held tradition for designers,
                        typographers and the like. Some people hate it and argue for
                        its demise, but others ignore.
                      </p>
                      <p>
                        <a href="#" className="link-black text-sm">
                          <i className="fas fa-link mr-1" /> Demo File 1 v1
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-4 order-1 order-md-2">
                <h3 className="text-primary">
                  <i className="fas fa-paint-brush" /> AdminLTE v3
                </h3>
                <p className="text-muted">
                  Raw denim you probably haven't heard of them jean shorts Austin.
                  Nesciunt tofu stumptown aliqua butcher retro keffiyeh dreamcatcher
                  synth. Cosby sweater eu banh mi, qui irure terr.
                </p>
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
                  <a href="#" className="btn btn-sm btn-primary">
                    Add files
                  </a>
                  <a href="#" className="btn btn-sm btn-warning">
                    Report contact
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
        {/* Default box */}
        <div className="card card-solid">
          <div className="card-body pb-0">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                <div className="card bg-light d-flex flex-fill">
                  <div className="card-header text-muted border-bottom-0">
                    Digital Strategist
                  </div>
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="lead">
                          <b>Nicole Pearson</b>
                        </h2>
                        <p className="text-muted text-sm">
                          <b>About: </b> Web Designer / UX / Graphic Artist / Coffee
                          Lover
                        </p>
                        <ul className="ml-4 mb-0 fa-ul text-muted">
                          <li className="small">
                            <span className="fa-li">
                              <i className="fas fa-lg fa-building" />
                            </span>{" "}
                            Address: Demo Street 123, Demo City 04312, NJ
                          </li>
                          <li className="small">
                            <span className="fa-li">
                              <i className="fas fa-lg fa-phone" />
                            </span>{" "}
                            Phone #: + 800 - 12 12 23 52
                          </li>
                        </ul>
                      </div>
                      <div className="col-5 text-center">
                        <img
                          src="../../dist/img/user1-128x128.jpg"
                          alt="user-avatar"
                          className="img-circle img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="text-right">
                      <a href="#" className="btn btn-sm bg-teal">
                        <i className="fas fa-comments" />
                      </a>
                      <a href="#" className="btn btn-sm btn-primary">
                        <i className="fas fa-user" /> View Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                <div className="card bg-light d-flex flex-fill">
                  <div className="card-header text-muted border-bottom-0">
                    Digital Strategist
                  </div>
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="lead">
                          <b>Nicole Pearson</b>
                        </h2>
                        <p className="text-muted text-sm">
                          <b>About: </b> Web Designer / UX / Graphic Artist / Coffee
                          Lover
                        </p>
                        <ul className="ml-4 mb-0 fa-ul text-muted">
                          <li className="small">
                            <span className="fa-li">
                              <i className="fas fa-lg fa-building" />
                            </span>{" "}
                            Address: Demo Street 123, Demo City 04312, NJ
                          </li>
                          <li className="small">
                            <span className="fa-li">
                              <i className="fas fa-lg fa-phone" />
                            </span>{" "}
                            Phone #: + 800 - 12 12 23 52
                          </li>
                        </ul>
                      </div>
                      <div className="col-5 text-center">
                        <img
                          src="../../dist/img/user2-160x160.jpg"
                          alt="user-avatar"
                          className="img-circle img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="text-right">
                      <a href="#" className="btn btn-sm bg-teal">
                        <i className="fas fa-comments" />
                      </a>
                      <a href="#" className="btn btn-sm btn-primary">
                        <i className="fas fa-user" /> View Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                <div className="card bg-light d-flex flex-fill">
                  <div className="card-header text-muted border-bottom-0">
                    Digital Strategist
                  </div>
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="lead">
                          <b>Nicole Pearson</b>
                        </h2>
                        <p className="text-muted text-sm">
                          <b>About: </b> Web Designer / UX / Graphic Artist / Coffee
                          Lover
                        </p>
                        <ul className="ml-4 mb-0 fa-ul text-muted">
                          <li className="small">
                            <span className="fa-li">
                              <i className="fas fa-lg fa-building" />
                            </span>{" "}
                            Address: Demo Street 123, Demo City 04312, NJ
                          </li>
                          <li className="small">
                            <span className="fa-li">
                              <i className="fas fa-lg fa-phone" />
                            </span>{" "}
                            Phone #: + 800 - 12 12 23 52
                          </li>
                        </ul>
                      </div>
                      <div className="col-5 text-center">
                        <img
                          src="../../dist/img/user1-128x128.jpg"
                          alt="user-avatar"
                          className="img-circle img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="text-right">
                      <a href="#" className="btn btn-sm bg-teal">
                        <i className="fas fa-comments" />
                      </a>
                      <a href="#" className="btn btn-sm btn-primary">
                        <i className="fas fa-user" /> View Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.card-body */}
          {/* /.card-footer */}
        </div>
        {/* /.card */}
      </section>
      {/* /.content */}
    </div>

  );
}

export default Home;
