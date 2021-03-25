import './App.css';
import Posts from './Components/Posts'
import Users from './Components/Users'

function App() {
  return (
    <div className="container pt-3">
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
