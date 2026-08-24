import "./AdminProducts.css";

import { useEffect, useState } from "react";

function AdminProducts() {

    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [search, setSearch] = useState("");

    const [editingProduct, setEditingProduct] = useState(null);

    const [form, setForm] = useState({
        title: "",
        brand: "",
        category: "",
        price: "",
        oldPrice: "",
        stock: "",
        badge: "",
        condition: ""
    });

    const fetchProducts = async () => {

        try {

            setLoading(true);
            setError("");

            const response = await fetch(
                "/api/admin/products",
                {
                    credentials: "include"
                }
            );

            const data =
                await response.json();

            if (!response.ok) {

                throw new Error(
                    data.message ||
                    "Products could not be loaded."
                );
            }

            setProducts(
                Array.isArray(data)
                    ? data
                    : []
            );

        } catch (error) {

            console.error(
                "Admin products error:",
                error
            );

            setError(
                error.message ||
                "Products could not be loaded."
            );

        } finally {

            setLoading(false);

        }
    };


    useEffect(() => {

        fetchProducts();

    }, []);


    const handleEdit = (product) => {

        setEditingProduct(product);

        setForm({
            title: product.title || "",
            brand: product.brand || "",
            category: product.category || "",
            price: product.price ?? "",
            oldPrice: product.oldPrice ?? "",
            stock: product.stock ?? "",
            badge: product.badge || "",
            condition: product.condition || ""
        });

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };


    const handleChange = (event) => {

        const {
            name,
            value
        } = event.target;

        setForm((current) => ({
            ...current,
            [name]: value
        }));

    };


    const handleSave = async (event) => {

        event.preventDefault();

        if (!editingProduct) {
            return;
        }

        try {

            const response = await fetch(
                `/api/admin/products/${editingProduct.id}`,
                {
                    method: "PUT",

                    credentials: "include",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        title: form.title,
                        brand: form.brand,
                        category: form.category,
                        price: Number(form.price),
                        oldPrice:
                            form.oldPrice === ""
                                ? null
                                : Number(form.oldPrice),
                        stock: Number(form.stock),
                        badge: form.badge,
                        condition: form.condition
                    })
                }
            );

            const data =
                await response.json();

            if (!response.ok) {

                throw new Error(
                    data.message ||
                    "Product could not be updated."
                );
            }

            setProducts((current) =>
                current.map((product) =>
                    product.id === editingProduct.id
                        ? data
                        : product
                )
            );

            setEditingProduct(null);

            setForm({
                title: "",
                brand: "",
                category: "",
                price: "",
                oldPrice: "",
                stock: "",
                badge: "",
                condition: ""
            });

        } catch (error) {

            console.error(
                "Product update error:",
                error
            );

            alert(
                error.message ||
                "Product could not be updated."
            );

        }
    };


    const handleDelete = async (productId) => {

        const confirmed =
            window.confirm(
                "Are you sure you want to delete this product?"
            );

        if (!confirmed) {
            return;
        }

        try {

            const response = await fetch(
                `/api/admin/products/${productId}`,
                {
                    method: "DELETE",
                    credentials: "include"
                }
            );

            const data =
                await response
                    .json()
                    .catch(() => null);

            if (!response.ok) {

                throw new Error(
                    data?.message ||
                    "Product could not be deleted."
                );
            }

            setProducts((current) =>
                current.filter(
                    (product) =>
                        product.id !== productId
                )
            );

        } catch (error) {

            console.error(
                "Product delete error:",
                error
            );

            alert(
                error.message ||
                "Product could not be deleted."
            );

        }
    };


    const cancelEdit = () => {

        setEditingProduct(null);

        setForm({
            title: "",
            brand: "",
            category: "",
            price: "",
            oldPrice: "",
            stock: "",
            badge: "",
            condition: ""
        });

    };


    const filteredProducts =
        products.filter((product) => {

            const query =
                search
                    .trim()
                    .toLowerCase();

            if (!query) {
                return true;
            }

            return (
                String(product.title || "")
                    .toLowerCase()
                    .includes(query) ||

                String(product.brand || "")
                    .toLowerCase()
                    .includes(query) ||

                String(product.category || "")
                    .toLowerCase()
                    .includes(query)
            );

        });


    if (loading) {

        return (

            <main className="admin-products-page">

                <div className="admin-products-container">

                    <p>
                        Loading products...
                    </p>

                </div>

            </main>

        );

    }


    if (error) {

        return (

            <main className="admin-products-page">

                <div className="admin-products-container">

                    <div className="admin-products-error">
                        {error}
                    </div>

                    <button
                        type="button"
                        className="admin-products-refresh"
                        onClick={fetchProducts}
                    >
                        Retry
                    </button>

                </div>

            </main>

        );

    }


    return (

        <main className="admin-products-page">

            <div className="admin-products-container">

                <div className="admin-products-header">

                    <div>

                        <span>
                            FPVSTORE ADMIN
                        </span>

                        <h1>
                            Product Management
                        </h1>

                        <p>
                            Manage your products, prices,
                            stock and badges.
                        </p>

                    </div>

                    <button
                        type="button"
                        className="admin-products-refresh"
                        onClick={fetchProducts}
                    >
                        Refresh
                    </button>

                </div>


                {editingProduct && (

                    <section className="product-edit-panel">

                        <div className="product-edit-header">

                            <div>

                                <span>
                                    EDIT PRODUCT
                                </span>

                                <h2>
                                    {editingProduct.title}
                                </h2>

                            </div>

                            <button
                                type="button"
                                onClick={cancelEdit}
                            >
                                Cancel
                            </button>

                        </div>


                        <form
                            className="product-edit-form"
                            onSubmit={handleSave}
                        >

                            <div className="product-edit-grid">

                                <div className="product-field">

                                    <label>
                                        Product Name
                                    </label>

                                    <input
                                        type="text"
                                        name="title"
                                        value={form.title}
                                        onChange={handleChange}
                                    />

                                </div>


                                <div className="product-field">

                                    <label>
                                        Brand
                                    </label>

                                    <input
                                        type="text"
                                        name="brand"
                                        value={form.brand}
                                        onChange={handleChange}
                                    />

                                </div>


                                <div className="product-field">

                                    <label>
                                        Category
                                    </label>

                                    <input
                                        type="text"
                                        name="category"
                                        value={form.category}
                                        onChange={handleChange}
                                    />

                                </div>


                                <div className="product-field">

                                    <label>
                                        Condition
                                    </label>

                                    <select
                                        name="condition"
                                        value={form.condition}
                                        onChange={handleChange}
                                    >

                                        <option value="">
                                            Select condition
                                        </option>

                                        <option value="NEW">
                                            NEW
                                        </option>

                                        <option value="USED">
                                            USED
                                        </option>

                                        <option value="LIKE_NEW">
                                            LIKE NEW
                                        </option>

                                    </select>

                                </div>


                                <div className="product-field">

                                    <label>
                                        Price
                                    </label>

                                    <input
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        name="price"
                                        value={form.price}
                                        onChange={handleChange}
                                    />

                                </div>


                                <div className="product-field">

                                    <label>
                                        Old Price
                                    </label>

                                    <input
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        name="oldPrice"
                                        value={form.oldPrice}
                                        onChange={handleChange}
                                    />

                                </div>


                                <div className="product-field">

                                    <label>
                                        Stock
                                    </label>

                                    <input
                                        type="number"
                                        min="0"
                                        name="stock"
                                        value={form.stock}
                                        onChange={handleChange}
                                    />

                                </div>


                                <div className="product-field">

                                    <label>
                                        Badge
                                    </label>

                                    <select
                                        name="badge"
                                        value={form.badge}
                                        onChange={handleChange}
                                    >

                                        <option value="">
                                            None
                                        </option>

                                        <option value="HOT">
                                            HOT
                                        </option>

                                        <option value="NEW">
                                            NEW
                                        </option>

                                        <option value="Pre-Order">
                                            PRE-ORDER
                                        </option>

                                        <option value="Used">
                                            USED
                                        </option>

                                    </select>

                                </div>

                            </div>


                            <button
                                type="submit"
                                className="product-save-button"
                            >
                                Save Changes
                            </button>

                        </form>

                    </section>

                )}


                <div className="admin-products-tools">

                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(event) =>
                            setSearch(
                                event.target.value
                            )
                        }
                    />

                    <span>
                        {filteredProducts.length} PRODUCTS
                    </span>

                </div>


                <section className="products-table">

                    <div className="products-table-head">

                        <span>
                            Product
                        </span>

                        <span>
                            Brand
                        </span>

                        <span>
                            Category
                        </span>

                        <span>
                            Price
                        </span>

                        <span>
                            Stock
                        </span>

                        <span>
                            Badge
                        </span>

                        <span>
                            Actions
                        </span>

                    </div>


                    {filteredProducts.length === 0 ? (

                        <div className="admin-products-empty">
                            No products found.
                        </div>

                    ) : (

                        filteredProducts.map((product) => (

                            <div
                                className="product-row"
                                key={product.id}
                            >

                                <div className="product-name">

                                    <strong>
                                        {product.title}
                                    </strong>

                                    <small>
                                        #{product.id}
                                    </small>

                                </div>


                                <span>
                                    {product.brand || "-"}
                                </span>


                                <span>
                                    {product.category || "-"}
                                </span>


                                <strong>
                                    ₼{product.price}
                                </strong>


                                <span
                                    className={
                                        Number(product.stock) === 0
                                            ? "stock-empty"
                                            : Number(product.stock) <= 5
                                                ? "stock-low"
                                                : "stock-good"
                                    }
                                >
                                    {product.stock ?? 0}
                                </span>


                                <span>

                                    {product.badge
                                        ? product.badge
                                        : "-"
                                    }

                                </span>


                                <div className="product-actions">

                                    <button
                                        type="button"
                                        className="edit-product-button"
                                        onClick={() =>
                                            handleEdit(product)
                                        }
                                    >
                                        Edit
                                    </button>


                                    <button
                                        type="button"
                                        className="delete-product-button"
                                        onClick={() =>
                                            handleDelete(
                                                product.id
                                            )
                                        }
                                    >
                                        Delete
                                    </button>

                                </div>

                            </div>

                        ))

                    )}

                </section>

            </div>

        </main>

    );
}

export default AdminProducts;