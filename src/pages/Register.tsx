import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonLoading } from '@ionic/react';
import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import {toast} from '../toast';
import {registerUser} from '../firebaseConfig';

const Register: React.FC = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [busy, setBusy] = useState<boolean>(false);


  async function register() {
        setBusy(true);
    if(password !== confirmPassword){
      return toast('Passwords must match.')
    }
    if(username.trim() === '' || password.trim() === ''){
      return toast('Username and password are required.')
    }
    const result = await registerUser(username, password)
    if(result){
      toast('Registration successful!')
    }setBusy(false);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register an Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Please wait..." isOpen={busy} duration={0} />
      <IonContent className="ion-padding">
        <IonInput
          placeholder="Email"
          value={username}
          onIonChange={(e: any) => setUsername(e.target.value)}
        ></IonInput>
        <IonInput
          placeholder="Password"
          value={password}
          type="password"
          onIonChange={(e: any) => setPassword(e.target.value)}
        ></IonInput>
        <IonInput
          placeholder="Confirm Password"
          type="password"
          value={confirmPassword}
          onIonChange={(e: any) => setConfirmPassword(e.target.value)}
        ></IonInput>
        <IonButton onClick={register}>Register</IonButton>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Register;
