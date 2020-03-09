import React, { useState, useEffect } from "react";
import {
  IonButton,
  IonCard,
  IonIcon,
  IonCardContent,
} from "@ionic/react";
import {onSave, getCurrentUser} from '../firebaseConfig';
import { toast } from "../toast";
import './AddBooks.css'

import { bookmarkOutline, checkmarkCircleOutline} from "ionicons/icons";

/**
 *
 * @param {*} param0
 */
function AddBooks(props) {


    useEffect(() => {
          getCurrentUser().then(user => {
            if (user) {
              setUserId(user.uid);
            }
          });
        }, []);

        const [userId, setUserId] = useState("");
        const [buttonClicked, setButtonClicked] = useState(false);

      async function saveBook(book, userId) {
        const result = await onSave(book, userId);
        if (!result) {
          toast(
            "Unable to save book."
          );
        } else {
          toast("Saved to your collection.");
          setButtonClicked(true);
        }
      }
      let saveButton;
      if(buttonClicked){
        saveButton = (
              <IonButton
                className="randomBooksButton"
                color="success"
              >
                <IonIcon icon={checkmarkCircleOutline} /> Saved
              </IonButton>
            );
      } else {
        saveButton = (
  <IonButton
    className="randomBooksButton"
    color="secondary"
    onClick={() => saveBook(props.book, userId)}
  >
    <IonIcon icon={bookmarkOutline} /> Save
  </IonButton>
        )}
  return (
    <>
      <IonCard
        key={props.book.volumeInfo.title}
        value={props.book}
        className="randomBooks"
      >
        <IonCardContent>
          <img src={props.book.volumeInfo.imageLinks.smallThumbnail} />
          <div>
          {saveButton}
          </div>
        </IonCardContent>
      </IonCard>
    </>
  );
}

export default AddBooks;