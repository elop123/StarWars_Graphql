import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import {MainLayout} from './layout/MainLayout'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Character} from './pages/Character'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { HelmetProvider } from "react-helmet-async"

function App() {

  const queryClient= new QueryClient();
 

  return (
    <HelmetProvider>
    <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
         <Route index element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/characters" element={<Character />}/> 
        </Route>
      </Routes>
    </Router>
    </QueryClientProvider>
    </HelmetProvider>
  )
}

export default App
