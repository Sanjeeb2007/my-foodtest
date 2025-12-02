import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Team from "../pages/Team";
import Food from "../pages/MainFood";
import Contact from "../pages/Contact";
import DetailPage from "../pages/DetailPage";
import Information from "../pages/Information";
import SearchBar from "../pages/SearchBar";
import NotificationBell from "../pages/NotificationBell";
import Foods from "../pages/Foods";


function Navigation() {
    return ( 
        <Routes>
            <Route  path="/" element={<Home/>}/>
            <Route path="team" element={<Team/>}/>
            <Route path="food/" element={<Foods/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="information" element={<Information/>}/>
             <Route path="notificationBell" element={<NotificationBell/>}/>
            <Route path="/:id" element={<DetailPage/>}/>
            <Route path="SearchBar/:search" element={<SearchBar/>}/>
           
        </Routes>
     );
}

export default Navigation;