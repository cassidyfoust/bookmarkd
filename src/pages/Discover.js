import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonLabel, IonButton, IonIcon, IonCardContent, IonButtons } from '@ionic/react';
import React, {Component} from "react";
import './Discover.css';
import { bookmarkOutline, trashBinOutline, book } from "ionicons/icons";
import { connect } from "react-redux";

const mapStateToProps = reduxState => ({
      randomBooks: (reduxState && reduxState.randomBooks) || [],
  });

class Discover extends Component {

  render() {
    console.log('the redux state is:' + this.props.randomBooks)
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Bookmark'd</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          {this.props.randomBooks && this.props.randomBooks.map(book => {
            return (
              <IonCard key={book.volumeInfo.title}>
                <IonCardContent>
                  <div>{book.volumeInfo.title}</div>
                  <img src={book.volumeInfo.title} />
                </IonCardContent>
              </IonCard>
            );
          })}
        </IonContent>
      </IonPage>
    );
  }
}
;

export default connect(mapStateToProps)(Discover);
