import "./Filter.css";
import Sort from "./Sort";
import Size from "./Size";
import Brand from "./Brand";
import Category from "./Category";
import { useFilter } from "../../context/filterContext";

const Filter = () => {
  const { filterDispatch } = useFilter();

  const handleClearClick = () => {
    filterDispatch({
      type: "CLEAR",
    });
  };

  return (
    <aside className="filter-container">
      <div className="filter-container-title d-flex gap align-center wrap">
        <span>Filter</span>
        <button
          className="button btn-link-primary cursor clear"
          onClick={handleClearClick}
        >
          Clear
        </button>
      </div>
      <div className="filters d-flex direction-column gap-10px">
        <Sort />
        <Size />
        <Brand />
        <Category />
      </div>
    </aside>
  );
};

export default Filter;
