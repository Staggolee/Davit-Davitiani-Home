import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBar from "../components/navBar";
import Details from "../components/Details";


const OtherPage = () => {
   return <div>
        some random text for page
    </div>
}


const AppRouter = () => (
    <BrowserRouter>
    <div>
        <NavBar />
            <Switch>
                <Route path="/Details" component={Details} />
                <Route path="/"  />
                <Route path="/Favorites" component={OtherPage} />
                <Route path="/" />
            </Switch>
    </div>
    </BrowserRouter>
)


 

export default AppRouter