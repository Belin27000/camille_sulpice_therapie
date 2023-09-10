// import logo from './logo.svg';
import './App.css';
import Home from '@/pages/Home.js';
import Contact from '@/pages/Contact.js';
import Endometriose from '@/pages/Endometriose.js';
import Apropos from '@/pages/Apropos.js';
import Accompagnement from '@/pages/Accompagnement.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from '@/_utils/Error.js';
import Layout from '@/Layouts/Layout.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/camille_sulpice_therapie'>
        <Routes>
          <Route element={<Layout />}>

            <Route index element={<Home />} />

            <Route path='/home' element={<Home />} />
            <Route path='/accompagnement' element={<Accompagnement />} />
            <Route path='/apropos' element={<Apropos />} />
            <Route path='/endometriose' element={<Endometriose />} />
            <Route path='/contact' element={<Contact />} />

            <Route path='*' element={<Error />} />
          </Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
