import "./select.css";
function MultipleSelect() {
  return (
    <div style={{ margin: "20px 0" }}>
      <div className="select">
        <select>
          <option value="1">Build a website</option>
          <option value="2">Grow your brand</option>
          <option value="3">Both</option>
        </select>
      </div>
    </div>
  );
}

export default MultipleSelect;
