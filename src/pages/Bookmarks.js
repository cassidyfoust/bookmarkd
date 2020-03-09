import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonText,
  IonItemSliding,
  IonItemOptions,
  IonItemOption
} from "@ionic/react";
import React, { useEffect , useState} from "react";
import "./Bookmarks.css";
import {firebaseConst} from '../firebaseConfig'

function GetUserCollection() {
  const [collection, setCollection] = useState([])

  useEffect(() => {
    firebaseConst.firestore().collection("books").onSnapshot((snapshot) => {
      const newCollection = snapshot.docs.map((doc) => ({
        id: doc.id, ... doc.data()
      }))
      setCollection(newCollection)
    })
  }, [])
  return collection;
}

const Bookmarks = () => {
  const collection = GetUserCollection();
    return (
      <IonPage id="main">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Your Bookmarks</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
            {collection.map((elem) => {
              return (
                <IonItemSliding key={elem.title}>
                  <IonItem>
                    <IonText>
                      {elem.title} by {elem.authors[0]}
                    </IonText>
                  </IonItem>
                  <IonItemOptions side="end">
                    <IonItemOption
                      onClick={(e) => window.open(
                        `https://www.indiebound.org/book/${elem.isbn}`
                      )}
                    >
                      Buy
                    </IonItemOption>
                    <IonItemOption
                      onClick={() =>
                        alert("Are you sure you want to delete this?")
                      }
                      color="danger"
                    >
                      Delete
                    </IonItemOption>
                  </IonItemOptions>
                </IonItemSliding>
              );
            })}
          </IonList>
        </IonContent>
      </IonPage>
    );
}

export default Bookmarks;
