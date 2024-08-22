//import i1 from "./assets/image/i1.webp";
//import i2 from "./assets/image/i2.webp";
//import i3 from "./assets/image/i3.webp";
//import i4 from "./assets/image/i4.webp";
//import i5 from "./assets/image/i5.jpg";
//import i6 from "./assets/image/i6.webp";
function App() {
  const images = [
    {
      path: "https://cdn.pixabay.com/photo/2024/08/17/09/40/red-8975485_1280.jpg",
      isUse: false,
    },
    {
      path: "https://cdn.pixabay.com/photo/2024/08/15/16/41/kingfisher-8971596_1280.jpg",
      isUse: true,
    },
    {
      path: "https://cdn.pixabay.com/photo/2024/08/17/15/13/hover-fly-8976049_1280.jpg",
      isUse: false,
    },
    {
      path: "https://cdn.pixabay.com/photo/2024/08/06/12/35/porcupine-8949280_1280.jpg",
      isUse: true,
    },
    {
      path: "https://cdn.pixabay.com/photo/2024/08/11/07/55/ai-generated-8960891_1280.jpg",
      isUse: false,
    },
    {
      path: "https://cdn.pixabay.com/photo/2024/08/17/07/19/ai-generated-8975281_1280.jpg",
      isUse: true,
    },
  ];
  //  const assetImages = [i1, i2, i3, i4, i5, i6];
  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">SUSTAGRAM</h1>
        {/* More Buttons */}
      </header>
      <div className="grid grid-cols-3 gap-4">
        {images.length > 0 &&
          images
            .filter((item) => item.isUse)
            .map((image, index) => (
              //image.isUse === true &&
              <a key={index} className="group" href="#">
                <img
                  src={image.path}
                  width="400"
                  height="400"
                  alt={`Photo ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg group-hover:opacity-80 transition-opacity"
                  style={{ aspectRatio: "400 / 400", objectFit: "cover" }}
                />
              </a>
            ))}
      </div>
    </div>
  );
}

export default App;
