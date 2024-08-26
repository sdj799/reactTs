import travel from "../../assets/images/travel.png";
import seoul from "../../assets/images/seoul.jpg";
import london from "../../assets/images/london.jpg";
import paris from "../../assets/images/paris.jpg";
import newyork from "../../assets/images/newyork.jpg";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
export default function App() {
  const [country, setCountry] = useState("seoul");
  // const areas = ["seoul", "london", "paris", "newyork"];
  const images: { [key: string]: string } = {
    seoul,
    london,
    paris,
    newyork,
  };
  const [darkMode, setDarkMode] = useState(false);

  // 사용자 환경 다크모드 설정
  useEffect(() => {
    const userPrefersDark = window.matchMedia(
      "(prefers-colorscheme: dark"
    ).matches;
    console.log(userPrefersDark);
    setDarkMode(userPrefersDark);
    // useImagePreloader(images);
  }, []);

  function useImagePreloader(images: string[]) {
    useEffect(() => {
      images.forEach(
        (image) => {
          const img = new Image();
          img.src = image;
        },
        [images]
      );
    });
  }

  useEffect(() => {
    if (darkMode) document.body.className = "dark";
    else document.body.className = "";
  }, [darkMode]);
  return (
    <>
      {/* 다크모드 */}
      <div
        className="absolute top-10 left-10 text-3xl cursor-pointer"
        onClick={() => setDarkMode((darkMode) => !darkMode)}
      >
        <div
          className={twMerge(
            "light-icon fa-regular fa-sun",
            darkMode && "hidden"
          )}
        ></div>
        <div
          className={twMerge(
            "light-icon fa-regular fa-moon",
            !darkMode && "hidden"
          )}
        ></div>
      </div>
      <div className="flex justify-center items-center min-h-screen ">
        <div className="flex flex-col items-center gap-4  max-w-[500px]">
          <img src={travel} alt={"로고"} width={80} />
          <ul className="flex items-center antialiased justify-around w-full">
            {/* {areas.map((area, index) => {
              return (
                <li key={index} className={`${area === country && "font-bold"}`}>
                  <a href="#" onClick={() => setCountry(area)}>
                    {area}
                  </a>
                </li>
              );
            })} 
             강사님풀이*/}
            <li>
              <a
                href="#"
                style={country === "seoul" ? { fontWeight: "bold" } : {}}
                onClick={() => setCountry("seoul")}
              >
                Seoul
              </a>
            </li>
            <li>
              <a
                href="#"
                style={country === "london" ? { fontWeight: "bold" } : {}}
                onClick={() => setCountry("london")}
              >
                London
              </a>
            </li>
            <li>
              <a
                href="#"
                style={country === "paris" ? { fontWeight: "bold" } : {}}
                onClick={() => setCountry("paris")}
              >
                Paris
              </a>
            </li>
            <li>
              <a
                href="#"
                style={country === "newyork" ? { fontWeight: "bold" } : {}}
                onClick={() => setCountry("newyork")}
              >
                NewYork
              </a>
            </li>
          </ul>
          <div>
            {/* {areas.map((area) => {
              return area === country && <img src={images[area]} alt="" />;
            })} */}
            {country === "seoul" && <img src={seoul} alt={"서울"} />}
            {country === "london" && <img src={london} alt={"런던"} />}
            {country === "paris" && <img src={paris} alt={"파리"} />}
            {country === "newyork" && <img src={newyork} alt={"뉴욕"} />}
          </div>
        </div>
      </div>
    </>
  );
}
