import { Router } from "./components/Router";
import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo'
import { BrowserRouter } from "react-router-dom";
import { MenuContext } from "./contexts/MenuContext";


function App() {

  


  return (
    <ApolloProvider client={client}>
    <MenuContext>
    <BrowserRouter>
    <Router />
    </BrowserRouter>
    </MenuContext>
    </ApolloProvider>
    
  )
}

export default App
