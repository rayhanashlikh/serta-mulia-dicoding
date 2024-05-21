const { Firestore } = require('@google-cloud/firestore');

async function storeData(id, data) {
  const db = new Firestore({
    projectId: 'dicoding-ml-studi-kasus',
    databaseId: '(default)'
  });

  const predictCollection = db.collection('prediction');
  return predictCollection.doc(id).set(data);
}

module.exports = storeData;