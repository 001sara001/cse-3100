import '../style/AvailableCats.css';
import { useEffect, useState } from 'react';

export default function AvailableCats() {
  const [cats, setCats] = useState([]);  
  const [filteredCats, setFilteredCats] = useState([]);  
  const [breedFilter, setBreedFilter] = useState('');
  const [nameSearch, setNameSearch] = useState('');

  const availableCats = [
    { breed: 'Sphynx', name: 'Fluffy', age: '2' },
    { breed: 'Birman', name: 'Whiskers', age: '4' },
    { breed: 'Persian', name: 'Mittens', age: '3' },
    { breed: 'Abyssinian', name: 'Simba', age: '1' },
    { breed: 'Bengal', name: 'Shadow', age: '5' }
  ];

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );
        const catsWithImages = responses.map((response, index) => ({
          ...availableCats[index],  
          image: response[0].url     
        }));

        setCats(catsWithImages);  
        setFilteredCats(catsWithImages);  

      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();  
  }, []);  

  const handleFilterChange = () => {
    let filtered = cats;

    if (breedFilter) {
      filtered = filtered.filter((cat) => cat.breed.toLowerCase() === breedFilter.toLowerCase());
    }

    if (nameSearch) {
      filtered = filtered.filter((cat) => cat.name.toLowerCase().includes(nameSearch.toLowerCase()));
    }

    setFilteredCats(filtered);  
  };
  useEffect(() => {
    handleFilterChange();  
  }, [breedFilter, nameSearch, cats]); 

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Find your perfect cat here!</p>

      <div className="filters">
        <select value={breedFilter} onChange={(e) => setBreedFilter(e.target.value)}>
          <option value="">Select Breed</option>
          <option value="Sphynx">Sphynx</option>
          <option value="Peterbald">Peterbald</option>
          <option value="Birman">Birman</option>
          <option value="Abyssinian">Abyssinian</option>
          <option value="Persian">Persian</option>
          <option value="Bengal">Bengal</option>
        </select>
        <input
          type="text"
          placeholder="Search by name"
          value={nameSearch}
          onChange={(e) => setNameSearch(e.target.value)}
        />
      </div>

      <div className="mt-2 row g-4">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid mb-2"
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
    </section>
  );
}
