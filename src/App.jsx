import {Route, HashRouter as Router, Routes, Link, NavLink} from "react-router-dom";
import { Home } from './pages/Home';
import {Email} from "./pages/Email";
import {AppHeader} from "./cmps/AppHeader";
export function App() {

    return (
        <Router>
        <section className='main-app'>
            <AppHeader/>
            <main className='container'>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/email" element={<Email/>}/>
                </Routes>
            </main>

            <footer>
                <section className="container">
                    Mails 2023 &copy;
                </section>
            </footer>
        </section>
        </Router>
    )
}

