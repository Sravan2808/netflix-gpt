import { GEMINI_KEY } from "./constants";

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(GEMINI_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

export default model;