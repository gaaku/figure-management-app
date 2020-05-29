import firebase from "firebase";
import { dbList } from "../db";

class List {
  constructor({ id, date, meal, training, weight }) {
    this.id = id;
    this.date = date;
    this.meal = meal;
    this.training = training;
    this.weight = weight;
  }

  static async save({ meal, training, weight }) {
    if (!meal || !training || !weight) {
      throw new Error("bodyはstring型で1文字以上の入力必須です");
    }

    const postData = {
      meal,
      training,
      weight,
      date: firebase.firestore.FieldValue.serverTimestamp(),
    };

    const docRef = await dbList.add(postData);
    const snapShot = await docRef.get();
    const data = snapShot.data();
    const model = this.create(docRef.id, data);

    return model;
  }

  static async fetchMessages() {
    const collection = await dbList.orderBy("date").get();
    if (collection.empty) {
      return [];
    }

    return collection.docs.map((doc) => {
      return this.create(doc.id, doc.data());
    });
  }

  static create(id, data) {
    return new List({
      id,
      meal: data.meal,
      training: data.training,
      weight: data.weight,
      date: data.date.toDate().toLocaleString(),
    });
  }
}

export default List;
