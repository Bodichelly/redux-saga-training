import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchPosts} from '../redux/actions'
import {Loader} from './Loader'

function User({username, email, id}){
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{username}</h5>
        <p class="card-text">{email}, {id}</p>
      </div>
    </div>
  )
}


return function Users() {
  const dispatch = useDispatch()
  const users = useSelector(state => state.posts.fetchedPosts)
  const loading = useSelector(state => state.app.loading)
  
  const usersComponents = users.map((user) =>  <User onClick={() => dispatch(selectUser())} username={user.username} email={user.email} id={user.id} key={user.id}/>);

  if(loading){
    return(
      <Loader />
    );
  }else{
    return (
      <div className="container pt-3">
          <div className="col">
            {usersComponents}
          </div>
      </div>
    );
  }
  
  }


