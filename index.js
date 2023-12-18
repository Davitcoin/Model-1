const readline = require('readline');
require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.Key);
const model = genAI.getGenerativeModel({ model: "gemini-provision"});

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

async function run() {
 const model = genAI.getGenerativeModel({ model: "gemini-pro"});
 rl.question('Pregunta lo que sea: ', (prompt) => {
    rl.close();
    (async () => {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      console.log(text);
    })();
 });
}

run();