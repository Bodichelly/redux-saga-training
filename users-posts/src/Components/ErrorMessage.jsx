import React from 'react'
import { hideErrorMessage } from '../redux/actions'
import {useDispatch, useSelector} from 'react-redux'

export default ({message}) => {
    const dispatch = useDispatch()
    return (
        <div className="modal fade show in" style={{display: 'inline'}} tabIndex="2">
      <div className="modal-dialog" >
        <div className="modal-content">
          <div className="modal-header bg-danger text-white">
            <h5 className="modal-title">Error occurred!</h5>
          </div>
          <div className="modal-body">
            <p>{message}</p>
          </div>
          <div className="modal-footer">
            <button type="button" onClick={()=>{dispatch(hideErrorMessage())}} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    )
}

