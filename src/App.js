import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import ListUsers from './pages/ListUsers';
import Login from './pages/Login';
import ViewUser from './pages/ViewUser';
import EditUser from './pages/EditUser';

function App() {
  // let url = '/app.bundle.js';
  // useEffect(() => {
  //   const scriptFile = document.createElement('script');
  //   scriptFile.type = 'text/javascript';
  //   scriptFile.src = url;
  //   scriptFile.async = true;
  //   document.body.appendChild(scriptFile);
  // }, [url]);
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/admin/list-users" exact>
          <ListUsers />
        </Route>
        <Route path="/admin/view-user/:id" exact>
          <ViewUser />
        </Route>
        <Route path="/admin/edit-user/:id">
        <EditUser />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
