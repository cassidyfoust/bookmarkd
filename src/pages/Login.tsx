import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonLoading } from '@ionic/react';
import React,{useState} from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import {loginUser} from '../firebaseConfig';
import {toast} from '../toast';

const Login: React.FC = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState<boolean>(false)

  async function login(){
    setBusy(true)
      const result = await loginUser(username, password)
      if(!result){
        toast('Unable to login. Please double-check your username and password.')
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
      <IonLoading message="Please wait..." isOpen={busy} duration={0}/>
      <IonContent className="ion-padding">
        <IonInput placeholder="Email" value={username} onIonChange={(e: any) => setUsername(e.target.value)}></IonInput>
        <IonInput placeholder="Password" value={password} type="password" onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
        <IonButton onClick={login}>Login</IonButton>
        <p>Need an account? <Link to="/register">Register</Link></p>
      </IonContent>
    </IonPage>
  );
};

export default Login;
