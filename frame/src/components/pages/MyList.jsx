// import React from 'react';
// import ShopHero from '../views/shop/ShopHero';
// import ProductFilters from '../views/shop/ProductFilters';
// import ProductGrid from '../views/shop/ProductGrid';
// import ShopPromo from '../views/shop/ShopPromo';

// const Shop = () => {
//   return (
//     <div className="min-h-screen bg-blue-50">
//       <ShopHero />
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="flex flex-col md:flex-row gap-8">
//           <div className="md:w-1/4">
//             <ProductFilters />
//           </div>
//           <div className="md:w-3/4">
//             <ProductGrid />
//           </div>
//         </div>   
//       </div>
//       <ShopPromo />
//     </div>
//   );
// };

// export default Shop;
import React, { useState, useEffect } from 'react';
import { useFirebase } from '../config/firebase';
import { query, ref, orderByChild, equalTo, onValue } from 'firebase/database';

const Shop = () => {
  const { user, database, updateProduct, deleteProduct } = useFirebase();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'clothing'
  });

  // Fetch products
  useEffect(() => {
    if (!user?.uid) return;

    const productsRef = ref(database, 'products');
    const userProductsQuery = query(
      productsRef,
      orderByChild('userId'),
      equalTo(user.uid)
    );

    const unsubscribe = onValue(userProductsQuery, (snapshot) => {
      const productsData = [];
      snapshot.forEach((childSnapshot) => {
        productsData.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      setProducts(productsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user, database]);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) || 0 : value
    }));
  };

  const handleEditClick = (product) => {
    setEditingProduct(product.id);
    setEditFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProduct(editingProduct, editFormData);
      setEditingProduct(null);
      alert('Product updated successfully!');
    } catch (error) {
      console.error("Error updating product:", error);
      alert('Failed to update product');
    }
  };

  const handleDelete = async (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProduct(productId);
        alert('Product deleted successfully!');
      } catch (error) {
        console.error("Error deleting product:", error);
        alert('Failed to delete product');
      }
    }
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            {product.imageURL && (
              <img 
                src={product.imageURL} 
                alt={product.name}
                className="w-full h-48 object-cover"
                onError={(e) => e.target.src = '/placeholder-product.png'}
              />
            )}
            
            <div className="p-4">
              {editingProduct === product.id ? (
                <form onSubmit={handleEditSubmit} className="space-y-3">
                  <input
                    type="text"
                    name="name"
                    value={editFormData.name}
                    onChange={handleEditChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                  <textarea
                    name="description"
                    value={editFormData.description}
                    onChange={handleEditChange}
                    className="w-full p-2 border rounded"
                    rows="2"
                    required
                  />
                  <input
                    type="number"
                    name="price"
                    value={editFormData.price}
                    onChange={handleEditChange}
                    className="w-full p-2 border rounded"
                    min="0"
                    step="0.01"
                    required
                  />
                  <select
                    name="category"
                    value={editFormData.category}
                    onChange={handleEditChange}
                    className="w-full p-2 border rounded"
                    required
                  >
                    <option value="clothing">Clothing</option>
                    <option value="electronics">Electronics</option>
                    <option value="shoes">Shoes</option>
                  </select>
                  <div className="flex space-x-2">
                    <button 
                      type="submit" 
                      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                    >
                      Save
                    </button>
                    <button 
                      type="button" 
                      onClick={() => setEditingProduct(null)}
                      className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-gray-600 my-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">PKR {product.price}</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {product.category}
                    </span>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <button 
                      onClick={() => handleEditClick(product)}
                      className="text-blue-600 hover:text-blue-800 px-2 py-1 rounded hover:bg-blue-50"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(product.id)}
                      className="text-red-600 hover:text-red-800 px-2 py-1 rounded hover:bg-red-50"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;