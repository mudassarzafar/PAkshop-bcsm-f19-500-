import banner from "../images/bannar3.jpg";
import "../style/Banner.css";
const Banner = () => {
  return (
    <>
      <div className="banner">
        <img src={banner} className="banner-img" />
      </div>
    </>
  );
};
export default Banner;
