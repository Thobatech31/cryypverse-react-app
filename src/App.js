import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom'
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Cryptocurrency from "./pages/Cryptocurrency/CryptoCurrency";
import News from "./pages/News/NewsCard";
import "./App.css";

function App() {
    return (
        <Router>
                <>
                    <Topbar />
                    <div className="container">
                        <Sidebar />
                        <Routes>
                            <Route exact path="/" element={<Home/>} />
                            <Route exact path="/cryptocurrency" element={<Cryptocurrency/>} />
                            <Route exact path="/news" element={<News/>} />
                        </Routes>

                    </div>
                </>
        </Router>
    );
}

export default App;
