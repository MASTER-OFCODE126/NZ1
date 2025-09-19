import React, { createContext, useState } from 'react'

export const NavBarcontext = createContext()
const NavContext = ({children}) => {
    const [navOpen, setnavOpen] = useState(false)

  return (
    <div>
      <NavBarcontext.Provider value={[navOpen, setnavOpen]}>
        {children}
      </NavBarcontext.Provider>
    </div>
  )
}

export default NavContext