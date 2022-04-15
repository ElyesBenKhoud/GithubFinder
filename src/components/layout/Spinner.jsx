import spinner from "./assets/spinner.gif";
const Spinner = () => {
  return (
    <div className="w-100 mt-20">
      <img
        src={spinner}
        alt="spinner"
        width={180}
        className="text-center mx-auto"
      />
    </div>
  );
};

export default Spinner;
