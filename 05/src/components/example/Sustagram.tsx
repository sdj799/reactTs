import { useState } from "react";
import { RxReset } from "react-icons/rx";

const Sustagram = () => {
  const picture = [
    "https://cdn.pixabay.com/photo/2013/08/26/09/40/silhouette-175970_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/11/25/09/42/rocks-1061540_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/09/23/12/33/building-3697342_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/05/02/12/43/clouds-335969_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/12/28/21/10/streets-7683842_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/01/08/05/45/mountain-7704584_1280.jpg",
  ];
  const [pictures, setPictures] = useState(picture);
  const [deletedPictures, setDeletedPictures] = useState<string[]>([]);
  const deleteHandler = (index: number) => {
    setDeletedPictures((deletedPictures) => [
      ...deletedPictures,
      pictures[index],
    ]);
    setPictures((pictures) => pictures.filter((_, i) => i !== index));
  };

  const rxResetHandler = () => {
    if (deletedPictures.length > 0) {
      // const temp = deletedPictures;
      // const resetPicture = temp.pop(); //파괴적함수
      // setDeletedPictures(temp);
      const [resetPicture, ...remainPictuers] = deletedPictures; // 리액트에서 권장하는 방법
      setDeletedPictures(remainPictuers);
      if (resetPicture) setPictures((picture) => [...picture, resetPicture]);
    } else {
      alert("되돌릴 사진이 없습니다.");
    }
  };
  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">SUSTAGRAM</h1>
        <div className="flex items-center gap-4">
          <button className="w-6 h-6" onClick={rxResetHandler}>
            <img src="/sun.svg" alt="" />
          </button>
          <button className="w-4 h-4" onClick={rxResetHandler}>
            <RxReset />
          </button>
        </div>
      </header>
      <div className="grid grid-cols-3 gap-4">
        {pictures.map((value, index) => (
          <div className="group relative" key={index}>
            <a className="group" href="#">
              <img
                src={value}
                width="400"
                height="400"
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover rounded-lg group-hover:opacity-80 transition-opacity"
                style={{ aspectRatio: "400 / 400", objectFit: "cover" }}
              />
            </a>
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-500 text-white hover:bg-red-600 h-10 w-10 absolute top-2 right-2 rounded-full">
              <img
                src="/delete.svg"
                alt="Delete icon"
                className="h-4 w-4"
                onClick={() => deleteHandler(index)}
              />
              <span className="sr-only">Delete</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Sustagram;
