import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { FileText, Zap, Shield, BarChart3 } from 'lucide-react'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary-600">ITR Filing</h1>
          <div className="space-x-6 flex items-center">
            <Link to="/" className="text-gray-600 hover:text-gray-900 font-medium">
              Home
            </Link>
            <Link to="/login" className="text-gray-600 hover:text-gray-900">
              Login
            </Link>
            <Link to="/register" className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700">
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Automatic ITR Filing Made Simple
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            File your Income Tax Return in minutes, not hours. Automated calculations,
            compliance validation, and seamless e-filing.
          </p>
          <Link
            to="/register"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition text-lg"
          >
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h3>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <Zap className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Lightning Fast</h4>
            <p className="text-gray-600">Complete your ITR in minutes with our intuitive form builder</p>
          </div>
          <div className="text-center">
            <FileText className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h4 className="font-semibold mb-2">All ITR Forms</h4>
            <p className="text-gray-600">Support for ITR-1, 2, 3, 4, 5, 6, and 7</p>
          </div>
          <div className="text-center">
            <Shield className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Secure & Safe</h4>
            <p className="text-gray-600">Bank-level encryption for all your sensitive data</p>
          </div>
          <div className="text-center">
            <BarChart3 className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Smart Calculations</h4>
            <p className="text-gray-600">Automatic tax calculations and deduction optimization</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Automatic ITR Filing. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function Login() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary-600">ITR Filing</h1>
          <div className="space-x-6 flex items-center">
            <Link to="/" className="text-gray-600 hover:text-gray-900 font-medium">
              Home
            </Link>
            <Link to="/login" className="text-gray-600 hover:text-gray-900">
              Login
            </Link>
            <Link to="/register" className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700">
              Register
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 mt-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700 transition"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-primary-600 hover:underline font-semibold">
            Register here
          </Link>
        </p>
      </div>
    </div>
  )
}

function Register() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary-600">ITR Filing</h1>
          <div className="space-x-6 flex items-center">
            <Link to="/" className="text-gray-600 hover:text-gray-900 font-medium">
              Home
            </Link>
            <Link to="/login" className="text-gray-600 hover:text-gray-900">
              Login
            </Link>
            <Link to="/register" className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700">
              Register
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 mt-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Register</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">PAN</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
              placeholder="AAABP1234H"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Aadhaar</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
              placeholder="1234 5678 9012"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700 transition"
          >
            Register
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-primary-600 hover:underline font-semibold">
            Login here
          </Link>
        </p>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
              <p className="text-xl text-gray-600 mb-8">Page not found</p>
              <Link to="/" className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700">
                Go Home
              </Link>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App
