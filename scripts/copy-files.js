const fs = require('fs');
const path = require('path');

// Create dist directory if it doesn't exist
const distDir = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy index.js if it exists
const indexJsPath = path.join(__dirname, '..', 'index.js');
if (fs.existsSync(indexJsPath)) {
  fs.copyFileSync(indexJsPath, path.join(distDir, 'index.js'));
}

// Copy data directory if it exists
const dataDir = path.join(__dirname, '..', 'data');
const distDataDir = path.join(distDir, 'data');

if (fs.existsSync(dataDir)) {
  // Create data directory in dist if it doesn't exist
  if (!fs.existsSync(distDataDir)) {
    fs.mkdirSync(distDataDir, { recursive: true });
  }

  // Copy all files from data directory
  const copyDir = (src, dest) => {
    const entries = fs.readdirSync(src, { withFileTypes: true });
    
    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      
      if (entry.isDirectory()) {
        fs.mkdirSync(destPath, { recursive: true });
        copyDir(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  };

  copyDir(dataDir, distDataDir);
}

console.log('Files copied successfully!'); 