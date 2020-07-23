import React from 'react';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import './App.css'
import Page01 from './components/Page01';
import Page02 from './components/Page02';
import Page03 from './components/Page03';
import Page04 from './components/Page04';
import Page05 from './components/Page05';

function App() {
    // const [ques,setQues]=useState("");
    // const [search,setSearch]=useState("");
    return (
        <div className="all">
            <div className="intro">
            <h1>KNOWLEDGY</h1>
            <article id="art">
                This web app provides information and current<br/> useful knowledge about topics which we needs to understand,<br/>
                the information of these topics will solve a lot of problems in human life. 
            </article>
            </div>
        <div className="maina">
            <Router>
                <Link className="Link" to="/">Home</Link>
                <Link className="Link" to="/page01">Humanitarianism</Link>
                <Link className="Link" to="/page02">Sustanibility</Link>
                <Link className="Link" to="/page03">Health</Link>
                <Link className="Link" to="/page04">Education</Link>
                <Link className="Link" to="/page05">Inequality</Link>
                <Switch>
                    <Route exact path="/"/>
                    <Route path="/page01" component={Page01}/>
                    <Route path="/page02" component={Page02}/>
                    <Route path="/page03" component={Page03}/>
                    <Route path="/page04" component={Page04}/>
                    <Route path="/page05" component={Page05}/>
                </Switch>
            </Router>
            {/* <div>
                <form>
                    <input type="text" value={ques} onChange={(e)=>{setQues(e.target.value)}}/>
                    {/* <input type="submit" value="Submit" onClick={()=>{setSearch(ques)}}/> */}
                {/* </form>
                <p>{ques}</p>
            </div> */}
            {/* <div>
            <News topic={ques}/>
            // </div> */}
        </div>
        </div>
    )
}

export default App