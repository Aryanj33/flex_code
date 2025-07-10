const fs = require('fs');
const crypto = require('crypto');

console.log('🔧 Flex It Out - Environment Setup\n');

// Generate a secure NEXTAUTH_SECRET
const generateSecret = () => {
  return crypto.randomBytes(32).toString('base64');
};

const envTemplate = `# Database Configuration
MONGO_URI=mongodb://localhost:27017/flex-it-out
# OR for MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/flex-it-out

# NextAuth Configuration
NEXTAUTH_SECRET=${generateSecret()}
NEXTAUTH_URL=http://localhost:3000

# Google OAuth (Optional - for Google Sign-in)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
OAUTH_GOOGLE_PASS=your-oauth-google-password

# Email Configuration (for OTP verification)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Server Configuration
PORT=3000
`;

try {
  fs.writeFileSync('.env.local', envTemplate);
  console.log('✅ Created .env.local file with default values');
  console.log('📝 Please update the following values:');
  console.log('   - MONGO_URI: Your MongoDB connection string');
  console.log('   - GOOGLE_CLIENT_ID: Your Google OAuth Client ID');
  console.log('   - GOOGLE_CLIENT_SECRET: Your Google OAuth Client Secret');
  console.log('   - EMAIL_USER: Your email address');
  console.log('   - EMAIL_PASS: Your email app password');
  console.log('\n🔗 See SETUP.md for detailed instructions');
} catch (error) {
  console.error('❌ Error creating .env.local file:', error.message);
} 