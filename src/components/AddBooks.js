import React, { useState, useEffect } from "react";
import {
  IonButton,
  IonCard,
  IonIcon,
  IonCardContent,
} from "@ionic/react";
import {onSave, getCurrentUser} from '../firebaseConfig';
import { toast } from "../toast";

import { bookmarkOutline, trashBinOutline, book } from "ionicons/icons";

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

      async function saveBook(book, userId) {
        const result = await onSave(book, userId);
        if (!result) {
          toast(
            "Unable to save book."
          );
        } else {
          toast("Saved to your collection.");
        }
      }


  return (
    <>
      <IonCard
        key={props.book.volumeInfo.title}
        value={props.book}
        className="randomBooks"
      >
        <IonCardContent>
          <img src={props.book.volumeInfo.imageLinks.smallThumbnail} />
          <IonButton color="danger">
            <IonIcon icon={trashBinOutline} />
          </IonButton>
          <IonButton color="" onClick={() => saveBook(props.book, userId)}>
            <IonIcon icon={bookmarkOutline} /> Save
          </IonButton>
        </IonCardContent>
      </IonCard>
      {/* <IonItem>
        <IonInput value={book} onInput={e => setBook(e.target.value)} />
      </IonItem>
      <IonButton style={{ marginTop: 8 }} onClick={onSave}>
        SAVE
      </IonButton> */}
    </>
  );
}

export default AddBooks;