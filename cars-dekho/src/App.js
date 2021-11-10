
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
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Review from './Components/Review/Review';


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
      <PrivateRoute path="/product/:carId">
       <PlaceOrder></PlaceOrder>
      </PrivateRoute>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/signup">
        <SignUp></SignUp>
      </Route>
      <PrivateRoute path="/review">
        <Review></Review>
      </PrivateRoute>


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
