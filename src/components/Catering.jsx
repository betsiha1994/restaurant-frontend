import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Catering = () => {
  const { restaurantId } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    guests: "",
    specialRequests: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [menuLoading, setMenuLoading] = useState(true);
  const [errors, setErrors] = useState({});

  // Fetch menu items for this restaurant
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setMenuLoading(true);
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/restaurants/${restaurantId}/menu`
        );
        const data = await res.json();
        setMenuItems(data);
      } catch (err) {
        console.error("Error fetching menu items:", err);
        setMessage("Error loading menu. Please try again.");
      } finally {
        setMenuLoading(false);
      }
    };
    fetchMenu();
  }, [restaurantId]);

  // Calculate total price
  const calculateTotal = () => {
    return selectedItems.reduce((total, selectedItem) => {
      const menuItem = menuItems.find((item) => item._id === selectedItem.item);
      return total + (menuItem ? menuItem.price * selectedItem.quantity : 0);
    }, 0);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^\S+@\S+\.\S+$/))
      newErrors.email = "Valid email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.eventDate) newErrors.eventDate = "Event date is required";
    if (new Date(formData.eventDate) < new Date())
      newErrors.eventDate = "Event date must be in the future";
    if (!formData.guests || formData.guests < 1)
      newErrors.guests = "Number of guests must be at least 1";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Toggle menu item selection
  const toggleItem = (item) => {
    const exists = selectedItems.find((i) => i.item === item._id);
    if (exists) {
      setSelectedItems(selectedItems.filter((i) => i.item !== item._id));
    } else {
      setSelectedItems([
        ...selectedItems,
        { item: item._id, quantity: 1, name: item.name, price: item.price },
      ]);
    }
  };

  // Update quantity of selected item
  const updateQuantity = (itemId, quantity) => {
    if (quantity < 1) return;
    setSelectedItems(
      selectedItems.map((i) =>
        i.item === itemId ? { ...i, quantity: quantity } : i
      )
    );
  };

  // Remove selected item
  const removeItem = (itemId) => {
    setSelectedItems(selectedItems.filter((i) => i.item !== itemId));
  };

  // Submit catering order
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setMessage("Please fix the errors above");
      return;
    }

    if (selectedItems.length === 0) {
      setMessage("Please select at least one menu item.");
      return;
    }

    setLoading(true);
    const payload = {
      ...formData,
      restaurant: restaurantId,
      menuItems: selectedItems,
      totalPrice: calculateTotal(),
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/catering`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to submit order");

      setMessage("Catering order submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventDate: "",
        eventType: "",
        guests: "",
        specialRequests: "",
      });
      setSelectedItems([]);
      setErrors({});
    } catch (err) {
      console.error(err);
      setMessage("Error submitting order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-12 max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">Catering Orders</h1>

      {message && (
        <p
          className={`mb-4 p-3 rounded ${
            message.includes("Error") || message.includes("Please")
              ? "bg-red-100 text-red-700 border border-red-300"
              : "bg-green-100 text-green-700 border border-green-300"
          }`}
        >
          {message}
        </p>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Event Details</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full border p-3 rounded ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className={`w-full border p-3 rounded ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className={`w-full border p-3 rounded ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <input
                name="eventDate"
                type="date"
                value={formData.eventDate}
                onChange={handleChange}
                className={`w-full border p-3 rounded ${
                  errors.eventDate ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {errors.eventDate && (
                <p className="text-red-500 text-sm mt-1">{errors.eventDate}</p>
              )}
            </div>

            <input
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              placeholder="Event Type (Wedding, Birthday, Office…)"
              className="w-full border border-gray-300 p-3 rounded"
            />

            <div>
              <input
                name="guests"
                type="number"
                min="1"
                value={formData.guests}
                onChange={handleChange}
                placeholder="Number of Guests"
                className={`w-full border p-3 rounded ${
                  errors.guests ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {errors.guests && (
                <p className="text-red-500 text-sm mt-1">{errors.guests}</p>
              )}
            </div>

            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              placeholder="Special Requests"
              rows="4"
              className="w-full border border-gray-300 p-3 rounded"
            />
          </form>
        </div>

        {/* Menu Selection */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Menu Selection</h2>

          {menuLoading ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Loading menu...</p>
            </div>
          ) : (
            <>
              {/* Available Menu Items */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Available Items</h3>
                <div className="space-y-2 max-h-60 overflow-y-auto border border-gray-200 rounded p-3">
                  {menuItems.length === 0 ? (
                    <p className="text-gray-500 text-center py-4">
                      No menu items available
                    </p>
                  ) : (
                    menuItems.map((item) => (
                      <div
                        key={item._id}
                        className="flex items-center justify-between p-2 hover:bg-gray-50 rounded"
                      >
                        <div className="flex items-center flex-1">
                          <input
                            type="checkbox"
                            onChange={() => toggleItem(item)}
                            checked={selectedItems.some(
                              (i) => i.item === item._id
                            )}
                            className="mr-3 h-4 w-4"
                          />
                          <span className="flex-1">
                            {item.name} - ${item.price.toFixed(2)}
                          </span>
                        </div>
                        {selectedItems.some((i) => i.item === item._id) && (
                          <div className="flex items-center ml-2">
                            <input
                              type="number"
                              min="1"
                              value={
                                selectedItems.find((i) => i.item === item._id)
                                  ?.quantity || 1
                              }
                              onChange={(e) =>
                                updateQuantity(
                                  item._id,
                                  parseInt(e.target.value)
                                )
                              }
                              className="w-16 border border-gray-300 p-1 rounded text-center"
                            />
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Selected Items Summary */}
              {selectedItems.length > 0 && (
                <div className="border border-gray-200 rounded p-4 mb-6">
                  <h3 className="font-medium mb-3">Selected Items</h3>
                  <div className="space-y-2">
                    {selectedItems.map((selectedItem) => {
                      const item = menuItems.find(
                        (i) => i._id === selectedItem.item
                      );
                      return (
                        <div
                          key={selectedItem.item}
                          className="flex items-center justify-between p-2 bg-gray-50 rounded"
                        >
                          <span>
                            {selectedItem.name || item?.name} ×{" "}
                            {selectedItem.quantity}
                          </span>
                          <div className="flex items-center">
                            <span className="mr-3">
                              $
                              {(
                                (selectedItem.price || item?.price || 0) *
                                selectedItem.quantity
                              ).toFixed(2)}
                            </span>
                            <button
                              type="button"
                              onClick={() => removeItem(selectedItem.item)}
                              className="text-red-500 hover:text-red-700"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="border-t mt-3 pt-3">
                    <div className="flex justify-between font-semibold">
                      <span>Total:</span>
                      <span>${calculateTotal().toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              )}

              <button
                type="submit"
                onClick={handleSubmit}
                disabled={loading || selectedItems.length === 0}
                className={`w-full py-3 px-4 rounded font-medium ${
                  loading || selectedItems.length === 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-500 hover:bg-green-600"
                } text-white transition-colors`}
              >
                {loading ? "Submitting Order..." : "Submit Catering Order"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catering;
