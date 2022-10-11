import { STORY_LIST, SET_STORY_LIST } from "../../../Constant";
import { takeEvery, put } from "redux-saga/effects";
function* getStory() {
  try {
    console.log("call Api here ");

    let data = yield fetch("http://localhost:3000/Story");
    data = yield data.json();
    yield put({ type: SET_STORY_LIST, data });
  } catch {
    console.log("Api Data not found ");
  }
}

function* StorySaga() {
  yield takeEvery(STORY_LIST, getStory);
}
export default StorySaga;
