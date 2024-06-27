import React from "react";
import Card from "../ProductCard/Card";
import AliceCarousel from "react-alice-carousel";
import '../PackageCard/PkgCrd.css'
const List = ({data, sectionName, sectionSubName}) => {
  const responsive = {
    0: { items: 1 },
    672: { items: 2 },
    1024: { items: 3 },
    1600: { items: 5 },
  };
  const items = data.map((item) => <Card product={item}/>);
  return (
    <div className="border">
      <div className='package-card mx-auto mt-10'>
        <div className="title">
            <div className="small-bx"></div>
            <p>{sectionName}</p>
        </div>
        <h3 className="text-2xl sm:text-3xl text-gray-900 font-semibold mt-4">{sectionSubName}</h3>
    </div>
      <div className="relative px-4 lg:px-8">
      <div className="relative p-5">
        <AliceCarousel
          mouseTracking
          items={items}
          controlsStrategy="alternate"
          autoPlay
          autoPlayInterval={1800}
          disableButtonsControls
          infinite
          responsive={responsive}
          disableDotsControls
        />
      </div>
    </div>
    </div>
  );
};
export default List;
