# Flex It Out - Setup Guide

## Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB (local or cloud)
- Google OAuth credentials (optional)
- Email service (Gmail recommended)

## Step 1: Environment Variables Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# Database Configuration
MONGO_URI=mongodb://localhost:27017/flex-it-out
# OR for MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/flex-it-out

# NextAuth Configuration
NEXTAUTH_SECRET=your-super-secret-key-here-make-it-long-and-random
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
```

## Step 2: MongoDB Setup

### Option A: Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. Create database: `flex-it-out`

### Option B: MongoDB Atlas (Recommended)
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free cluster
3. Get your connection string
4. Replace `MONGO_URI` with your Atlas connection string

## Step 3: Google OAuth Setup (Optional)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
6. Copy Client ID and Client Secret to `.env.local`

## Step 4: Email Setup (for OTP)

### Gmail Setup (Recommended)
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password
3. Use your Gmail address and app password in `.env.local`

### Other Email Providers
- Update `EMAIL_HOST` and `EMAIL_PORT` for your provider
- Use appropriate credentials

## Step 5: Generate NEXTAUTH_SECRET

Run this command to generate a secure secret:
```bash
openssl rand -base64 32
```

## Step 6: Install Dependencies

```bash
npm install
```

## Step 7: Run the Application

```bash
npm run dev
```

The application will be available at: http://localhost:3000

## Troubleshooting

### Common Issues:

1. **MongoDB Connection Error**
   - Check if MongoDB is running
   - Verify connection string format
   - Ensure network access (for Atlas)

2. **Google OAuth Error**
   - Verify redirect URI matches exactly
   - Check if Google+ API is enabled
   - Ensure credentials are correct

3. **Email OTP Not Working**
   - Check email credentials
   - Verify SMTP settings
   - For Gmail, ensure App Password is used

4. **NextAuth Errors**
   - Verify NEXTAUTH_SECRET is set
   - Check NEXTAUTH_URL matches your domain
   - Ensure all required environment variables are present

## Features Available

- ✅ User registration and login
- ✅ Google OAuth authentication
- ✅ Email OTP verification
- ✅ AI pose detection challenges
- ✅ Daily fitness challenges
- ✅ Points and reward system
- ✅ Leaderboards
- ✅ User profiles

## Development Notes

- The app uses TensorFlow.js for pose detection
- MongoDB stores user data and challenge information
- NextAuth handles authentication
- Tailwind CSS for styling
- TypeScript for type safety 