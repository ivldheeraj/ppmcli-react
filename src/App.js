import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import HeaderComponent from './components/layout/HeaderComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from  'react-router-dom';
import AddProject from './components/projects/AddProject';
import {Provider} from 'react-redux';
import store from './store';
import UpdateProject from './components/projects/UpdateProject';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <HeaderComponent/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/addProject" component={AddProject}/>
          <Route path="/updateProject/:id" component={UpdateProject}/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
