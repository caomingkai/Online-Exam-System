import React from 'react';
import SideNav from './SideNav';
import Section from './Section';
import { Route, Switch, Link, Redirect, withRouter} from 'react-router-dom'

const Playground = ()=>{

    const instruction =()=> (
        <div>
            <h1> Exam instruction   </h1>
            <p>You can skip questions if you would like and button.</p>
            <p>You can skip questions if you would like and button.</p>
            <p>You can skip questions if you would like and button.</p>
            <p>You can skip questions if you would like and button.</p>
            <p>You can skip questions if you would like and button.</p>
            <p>You can skip questions if you would like and button.</p>
            <p>You can skip questions if you would like and button.</p>
            <p>You can skip questions if you would like and button.</p>
            <p>You can skip questions if you would like and button.</p>
            <p>You can skip questions if you would like and button.</p>
        </div>
    )

    return(
        <div>
            <div className="row">

                <div className="col-md-6 main" >
                    < Route exact path='/exam' component={instruction} />
                    < Route path='/exam/:sectionNum' component={Section} />
                </div>
                <div className="col-md-6 sidenav" >
                    <SideNav />
                </div>
            </div>
        </div>
    )
}


export default Playground;
