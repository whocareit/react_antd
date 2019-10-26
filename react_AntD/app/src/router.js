import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import Domain from './Domain';
import Login from './pages/login';
import Buttons from './pages/ui/button/index';
import NoMatch from './noMatch/NoMatch';
import Modals from './pages/ui/modal';
import Loadings from './pages/ui/loading';
import Notifications from './pages/ui/notification';
import Messages from './pages/ui/message';
import Home from './pages/home';
import Tab from './pages/ui/tab';
import Gallerys from './pages/ui/gallery';
import Carousels from './pages/ui/carousel';
import Sign from './pages/form/sign';
import Registers from './pages/form/register';
import basicTable from './pages/table/basic';
import HighTable from './pages/table/advance';
import Citys from './pages/city';
import Order from './pages/order';
import Common from './common';
import Detail from './pages/details';
import Users from './pages/user';
import BikeMap from './pages/map';
import Bar from './pages/echarts/bar';
import Pie from './pages/echarts/pie';
import Line from './pages/echarts/line';
import RichText from './pages/richtext';
import Permission from './pages/permission';
import App from './App';


export default class IRouter extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path='/login' component={Login} />
                        <Route path='/common' render={() =>
                            <Common>
                                <Route path='/common/order/detail/:orderId' component={Detail} />
                            </Common>
                        } />
                        <Route path='/detail/order' component={Login} />
                        <Route path='/' render={() =>
                            <Domain>
                                <Switch>
                                    <Route path='/home' component={Home} />
                                    <Route path='/ui/button' component={Buttons} />
                                    <Route path='/ui/modals' component={Modals} />
                                    <Route path='/ui/loading' component={Loadings} />
                                    <Route path='/ui/notification' component={Notifications} />
                                    <Route path='/ui/messages' component={Messages} />
                                    <Route path='/ui/tabs' component={Tab} />
                                    <Route path='/ui/gallery' component={Gallerys} />
                                    <Route path='/ui/carousel' component={Carousels} />
                                    <Route path='/form/login' component={Sign} />
                                    <Route path='/form/reg' component={Registers} />
                                    <Route path='/table/basictable' component={basicTable} />
                                    <Route path='/table/advancetable' component={HighTable} />
                                    <Route path='/city' component={Citys} />
                                    <Route path='/order' component={Order} />
                                    <Route path='/works' component={Users} />
                                    <Route path='/car' component={BikeMap} />
                                    <Route path='/charts/bar' component={Bar} />
                                    <Route path='/charts/pie' component={Pie} />
                                    <Route path='/charts/ployline' component={Line} />
                                    <Route path='/word' component={RichText} />
                                    <Route path='/permission' component={Permission} />
                                    <Redirect to='/home' />
                                    <Route component={NoMatch} />
                                </Switch>
                            </Domain>
                        } />
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}