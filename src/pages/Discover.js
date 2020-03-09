import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton} from '@ionic/react';
import React, {Component} from "react";
import './Discover.css';
import { connect } from "react-redux";
import AddBooks from '../components/AddBooks';

const mapStateToProps = reduxState => ({
      randomBooks: (reduxState && reduxState.randomBooks) || [],
  });

class Discover extends Component {

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Bookmark'd</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="pageWrapper">
          <div className="randomBooksWrapper">
            {this.props.randomBooks &&
              this.props.randomBooks.map(book => {
                return <AddBooks book={book} />;
              })}
          </div>
          <div className="refreshButton">
            <IonButton color="secondary" onClick={(e) => this.props.dispatch({type: "FETCH_BOOKS"})}>Refresh Books</IonButton>
          </div>
        </IonContent>
      </IonPage>
    );
  }
}
;

export default connect(mapStateToProps)(Discover);
