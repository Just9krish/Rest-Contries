import {Link} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Details = () => {
  return (
    <section className="mt-7 pb-7">
<Link to="/">
      <FontAwesomeIcon icon={faChevronLeft} />
</Link>
      <FontAwesomeIcon icon={faMoon} />
      <FontAwesomeIcon icon={faSun} />
    </section>
  );
};

export default Details;
