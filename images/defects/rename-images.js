const fs = require('fs');
const path = require('path');

const renameMap = {
  'corrosion/ChatGPT Image Apr 3, 2025, 12_59_41 PM.png': 'defect2-1.jpg',
  'cracks/ChatGPT Image Apr 3, 2025, 12_55_28 PM.png': 'defect1-1.jpg',
  'dents/ChatGPT Image Apr 3, 2025, 12_49_05 PM.png': 'defect4-1.jpg',
  'puncture/ChatGPT Image Apr 3, 2025, 12_44_44 PM.png': 'defect6-1.jpg'
};

const baseDir = path.join(__dirname);

// Create a new directory for renamed images
const outputDir = path.join(baseDir, 'renamed');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Rename and copy files
Object.entries(renameMap).forEach(([oldPath, newName]) => {
  const oldFullPath = path.join(baseDir, oldPath);
  const newFullPath = path.join(outputDir, newName);
  
  if (fs.existsSync(oldFullPath)) {
    fs.copyFileSync(oldFullPath, newFullPath);
    console.log(`Renamed: ${oldPath} -> ${newName}`);
  } else {
    console.log(`Warning: File not found: ${oldPath}`);
  }
});

console.log('Image renaming complete!'); 