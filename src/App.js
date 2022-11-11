import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./app.scss";

import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Account from "./pages/Account/Account.jsx";
import Licenses from "./componentes/Licenses/Licenses";

import HomeScreen from "./pages/homeScreen/HomeScreen";
import Nav from "./componentes/Nav/Nav";
import Profiles from "./pages/Profiles/Profiles";
import NotFound from "./componentes/NotFound/NotFound";

import NotRegisterdUser from "./pages/NotRegistered/NotRegisterdUser";
import Context from "./Context";

function App() {
  return (
    <div>
      <Router>
        <Context.Consumer>
          {({ isAuth }) =>
            isAuth ? (
              <Routes>
                <Route path="/profile" element={<Profiles />} />
                <Route path="/" element={<Profiles />} />
                <Route path="/homeScreen" element={<HomeScreen />} />
                <Route path="/account" element={<Account />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            ) : (
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<NotRegisterdUser />} />
                <Route path="/account" element={<NotRegisterdUser />} />
              </Routes>
            )
          }
        </Context.Consumer>
      </Router>
    </div>
  );
}

export default App;
