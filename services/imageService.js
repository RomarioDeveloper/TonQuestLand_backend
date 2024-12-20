// services/imageService.js
const { createCanvas, loadImage } = require('canvas');
const NFTImage = require('../models/NFTImage');
const fs = require('fs');
const path = require('path');

async function generateImage(metadata) {
    const width = 800;
    const height = 600;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext('2d');

    // Fill the background with a color
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, width, height);

    // Add text to the image
    context.fillStyle = '#000000';
    context.font = 'bold 70pt Arial';
    context.fillText(metadata.theme, 50, 150);

    const imagePath = path.join(__dirname, `../public/images/${metadata.name}.png`);
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(imagePath, buffer);

    console.log(`Image generated: ${imagePath}`);

    // Save metadata to database
    const nftImage = new NFTImage({
        name: metadata.name,
        description: metadata.description,
        imageUrl: `/images/${metadata.name}.png`
    });
    await nftImage.save();

    return nftImage;
}

module.exports = { generateImage };