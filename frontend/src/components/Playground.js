import React from 'react';
import SideNav from './SideNav';
import Section from './Section';
import { Route, Switch, Link, Redirect, withRouter} from 'react-router-dom'

const Playground = ()=>{
    return(
        <div>
            <div className="row">
                <div className="col-md-6 main" >
                    <Switch>
                        < Route path='/exam/:sectionNum' component={Section} />
                        < Redirect to='/exam/1'  />
                        
                    </Switch>

                </div>
                <div className="col-md-6 sidenav" >
                    <SideNav />
                </div>
            </div>
        </div>
    )
}


export default Playground;
