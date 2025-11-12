import React, { useState } from "react";
import Card from "../Components/ComponentScreens/Card";
import Button from "../Components/ComponentScreens/Button";
import Input from "../Components/ComponentScreens/Input";
import Label from "../Components/ComponentScreens/Label";
import Textarea from "../Components/ComponentScreens/Textarea";
import  ImageWithFallback  from "../Components/ComponentScreens/ImageWithFallback";
import { Upload, Package, DollarSign, MapPin } from "lucide-react";
import "../styles/SellScreenStyles.css";
import { IoChevronBack, IoStorefrontOutline, IoCartOutline, IoClipboardOutline } from "react-icons/io5";
import Header from "../Components/ComponentScreens/Header";

//Images
import carousel2 from "../assets/carousel4.png";

const initialListings = [
  {
    id: 1,
    title: "Construction Sand (10 bags)",
    price: "$50",
    image: carousel2,
    //   "https://images.unsplash.com/photo-1760045788252-d8d386ea1d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMG1hdGVyaWFscyUyMHNhbmR8ZW58MXx8fHwxNzYyNzQ1ODIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    
    quantity: 10,
    location: "Downtown",
    status: "active",
  },
  {
    id: 2,
    title: "Power Tools Set",
    price: "$150",
    image:  carousel2,
    //   "https://images.unsplash.com/photo-1687066564067-16502e255660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB0b29scyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjI3Mjc2MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    quantity: 1,
    location: "Suburb",
    status: "active",
  },
];

export default function SellScreen() {
  const [showForm, setShowForm] = useState(false);
  const [myListings, setMyListings] = useState(initialListings);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    quantity: "",
    location: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newListing = {
      id: Date.now(),
      title: formData.title,
      price: formData.price || "$0",
      image: "", // in real app you'll handle upload -> url
      quantity: formData.quantity,
      location: formData.location,
      status: "active",
    };
    setMyListings([newListing, ...myListings]);
    setShowForm(false);
    setFormData({ title: "", description: "", price: "", quantity: "", location: "" });
  };

  const handleDelete = (id) => {
    setMyListings(myListings.filter((l) => l.id !== id));
  };

  return (
    <div className="sell-page">
      {/* Header */}
      {/* <header className="sell-hero">
        <button className="back-btn" >
          <IoChevronBack size={24} color="#fff" />
        </button>
        <div className="header-text">
          <h3>Sell Items</h3>
          <p>Sell tools, materials, and equipment</p>
        </div>
      </header> */}
      <Header 
        heading="Sell Items"
        text="Sell tools, materials, and equipment"
        // onBack={goBack}
        onBack={() => console.log("Back button pressed")}
      />

      <main className="sell-main">
        {/* Quick Stats */}
        <div className="stats-grid">
          <Card className="stat-card">
            <div className="stat-inner">
              <div className="stat-icon">
                <Package size={20} />
              </div>
              <div>
                <p className="stat-label">Active Listings</p>
                <h3>{myListings.length}</h3>
              </div>
            </div>
          </Card>

          <Card className="stat-card">
            <div className="stat-inner">
              <div className="stat-icon success">
                <DollarSign size={20} />
              </div>
              <div>
                <p className="stat-label">Total Value</p>
                <h3>$200</h3>
              </div>
            </div>
          </Card>
        </div>

        {/* Add New Listing Button */}
        {!showForm && (
          <Button className="add-listing" size="lg" onClick={() => setShowForm(true)}>
            + Add New Listing
          </Button>
        )}

        {/* Add Listing Form */}
        {showForm && (
          <Card className="create-card">
            <div className="form-head">
              <h3>Create New Listing</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowForm(false)}>
                Cancel
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="listing-form">
              {/* Image upload placeholder */}
              <div className="form-group">
                <Label>Product Images</Label>
                <div className="upload-dash">
                  <Upload size={36} />
                  <p>Click to upload product images</p>
                  <p className="hint">PNG, JPG up to 10MB</p>
                </div>
              </div>

              <div className="form-group">
                <Label>Product Name</Label>
                <Input
                  placeholder="e.g., Construction Sand"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <Label>Description</Label>
                <Textarea
                  placeholder="Describe your product in detail..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                />
              </div>

              <div className="two-col">
                <div className="form-group">
                  <Label>Price</Label>
                  <Input
                    placeholder="e.g., $50"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <Label>Quantity</Label>
                  <Input
                    type="number"
                    placeholder="e.g., 10"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <Label>Location</Label>
                <Input
                  placeholder="e.g., Downtown"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="publish-btn">
                Publish Listing
              </Button>
            </form>
          </Card>
        )}

        {/* My Listings */}
        <section className="my-listings">
          <h3 className="my-listings-title">My Listings</h3>
          <div className="listings-grid">
            {myListings.map((listing) => (
              <Card key={listing.id} className="listing-card">
                <ImageWithFallback src={listing.image} alt={listing.title} className="listing-image" />
                <div className="listing-body">
                  <div className="listing-top">
                    <div className="listing-left">
                      <h4 className="listing-title">{listing.title}</h4>
                      <div className="listing-meta">
                        <MapPin size={12} />
                        <span>{listing.location}</span>
                      </div>
                    </div>
                    <div className="listing-right">
                      <p className="price">{listing.price}</p>
                      <p className="qty">Qty: {listing.quantity}</p>
                    </div>
                  </div>

                  <div className="listing-actions">
                    <Button variant="outline" className="action-btn">Edit</Button>
                    <Button
                      variant="outline"
                      className="action-btn destructive"
                      onClick={() => handleDelete(listing.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
