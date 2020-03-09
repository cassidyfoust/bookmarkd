import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput } from '@ionic/react';
import React,{useState} from 'react';
import './Profile.css';

const Profile = () => {

  const [input, setInput] = useState('')

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Your Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Name:</h1>
        <IonInput value={input} onIonChange={(e) => setInput(e.target.value)}></IonInput>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
