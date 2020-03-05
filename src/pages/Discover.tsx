import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonText, IonItem, IonCard, IonAvatar, IonLabel, IonButton, IonIcon } from '@ionic/react';
import React from 'react';
import './Discover.css';
import { bookmarkOutline, trashBinOutline } from "ionicons/icons";


let books = [
  {
    title: 'The Belles',
    author: 'Dhonielle Clayton',
    image: 'https://target.scene7.com/is/image/Target/GUEST_77214a8b-6108-4d59-bc61-5abe7feebfd8?wid=488&hei=488&fmt=pjpeg'
  },
  {
    title: 'Dread Nation',
    author: 'Justina Ireland',
    image: 'https://target.scene7.com/is/image/Target/GUEST_19bdeb6a-186d-4112-b07f-9d6eb5abfa85?wid=488&hei=488&fmt=pjpeg'
  },
  {
    title: 'That Inevitable Victorian Thing',
    author: 'E.K. Johnston',
    image: 'https://target.scene7.com/is/image/Target/GUEST_d63912b3-7911-4d82-a6fb-b0af7344ed38?wid=488&hei=488&fmt=pjpeg'
  }
]

const Discover: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bookmark'd</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
          {books.map(elem => (<IonCard key={elem.title} className="ion-image">
              <img src={`${elem.image}`}></img>
            <IonLabel className="ion-padding"><h2>{elem.title}</h2><h3>by {elem.author}</h3></IonLabel>
            <IonButton color="danger"><IonIcon icon={trashBinOutline}></IonIcon></IonButton>
            <IonButton color="success"><IonIcon icon={bookmarkOutline}></IonIcon></IonButton>
          </IonCard>))}
      </IonContent>
    </IonPage>
  );
};

export default Discover;
