
import Sidebar from './Components/Sidebar';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Contacts from './Pages/Contacts';
import Charts from './Pages/Charts';
import Home from './Pages/Home';

function App() {
  return (

    <Router>
    <div className="flex">
      <Sidebar />
      <main className="flex-grow bg-gray-100 p-8">
        {/* Your main content goes here */}
        <Routes>
          <Route path="/"  element= {<Home/>} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/charts" element={<Charts />} />
        </Routes>
      </main>
    </div>
  </Router>
    // <Router>
    //   {/* <div className="flex"> */}
    //   <Sidebar />
    //   {/* <main className="flex-grow bg-gray-100 p-8">
    //     {/* Your main content goes here */}
    //   {/* </main> */}
    // {/* </div> */} */
    //   <Routes>
    //     <Route path='/contacts'> <Contacts/>  </Route>
    //     <Route path='/charts'> <Charts/>  </Route>
    //   </Routes>
    // </Router>
    
  );
}

export default App;
