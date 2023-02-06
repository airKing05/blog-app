import './App.css';
import Home from './pages/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Details from './pages/Details';
import AddAndEdit from './pages/AddAndEdit';
import SignInAndSignUp from './pages/SignInAndSignUp';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/create' element={<AddAndEdit />} />
        <Route path='/create/:id' element={<AddAndEdit />} />
        <Route path='/about' element={<About />} />
        <Route path='/signin' element={<SignInAndSignUp />} />
        <Route path='/signup' element={<SignInAndSignUp />} />
        <Route path='*' element={<NotFound />} />

      </Routes>


    </div>
  );
}

export default App;
