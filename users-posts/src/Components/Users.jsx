import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchPosts, fetchUsers, selectUser} from '../redux/actions'
import {Loader} from './Loader'

function User({username, email, id, selectedUser,...attrs}){
  let classes = "card"
  if(id === selectedUser){
    classes+=" bg-primary text-white"
  }
  return (
    <div className={classes} {...attrs}>
      <div className="card-body">
        <h5 className="card-title">{username}</h5>
        <p className="card-text">{email}, {id}</p>
      </div>
    </div>
  )
}


export default ()=> {
  const dispatch = useDispatch()
  
  
  const users = useSelector(state => state.users.users)
  const selectedUser = useSelector(state => state.users.selectedUserId)
  const loading = useSelector(state => state.app.loadingUsers)

  const usersComponents =  users.map((user) =>  <User onClick={() =>{dispatch(selectUser(user.id))} } username={user.username} email={user.email} id={user.id} key={user.id} selectedUser={selectedUser}/>)

  useEffect(()=>{
    dispatch(fetchUsers());
  }, [])
  if(loading || !users || !users.length){
    
    return(
      <div className="container pt-3">
         <Loader />
      </div>
     
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


