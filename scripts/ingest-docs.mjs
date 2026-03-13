import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse-fork');

const KB_DIR = './knowledge_base';
const BRAIN_FILE = './data/brain.ts';

async function ingest() {
  const files = fs.readdirSync(KB_DIR).filter(f => f.endsWith('.pdf'));
  
  if (files.length === 0) {
    console.log("No new PDFs found in /knowledge_base");
    return;
  }

  console.log(`Processing ${files.length} documents...`);

  const newNodes = [];

  for (const file of files) {
    const filePath = path.join(KB_DIR, file);
    const dataBuffer = fs.readFileSync(filePath);
    
    try {
      const data = await pdf(dataBuffer);
      
      // Clean up the text
      const cleanContent = data.text
        .replace(/\s+/g, ' ')
        .substring(0, 10000); // Character limit for memory efficiency

      const node = {
        id: `doc-${file.replace(/\s+/g, '-').toLowerCase()}`,
        category: "Document",
        title: `Document: ${file}`,
        content: cleanContent,
        tags: ["Extracted", "PDF", "Portfolio"]
      };

      newNodes.push(node);
      console.log(`✅ Extracted: ${file} (${data.numpages} pages)`);
    } catch (err) {
      console.error(`❌ Error parsing ${file}:`, err);
    }
  }

  // Read current brain file
  let brainContent = fs.readFileSync(BRAIN_FILE, 'utf8');

  // Format nodes for injection
  const nodesString = newNodes.map(n => {
    return `  {
    id: ${JSON.stringify(n.id)},
    category: ${JSON.stringify(n.category)},
    title: ${JSON.stringify(n.title)},
    content: \`${n.content.replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`,
    tags: ${JSON.stringify(n.tags)}
  }`;
  }).join(',\n');
  
  const marker = '// NEW_NODES_WILL_BE_APPENDED_HERE';
  const updatedContent = brainContent.replace(marker, `${nodesString},\n  ${marker}`);

  fs.writeFileSync(BRAIN_FILE, updatedContent);
  console.log("\nDone! data/brain.ts has been updated with your portfolio data.");
}

ingest();
