import React, { useEffect, useState, useCallback } from 'react';
import logo from '../assets/img/logo.png';
import userImg from '../assets/img/logged-user.jpg';
import axios from '../default_axios';
import { NavLink } from 'react-router-dom';

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = useCallback(() => {
    setIsLoading(true);
    axios
      .get('admin/user/get', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('user_access')}`,
        },
      })
      .then((response) => {
        setIsLoading(false);
        if (response.status === 201 || response.status === 200) {
          setUsers(response.data);
        } else {
          throw new Error('Something went wrong');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    try {
      fetchUsers();
    } catch (error) {
      alert(error.message);
    }
  }, [fetchUsers]);

  if (isLoading) {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <section className="body">
      {/* <!-- start: header -->

			<!-- start: header --> */}
      <header className="header">
        <div className="logo-container">
          <a href="../4.0.0" className="logo">
            <img src={logo} width="75" height="35" alt="Porto Admin" />
          </a>

          <div
            className="d-md-none toggle-sidebar-left"
            data-toggle-classname="sidebar-left-opened"
            data-target="html"
            data-fire-event="sidebar-left-opened"
          >
            <i className="fas fa-bars" aria-label="Toggle sidebar"></i>
          </div>
        </div>

        {/* <!-- start: search & user box --> */}
        <div className="header-right">
          <span className="separator"></span>

          <span className="separator"></span>

          <div id="userbox" className="userbox">
            <button data-bs-toggle="dropdown">
              <figure className="profile-picture">
                <img
                  src={userImg}
                  alt="Joseph Doe"
                  className="rounded-circle"
                  data-lock-picture="img/!logged-user.jpg"
                />
              </figure>
              <div
                className="profile-info"
                data-lock-name="John Doe"
                data-lock-email="johndoe@okler.com"
              >
                <span className="name">John Doe Junior</span>
              </div>
            </button>
          </div>
        </div>
        {/* <!-- end: search & user box --> */}
      </header>
      {/* <!-- end: header -->
			<!-- end: header --> */}

      <div className="inner-wrapper">
        {/* <!-- start: sidebar --> */}
        <aside id="sidebar-left" className="sidebar-left">
          <div className="sidebar-header">
            <div className="sidebar-title">Navigation</div>
            <div
              className="sidebar-toggle d-none d-md-block"
              data-toggle-classname="sidebar-left-collapsed"
              data-target="html"
              data-fire-event="sidebar-left-toggle"
            >
              <i className="fas fa-bars" aria-label="Toggle sidebar"></i>
            </div>
          </div>

          <div className="nano">
            <div className="nano-content">
              <nav id="menu" className="nav-main" role="navigation">
                <ul className="nav nav-main">
                  <li>
                    <a href="admin-dashboard.html" className="nav-link">
                      <i className="bx bx-home-alt" aria-hidden="true"></i>
                      <span>Dashboard</span>
                    </a>
                  </li>
                  <li className="nav-parent nav-expanded nav-active">
                    <button className="nav-link">
                      <i className="fas fa-user" aria-hidden="true"></i>
                      <span>Users</span>
                    </button>
                    <ul className="nav nav-children">
                      <li>
                        <a href="admin-list-users.html" className="nav-link">
                          View Users
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-parent nav-active">
                    <button className="nav-link">
                      <i className="fas fa-dollar-sign" aria-hidden="true"></i>
                      <span>Payments</span>
                    </button>
                    <ul className="nav nav-children">
                      <li>
                        <a href="admin-list-payments.html" className="nav-link">
                          View Payments
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-parent nav-active">
                    <a className="nav-link" href="home.html">
                      <i className="fas fa-poll-h" aria-hidden="true"></i>
                      <span>Exam</span>
                    </a>
                    <ul className="nav nav-children">
                      <li>
                        <a href="admin-create-exam.html" className="nav-link">
                          Create Exam
                        </a>
                      </li>
                      <li>
                        <a href="admin-list-exams.html" className="nav-link">
                          View Exams
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-parent">
                    <a className="nav-link" href="home.html">
                      <i className="bx bx-file" aria-hidden="true"></i>
                      <span>Result</span>
                    </a>
                    <ul className="nav nav-children">
                      <ul className="nav nav-children">
                        <li>
                          <a className="nav-link" href="pages-signup.html">
                            Create Result
                          </a>
                        </li>
                        <li>
                          <a className="nav-link" href="pages-signin.html">
                            View Results
                          </a>
                        </li>
                      </ul>
                    </ul>
                  </li>
                  <li className="nav-parent">
                    <a className="nav-link" href="home.html">
                      <i className="far fa-check-square" aria-hidden="true"></i>
                      <span>Badges</span>
                    </a>
                    <ul className="nav nav-children">
                      <li>
                        <a
                          href="admin-create-badge.html"
                          className="nav-link"
                        >
                          Create Badges
                        </a>
                      </li>
                      <li>
                        <a
                          href="admin-list-badge.html"
                          className="nav-link"
                        >
                          View Badges
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>

            <script>
              {/* Maintain Scroll Position */}
              {/* {
				            if (typeof localStorage !== 'undefined') {
				                if (localStorage.getItem('sidebar-left-position') !== null) {
				                    var initialPosition = localStorage.getItem('sidebar-left-position'),
				                        sidebarLeft = document.querySelector('#sidebar-left .nano-content');

				                    sidebarLeft.scrollTop = initialPosition;
				                }
				            }
                  } */}
            </script>
          </div>
        </aside>
        {/* <!-- end: sidebar --> */}

        <section role="main" className="content-body">
          <header className="page-header">
            <h2>List Users</h2>
          </header>
          <div className="row pt-4 mt-1">
            <div className="col-lg-12">
              <div className="col-xl-12">
                <header className="card-header card-header-transparent">
                  <div className="card-actions">
                    <a
                      href="home.html"
                      className="card-action card-action-toggle"
                      data-card-toggle
                    >go</a>
                    <a
                      href="home.html"
                      className="card-action card-action-dismiss"
                      data-card-dismiss
                    >go</a>
                  </div>

                  <h2 className="card-title">Recent Users</h2>
                </header>
                <div className="card-body">
                  <table className="table table-responsive-md table-striped mb-0">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user, index) => (
                        <tr key={user.id}>
                          <td>{index + 1}</td>
                          <td>{`${user.firstname} ${user.lastname}`}</td>
                          <td>
                            <NavLink
                              to={`/admin/view-user/${user.id}`}
                              className="mb-1 mt-1 me-1 btn btn-primary"
                            >
                              view
                            </NavLink>
                          </td>
                          <td>
                            <NavLink
                              to={`/admin/edit-user/${user.id}`}
                              className="mb-1 mt-1 me-1 btn btn-warning"
                            >
                              edit
                            </NavLink>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="mb-1 mt-1 me-1 btn btn-danger"
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end: page --> */}
        </section>
      </div>

      <aside id="sidebar-right" className="sidebar-right">
        <div className="nano">
          <div className="nano-content">
            <a href="home.html" className="mobile-close d-md-none">
              Collapse <i className="fas fa-chevron-right"></i>
            </a>

            <div className="sidebar-right-wrapper">
              <div className="sidebar-widget widget-calendar">
                <h6>Upcoming Tasks</h6>
                <div data-plugin-datepicker data-plugin-skin="dark"></div>

                <ul>
                  <li>
                    <time dateTime="2021-04-19T00:00+00:00">04/19/2021</time>
                    <span>Company Meeting</span>
                  </li>
                </ul>
              </div>

              <div className="sidebar-widget widget-friends">
                <h6>Friends</h6>
                <ul>
                  <li className="status-online">
                    <figure className="profile-picture">
                      <img
                        src="img/!sample-user.jpg"
                        alt="Joseph Doe"
                        className="rounded-circle"
                      />
                    </figure>
                    <div className="profile-info">
                      <span className="name">Joseph Doe Junior</span>
                      <span className="title">Hey, how are you?</span>
                    </div>
                  </li>
                  <li className="status-online">
                    <figure className="profile-picture">
                      <img
                        src="img/!sample-user.jpg"
                        alt="Joseph Doe"
                        className="rounded-circle"
                      />
                    </figure>
                    <div className="profile-info">
                      <span className="name">Joseph Doe Junior</span>
                      <span className="title">Hey, how are you?</span>
                    </div>
                  </li>
                  <li className="status-offline">
                    <figure className="profile-picture">
                      <img
                        src="img/!sample-user.jpg"
                        alt="Joseph Doe"
                        className="rounded-circle"
                      />
                    </figure>
                    <div className="profile-info">
                      <span className="name">Joseph Doe Junior</span>
                      <span className="title">Hey, how are you?</span>
                    </div>
                  </li>
                  <li className="status-offline">
                    <figure className="profile-picture">
                      <img
                        src="img/!sample-user.jpg"
                        alt="Joseph Doe"
                        className="rounded-circle"
                      />
                    </figure>
                    <div className="profile-info">
                      <span className="name">Joseph Doe Junior</span>
                      <span className="title">Hey, how are you?</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default ListUsers;
