import React from "react";
import contentArray from "../contentArray";
import articleImg1 from "../assets/articles/websites.webp";
import articleImg2 from "../assets/articles/elena-koycheva-VmcIMhuWCac-unsplash-e1614091866749.webp";
import articleImg3 from "../assets/articles/blog-header-template.webp";

function Clients() {
  return (
    <div className="min-h-[100dvh]">
      <h3 className="text-2xl text-center mt-20 mb-10 lg:mb-[8rem] text-black/60 font-extrabold md:text-3xl lg:text-6xl">
        Our Clients
      </h3>
      <div className="grid grid-cols-3 lg:mt-[5rem]  place-items-center lg:grid-cols-5 lg:w-[90%] lg:mx-auto">
        {contentArray.map((client) => {
          return (
            <img
              className="mx-2 my-2 w-[60%] lg:my-4 lg:mx-4 lg:w-[45%]"
              key={client.id}
              src={client.img}
              alt={`img${client.id}`}
            />
          );
        })}
      </div>
      {/**articles */}
      <article className="min-h-[100dvh] ">
        <h3 className="pl-5 lg:pl-10 lg:mt-[10rem] text-left text-3xl md:text-4xl lg:text-5xl font-extrabold my-6 lg:my-10">
          Latest Articles
        </h3>
        <section className="lg:flex">
          <div className="w-[90%] lg:w-[25%] mx-auto border-[1px] border-black hover:bg-pink-600 hover:text-white ">
            <a className="" href="#">
              <img className="w-[100%] object-cover" src={articleImg2} alt="" />
              <ul>
                <li className="text-pink-600 mt-2 text-sm mix-blend-difference mx-2">
                  Exptertise
                </li>
              </ul>
              <h3 className="font-bold my-10 font-black/75  mx-3 text-xl transition-colors  lg:text-2xl">
                10 signs you probably need a new website.
              </h3>
            </a>
          </div>
          {/**article2 */}
          <div className="w-[90%] lg:w-[25%] mx-auto border-[1px] border-black hover:bg-pink-600 hover:text-white ">
            <a className="" href="#">
              <img className="w-[100%] object-cover" src={articleImg3} alt="" />
              <ul>
                <li className="text-pink-600 mt-2 text-sm mix-blend-difference mx-2">
                  Exptertise
                </li>
              </ul>
              <h3 className="font-bold font-black/75  mx-3 my-10 text-xl transition-colors  lg:text-2xl">
                10 signs you probably need a new website.
              </h3>
            </a>
          </div>
          {/**article3 */}
          <div className="w-[90%] lg:w-[25%]  mx-auto border-[1px] border-black hover:bg-pink-600 hover:text-white ">
            <a className="" href="#">
              <img className="w-[100%] object-cover" src={articleImg1} alt="" />
              <ul>
                <li className="text-pink-600  mt-2 text-sm mix-blend-difference mx-2">
                  Exptertise
                </li>
              </ul>
              <h3 className="font-bold my-10 font-black/75  mx-3 text-xl transition-colors  lg:text-2xl">
                10 signs you probably need a new website.
              </h3>
            </a>
          </div>
        </section>
        <div className="my-6 lg:my-12 flex justify-center items-center">
          <button
            className="px-6 py-3 lg:px-8 lg:py-4 rounded-3xl text-pink-600 border-[1px]
             border-pink-600 bg-white hover:bg-pink-600 hover:text-white font-bold"
          >
            view blog posts
          </button>
        </div>
      </article>
    </div>
  );
}

export default Clients;
