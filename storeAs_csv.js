import { MongoClient } from 'mongodb';
import { Parser } from 'json2csv';
import { writeFileSync } from 'fs';

const uri = 'mongodb+srv://eoghan1284:Complexity7132K14@cluster0.738tjud.mongodb.net/CapstoneDB?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function exportToCSV() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db('CapstoneDB');
    const collection = db.collection('Observations2');
    const data = await collection.find({}).toArray();
    const json2csvParser = new Parser();
    const csv = json2csvParser.parse(data);
    writeFileSync('output2.csv', csv);
    console.log('CSV file created successfully');
  } catch (err) {
    console.error('Error while exporting data:', err);
  } finally {
    await client.close();
  }
}

exportToCSV();
