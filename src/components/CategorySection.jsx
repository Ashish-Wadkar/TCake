import { categories } from "../data/categories";

const CategorySection = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Shop By Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`${cat.bg} rounded-2xl p-6 flex flex-col items-center cursor-pointer hover:scale-105 transition`}
          >
            <img src={cat.image} alt={cat.name} className="h-20 mb-4" />
            <h3 className="font-semibold text-lg">{cat.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
