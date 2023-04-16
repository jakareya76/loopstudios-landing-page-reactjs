const Feature = () => {
  return (
    <section id="feature">
      <div className="relative container flex flex-col items-center max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:items-end md:px-0">
        <img src="images/desktop/image-interactive.jpg" alt="img" />
        <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
          <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
            The leader in interactive VR
          </h2>
          <p className="max-w-md text-justify text-sm md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum
            soluta, voluptate praesentium at vel eos sed nesciunt excepturi
            inventore, tenetur minima quidem error beatae, ex quae. Iusto, ipsum
            eum! uae. Iusto, raesentium at vel eos
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feature;
