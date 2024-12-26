import { useState, useEffect } from "react";
import { generateCats, dummyCats } from "@/utils/helper/generateRandomCats";
import CatCard from "@/components/CatCard";

const Cats = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    // Generate the initial batch of cats
    const generatedCats = generateCats(15);
    setCats(generatedCats);
    // setCats(dummyCats)
  }, []);

  const handleGenerateCats = () => {
    const generatedCats = generateCats(10);
    setCats(generatedCats);
  };

  return (
    <div className="mx-auto">
      <h1>Cat List</h1>
      <button onClick={handleGenerateCats} type="button" className="btn btn-outline">Regenerate Cats</button>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mx-auto items-center justify-around">
        {cats.map((cat, index) => (
          <CatCard key={index} cat={cat}/>
        ))}
      </div>
    </div>
  );
};

export default Cats;