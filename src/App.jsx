import './App.css'
import Foote from './compo/footer/Foote';
import Nav from './compo/nav/Nav'
import { Outlet, useNavigate, useNavigation } from "react-router-dom";
function App() {
let navigation = useNavigation()
  return (
    <>

      <Nav></Nav>
      <div className='mx-auto text-center'>{navigation.state === 'loading'?'loading':'' }</div>
      <Outlet></Outlet>
      <Foote></Foote>
     
    </>
  )
}

export default App
