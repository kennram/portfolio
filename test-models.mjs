import fs from 'fs';
import path from 'path';

async function listModels() {
  // Manual env parse
  const envPath = path.resolve(process.cwd(), '.env.local');
  const envContent = fs.readFileSync(envPath, 'utf8');
  const keyMatch = envContent.match(/GOOGLE_GENERATIVE_AI_API_KEY=(.*)/);
  const apiKey = keyMatch ? keyMatch[1].trim() : null;

  if (!apiKey) {
    console.error("API Key not found in .env.local");
    return;
  }

  try {
    console.log("Fetching models with key:", apiKey.substring(0, 4) + "...");
    const result = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
    const data = await result.json();
    console.log("AVAILABLE MODELS:");
    if (data.models) {
      data.models.forEach(m => console.log(`- ${m.name.replace('models/', '')}`));
    } else {
      console.log("No models returned. Response:", JSON.stringify(data));
    }
  } catch (error) {
    console.error("Error listing models:", error);
  }
}

listModels();
