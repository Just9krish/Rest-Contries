import "./style/loader.css";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[75vh]">
      <div className="loading">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Loader;
