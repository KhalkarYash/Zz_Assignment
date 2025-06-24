import CategoryManager from "../components/categories/CategoryManager";

const Categories = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Manage Categories
      </h1>
      <CategoryManager />
    </div>
  );
};

export default Categories;
