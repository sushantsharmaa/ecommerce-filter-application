const Category = () => {
  return (
    <div className="category">
      <div className="category-title">Category</div>
      <div className="category-size category-select d-flex direction-column gap-10px">
        <label className="d-flex align-center gap-10px">
          <input className="input" type="radio" name="category" />
          <span>All</span>
        </label>
        <label className="d-flex align-center gap-10px">
          <input className="input" type="radio" name="category" />
          <span>Men</span>
        </label>
        <label className="d-flex align-center gap-10px">
          <input className="input" type="radio" name="category" />
          <span>Women</span>
        </label>
      </div>
    </div>
  );
};

export default Category;
