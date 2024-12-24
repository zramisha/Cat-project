const names = [
    "Whiskers", "Mittens", "Shadow", "Luna", "Simba", "Oliver", "Cleo", "Toby", 
    "Bella", "Charlie", "Daisy", "Max", "Milo", "Nala", "Zoe", "Oscar", "Lily", "Leo"
  ];
  
  const breeds = [
    "Persian",
    "Maine Coon",
    "Siamese",
    "Bengal",
    "Sphynx",
    "Ragdoll",
    "British Shorthair",
    "Abyssinian",
    "Russian Blue",
    "Scottish Fold"
  ];
  
  const owners = [
    "Emma Watson", "Chris Hemsworth", "Priyanka Chopra", "Tom Holland", 
    "Zendaya", "Ryan Reynolds", "Scarlett Johansson", "David Beckham", 
    "Jennifer Lawrence", "Keanu Reeves", "Elon Musk", "Taylor Swift", 
    "Billie Eilish", "Selena Gomez", "Harry Styles",   "Fareya",
    "Zubaida", "Tanveer", "Allu Arjun",
  ];
  
  const statusValues = ["available", "adopted"];
  
  const images = [
    "https://images.unsplash.com/photo-1567270671170-fdc10a5bf831?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1587823207416-6900512ba412",
    "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/11/08/11/56/kitten-4611189_1280.jpg",
  
  ];
  
  
  export const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  
  // const catInfo = {
  //   name: "Kittu",
  //   age: 9,
  //   breed: "parshian",
  //   description: "gulo mulo cute catMan",
  //   image: images[Math.floor(Math.random(), images.length)],
  //   shelterOwner: owners[Math.floor(Math.random(), owners.length)],
  //   status: statusValues[Math.floor(Math.random(), statusValues.length)],
  // };
  
  
  
  
  export const generateCats = (count = 10) => {
    
    const cats = [];
    for (let i = 0; i < count; i++) {
      const cat = {
        name: getRandomElement(names),
        age: Math.floor(Math.random() * 36) + 1, // Random age between 1 and 15 years
        breed: getRandomElement(breeds),
        description: `A ${Math.random() > 0.5 ? "friendly" : "playful"} ${getRandomElement(
          breeds
        ).toLowerCase()} cat that loves ${Math.random() > 0.5 ? "napping" : "playing"}.`,
        image: getRandomElement(images),
        shelterOwner: getRandomElement(owners),
        status: getRandomElement(statusValues),
      };
      cats.push(cat);
    }
    return cats;
  
  }
  
  
  export const dummyCats = [
    {
      name: "Charlie",
      age: 6,
      breed: "Abyssinian",
      description: "A playful and adorable male cat.",
      image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
      shelterOwner: "Emma Watson",
      status: "adopted",
    },
    {
      name: "Nala",
      age: 4,
      breed: "Scottish Fold",
      description: "A playful and adorable male cat.",
      image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
      shelterOwner: "Keanu Reeves",
      status: "adopted",
    },
    {
      name: "Whiskers",
      age: 16,
      breed: "Abyssinian",
      description: "A playful and adorable female cat.",
      image: "https://images.unsplash.com/photo-1592194996608-cf4fc6cbe0d2",
      shelterOwner: "Zendaya",
      status: "adopted",
    },
    {
      name: "Bella",
      age: 3,
      breed: "Scottish Fold",
      description: "A playful and adorable male cat.",
      image: "https://images.unsplash.com/photo-1506619216599-9d16d090ccf6",
      shelterOwner: "Keanu Reeves",
      status: "adopted",
    },
    {
      name: "Toby",
      age: 14,
      breed: "Abyssinian",
      description: "A playful and adorable female cat.",
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006",
      shelterOwner: "Keanu Reeves",
      status: "adopted",
    },
    {
      name: "Daisy",
      age: 34,
      breed: "Bengal",
      description: "A playful and adorable female cat.",
      image: "https://images.unsplash.com/photo-1501703979959-797917eb21c8",
      shelterOwner: "Emma Watson",
      status: "available",
    },
    {
      name: "Milo",
      age: 14,
      breed: "Maine Coon",
      description: "A playful and adorable female cat.",
      image: "https://images.unsplash.com/photo-1603316102255-1bded4953890",
      shelterOwner: "Ryan Reynolds",
      status: "available",
    },
    {
      name: "Mittens",
      age: 18,
      breed: "Persian",
      description: "A playful and adorable female cat.",
      image: "https://images.unsplash.com/photo-1560807707-8cc77767d783",
      shelterOwner: "Keanu Reeves",
      status: "adopted",
    },
    {
      name: "Lily",
      age: 7,
      breed: "Persian",
      description: "A playful and adorable female cat.",
      image: "https://images.unsplash.com/photo-1585941237317-3f27e2589080",
      shelterOwner: "Ryan Reynolds",
      status: "adopted",
    },
    {
      name: "Zoe",
      age: 33,
      breed: "Sphynx",
      description: "A playful and adorable female cat.",
      image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d",
      shelterOwner: "Ryan Reynolds",
      status: "adopted",
    },
    {
      name: "Max",
      age: 22,
      breed: "Bengal",
      description: "A playful and adorable male cat.",
      image: "https://images.unsplash.com/photo-1592194996308-fc16a6023d8a",
      shelterOwner: "Ryan Reynolds",
      status: "adopted",
    },
    {
      name: "Oliver",
      age: 26,
      breed: "Sphynx",
      description: "A playful and adorable female cat.",
      image: "https://images.unsplash.com/photo-1587823207416-6900512ba412",
      shelterOwner: "Emma Watson",
      status: "adopted",
    },
    {
      name: "Shadow",
      age: 20,
      breed: "Maine Coon",
      description: "A playful and adorable male cat.",
      image: "https://images.unsplash.com/photo-1556228578-dbf2fd5565c7",
      shelterOwner: "Emma Watson",
      status: "adopted",
    },
    {
      name: "Simba",
      age: 13,
      breed: "Ragdoll",
      description: "A playful and adorable male cat.",
      image: "https://images.unsplash.com/photo-1592194996408-b7dcfb4b1767",
      shelterOwner: "Keanu Reeves",
      status: "adopted",
    },
    {
      name: "Leo",
      age: 26,
      breed: "Sphynx",
      description: "A playful and adorable male cat.",
      image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987",
      shelterOwner: "Ryan Reynolds",
      status: "available",
    },
  ];
  
  