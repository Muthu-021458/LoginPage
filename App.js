// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Components/Assets/Signup';
import Login from './Components/Assets/Login';


function App() {
  return (
    <>
      <Login />
      <Signup />
    </>
    // <Router>
    //   <Routes>
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/signup" element={<Signup />} />
    //   </Routes>
    // </Router>
  );
}
export default App;
