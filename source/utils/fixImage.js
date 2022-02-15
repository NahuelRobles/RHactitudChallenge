
export function fixImage(image) {
    const http = image.split('http');
    if (http?.[1]){
        return `https${http?.[1]}`
    }
    return image;
  }