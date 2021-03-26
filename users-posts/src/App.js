import './App.css';
import Posts from './Components/Posts'
import Users from './Components/Users'
import Error from './Components/ErrorMessage'
import {useDispatch, useSelector} from 'react-redux'

function App() {

  const errorMessage = useSelector(state => state.app.errorMessage)
  console.log(errorMessage)

  return (
    <div className="container pt-3">
      {errorMessage && <Error message={errorMessage} />}
      <div className="row">
        <div className="col">
          <h2>Users</h2>
          <Users />
        </div>
        <div className="col">
          <h2>Posts</h2>
          <Posts />
        </div>
      </div>
    </div>
  );
}

export default App;
