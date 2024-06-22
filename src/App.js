import {BrowserRouter,Route, Routes} from "react-router-dom"
import {useState} from "react"
import Loginapps from "./pages/login";
import Signup from "./pages/Signup";
import Landingpage from "./pages/Landingpages";
function App() {
  const [userpass,setusername]=useState([{
    username:"jhon",
    password:"123"},
    {
        username:"achu",
        password:"123"
}])
  return (
    <>
   
<BrowserRouter>
<Routes>
  <Route path="/" element={<Loginapps  userpass={userpass} setuserpass={setusername}/>}></Route>
  <Route path="/signup" element={<Signup userpass={userpass} setusername={setusername}/>}></Route>
  <Route path="/landingpage" element={<Landingpage/>}></Route>
</Routes>
</BrowserRouter>
      
    </>  );
}

export default App;
