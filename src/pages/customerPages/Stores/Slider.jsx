import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import NormalTitle from "../../../components/reusable/NormalTitle";

const Slider = ({ title, store: { id,name, bio, img, owner } }) => {
  return (
    <div className="container mb-11">
      <NormalTitle title={title} />
      <div>
        <Splide>
          {store?.map((val, i) => {
            return (
              <SplideSlide key={i} className="mb-0.5">
                <div>
                  <div>
                    <img src={img} alt={`img/profile-img/${id}`} />
                  </div>
                  <div>
                    <div>
                        <h3></h3>
                    </div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default Slider;
