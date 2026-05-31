import fs from 'fs';

function fixDataFile(filepath) {
  let content = fs.readFileSync(filepath, 'utf8');
  content = content.replace(/const img = \(q: string\) =>\n\s+`https:\/\/image\.pollinations\.ai\/prompt\/\$\{encodeURIComponent\(q\)\}\?width=800&height=600&nologo=true`;\n*/, '');
  content = content.replace(/\{.*?id:\s*"([^"]+)",.*?image:\s*img\("[^"]+"\)\s*\}/gs, (match, id) => {
    return match.replace(/image:\s*img\("[^"]+"\)/, `image: "/images/item-${id}.jpg"`);
  });
  fs.writeFileSync(filepath, content);
}

fixDataFile('src/data/menu.ts');
fixDataFile('src/data/rooms.ts');
