import Homecrud from "./CRUD/Homecrud"
import Createusers from "./CRUD/Createuers"
import Users from "./CRUD/User"
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Editusers from "./CRUD/Editusers"

// import Profile from "./Components/Profile"
// import { BrowserRouter,Routes,Route } from "react-router-dom"
// import Home from "./Components/Home"
// import Aboutus from "./Components/Aboutus"
// import Details from "./Components/Details"
// import Contactus from "./Components/Contactus"
// import Education from "./Components/Education"
// import Programmingskills from "./Components/Programmingskills"
// import Project from "./Components/Projects"
// import Interests from "./Components/Interests"







const App=()=>{
    return(
        <section>
           <BrowserRouter>
            <Homecrud/>
            <Routes>
                <Route element={<Createusers/>} path="/comp1"/>
                <Route element={<Users/>} path="/comp2"/>
                <Route element={<Editusers/>} path={`/comp3/:xyz`}/>
            </Routes>
            </BrowserRouter>
        </section>
        // <section>
        //     <BrowserRouter>
        //     <Profile/>
        //     <Routes>
        //         <Route element={<Home/>} path="/comp1"/>
        //         <Route element={<Aboutus/>} path="/comp2"/>
        //         <Route element={<Details/>} path="/comp3"/>
        //         <Route element={<Contactus/>} path="/comp4"/>


        //         <Route element={<Education/>} path="/comp5"/>
        //         <Route element={<Programmingskills/>} path="/comp6"/>
        //         <Route element={<Project/>} path="/comp7"/>
        //         <Route element={<Interests/>} path="/comp8"/>
                
        //     </Routes>
        //     </BrowserRouter>
        // </section>
    )
}
export default App