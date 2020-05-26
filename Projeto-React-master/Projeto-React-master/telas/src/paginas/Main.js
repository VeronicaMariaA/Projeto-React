import React from 'react' ;
import './Main.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './Home';
import Sobre from './Sobre';
import Mascaras from './Mascaras';
import Logo from '../imagens/logo.jpg';
import Footer from '../componentes/Footer';


function Main(){
    return(
        <>
            <BrowserRouter>
                <header>
                    <img src={Logo} alt="Logo do site" className="logo"></img>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/Mascaras/">Mascáras</Link>
                            </li>
                            <li>
                                <Link to="/Sobre/">Sobre o Covid-19</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <div className="text">
                    <Route path="/" exact component={Home} />  
                    <Route path="/Sobre" component={Sobre}/>
                    <Route path="/Mascaras" component={Mascaras} />
                    </div>
                     
                </main>
                <Footer/> 
            </BrowserRouter>
        </>
        
    )
}

export default Main;