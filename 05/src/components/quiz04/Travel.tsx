import travel from "../../assets/images/travel.png";
import seoul from "../../assets/images/seoul.jpg";
import london from "../../assets/images/london.jpg";
import paris from "../../assets/images/paris.jpg";
import newyork from "../../assets/images/newyork.jpg";
import { useState } from "react";
export default function App() {
  const [country, setCountry] = useState("seoul");
  // const areas = ["seoul", "london", "paris", "newyork"];
  // const images: { [key: string]: string } = {
  //   seoul,
  //   london,
  //   paris,
  //   newyork,
  // };

  return (
    <>
      <div className="absolute top-10 left-10 text-3xl cursor-pointer">
        <div className="light-icon fa-regular fa-sun"></div>
        <div className="dark-icon fa-regular fa-moon hidden"></div>
      </div>
      <div className="flex justify-center items-center min-h-screen ">
        <div className="flex flex-col items-center gap-4  max-w-[500px]">
          <img src={travel} alt={"로고"} width={80} />
          <ul className="flex items-center antialiased justify-around w-full">
            {/* {areas.map((area) => {
              return (
                <li className={`${area === country && "font-bold"}`}>
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
