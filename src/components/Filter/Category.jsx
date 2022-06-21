import { useFilter } from "../../context/filterContext";

const Category = () => {
  const { filterDispatch } = useFilter();

  const handleCategoryChange = (option) => {
    filterDispatch({
      type: "CATEGORY",
      payload: option,
    });
  };

  return (
    <div className="category">
      <div className="category-title">Category</div>
      <div className="category-size category-select d-flex direction-column gap-10px">
        <label className="d-flex align-center gap-10px">
          <input
            className="input"
            type="radio"
            name="category"
            onChange={() => handleCategoryChange("all")}
          />
          <span>All</span>
        </label>
        <label className="d-flex align-center gap-10px">
          <input
            className="input"
            type="radio"
            name="category"
            onChange={() => handleCategoryChange("M")}
          />
          <span>Men</span>
        </label>
        <label className="d-flex align-center gap-10px">
          <input
            className="input"
            type="radio"
            name="category"
            onChange={() => handleCategoryChange("W")}
          />
          <span>Women</span>
        </label>
      </div>
    </div>
  );
};

export default Category;
