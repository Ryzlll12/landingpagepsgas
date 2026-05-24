const fs = require('fs-extra');
const { execSync } = require('child_process');

const dist = 'dist';

// Hapus dist lama
fs.removeSync(dist);

// Copy semua file
fs.copySync('assets', `${dist}/assets`);
fs.copySync('index.html', `${dist}/index.html`);

console.log('Files copied...');

// Minify HTML
execSync(`
npx html-minifier-terser dist/index.html -o dist/index.html --collapse-whitespace --remove-comments --minify-js true --minify-css true
`, { stdio: 'inherit' });

// Minify semua CSS
const cssFiles = [
  'animation.css',
  'responsive.css',
  'style.css',
  'variables.css'
];

cssFiles.forEach(file => {
  execSync(`
  npx cleancss -o dist/assets/css/${file} dist/assets/css/${file}
  `, { stdio: 'inherit' });
});

// Obfuscate semua JS
const jsFiles = [
  'animation.js',
  'main.js',
  'navbar.js',
  'responsive.js'
];

jsFiles.forEach(file => {
  execSync(`
  npx javascript-obfuscator dist/assets/js/${file} --output dist/assets/js/${file}
  `, { stdio: 'inherit' });
});

console.log('Build complete!');