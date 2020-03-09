import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonLoading , IonCard, IonCardContent} from '@ionic/react';
import React,{useState} from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import {loginUser} from '../firebaseConfig';
import {toast} from '../toast';

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)

  async function login(){
    setBusy(true)
      const result = await loginUser(username, password)
      if(!result){
        toast('Unable to login. Please double-check your username and password.')
      } else {
        toast('You are logged in.')
        window.location.replace("/discover");
      }
      setBusy(false)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Please wait..." isOpen={busy} duration={0} />
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardContent>
            <IonInput
              placeholder="Email"
              value={username}
              onIonChange={e => setUsername(e.target.value)}
            ></IonInput>
            <IonInput
              placeholder="Password"
              value={password}
              type="password"
              onIonChange={e => setPassword(e.target.value)}
            ></IonInput>
            <IonButton color="secondary" onClick={login}>Login</IonButton>
            <p>
              Need an account? <Link to="/register">Register</Link>
            </p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
