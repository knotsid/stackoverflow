import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './AllRoutes.jsx'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllQuestions } from './actions/question';
import { fetchAllUsers } from './actions/users';
import { Toaster } from 'react-hot-toast';
import Chatbot from "./components/Chatbot/Chatbot";

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])


  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
