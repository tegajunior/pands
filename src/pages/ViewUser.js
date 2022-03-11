import React, { useState, useEffect, useCallback } from 'react';
import logo from '../assets/img/logo.png';
import userImg from '../assets/img/logged-user.jpg';
import { useParams } from 'react-router-dom';
import axios from '../default_axios';

const ViewUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const params = useParams();
  const id = +params.id;

  const getUser = useCallback(() => {
    setIsLoading(true);
    axios
      .get(`admin/user/view/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('user_access')}`,
        },
      })
      .then((response) => {
        setIsLoading(false);
        if (response.status === 201 || response.status === 200) {
          console.log(response.data);
          setUser(response.data);
        } else {
          throw new Error('Something went wrong');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  
  useEffect(() => {
    try {
      getUser();
    } catch (error) {
      alert(error.message);
    }
  }, [getUser]);

  if (isLoading) {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <h3>Loading...</h3>
      </div>
    );
  }
  return (
    <section className="body">
      {/* <!-- start: header --> */}
      <header className="header">
        <div className="logo-container">
          <a href="../4.0.0" className="logo">
            <img src={logo} width="75" height="35" alt="Porto Admin" />
          </a>

          <div
            className="d-md-none toggle-sidebar-left"
            data-toggle-class="sidebar-left-opened"
            data-target="html"
            data-fire-event="sidebar-left-opened"
          >
            <i className="fas fa-bars" aria-label="Toggle sidebar"></i>
          </div>
        </div>

        {/* <!-- start: search & user box --> */}
        <div className="header-right">
          <form action="pages-search-results.html" className="search nav-form">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                name="q"
                id="q"
                placeholder="Search..."
              />
              <button className="btn btn-default" type="submit">
                <i className="bx bx-search"></i>
              </button>
            </div>
          </form>

          <span className="separator"></span>

          <ul className="notifications">
            <li>
              <a
                href="home.html"
                className="dropdown-toggle notification-icon"
                data-bs-toggle="dropdown"
              >
                <i className="bx bx-list-ol"></i>
                <span className="badge">3</span>
              </a>

              <div className="dropdown-menu notification-menu large">
                <div className="notification-title">
                  <span className="float-end badge badge-default">3</span>
                  Tasks
                </div>

                <div className="content">
                  <ul>
                    <li>
                      <p className="clearfix mb-1">
                        <span className="message float-start">
                          Generating Sales Report
                        </span>
                        <span className="message float-end text-dark">60%</span>
                      </p>
                      <div className="progress progress-xs light">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: '98%' }}
                        ></div>
                      </div>
                    </li>

                    <li>
                      <p className="clearfix mb-1">
                        <span className="message float-start">
                          Importing Contacts
                        </span>
                        <span className="message float-end text-dark">98%</span>
                      </p>
                      <div className="progress progress-xs light">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="98"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: '60%' }}
                        ></div>
                      </div>
                    </li>

                    <li>
                      <p className="clearfix mb-1">
                        <span className="message float-start">
                          Uploading something big
                        </span>
                        <span className="message float-end text-dark">33%</span>
                      </p>
                      <div className="progress progress-xs light mb-1">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="33"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: '33%' }}
                        ></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a
                href="home.html"
                className="dropdown-toggle notification-icon"
                data-bs-toggle="dropdown"
              >
                <i className="bx bx-envelope"></i>
                <span className="badge">4</span>
              </a>

              <div className="dropdown-menu notification-menu">
                <div className="notification-title">
                  <span className="float-end badge badge-default">230</span>
                  Messages
                </div>

                <div className="content">
                  <ul>
                    <li>
                      <a href="home.html" className="clearfix">
                        <figure className="image">
                          <img
                            src={userImg}
                            alt="Joseph Doe Junior"
                            className="rounded-circle"
                          />
                        </figure>
                        <span className="title">Joseph Doe</span>
                        <span className="message">Lorem ipsum dolor sit.</span>
                      </a>
                    </li>
                    <li>
                      <a href="home.html" className="clearfix">
                        <figure className="image">
                          <img
                            src={userImg}
                            alt="Joseph Junior"
                            className="rounded-circle"
                          />
                        </figure>
                        <span className="title">Joseph Junior</span>
                        <span className="message truncate">
                          Truncated message. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Donec sit amet lacinia
                          orci. Proin vestibulum eget risus non luctus. Nunc
                          cursus lacinia lacinia. Nulla molestie malesuada est
                          ac tincidunt. Quisque eget convallis diam, nec
                          venenatis risus. Vestibulum blandit faucibus est et
                          malesuada. Sed interdum cursus dui nec venenatis.
                          Pellentesque non nisi lobortis, rutrum eros ut,
                          convallis nisi. Sed tellus turpis, dignissim sit amet
                          tristique quis, pretium id est. Sed aliquam diam diam,
                          sit amet faucibus tellus ultricies eu. Aliquam lacinia
                          nibh a metus bibendum, eu commodo eros commodo. Sed
                          commodo molestie elit, a molestie lacus porttitor id.
                          Donec facilisis varius sapien, ac fringilla velit
                          porttitor et. Nam tincidunt gravida dui, sed pharetra
                          odio pharetra nec. Duis consectetur venenatis
                          pharetra. Vestibulum egestas nisi quis elementum
                          elementum.
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="home.html" className="clearfix">
                        <figure className="image">
                          <img
                            src={userImg}
                            alt="Joe Junior"
                            className="rounded-circle"
                          />
                        </figure>
                        <span className="title">Joe Junior</span>
                        <span className="message">Lorem ipsum dolor sit.</span>
                      </a>
                    </li>
                    <li>
                      <a href="home.html" className="clearfix">
                        <figure className="image">
                          <img
                            src={userImg}
                            alt="Joseph Junior"
                            className="rounded-circle"
                          />
                        </figure>
                        <span className="title">Joseph Junior</span>
                        <span className="message">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec sit amet lacinia orci. Proin vestibulum
                          eget risus non luctus. Nunc cursus lacinia lacinia.
                          Nulla molestie malesuada est ac tincidunt. Quisque
                          eget convallis diam.
                        </span>
                      </a>
                    </li>
                  </ul>

                  <hr />

                  <div className="text-end">
                    <a href="home.html" className="view-more">
                      View All
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a
                href="home.html"
                className="dropdown-toggle notification-icon"
                data-bs-toggle="dropdown"
              >
                <i className="bx bx-bell"></i>
                <span className="badge">3</span>
              </a>

              <div className="dropdown-menu notification-menu">
                <div className="notification-title">
                  <span className="float-end badge badge-default">3</span>
                  Alerts
                </div>

                <div className="content">
                  <ul>
                    <li>
                      <a href="home.html" className="clearfix">
                        <div className="image">
                          <i className="fas fa-thumbs-down bg-danger text-light"></i>
                        </div>
                        <span className="title">Server is Down!</span>
                        <span className="message">Just now</span>
                      </a>
                    </li>
                    <li>
                      <a href="home.html" className="clearfix">
                        <div className="image">
                          <i className="bx bx-lock bg-warning text-light"></i>
                        </div>
                        <span className="title">User Locked</span>
                        <span className="message">15 minutes ago</span>
                      </a>
                    </li>
                    <li>
                      <a href="home.html" className="clearfix">
                        <div className="image">
                          <i className="fas fa-signal bg-success text-light"></i>
                        </div>
                        <span className="title">Connection Restaured</span>
                        <span className="message">10/10/2021</span>
                      </a>
                    </li>
                  </ul>

                  <hr />

                  <div className="text-end">
                    <a href="home.html" className="view-more">
                      View All
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <span className="separator"></span>

          <div id="userbox" className="userbox">
            <a href="home.html" data-bs-toggle="dropdown">
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
                <span className="role">Administrator</span>
              </div>

              <i className="fa custom-caret"></i>
            </a>

            <div className="dropdown-menu">
              <ul className="list-unstyled mb-2">
                <li className="divider"></li>
                <li>
                  <a
                    role="menuitem"
                    tabIndex="-1"
                    href="pages-user-profile.html"
                  >
                    <i className="bx bx-user-circle"></i> My Profile
                  </a>
                </li>
                <li>
                  <a
                    role="menuitem"
                    tabIndex="-1"
                    href="home.html"
                    data-lock-screen="true"
                  >
                    <i className="bx bx-lock"></i> Lock Screen
                  </a>
                </li>
                <li>
                  <a role="menuitem" tabIndex="-1" href="pages-signin.html">
                    <i className="bx bx-power-off"></i> Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- end: search & user box --> */}
      </header>
      {/* <!-- end: header --> */}

      <div className="inner-wrapper">
        {/* <!-- start: sidebar --> */}
        <aside id="sidebar-left" className="sidebar-left">
          <div className="sidebar-header">
            <div className="sidebar-title">Navigation</div>
            <div
              className="sidebar-toggle d-none d-md-block"
              data-toggle-class="sidebar-left-collapsed"
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
                    <a className="nav-link" href="home.html">
                      <i className="fas fa-user" aria-hidden="true"></i>
                      <span>Users</span>
                    </a>
                    <ul className="nav nav-children">
                      <li>
                        <a href="admin-list-users.html" className="nav-link">
                          View Users
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-parent nav-active">
                    <a className="nav-link" href="home.html">
                      <i className="fas fa-dollar-sign" aria-hidden="true"></i>
                      <span>Payments</span>
                    </a>
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
              <hr className="separator" />
            </div>

            {/* <script>
				            // Maintain Scroll Position
				            if (typeof localStorage !== 'undefined') {
				                if (localStorage.getItem('sidebar-left-position') !== null) {
				                    var initialPosition = localStorage.getItem('sidebar-left-position'),
				                        sidebarLeft = document.querySelector('#sidebar-left .nano-content');

				                    sidebarLeft.scrollTop = initialPosition;
				                }
				            }
				        </script> */}
          </div>
        </aside>
        {/* <!-- end: sidebar --> */}

        <section role="main" className="content-body">
          <header className="page-header">
            <h2>User Profile</h2>

            <div className="right-wrapper text-end">
              <ol className="breadcrumbs">
                <li>
                  <a href="index.html">
                    <i className="bx bx-home-alt"></i>
                  </a>
                </li>

                <li>
                  <span>Pages</span>tml
                </li>

                <li>
                  <span>User Profile</span>
                </li>
              </ol>

              <a className="sidebar-right-toggle" href="home.h" data-open="sidebar-right">
                <i className="fas fa-chevron-left">go</i>
              </a>
            </div>
          </header>

          {/* <!-- start: page --> */}

          <div className="row">
            <div className="col-lg-12 col-xl-8">
              <div className="tabs">
                <ul className="nav nav-tabs tabs-primary">
                  <li className="nav-item active">
                    <button
                      className="nav-link"
                      data-bs-target="#overview"
                      data-bs-toggle="tab"
                    >
                      Overview
                    </button>
                  </li>
                </ul>
                <div className="tab-content">
                  <div id="overview" className="tab-pane active">
                    <div className="p-3">
                      <h4 className="mb-3 font-weight-semibold text-dark">
                        User Details
                      </h4>

                      <section className="simple-compose-box mb-3">
                        <div className="timeline timeline-simple mt-3 mb-3">
                          <div className="tm-body">
                            <ol className="tm-items">
                              <li>
                                <div className="tm-box">
                                  <p className="text-muted mb-0">
                                    <strong>NAME</strong>
                                  </p>
                                  <p>
                                    <span className="text-primary">
                                      {user.firstname + ' ' + user.lastname}
                                    </span>
                                  </p>
                                </div>
                              </li>
                              <li>
                                <div className="tm-box">
                                  <p className="text-muted mb-0">
                                    <strong>EMAIL</strong>
                                  </p>   
                                  <p>{user.email}</p>
                                </div>
                              </li>
                            </ol>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
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
            <a href="hme.html" className="mobile-close d-md-none">
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

export default ViewUser;
