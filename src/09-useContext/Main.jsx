import { Routes, Route, Navigate, Link } from "react-router-dom"
import { HomePage } from "./HomePage"
import { AboutPage } from "./AboutPage"
import { LoginPage } from "./LoginPage"
import { Navbar } from "./Navbar"
import { UserProvider } from "./context/UserProvider"

export const Main = () => {
  return (
    <UserProvider>
    <h1>Main</h1>
    <hr />
    <Navbar/>
   <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="login" element={<LoginPage/>} />
    <Route path="/*" element={<Navigate to="about" />} />
   </Routes>
    
   </UserProvider>
    )
}
