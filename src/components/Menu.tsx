import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonText, IonItemSliding, IonItemOptions, IonItemOption, IonMenu, IonIcon } from '@ionic/react';
import React from 'react';
import { bookOutline, personOutline, bookmarkOutline } from "ionicons/icons";
import './Menu.css'

const Menu: React.FC = () => {
  return (
    <IonMenu contentId="main">
      <IonContent>
        <IonItem className="menuItem" routerLink='/discover'>
          <IonIcon icon={bookOutline} className="menuIcon" />
          Discover
      </IonItem>
        <IonItem className="menuItem" routerLink='/yourprofile'>
          <IonIcon icon={personOutline} className="menuIcon" />
          Profile
      </IonItem>
        <IonItem className="menuItem" routerLink='/yourbookmarks'>
          <IonIcon icon={bookmarkOutline} className="menuIcon" />
          Bookmarks
      </IonItem>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
