import {Route, HashRouter as Router, Routes, Link, NavLink} from "react-router-dom";
import { Home } from './pages/Home';
import {Email} from "./pages/Email";
import {AppHeader} from "./cmps/AppHeader";
import {EmailsList} from "./cmps/EmailsList";
export function App() {

    return (
        <Router>
        <section className='main-app'>
            <AppHeader/>
            <main className='container'>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/email" element={<Email/>}>
                        <Route path="/email/inbox" element={<EmailsList/>}/>
                        <Route path="/email/sent" element={<EmailsList/>}/>
                        <Route path="/email/draft" element={<EmailsList/>}/>
                        <Route path="/email/trash" element={<EmailsList/>}/>
                        <Route path="/email/starred" element={<EmailsList/>}/>
                    </Route>
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

