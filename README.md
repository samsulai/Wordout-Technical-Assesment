# Wordout API

A REST API for email subscriptions built with Node.js, Express, TypeScript, and MongoDB.

## Setup

1. Clone the repository:
```bash
git clone <your-repo-url>
cd wordout-api
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
PORT=3000
MONGO_URI=your_mongodb_connection_string_here
NODE_ENV=development
```

Replace `your_mongodb_connection_string_here` with your actual MongoDB connection string.

4. Run the project:
```bash
npm run dev
```

The server will start on `http://localhost:3000`

## API Endpoint

**POST** `/api/subscribe`

Request:
```json
{
  "email": "wordout@example.com"
}
```

Response:
```json
{
  "success": true,
  "message": "Successfully subscribed",
  "data": {
    "email": "user@example.com"
  }
}
```

## Build for Production

```bash
npm run build
npm start
```
