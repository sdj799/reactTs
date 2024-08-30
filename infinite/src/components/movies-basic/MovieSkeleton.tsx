import { star, thumbnail01 } from "../../assets/assets";

const MovieSkeleton = () => {
  return (
    <article className="bg-black py-10 px-4 xs:px-0">
      <section className="container mx-auto py-8 text-white">
        <span className="text-yellow-600">ONLINE STREAMING</span>
        <h2 className="text-[36px] font-bold mb-8">Movie LIST</h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:px-0">
          {/* 아이템 1개 */}
          <div>
            <img src={thumbnail01} alt="" className="rounded-md w-full" />
            <div className="flex justify-between items-center font-bold mt-4 mb-2 text-lg">
              <h4 className="">SuperMan</h4>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-200">
              <div className="flex items-center gap-2 font-bold">
                <img
                  src={star}
                  alt="star"
                  width={18}
                  height={18}
                  className="object-contain"
                />
                <span className="text-yellow-500">9.1</span>
              </div>
              <span className="text-yellow-500 font-bold">2022</span>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};
export default MovieSkeleton;
