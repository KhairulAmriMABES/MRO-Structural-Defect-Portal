const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://raw.githubusercontent.com/your-repo/aircraft-defects/main/images/crack-1.jpg',
    filename: 'crack-1.jpg'
  },
  {
    url: 'https://raw.githubusercontent.com/your-repo/aircraft-defects/main/images/crack-2.jpg',
    filename: 'crack-2.jpg'
  },
  {
    url: 'https://raw.githubusercontent.com/your-repo/aircraft-defects/main/images/corrosion-1.jpg',
    filename: 'corrosion-1.jpg'
  },
  {
    url: 'https://raw.githubusercontent.com/your-repo/aircraft-defects/main/images/corrosion-2.jpg',
    filename: 'corrosion-2.jpg'
  },
  {
    url: 'https://raw.githubusercontent.com/your-repo/aircraft-defects/main/images/dent-1.jpg',
    filename: 'dent-1.jpg'
  },
  {
    url: 'https://raw.githubusercontent.com/your-repo/aircraft-defects/main/images/dent-2.jpg',
    filename: 'dent-2.jpg'
  },
  {
    url: 'https://raw.githubusercontent.com/your-repo/aircraft-defects/main/images/delamination-1.jpg',
    filename: 'delamination-1.jpg'
  },
  {
    url: 'https://raw.githubusercontent.com/your-repo/aircraft-defects/main/images/delamination-2.jpg',
    filename: 'delamination-2.jpg'
  },
  {
    url: 'https://raw.githubusercontent.com/your-repo/aircraft-defects/main/images/scratch-1.jpg',
    filename: 'scratch-1.jpg'
  },
  {
    url: 'https://raw.githubusercontent.com/your-repo/aircraft-defects/main/images/scratch-2.jpg',
    filename: 'scratch-2.jpg'
  }
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(fs.createWriteStream(path.join(__dirname, filename)))
          .on('error', reject)
          .once('close', () => resolve(filename));
      } else {
        response.resume();
        reject(new Error(`Request Failed With a Status Code: ${response.statusCode}`));
      }
    });
  });
};

const downloadAllImages = async () => {
  for (const image of images) {
    try {
      await downloadImage(image.url, image.filename);
      console.log(`Downloaded: ${image.filename}`);
    } catch (error) {
      console.error(`Error downloading ${image.filename}:`, error.message);
    }
  }
};

downloadAllImages(); 