import React from 'react'
import { Fragment } from 'react'
import { UserForm } from '../../componentes/userForm/UserForm'
import Context from '../../Context'
import Login from '../login/Login'

const NotRegisterdUser = () => {
  return(
    <Context.Consumer>
      {
        ({isAuth,activateAuth}) => {
          return(
          <Fragment>
            <Login onSubmit={activateAuth}/>
          </Fragment>
          )
        }
      }
    </Context.Consumer>
  )
}
export default NotRegisterdUser