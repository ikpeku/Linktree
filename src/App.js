import { Footer} from './component'
import { Routes, Route } from 'react-router-dom'
import { Contact, Home } from './pages'

function App() {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/contact' element={<Contact/>} />
       
      </Routes>
      <Footer />  
    </div>
  )
}

export default App
