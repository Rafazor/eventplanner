import clsx from "clsx";

interface IProps {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
}

export default function CategoriesFilterComponent(props: IProps) {
  const { categories, onChange, activeCategory } = props;

  return (
    <div>
      <p className="font-medium mb-2 text-lg">Discover Upcoming Events:</p>
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-gray-400">Sort by:</p>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={clsx(
              {
                "bg-purple-700": activeCategory === category,
                "text-purple-50": activeCategory === category,
              },
              "bg-purple-500 text-purple-800 px-4 py-1 rounded-full",
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
