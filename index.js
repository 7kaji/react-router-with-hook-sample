import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
  useHistory,
  useLocation,
} from 'react-router-dom';
import queryString from 'query-string';

const Hello = () => {
  const history = useHistory();
  return (
    <div>
      <h1>Hello</h1>
      <button
        onClick={() => history.push('/hello/react-router?message=hooks#test')}
      >
        Next
      </button>
    </div>
  );
}

const HelloSomeone = () => {
  const history = useHistory();
  const location = useLocation();
  const { name } = useParams();
  console.log(queryString.parse(location.search));
  return (
    <div>
      <h1>Hello {name} !</h1>
      <p>pathname: {location.pathname}</p>
      <p>search: {location.search}</p>
      <p>hash: {location.hash}</p>
      <button onClick={() => history.goBack()}>Go Back</button>
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Hello} />
        <Route path="/hello/:name" exact component={HelloSomeone} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
