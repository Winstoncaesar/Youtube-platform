import { createBrowserRouter, ReactProvider, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Videocard from './components/Videocard';
import Header from './components/Header';
const router = createBrowserRouter([
{
  path:"/",
  element:(
             <div>
            <Header/>
            <Home/>
            <Videocard/>
             </div>
  ),
},
])

function App(){
  return (
   <div>
<RouterProvider router={router}/>
   </div>
  );
}

export default App;
