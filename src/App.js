import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LandingPage from "./components/LandingPage";
import LogIn from "./components/LogIn";
import Navbar from "./components/Navbar";
import NoPage from "./components/NoPage";
import Register from "./components/Register";
import RequireAuth from "./components/RequireAuth";
import Blog from "./components/Blog";
import BlogPost from "./components/blog/BlogPost";
import Contact from "./components/Contact";
import About from "./components/About";
import AdminNavbar from "./components/admin/AdminNavbar";
import AdminLogIn from "./components/admin/AdminLogIn";
import AdminHome from "./components/admin/AdminHome";
import AdminAuth from "./components/admin/AdminAuth";
import AdminContact from "./components/admin/AdminContact";
import AdminBlog from "./components/admin/AdminBlog";
import FrenchTextbook from "./components/languages-dashboard/language-components/FrenchTextbook";
import FrenchVocabulary from "./components/languages-dashboard/language-components/FrenchVocabulary";
import FrenchExercises from "./components/languages-dashboard/language-components/FrenchExercises";
import FrenchTextbookChapter from "./components/languages-dashboard/language-components/FrenchTextbookChapter";
import FrenchVocabularyChapter from "./components/languages-dashboard/language-components/FrenchVocabularyChapter";
import FrenchExercisesChapter from "./components/languages-dashboard/language-components/FrenchExercisesChapter";

export default function App() {
    return (
        <Routes>

            <Route index element={<LandingPage />} />

            <Route path="/" element={<Navbar />} >
                
                <Route path="register" element={<Register />} />
                <Route path="login" element={<LogIn />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog/:id" element={<BlogPost />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
                <Route path="loginoftheadmin" element={<AdminLogIn />} />
                <Route path="*" element={<NoPage />} />

                <Route element={<RequireAuth />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="french/textbook" element={<FrenchTextbook />} />
                    <Route path="french/textbook/:id" element={<FrenchTextbookChapter />} />
                    <Route path="french/vocabulary" element={<FrenchVocabulary />} />
                    <Route path="french/vocabulary/:id" element={<FrenchVocabularyChapter />} />
                    <Route path="french/exercises" element={<FrenchExercises />} />
                    <Route path="french/exercises/:id" element={<FrenchExercisesChapter />} />
                </Route>
            
            </Route>

            <Route element={<AdminAuth />}>
                <Route path="/" element={<AdminNavbar />} >
                    <Route path="admin-home" element={<AdminHome />} />
                    <Route path="admin-contact" element={<AdminContact />} />
                    <Route path="admin-blog" element={<AdminBlog />} />
                </Route>
            </Route>

        </Routes>
    );
};