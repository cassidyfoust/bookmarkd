import React, {Component} from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonTabs, IonTabBar, IonTabButton, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Discover from './pages/Discover';
import Bookmarks from './pages/Bookmarks';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { connect } from "react-redux";
import { bookOutline, personOutline, bookmarkOutline , logOutOutline} from "ionicons/icons";
import {logoutUser} from './firebaseConfig';
import './App.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'; 
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */

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
  return (
    <IonApp className="appCustom">
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/discover" component={Discover} exact={true} />
            <Route path="/yourbookmarks" component={Bookmarks} exact={true} />
            <Route path="/yourprofile" component={Profile} exact={true} />
            <Route path="/login" component={Login} exact={true} />
            <Route path="/register" component={Register} exact={true} />
            <Route path="/home" component={Home} exact={true} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="discover" href="/discover">
              <IonIcon icon={bookOutline} className="menuIcon" />
              <IonLabel>Discover</IonLabel>
            </IonTabButton>
            <IonTabButton tab="profile" href="/yourprofile">
              <IonIcon icon={personOutline} className="menuIcon" />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
            <IonTabButton tab="bookmarks" href="/yourbookmarks">
              <IonIcon icon={bookmarkOutline} className="menuIcon" />
              <IonLabel>Bookmarks</IonLabel>
            </IonTabButton>
            <IonTabButton tab="logout" onClick={e => logoutUser()} href="/home">
              <IonIcon icon={logOutOutline} className="menuIcon" />
              <IonLabel>Logout</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
  }};

export default connect(mapStateToProps)(App);
