import { useState } from 'react'

import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './componentes/NavBar/navbar'
import ItemListContainer from './componentes/ItemListContainer/itemlistcontainer'

function App() {
  const [count, setCount] = useState(0)

  return (
      <ChakraProvider>
    <NavBar/>
    <ItemListConteiner title= 'Tienda'/>
    
    </ChakraProvider>
  
  )
}

export default App
