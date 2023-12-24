const {
    MongoClient
} = require('mongodb');

const uri = 'mongodb+srv://manasishewale9:Mxnxsi@cluster0.9mputlx.mongodb.net/Battlefield4';
const client = new MongoClient(uri);
const fetchData = async() => {
    try {
        await client.connect();

        // Access the collections
        const gameStatsCollection = client.db('Battlefield4').collection('gameStats');
        const soldierMenuCollection = client.db('Battlefield4').collection('soldierMenu');

        // Fetch all data from both collections
        const gameStatsData = await gameStatsCollection.find({}).sort({
            sequence: 1
        }).toArray();
        const soldierMenuData = await soldierMenuCollection.find({}).sort({
            sequence: 1
        }).toArray();

        // Log the data
        console.log('GameStats Data:', gameStatsData);
        console.log('SoldierMenu Data:', soldierMenuData);

        // Return the data
        return {
            gamestats: gameStatsData,
            soldierMenu: soldierMenuData,
        };
    } finally {
        await client.close();
    }
};
module.exports = fetchData;