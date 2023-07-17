import clsx from "clsx";

interface IProps {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
}

export default function CategoriesFilterComponent(props: IProps) {
  const { categories, onChange, activeCategory } = props;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <p>Sort by:</p>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={clsx("bg-red-500 text-white px-2 py-1 rounded", {
            "bg-opacity-50": activeCategory !== category,
          })}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
