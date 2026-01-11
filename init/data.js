let SampleListings = [
  {
      title: "My New House",
      description: "By the sea beach",
      price: 1500,
      location: "Calangute, Goa",
      country: "India",
      image: "https://picsum.photos/seed/apartment1/400/300"
  },
  {
      title: "Luxury Villa in the Mountains",
      description: "Nestled in the serene hills",
      price: 2500,
      location: "Manali, Himachal Pradesh",
      country: "India",
      image: "https://picsum.photos/seed/luxuryvilla/400/300"
  },
  {
      title: "City Center Penthouse",
      description: "Perfect for urban living",
      price: 4000,
      location: "New York, USA",
      country: "USA",
      image: "https://picsum.photos/seed/cityloft/400/300"
  },
  {
      title: "Beachfront Getaway",
      description: "Relax by the ocean",
      price: 3500,
      location: "Sydney, Australia",
      country: "Australia",
      image: "https://picsum.photos/seed/beachvilla/400/300"
  },
  {
      title: "Countryside Retreat",
      description: "Peaceful house surrounded by nature",
      price: 2000,
      location: "Yorkshire, UK",
      country: "UK",
      image: "https://picsum.photos/seed/countrysideretreat/400/300"
  },
  {
      title: "Parisian Apartment",
      description: "A beautiful flat in the heart of Paris",
      price: 3000,
      location: "Paris, France",
      country: "France",
      image: "https://picsum.photos/seed/parisapartment/400/300"
  },
  {
      title: "Mountain View Chalet",
      description: "Scenic view of the mountains",
      price: 2750,
      location: "Zermatt, Switzerland",
      country: "Switzerland",
      image: "https://picsum.photos/seed/mountaincabin/400/300"
  },
  {
      title: "Tokyo High-Rise",
      description: "Modern apartment in the bustling city",
      price: 3200,
      location: "Tokyo, Japan",
      country: "Japan",
      image: "https://picsum.photos/seed/tokyohighrise/400/300"
  },
  {
      title: "Lakeside Cottage",
      description: "Relax by the peaceful lake",
      price: 1800,
      location: "Lake District, UK",
      country: "UK",
      image: "https://picsum.photos/seed/lakesidecottage/400/300"
  },
  {
      title: "Cape Town Beach House",
      description: "Luxury villa by the Atlantic",
      price: 4500,
      location: "Cape Town, South Africa",
      country: "South Africa",
      image: "https://picsum.photos/seed/seasidevilla/400/300"
  },
  {
      title: "Historic Townhouse",
      description: "Old world charm in the city center",
      price: 3400,
      location: "Boston, USA",
      country: "USA",
      image: "https://picsum.photos/seed/historictownhouse/400/300"
  },
  {
      title: "Modern Loft in Berlin",
      description: "Contemporary design and open space",
      price: 3100,
      location: "Berlin, Germany",
      country: "Germany",
      image: "https://picsum.photos/seed/modernhouse/400/300"
  },
  {
      title: "Ski Chalet in Aspen",
      description: "Ski-in and ski-out luxury chalet",
      price: 5500,
      location: "Aspen, USA",
      country: "USA",
      image: "https://picsum.photos/seed/skichalet/400/300"
  },
  {
      title: "Island Villa",
      description: "Private island with stunning views",
      price: 10000,
      location: "Maldives",
      country: "Maldives",
      image: "https://picsum.photos/seed/islandvilla/400/300"
  },
  {
      title: "Penthouse with Ocean View",
      description: "Panoramic views of the Pacific",
      price: 6200,
      location: "Honolulu, USA",
      country: "USA",
      image: "https://picsum.photos/seed/oceanfrontcondo/400/300"
  },
  {
      title: "Country House",
      description: "Rustic house with modern amenities",
      price: 2900,
      location: "Kent, UK",
      country: "UK",
      image: "https://picsum.photos/seed/countryhouse/400/300"
  },
  {
      title: "Urban Loft",
      description: "Loft apartment in the heart of downtown",
      price: 3400,
      location: "Toronto, Canada",
      country: "Canada",
      image: "https://picsum.photos/seed/urbanloft/400/300"
  },
  {
      title: "Cottage in the Woods",
      description: "Secluded retreat surrounded by trees",
      price: 1800,
      location: "Vancouver, Canada",
      country: "Canada",
      image: "https://picsum.photos/seed/cabininthewoods/400/300"
  },
  {
      title: "Beach House in Malibu",
      description: "Luxury beachfront property",
      price: 9800,
      location: "Malibu, USA",
      country: "USA",
      image: "https://picsum.photos/seed/beachcottage/400/300"
  },
  {
      title: "Modern Farmhouse",
      description: "Farmhouse with modern design",
      price: 4500,
      location: "Nashville, USA",
      country: "USA",
      image: "https://picsum.photos/seed/rusticcottage/400/300"
  },
  {
      title: "Victorian Mansion",
      description: "Historic Victorian mansion with a large garden",
      price: 6500,
      location: "Charleston, USA",
      country: "USA",
      image: "https://picsum.photos/seed/victorianhouse/400/300"
  },
  {
      title: "Riverside Lodge",
      description: "Cozy riverside lodge with nature trails",
      price: 2200,
      location: "Portland, USA",
      country: "USA",
      image: "https://picsum.photos/seed/riversidelodge/400/300"
  },
  {
      title: "Luxury Apartment in Rome",
      description: "Opulent living space in the Eternal City",
      price: 4000,
      location: "Rome, Italy",
      country: "Italy",
      image: "https://picsum.photos/seed/luxuryapartment/400/300"
  },
  {
      title: "Urban Studio in Seoul",
      description: "Compact and stylish studio",
      price: 3000,
      location: "Seoul, South Korea",
      country: "South Korea",
      image: "https://picsum.photos/seed/urbanstudio/400/300"
  },
  {
      title: "Cabin in the Swiss Alps",
      description: "Cozy cabin surrounded by snow-capped peaks",
      price: 4800,
      location: "Interlaken, Switzerland",
      country: "Switzerland",
      image: "https://picsum.photos/seed/cabininswissalps/400/300"
  },
  {
      title: "Chateau in the Loire Valley",
      description: "French chateau with a vineyard",
      price: 7500,
      location: "Loire Valley, France",
      country: "France",
      image: "https://picsum.photos/seed/chateau/400/300"
  },
  {
      title: "Hawaiian Villa",
      description: "Luxury villa with ocean views",
      price: 5200,
      location: "Maui, Hawaii",
      country: "USA",
      image: "https://picsum.photos/seed/hawaiianvilla/400/300"
  },
  {
      title: "Penthouse in Dubai",
      description: "Sky-high penthouse with stunning city views",
      price: 9200,
      location: "Dubai, UAE",
      country: "UAE",
      image: "https://picsum.photos/seed/penthouseindubai/400/300"
  },
  {
      title: "Rustic Farmhouse",
      description: "Farmhouse with a large barn and orchard",
      price: 3300,
      location: "Tuscany, Italy",
      country: "Italy",
      image: "https://picsum.photos/seed/rusticfarmhouse/400/300"
  },
  {
      title: "Lakeside Villa",
      description: "Villa by the lake with private boat dock",
      price: 6000,
      location: "Lake Tahoe, USA",
      country: "USA",
      image: "https://picsum.photos/seed/lakesidevilla/400/300" , 
      owner : "6742b558f3436f1a37568a87" , 
  }
  // Add more entries in the same format until 100
]

SampleListings = SampleListings.map(listing => ({
    ...listing,
    image: {
        filename: "listingimage",
        url: listing.image
    }
  }));

module.exports = { data : SampleListings };