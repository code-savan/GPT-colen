import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './context/Context.jsx'
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </ContextProvider>
);
