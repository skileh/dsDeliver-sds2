import { homedir } from "os";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Orders from "./Orders/Index";
import Home from "./Home/Index";
import Navbar from "./Navbar/Index";

 function Routes (){
    return(
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/Orders">
                    <Orders />
                </Route>
                <Route path ="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    ) 
 }

 export default Routes;