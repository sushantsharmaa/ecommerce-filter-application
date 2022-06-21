import { useFilter } from "../../context/filterContext";

const Brand = () => {
  const { filterDispatch } = useFilter();

  const handleBrandChange = (e, option) => {
    const check = e.target.checked;
    filterDispatch({
      type: "BRAND",
      payload: {
        option,
        check,
      },
    });
  };

  return (
    <div className="category">
      <div className="category-title">Brand</div>
      <div className="category-size category-select d-flex direction-column gap-10px">
        <label className="d-flex align-center gap-10px">
          <input
            className="input"
            type="checkbox"
            value="Roadster"
            onChange={(e) => handleBrandChange(e, "Roadster")}
          />
          <span>Roadster</span>
        </label>
        <label className="d-flex align-center gap-10px">
          <input
            className="input"
            type="checkbox"
            value="Zara"
            onChange={(e) => handleBrandChange(e, "Zara")}
          />
          <span>Zara</span>
        </label>
        <label className="d-flex align-center gap-10px">
          <input
            className="input"
            type="checkbox"
            value="Forever 21"
            onChange={(e) => handleBrandChange(e, "Forever 21")}
          />
          <span>Forever 21</span>
        </label>
        <label className="d-flex align-center gap-10px">
          <input
            className="input"
            type="checkbox"
            value="DNMX"
            onChange={(e) => handleBrandChange(e, "DNMX")}
          />
          <span>DNMX</span>
        </label>
        <label className="d-flex align-center gap-10px">
          <input
            className="input"
            type="checkbox"
            value="Peter England"
            onChange={(e) => handleBrandChange(e, "Peter England")}
          />
          <span>Peter England</span>
        </label>
      </div>
    </div>
  );
};

export default Brand;
