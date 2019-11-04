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
    <>
      <h1>Hello</h1>
      <button
        onClick={() => history.push('/hello/react-router?message=hooks#test')}
      >
        Next
      </button>
    </>
  );
}

const HelloSomeone = () => {
  const history = useHistory();
  const location = useLocation();
  const { name } = useParams();
  console.log(queryString.parse(location.search));
  return (
    <>
      <h1>Hello {name} !</h1>
      <p>pathname: {location.pathname}</p>
      <p>search: {location.search}</p>
      <p>hash: {location.hash}</p>
      <button onClick={() => history.goBack()}>Go Back</button>
    </>
  );
}

const NotFound = () => <h1>Not Found</h1>;

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Hello />
        </Route>
        <Route path="/hello/:name" exact>
          <HelloSomeone />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
