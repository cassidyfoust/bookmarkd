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
            {this.props.randomBooks &&
              this.props.randomBooks.map(book => {
                return (
                  <IonCard key={book.volumeInfo.title} className="randomBooks">
                    <IonCardContent>
                      <img src={book.volumeInfo.imageLinks.smallThumbnail} />
                      <IonButton color="danger">
                        <IonIcon icon={trashBinOutline} />
                      </IonButton>
                      <IonButton color="">
                        <IonIcon icon={bookmarkOutline} />
                      </IonButton>
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
