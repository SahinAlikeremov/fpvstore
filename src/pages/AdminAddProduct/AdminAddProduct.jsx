import "./AdminAddProduct.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminAddProduct() {

    const navigate = useNavigate();

    const [authorized, setAuthorized] = useState(false);
    const [checkingAuth, setCheckingAuth] = useState(true);

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

    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {

        const checkAdmin = async () => {

            try {

                const response = await fetch(
                    "/api/auth/me",
                    {
                        method: "GET",
                        credentials: "include"
                    }
                );

                if (!response.ok) {

                    navigate("/login", {
                        replace: true
                    });

                    return;
                }

                const user = await response.json();

                if (
                    !user ||
                    !user.role ||
                    user.role.toUpperCase() !== "ADMIN"
                ) {

                    navigate("/", {
                        replace: true
                    });

                    return;
                }

                setAuthorized(true);

            } catch (error) {

                console.error(
                    "Admin authorization error:",
                    error
                );

                navigate("/", {
                    replace: true
                });

            } finally {

                setCheckingAuth(false);

            }
        };

        checkAdmin();

    }, [navigate]);

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

    const handleImageChange = (event) => {

        const file =
            event.target.files?.[0];

        if (!file) {
            return;
        }

        setImageFile(file);

        const previewUrl =
            URL.createObjectURL(file);

        setImagePreview(previewUrl);

    };

    const handleSubmit = async (event) => {

        event.preventDefault();

        setError("");
        setSuccess("");

        if (
            !form.title.trim() ||
            !form.brand.trim() ||
            !form.category.trim() ||
            form.price === "" ||
            form.stock === ""
        ) {

            setError(
                "Please fill in all required fields."
            );

            return;
        }

        try {

            setLoading(true);

            const productResponse =
                await fetch(
                    "/api/products",
                    {
                        method: "POST",
                        credentials: "include",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            title: form.title.trim(),
                            brand: form.brand.trim(),
                            category: form.category.trim(),
                            price: Number(form.price),
                            oldPrice:
                                form.oldPrice === ""
                                    ? null
                                    : Number(form.oldPrice),
                            stock: Number(form.stock),
                            badge: form.badge || null,
                            condition:
                                form.condition || null,
                            rating: 0,
                            reviews: 0,
                            popularity: 0
                        })
                    }
                );

            const productData =
                await productResponse.json();

            if (!productResponse.ok) {

                throw new Error(
                    productData.message ||
                    "Product could not be created."
                );

            }

            if (
                imageFile &&
                productData.id
            ) {

                const imageFormData =
                    new FormData();

                imageFormData.append(
                    "file",
                    imageFile
                );

                const imageResponse =
                    await fetch(
                        `/api/products/${productData.id}/image`,
                        {
                            method: "POST",
                            credentials: "include",
                            body: imageFormData
                        }
                    );

                const imageData =
                    await imageResponse.json();

                if (!imageResponse.ok) {

                    throw new Error(
                        imageData.message ||
                        "Product was created, but image upload failed."
                    );
                }

            }

            setSuccess(
                "Product created successfully!"
            );

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

            setImageFile(null);
            setImagePreview("");

        } catch (error) {

            console.error(
                "Add product error:",
                error
            );

            setError(
                error.message ||
                "Something went wrong."
            );

        } finally {

            setLoading(false);

        }

    };

    if (checkingAuth) {

        return (
            <main className="admin-add-product-page">

                <div className="admin-add-product-container">

                    <div className="admin-add-product-header">

                        <span>
                            FPVSTORE ADMIN
                        </span>

                        <h1>
                            Checking access...
                        </h1>

                    </div>

                </div>

            </main>
        );

    }

    if (!authorized) {
        return null;
    }

    return (

        <main className="admin-add-product-page">

            <div className="admin-add-product-container">

                <div className="admin-add-product-header">

                    <span>
                        FPVSTORE ADMIN
                    </span>

                    <h1>
                        Add Product
                    </h1>

                    <p>
                        Add a new product to FPVStore.
                    </p>

                </div>

                <form
                    className="admin-add-product-form"
                    onSubmit={handleSubmit}
                >

                    <section className="admin-image-section">

                        <div className="admin-section-title">
                            PRODUCT IMAGE
                        </div>

                        <div className="admin-image-preview">

                            {imagePreview ? (

                                <img
                                    src={imagePreview}
                                    alt="Product preview"
                                />

                            ) : (

                                <span>
                                    No image selected
                                </span>

                            )}

                        </div>

                        <label className="admin-image-upload">

                            Choose Image

                            <input
                                type="file"
                                accept="image/png,image/jpeg,image/webp"
                                onChange={handleImageChange}
                            />

                        </label>

                        <small>
                            PNG, JPG or WEBP
                        </small>

                    </section>

                    <section className="admin-product-fields">

                        <div className="admin-section-title">
                            PRODUCT INFORMATION
                        </div>

                        <div className="admin-product-grid">

                            <div className="admin-field">

                                <label>
                                    Product Name
                                </label>

                                <input
                                    type="text"
                                    name="title"
                                    value={form.title}
                                    onChange={handleChange}
                                    placeholder="Example: T5146"
                                    required
                                />

                            </div>

                            <div className="admin-field">

                                <label>
                                    Brand
                                </label>

                                <input
                                    type="text"
                                    name="brand"
                                    value={form.brand}
                                    onChange={handleChange}
                                    placeholder="Example: T-Hobby"
                                    required
                                />

                            </div>

                            <div className="admin-field">

                                <label>
                                    Category
                                </label>

                                <input
                                    type="text"
                                    name="category"
                                    value={form.category}
                                    onChange={handleChange}
                                    placeholder="Example: Racing"
                                    required
                                />

                            </div>

                            <div className="admin-field">

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

                                    <option value="Brand New">
                                        Brand New
                                    </option>

                                    <option value="Used">
                                        Used
                                    </option>

                                    <option value="Used-Like New">
                                        Used-Like New
                                    </option>

                                    <option value="Used-No Damage">
                                        Used-No Damage
                                    </option>

                                </select>

                            </div>

                            <div className="admin-field">

                                <label>
                                    Price
                                </label>

                                <input
                                    type="number"
                                    name="price"
                                    value={form.price}
                                    onChange={handleChange}
                                    min="0"
                                    step="0.01"
                                    required
                                />

                            </div>

                            <div className="admin-field">

                                <label>
                                    Old Price
                                </label>

                                <input
                                    type="number"
                                    name="oldPrice"
                                    value={form.oldPrice}
                                    onChange={handleChange}
                                    min="0"
                                    step="0.01"
                                />

                            </div>

                            <div className="admin-field">

                                <label>
                                    Stock
                                </label>

                                <input
                                    type="number"
                                    name="stock"
                                    value={form.stock}
                                    onChange={handleChange}
                                    min="0"
                                    required
                                />

                            </div>

                            <div className="admin-field">

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
                                        Pre-Order
                                    </option>

                                    <option value="Used">
                                        Used
                                    </option>

                                    <option value="Like New">
                                        Like New
                                    </option>

                                </select>

                            </div>

                        </div>

                    </section>

                    {error && (

                        <div className="admin-add-product-error">
                            {error}
                        </div>

                    )}

                    {success && (

                        <div className="admin-add-product-success">
                            {success}
                        </div>

                    )}

                    <div className="admin-add-product-actions">

                        <button
                            type="button"
                            className="admin-cancel-button"
                            onClick={() =>
                                navigate("/admin/products")
                            }
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="admin-create-button"
                            disabled={loading}
                        >
                            {loading
                                ? "Creating..."
                                : "Create Product"
                            }
                        </button>

                    </div>

                </form>

            </div>

        </main>

    );
}

export default AdminAddProduct;