import React, {Component} from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Discover from './pages/Discover';
import Bookmarks from './pages/Bookmarks';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Menu from './components/Menu';
import Home from './pages/Home';
import { connect } from "react-redux";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'; 
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

require("dotenv").config();

const mapStateToProps = reduxState => ({
  reduxState
});

class App extends Component {

  componentDidMount() {
    this.props.dispatch({
      type: "FETCH_BOOKS"
    });
  }
render() {
  console.log('reduxstate: ', this.props.reduxState.randomBooks);
  return (
    <IonApp id="main">
        <IonReactRouter>
          <Menu />
          <IonRouterOutlet>
            <Route path="/discover" component={Discover} exact={true} />
            <Route path="/yourbookmarks" component={Bookmarks} exact={true} />
            <Route path="/yourprofile" component={Profile} exact={true} />
            <Route path="/login" component={Login} exact={true} />
            <Route path="/register" component={Register} exact={true} />
            <Route path="/home" component={Home} exact={true} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
  }};

export default connect(mapStateToProps)(App);
