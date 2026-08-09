import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {

    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = localStorage.getItem("wishlist");

        return savedWishlist
            ? JSON.parse(savedWishlist)
            : [];
    });

    useEffect(() => {
        localStorage.setItem(
            "wishlist",
            JSON.stringify(wishlist)
        );
    }, [wishlist]);

    const addToWishlist = (product) => {

        setWishlist((current) => {

            const exists = current.some(
                (item) => item.id === product.id
            );

            if (exists) {
                return current;
            }

            return [...current, product];
        });

    };

    const removeFromWishlist = (id) => {

        setWishlist((current) =>
            current.filter((item) => item.id !== id)
        );

    };

    const toggleWishlist = (product) => {

        setWishlist((current) => {

            const exists = current.some(
                (item) => item.id === product.id
            );

            if (exists) {
                return current.filter(
                    (item) => item.id !== product.id
                );
            }

            return [...current, product];
        });

    };

    const isInWishlist = (id) => {

        return wishlist.some(
            (item) => item.id === id
        );

    };

    return (
        <WishlistContext.Provider
            value={{
                wishlist,
                addToWishlist,
                removeFromWishlist,
                toggleWishlist,
                isInWishlist
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    return useContext(WishlistContext);
}