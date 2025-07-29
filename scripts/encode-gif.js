const fs = require('fs');
const path = require('path');

const gifPath = path.join(__dirname, '../public/ncinga logo.gif');
const outputPath = path.join(__dirname, '../src/assets.ts');

console.log('🔄 Encoding GIF to base64...');

try {
  // Check if GIF file exists
  if (!fs.existsSync(gifPath)) {
    console.error('❌ GIF file not found at:', gifPath);
    process.exit(1);
  }

  // Read and encode the GIF
  const gifBuffer = fs.readFileSync(gifPath);
  const base64 = gifBuffer.toString('base64');
  const sizeKB = (base64.length / 1024).toFixed(2);
  const originalSizeKB = (gifBuffer.length / 1024).toFixed(2);
  
  // Create the TypeScript file
  const content = `// Auto-generated file - do not edit manually
// Generated on: ${new Date().toISOString()}
// Original file size: ${originalSizeKB} KB
// Base64 size: ${sizeKB} KB

export const NCINGA_LOGO_GIF = "data:image/gif;base64,${base64}";
`;
  
  // Write the file
  fs.writeFileSync(outputPath, content);
  
  console.log('✅ GIF encoded successfully!');
  console.log(`📊 Original size: ${originalSizeKB} KB`);
  console.log(`📊 Base64 size: ${sizeKB} KB`);
  console.log(`📁 Output: ${outputPath}`);
  
} catch (error) {
  console.error('❌ Error encoding GIF:', error.message);
  process.exit(1);
}
