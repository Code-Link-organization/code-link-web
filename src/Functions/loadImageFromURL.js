export const  loadImageFromURL=async(imageURL)=> {
  // eslint-disable-next-line no-useless-catch
  try {
    const image = new Image();

    // Create a promise that resolves when the image loads
    const imageLoadedPromise = new Promise((resolve, reject) => {
      image.onload = () => resolve(image);
      image.onerror = (error) => reject(error);
    });

    // Set the image source to the provided URL, triggering the image to load.
    image.src = imageURL;

    // Wait for the image to load and then return it
    const loadedImage = await imageLoadedPromise;
    return loadedImage;
  } catch (error) {
    // If an error occurs during image loading, throw the error
    throw error;
  }
  };

