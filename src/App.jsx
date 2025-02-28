import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const properties = [
  { id: 1, name: "Luxury Villa", price: 500000, location: "New York" },
  { id: 2, name: "Modern Apartment", price: 300000, location: "Los Angeles" },
  { id: 3, name: "Cozy Cottage", price: 200000, location: "Miami" },
];

export default function RealEstate() {
  const [search, setSearch] = useState("");
  
  const filteredProperties = properties.filter((property) =>
    property.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Real Estate Listings</h1>
      <Input
        placeholder="Search properties..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProperties.map((property) => (
          <motion.div key={property.id} whileHover={{ scale: 1.05 }}>
            <Card className="p-4 border rounded-2xl shadow-md">
              <CardContent>
                <h2 className="text-xl font-semibold">{property.name}</h2>
                <p className="text-gray-600">Location: {property.location}</p>
                <p className="text-green-600 font-bold">${property.price.toLocaleString()}</p>
                <Button className="mt-2">View Details</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
