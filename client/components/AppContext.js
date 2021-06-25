import React from 'react'

export const AppContext = React.createContext({
  isLoggedIn: false,
  isAdmin: false,
})