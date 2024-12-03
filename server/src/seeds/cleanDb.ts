import models from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: "Question", collectionName: string) => {
  try {
    // I added the bang to the db property to avoid the error
    let modelExists = await models[modelName].db.db!.listCollections({
      name: collectionName
    }).toArray() || []

    if (modelExists.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
}
