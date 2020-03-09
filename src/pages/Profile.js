import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput } from '@ionic/react';
import React,{useState, useEffect} from 'react';
import './Profile.css';
import {getCurrentUser} from '../firebaseConfig';

const Profile = () => {

    useEffect(() => {
        getCurrentUser().then(user => {
          if (user) {
            setUser(user);
          }
        });
      }, []);

      const [user, setUser] = useState("");

  const [input, setInput] = useState('')

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Your Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h3>Email: {user.email}</h3>
        <IonInput value={input} onIonChange={(e) => setInput(e.target.value)}></IonInput>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
