
import './App.css';
import { BrowserRouter ,Switch,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Services/Services';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import AuthProvider from './Contexts/AuthProvider';


function App() {
  return (
    

  
     <AuthProvider>
        <BrowserRouter>
    <Header></Header>
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/explore">
        <Services></Services>
      </Route>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/signup">
        <SignUp></SignUp>
      </Route>


      <Route path="/*">
        <NotFound></NotFound>
      </Route>
    </Switch>

    <Footer></Footer>
    </BrowserRouter>
     </AuthProvider>
  
  );
}

export default App;
