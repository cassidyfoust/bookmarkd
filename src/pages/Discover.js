import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import React, {Component} from "react";
import './Discover.css';
import { connect } from "react-redux";
import AddBooks from '../components/AddBooks';
import Menu from "../components/Menu";

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
        <IonContent className="randomBooksWrapper">
            {this.props.randomBooks &&
              this.props.randomBooks.map(book => {
                return (
                  <AddBooks book={book}/>
                );
              })}
        </IonContent>
      </IonPage>
    );
  }
}
;

export default connect(mapStateToProps)(Discover);
