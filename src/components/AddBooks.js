import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { useDocument } from "react-firebase-hooks/firestore";
import {
  IonButton,
  IonCard,
  IonIcon,
  IonCardContent,
} from "@ionic/react";
import {onSave} from '../firebaseConfig';
import { toast } from "../toast";

import { bookmarkOutline, trashBinOutline, book } from "ionicons/icons";

/**
 *
 * @param {*} param0
 */
function AddBooks(props) {

      const [busy, setBusy] = useState(false);

      async function saveBook(book) {
        setBusy(true);
        const result = await onSave(book);
        if (!result) {
          toast(
            "Unable to save book."
          );
        } else {
          toast("Saved to your collection.");
        }
        setBusy(false);
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
          <IonButton color="" onClick={() => saveBook(props.book)}>
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