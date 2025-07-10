const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function testConnection() {
  console.log('🔍 Testing MongoDB Connection...\n');
  
  const uri = process.env.MONGO_URI;
  
  if (!uri) {
    console.error('❌ MONGO_URI not found in .env.local');
    console.log('Please set MONGO_URI in your .env.local file');
    return;
  }
  
  console.log('📡 Connection string:', uri.replace(/\/\/.*@/, '//***:***@'));
  
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log('✅ Successfully connected to MongoDB!');
    
    // Test database operations
    const db = client.db();
    const collections = await db.listCollections().toArray();
    console.log('📊 Available collections:', collections.map(c => c.name));
    
    // Test creating a collection
    const testCollection = db.collection('test');
    await testCollection.insertOne({ test: 'connection', timestamp: new Date() });
    console.log('✅ Database write test successful');
    
    await client.close();
    console.log('✅ MongoDB connection test completed successfully!\n');
    console.log('🚀 You can now run: npm run dev');
    
  } catch (error) {
    console.error('❌ MongoDB connection failed:');
    console.error(error.message);
    console.log('\n🔧 Troubleshooting tips:');
    console.log('1. Check if MongoDB is running');
    console.log('2. Verify your connection string');
    console.log('3. Check network access (for Atlas)');
    console.log('4. Ensure username/password are correct');
  }
}

testConnection(); 