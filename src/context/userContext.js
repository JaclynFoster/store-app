import React, { useState } from 'react'

const AuthContext = React.createContext({
  userObject: {},
  setUserObject: () => {}
})

export default AuthContext

export const AuthContextProvider = props => {
  const [userObject, setUserObject] = useState({})
  return (
    <AuthContext.Provider value={{ userObject, setUserObject }}>
      {props.children}
    </AuthContext.Provider>
  )
}


