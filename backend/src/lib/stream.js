import { StreamChat } from "stream-chat";
import "dotenv/config";

const STREAM_API_KEY = process.env.STREAM_API_KEY;
const STREAM_API_SECRET_KEY = process.env.STREAM_API_SECRET_KEY;

if (!STREAM_API_KEY || !STREAM_API_SECRET_KEY) {
  console.error("Stream API key and secret is missing");
}

const streamClient = StreamChat.getInstance(
  STREAM_API_KEY,
  STREAM_API_SECRET_KEY
);

// working on this

