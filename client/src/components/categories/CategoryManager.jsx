import React, { useState } from "react";

const CategoryManager = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Electronics", description: "Electronic devices" },
    { id: 2, name: "Clothing", description: "Apparel and accessories" },
  ]);

  const [newCategory, setNewCategory] = useState({ name: "", description: "" });
  const [error, setError] = useState("");

  const handleAddCategory = () => {
    if (!newCategory.name) {
      setError("Category name is required");
      return;
    }

    const categoryExists = categories.some(
      (cat) => cat.name.toLowerCase() === newCategory.name.toLowerCase()
    );

    if (categoryExists) {
      setError("Category already exists");
      return;
    }

    const newCat = {
      ...newCategory,
      id: Date.now(),
    };

    setCategories([...categories, newCat]);
    setNewCategory({ name: "", description: "" });
    setError("");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Manage Categories</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Add New Category</h3>
        {error && <p className="text-red-500 mb-3">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <input
              type="text"
              placeholder="Category Name *"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={newCategory.name}
              onChange={(e) =>
                setNewCategory({ ...newCategory, name: e.target.value })
              }
            />
          </div>
          <div className="md:col-span-1">
            <input
              type="text"
              placeholder="Description"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={newCategory.description}
              onChange={(e) =>
                setNewCategory({ ...newCategory, description: e.target.value })
              }
            />
          </div>
          <div className="md:col-span-1">
            <button
              onClick={handleAddCategory}
              className="w-full px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              Add Category
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Existing Categories</h3>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {categories.map((category) => (
              <tr key={category.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {category.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {category.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryManager;
