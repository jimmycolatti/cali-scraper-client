import * as React from "react"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

//pages
import Home from "./pages/Home"

//chakra and extedTheme
import { extendTheme, ChakraProvider } from "@chakra-ui/react"
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}
const theme = extendTheme({ colors })

//components

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
