import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="text-center py-20">Home Page</div>} />
      </Routes>
    </Router>
  )
}

export default App