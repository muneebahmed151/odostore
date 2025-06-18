// import React, { useState } from "react";
// // import Button from "react-bootstrap/button";


// const ProductForm = ({ onSubmit }) => {
//   const [productName, setProductName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [category, setCategory] = useState("clothing");
//   const [image, setImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//     setImagePreview(URL.createObjectURL(file));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const productData = {
//       name: productName,
//       description,
//       price: parseFloat(price),
//       category,
//       image,
//     };

//     console.log("Submitting product:", productData);
//     if (onSubmit) onSubmit(productData);
//     alert("Product listed successfully!");

//     // Clear form
//     setProductName("");
//     setDescription("");
//     setPrice("");
//     setCategory("clothing");
//     setImage(null);
//     setImagePreview(null);
//   };

//   return (
//     <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-8 border border-gray-200">
//       <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">List a New Product</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
        
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Product Name</label>
//           <input
//             type="text"
//             value={productName}
//             onChange={(e) => setProductName(e.target.value)}
//             className="w-full mt-1 p-2 border border-gray-300 rounded-md"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Description</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full mt-1 p-2 border border-gray-300 rounded-md"
//             rows={4}
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Price (PKR)</label>
//           <input
//             type="number"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             className="w-full mt-1 p-2 border border-gray-300 rounded-md"
//             required
//             min="1"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Category</label>
//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="w-full mt-1 p-2 border border-gray-300 rounded-md"
//           >
//             <option value="clothing">Clothing</option>
//             <option value="electronics">Electronics</option>
//             <option value="shoes">Shoes</option>
//             <option value="accessories">Accessories</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Product Image</label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//             className="w-full mt-1"
//           />
//           {imagePreview && (
//             <img src={imagePreview} alt="Preview" className="mt-2 h-32 object-cover rounded" />
//           )}
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700"
//         >
//           List Product
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ProductForm;

// // import React, { useState } from "react";
// // // import { useFirebase } from "../config/firebase";

// // const ListingForm = () => {
// //   const Firebase = useFirebase();

// //   const [name, setName] = useState("");
// //   const [isbnNumber, setIsbnNumber] = useState("");
// //   const [price, setPrice] = useState("");
// //   const [coverPic, setCoverPic] = useState(null);
// //   const [previewURL, setPreviewURL] = useState(null);

// //   const handleCoverChange = (e) => {
// //     const file = e.target.files[0];
// //     setCoverPic(file);
// //     setPreviewURL(URL.createObjectURL(file));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     await firebase.handleCreateNewListing(name, isbnNumber, price, coverPic);
// //     alert("Listing Created!");
// //     // Reset form
// //     setName("");
// //     setIsbnNumber("");
// //     setPrice("");
// //     setCoverPic(null);
// //     setPreviewURL(null);
// //   };

// //   return (
// //     <div className="max-w-2xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg border border-gray-200">
// //       <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
// //         📚 Create Book Listing
// //       </h2>
// //       <form onSubmit={handleSubmit} className="space-y-6">

// //         {/* Book Name */}
// //         <div>
// //           <label className="block text-sm font-medium text-gray-700 mb-1">
// //             Book Name
// //           </label>
// //           <input
// //             type="text"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             placeholder="Enter book name"
// //             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
// //             required
// //           />
// //         </div>

// //         {/* ISBN */}
// //         <div>
// //           <label className="block text-sm font-medium text-gray-700 mb-1">
// //             ISBN Number
// //           </label>
// //           <input
// //             type="text"
// //             value={isbnNumber}
// //             onChange={(e) => setIsbnNumber(e.target.value)}
// //             placeholder="Enter ISBN number"
// //             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
// //             required
// //           />
// //         </div>

// //         {/* Price */}
// //         <div>
// //           <label className="block text-sm font-medium text-gray-700 mb-1">
// //             Price (PKR)
// //           </label>
// //           <input
// //             type="number"
// //             value={price}
// //             onChange={(e) => setPrice(e.target.value)}
// //             placeholder="Enter price"
// //             className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
// //             required
// //             min="1"
// //           />
// //         </div>

// //         {/* Cover Image Upload */}
// //         <div>
// //           <label className="block text-sm font-medium text-gray-700 mb-2">
// //             Cover Image
// //           </label>
// //           <input
// //             type="file"
// //             accept="image/*"
// //             onChange={handleCoverChange}
// //             className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
// //               file:rounded-md file:border-0
// //               file:text-sm file:font-semibold
// //               file:bg-blue-50 file:text-blue-700
// //               hover:file:bg-blue-100"
// //             required
// //           />
// //           {previewURL && (
// //             <img
// //               src={previewURL}
// //               alt="Cover Preview"
// //               className="mt-4 h-40 rounded shadow border"
// //             />
// //           )}
// //         </div>

// //         {/* Submit Button */}
// //         <button
// //           type="submit"
// //           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-all"
// //         >
// //           🚀 Create Listing
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default ListingForm;

import React, { useState } from "react";
import { useFirebase } from "../config/firebase.jsx";

const ProductForm = () => {
  const { addProduct } = useFirebase();
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("clothing");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess("");

    try {
      // Validate inputs
      if (!productName.trim() || !description.trim() || !price) {
        throw new Error("Please fill in all required fields");
      }

      const productData = {
        name: productName.trim(),
        description: description.trim(),
        price: parseFloat(price),
        category,
        createdAt: new Date().toISOString()
      };

      // Call the addProduct function from Firebase context
      await addProduct(productData);
      
      // Clear form on success
      setProductName("");
      setDescription("");
      setPrice("");
      setCategory("clothing");
      
      setSuccess("Product listed successfully!");
    } catch (err) {
      console.error("Listing error:", err);
      setError(err.message || "Failed to list product. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-8 border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        List a New Product
      </h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Product Name *
          </label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            required
            minLength={3}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description *
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            rows={4}
            required
            minLength={10}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price (PKR) *
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            required
            min="1"
            step="0.01"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category *
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="clothing">Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="shoes">Shoes</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 px-4 rounded font-semibold ${
            isSubmitting
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            "List Product"
          )}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;