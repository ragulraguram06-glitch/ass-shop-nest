function CategoryFilter({ categories, selected, onChange }) {
  return (
    <div className="category-filter">
      <button
        className={selected === "all" ? "active" : ""}
        onClick={() => onChange("all")}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category}
          className={selected === category ? "active" : ""}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;