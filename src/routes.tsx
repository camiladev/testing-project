import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";


export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/inputRadio' component={() => <h1>Input Radio</h1>}/>
            </Switch>
        </BrowserRouter>
    )
}