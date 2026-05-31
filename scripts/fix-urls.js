const fs = require('fs');
const path = require('path');

function replaceInFile(filepath, replacements) {
  let content = fs.readFileSync(filepath, 'utf8');
  for (const [search, replace] of replacements) {
    content = content.replace(search, replace);
  }
  fs.writeFileSync(filepath, content);
}

replaceInFile('src/routes/index.tsx', [
  ['https://image.pollinations.ai/prompt/artisan%20pizza%20wood%20fired%20oven%20dark%20dramatic?width=1920&height=1080&nologo=true', '/images/hero-index.jpg'],
  ['https://image.pollinations.ai/prompt/hotel%20room%20warm%20tropical%20cozy?width=900&height=700&nologo=true', '/images/hero-room.jpg']
]);

replaceInFile('src/routes/evenements.tsx', [
  ['https://image.pollinations.ai/prompt/restaurant%20event%20decoration%20table%20group%20celebration?width=1920&height=1080&nologo=true', '/images/hero-events.jpg'],
  ['`https://image.pollinations.ai/prompt/restaurant%20event%20decoration%20${i}?width=600&height=${500 + ((i * 70) % 250)}&nologo=true`', '`/images/event-${i}.jpg`']
]);

replaceInFile('src/routes/menu.tsx', [
  ['https://image.pollinations.ai/prompt/artisan%20pizza%20ingredients%20overhead%20dark?width=1920&height=1080&nologo=true', '/images/hero-menu.jpg']
]);

replaceInFile('src/routes/hotel.tsx', [
  ['https://image.pollinations.ai/prompt/boutique%20hotel%20tropical%20warm%20interior?width=1920&height=1080&nologo=true', '/images/hero-hotel.jpg']
]);

replaceInFile('src/routes/gallery.tsx', [
  ['https://image.pollinations.ai/prompt/restaurant%20ambiance%20warm%20lights%20interior?width=1920&height=1080&nologo=true', '/images/hero-gallery.jpg'],
  ['`https://image.pollinations.ai/prompt/${encodeURIComponent(q)}?width=600&height=${500 + Math.floor(Math.random() * 300)}&nologo=true`', '`/images/gallery-${encodeURIComponent(q).replace(/%/g, "_")}.jpg`']
]);

// For menu.ts and rooms.ts, we need to extract the ID and replace `image: img("...")` with `image: "/images/item-" + id + ".jpg"`
function fixDataFile(filepath) {
  let content = fs.readFileSync(filepath, 'utf8');
  // Remove the img function
  content = content.replace(/const img = \(q: string\) =>\n\s+`https:\/\/image\.pollinations\.ai\/prompt\/\$\{encodeURIComponent\(q\)\}\?width=800&height=600&nologo=true`;\n*/, '');
  
  // Replace `image: img("...")` with `image: "/images/item-{id}.jpg"`
  content = content.replace(/\{.*?id:\s*"([^"]+)",.*?image:\s*img\("[^"]+"\)\s*\}/gs, (match, id) => {
    return match.replace(/image:\s*img\("[^"]+"\)/, `image: "/images/item-${id}.jpg"`);
  });
  
  fs.writeFileSync(filepath, content);
}

fixDataFile('src/data/menu.ts');
fixDataFile('src/data/rooms.ts');
