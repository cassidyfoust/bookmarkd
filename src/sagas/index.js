import axios from "axios";
import { put } from "redux-saga/effects";
import { all, takeEvery } from "redux-saga/effects";
require("dotenv").config();

export default function* rootSaga() {
  yield takeEvery("FETCH_BOOKS", fetchBooks)
}

function* fetchBooks(action) {
  try {
    const response = yield axios.get('/getBooks');
    console.log("fetch books response:", response);
    yield put({ type: "SET_BOOKS", payload: response.data});
  } catch (error) {
    console.log("error while fetching books:", error);
  }
}