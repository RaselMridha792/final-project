const SharedMenuCover = ({menuBg, heading, subHeading}) => {
  return (
    <>
      <div
        className="hero py-40 bg-fixed bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
           `url(${menuBg})`,
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-40 lg:w-2/3"></div>
        <div className="hero-content my-36 text-center text-white">
          <div className="font-Cinzel">
            <h1 className="mb-5 text-5xl font-bold">{heading}</h1>
            <p className="mb-5">
             {subHeading}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SharedMenuCover;
