import Home from "./Home";
import About from "./About";
import Carrer from "./Carrer";
import Contact from "./Contact";
import Login from "./Login";
import List from "./List";
import Logout from "./Logout";
import SignUp from "./SignUp";
import Counter from "./Counter";
import PageNotFound from "./PageNotFound";
import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"



export const HarishContext = createContext();
export const AuthContext = createContext();

function App() {

  const [count, setCount] = useState(20);
  const [isAuth, setIsAuth] = useState(false);

  const values = {
    isAuth,
    setIsAuth,
  };

  return (
    <div className="container text-center">
      <AuthContext.Provider value={values}>
        <HarishContext.Provider value={{ count, setCount }}>
          <div>

            <h1> App File</h1>
           
            <BrowserRouter>
              <ul className="list-unstyled d-flex justify-content-center gap-5 fs-4 mt-5">
                {isAuth ? (
                <>
                <li>
                  <Link className="text-decoration-none" to="/">Home</Link>
                </li>
                <li>
                  <Link className="text-decoration-none" to="/about">About</Link>
                </li>
                <li>
                  <Link className="text-decoration-none" to="/carrer">Carrer</Link>
                </li>
                <li>
                  <Link className="text-decoration-none" to="/counter">Counter</Link>
                </li>
                <li>
                  <Link className="text-decoration-none" to="/contact">Contact</Link>
                </li>
                <li>
                  <Link className="text-decoration-none" to="/" onClick={ () => {setIsAuth(false)}}>Logout</Link>
                </li>                                               
                </>
                ) : (
                  <>
                <li>
                  <Link className="text-decoration-none" to="/SignUp">SignUp</Link>
                </li>
                  <li>
                  <Link className="text-decoration-none" to="/">Login</Link>
                </li>
                  </>
                ) }
              </ul>

                {isAuth ? (
              <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/home" element={<Home />}/>
                  <Route path="/about" element={<About />}/>
                  <Route path="/carrer" element={<Carrer />}/>
                  <Route path="/counter" element={<Counter />}/>
                  <Route path="/contact" element={<Contact />}/>
                  <Route path="/logout" element={<Logout />}/>
                  <Route path="/*" element={<PageNotFound />}/>
              </Routes>

                ) : (
              <Routes>
                  <Route path="/" element={<Login />}/>
                  <Route path="/signUp" element={<SignUp />}/>
                  <Route path="/*" element={<PageNotFound />}/>
              </Routes>
                )}
            </BrowserRouter>
         
          </div>
        </HarishContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
