import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonLabel, IonButton, IonIcon, IonCardContent, IonButtons } from '@ionic/react';
import React, {Component} from "react";
import './Discover.css';
import { bookmarkOutline, trashBinOutline, book } from "ionicons/icons";
import { connect } from "react-redux";

const mapStateToProps = reduxState => ({
    reduxState
  });

class Discover extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "FETCH_BOOKS"
    });
  }
  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Bookmark'd</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          {/* {this.props.reduxState.randomBooks.map(book => {
            return (
              <IonCard key={book}>
                <IonCardContent>
                  <img src={book} />
                </IonCardContent>
              </IonCard>
            );
          })} */}
        </IonContent>
      </IonPage>
    );
  }
}
;

export default connect(mapStateToProps)(Discover);
