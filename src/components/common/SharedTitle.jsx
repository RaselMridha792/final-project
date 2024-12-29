const SharedTitle = ({ heading, subHeading }) => {
  return (
    <>
      <div className="lg:w-3/12 md:w-6/12 mx-auto my-10">
        <p className="text-yellow-600 text-lg border-b-4  text-center pb-5">
          ---{heading}---
        </p>
        <p className="text-3xl uppercase  text-center border-b-4 py-5">
          {subHeading}
        </p>
      </div>
    </>
  );
};

export default SharedTitle;
