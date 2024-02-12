'use client';

import { useState } from 'react'
import globalContext from './context'

const Globalstate = (props) => {
    const [menuIsOpen , setMenuIsOpen] = useState(false);

  return (
    <globalContext.Provider value={{menuIsOpen, setMenuIsOpen}} >
        {props.children}
    </globalContext.Provider>
  )
}

export default Globalstate;
