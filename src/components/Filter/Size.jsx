import { useFilter } from "../../context/filterContext";

const Size = () => {
  const { filterDispatch } = useFilter();

  const handleSizeChange = (e, option) => {
    let check = e.target.checked;

    filterDispatch({
      type: "SIZE",
      payload: {
        option,
        check,
      },
    });
  };

  return (
    <div className="category">
      <div className="category-title">Size</div>
      <div className="category-size category-select d-flex direction-column gap-10px">
        <label className="d-flex align-center gap-10px">
          <input
            className="input"
            type="checkbox"
            onChange={(e) => handleSizeChange(e, "S")}
          />
          <span>S</span>
        </label>
        <label className="d-flex align-center gap-10px">
          <input
            className="input"
            type="checkbox"
            onChange={(e) => handleSizeChange(e, "M")}
          />
          <span>M</span>
        </label>
        <label className="d-flex align-center gap-10px">
          <input
            className="input"
            type="checkbox"
            onChange={(e) => handleSizeChange(e, "L")}
          />
          <span>L</span>
        </label>
        <label className="d-flex align-center gap-10px">
          <input
            className="input"
            type="checkbox"
            onChange={(e) => handleSizeChange(e, "XL")}
          />
          <span>XL</span>
        </label>
        <label className="d-flex align-center gap-10px">
          <input
            className="input"
            type="checkbox"
            onChange={(e) => handleSizeChange(e, "XXL")}
          />
          <span>XXL</span>
        </label>
      </div>
    </div>
  );
};

export default Size;
