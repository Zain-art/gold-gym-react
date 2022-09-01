import './App.css';
import {Routes,Route,}from 'react-router-dom';
import {Box} from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';


function App() {
  return (
    <div className="">
     <Box width='400px' sm={{width:{xl:'1488px'}}} m=''>
 

<Navbar/>
<Routes>
  <Route   path='/' element={<Home/>}/>
  <Route   path='/exercise/:id' element={<ExerciseDetail/>}/>
</Routes>



 <Footer/>
     </Box>
    </div>
  );
}

export default App;
