import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard , IonCardContent} from '@ionic/react';
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
        <IonCard>
          <IonCardContent>
            <h3>Name: Cassidy Foust</h3>
            <br></br>
            <h3>Email: {user.email}</h3>
            <br></br>
            <h3>Age: 26</h3>
            <br></br>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
