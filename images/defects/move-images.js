const fs = require('fs');
const path = require('path');

// Create renamed directory if it doesn't exist
const renamedDir = path.join(__dirname, 'renamed');
if (!fs.existsSync(renamedDir)) {
  fs.mkdirSync(renamedDir);
}

// Define the mapping of source files to destination names
const imageMappings = [
  {
    source: path.join(__dirname, 'corrosion', 'ChatGPT Image Apr 3, 2025, 12_59_41 PM.png'),
    dest: path.join(renamedDir, 'defect2-1.jpg')
  },
  {
    source: path.join(__dirname, 'cracks', 'ChatGPT Image Apr 3, 2025, 12_55_28 PM.png'),
    dest: path.join(renamedDir, 'defect1-1.jpg')
  },
  {
    source: path.join(__dirname, 'dents', 'ChatGPT Image Apr 3, 2025, 12_49_05 PM.png'),
    dest: path.join(renamedDir, 'defect4-1.jpg')
  },
  {
    source: path.join(__dirname, 'puncture', 'ChatGPT Image Apr 3, 2025, 12_44_44 PM.png'),
    dest: path.join(renamedDir, 'defect6-1.jpg')
  }
];

// Process each image
imageMappings.forEach(({ source, dest }) => {
  try {
    if (fs.existsSync(source)) {
      fs.copyFileSync(source, dest);
      console.log(`Successfully copied: ${path.basename(source)} -> ${path.basename(dest)}`);
    } else {
      console.log(`Warning: Source file not found: ${path.basename(source)}`);
    }
  } catch (error) {
    console.error(`Error processing ${path.basename(source)}:`, error.message);
  }
});

console.log('Image processing complete!'); 