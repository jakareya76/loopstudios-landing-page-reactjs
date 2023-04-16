import Item from "./Item";

const Creations = () => {
  return (
    <section id="creations">
      {/* Creation Container */}
      <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
        {/* Creation Header */}
        <div className="flex justify-center mb-20 md:justify-between">
          <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
            Our Creations
          </h2>
          <button className="hidden btn md:block ">see all</button>
        </div>

        {/* Items Container */}
        <div className="flex flex-col justify-between w-full space-y-6 text-2xl text-white uppercase md:flex-row md:space-y-0 md:space-x-8">
          <Item
            name="Deep Earth"
            imgMobile="images/mobile/image-deep-earth.jpg"
            imgDesktop="images/desktop/image-deep-earth.jpg"
          />
          <Item
            name="Night Arcade"
            imgMobile="images/mobile/image-night-arcade.jpg"
            imgDesktop="images/desktop/image-night-arcade.jpg"
          />
          <Item
            name="Soccer Team VR"
            imgMobile="images/mobile/image-soccer-team.jpg"
            imgDesktop="images/desktop/image-soccer-team.jpg"
          />
          <Item
            name="The Grid"
            imgMobile="images/mobile/image-grid.jpg"
            imgDesktop="images/desktop/image-grid.jpg"
          />
        </div>
        <div className="flex flex-col justify-between w-full space-y-6 text-2xl text-white uppercase mt-10 md:flex-row md:space-y-0 md:space-x-8">
          <Item
            name="From Up Above VR"
            imgMobile="images/mobile/image-from-above.jpg"
            imgDesktop="images/desktop/image-from-above.jpg"
          />
          <Item
            name="Pocket Borealis"
            imgMobile="images/mobile/image-pocket-borealis.jpg"
            imgDesktop="images/desktop/image-pocket-borealis.jpg"
          />
          <Item
            name="The Curiosity"
            imgMobile="images/mobile/image-curiosity.jpg"
            imgDesktop="images/desktop/image-curiosity.jpg"
          />
          <Item
            name="Make It Fisheye"
            imgMobile="images/mobile/image-fisheye.jpg"
            imgDesktop="images/desktop/image-fisheye.jpg"
          />
        </div>
        {/* Bottom Buttom Container*/}
        <div className="flex justify-center mt-10 md:hidden">
          <button className="btn w-full md:hidden">See All</button>
        </div>
      </div>
    </section>
  );
};

export default Creations;
