import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserManagement from './Pages/UserManagement';
import './index.css'
import Login from './Pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import UserOnly from './Pages/UserOnly';

function App() {

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* {showNavbar && <Navbar />} */}
        <div className=''>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path="/usermanagement" element={<ProtectedRoute><UserManagement /></ProtectedRoute>} />
            <Route path='/taskallocation' element={<UserOnly/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
