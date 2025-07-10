# Quick Start Guide

## Minimal Setup (Basic Features Only)

If you want to run the app with basic features without full authentication, follow these steps:

### 1. Basic Environment Setup
The `.env.local` file has been created with default values. For basic functionality, you only need to set:

```env
# Database (Required)
MONGO_URI=mongodb://localhost:27017/flex-it-out

# NextAuth (Required - already generated)
NEXTAUTH_SECRET=your-generated-secret
NEXTAUTH_URL=http://localhost:3000
```

### 2. Install MongoDB (Choose One)

#### Option A: MongoDB Atlas (Easiest)
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account
3. Create a new cluster
4. Get your connection string
5. Replace `MONGO_URI` in `.env.local`

#### Option B: Local MongoDB
1. Download MongoDB Community Server
2. Install and start the service
3. Use: `mongodb://localhost:27017/flex-it-out`

### 3. Run the Application
```bash
npm run dev
```

Visit: http://localhost:3000

## What Works Without Full Setup

✅ **Basic UI and Navigation**  
✅ **Pose Detection Challenges** (with camera)  
✅ **Static Content and Pages**  
✅ **Basic User Interface**  

## What Requires Additional Setup

❌ **User Registration/Login** (needs Google OAuth or Email setup)  
❌ **Email OTP Verification** (needs email service)  
❌ **User Data Persistence** (needs MongoDB)  
❌ **Points and Rewards** (needs database)  

## Next Steps for Full Features

1. **Set up MongoDB** (see above)
2. **Configure Google OAuth** (optional - for Google sign-in)
3. **Set up Email Service** (for OTP verification)

See `SETUP.md` for complete instructions.

## Troubleshooting

- **"MongoDB connection failed"**: Check your MONGO_URI
- **"NextAuth error"**: Verify NEXTAUTH_SECRET is set
- **"Port already in use"**: Change PORT in .env.local or kill existing process 