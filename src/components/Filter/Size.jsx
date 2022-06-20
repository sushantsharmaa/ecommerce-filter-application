const Size = () => {
  return (
    <div className="category">
      <div className="category-title">Size</div>
      <div className="category-size category-select d-flex direction-column gap-10px">
        <label className="d-flex align-center gap-10px">
          <input className="input" type="checkbox" />
          <span>S</span>
        </label>
        <label className="d-flex align-center gap-10px">
          <input className="input" type="checkbox" />
          <span>M</span>
        </label>
        <label className="d-flex align-center gap-10px">
          <input className="input" type="checkbox" />
          <span>L</span>
        </label>
        <label className="d-flex align-center gap-10px">
          <input className="input" type="checkbox" />
          <span>XL</span>
        </label>
        <label className="d-flex align-center gap-10px">
          <input className="input" type="checkbox" />
          <span>XXL</span>
        </label>
      </div>
    </div>
  );
};

export default Size;
