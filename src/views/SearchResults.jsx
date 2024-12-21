// SearchResults.jsx
import React from 'react';

export default function SearchResults({ filteredCats }) {
  return (
    <div className="mt-2 row g-4">
      {filteredCats.map((cat, i) => (
        <div key={i} className="col-md-4">
          <div className="cat-card">
            <img
              src={cat.image}
              alt={cat.name}
              className="img-fluid mb-2"
              style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }}
            />
            <div className="cat-info">
              <h3 className="h5 mb-1">{cat.name}</h3>
              <p className="mb-0">Age: {cat.age}</p>
              <p className="mb-5">Breed: {cat.breed}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
