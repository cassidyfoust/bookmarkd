import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/react';
import React,{useState} from 'react';
import './Profile.css';

const Home: React.FC = () => {

  const [input, setInput] = useState<string>('')

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome to Bookmark'd</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Have an account?</h2>
        <IonButton routerLink="/login">Login</IonButton>
        <h2>Need an account?</h2>
        <IonButton routerLink="/register">Register</IonButton>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
