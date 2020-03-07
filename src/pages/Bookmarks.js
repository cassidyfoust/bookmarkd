import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonText, IonItemSliding, IonItemOptions, IonItemOption } from '@ionic/react';
import React from 'react';
import './Bookmarks.css';

let books = [
  {title: 'The Belles',
  author: 'Dhonielle Clayton'},
  {title: 'Dread Nation',
  author: 'Justina Ireland'},
  {title: 'That Inevitable Victorian Thing',
author: 'E.K. Johnston'}
]

const Bookmarks = () => {
  return (
    <IonPage id="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Your Bookmarks</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {books.map(elem => (<IonItemSliding key={elem.title}>
            <IonItem>
            <IonText>{elem.title} by {elem.author}</IonText>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption onClick={() => alert('Buy!')}>Buy</IonItemOption>
              <IonItemOption onClick={() => alert('Are you sure you want to delete this?')}>Delete</IonItemOption>
            </IonItemOptions>
            </IonItemSliding>))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Bookmarks;
