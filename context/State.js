'use client';

import { useState } from 'react'
import globalContext from './context'

const Globalstate = (props) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [modelIsOpen, setModelIsOpen] = useState(false);
  const [modelData, setModelData] = useState(undefined);

  return (
    <globalContext.Provider value={{
      menuIsOpen, setMenuIsOpen,
      modelIsOpen, setModelIsOpen,
      modelData, setModelData,
    }} >
      {props.children}
    </globalContext.Provider>
  )
}

export default Globalstate;
