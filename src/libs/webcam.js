//moves the pixel colors to make a split colorful effect
export const crazyFilter = (pixels) => {
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // RED
    pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 550] = pixels.data[i + 2]; // Blue
  }
  return pixels;
};

//Change every pixel to level of gray. 
//This simple algorithm averages the red, green, and blue components of every pixels.
export const blackWhiteFilter = (pixels) => {
  for (let i = 0; i < pixels.height; i++){
    for (let j = 0; j < pixels.width; j++){
      let index = (i * 4) * pixels.width + (j * 4);
      let red = pixels.data[index];
      let green = pixels.data[index+1];
      let blue = pixels.data[index+2];
      let alpha = pixels.data[index+3];
      let average = (red + green + blue) / 3;
      
      pixels.data[index] = average;
      pixels.data[index + 1] = average;
      pixels.data[index + 2] = average;
      pixels.data[index + 3] = alpha;
    }
  }
  return pixels;
};

//function that starts an interval that updates the canvas with the webcam video
export const startCanvasUpdate = (video, canvas, filters) => {
  const ctx = canvas.getContext('2d');
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    
    if(filters.length){
      let pixels = ctx.getImageData(0, 0, width, height);

      filters.forEach((filter) => {
        pixels = filter(pixels);
      });
      
      ctx.putImageData(pixels, 0, 0);
    }
  }, 16);
}