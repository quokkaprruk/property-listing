// • headline (String) – Cozy Lakefront Log Cabin
// • numSleeps (Number) – 2
// • numBedrooms (Number) – 1
// • numBathrooms (Numbers) – 1
// • pricePerNight (Number) – 125.99
// • city (String) – Scugog
// • province (String) – Ontario
// • imageUrl (String) – For now, point to an image placed in your assets folder.
// • featuredRental (Boolean) – true

var properties = [
  {
    headline: "Cozy Lakefront Log Cabin",
    numSleeps: 2,
    numBedrooms: 1,
    numBathrooms: 1,
    pricePerNight: 125.99,
    city: "Miami",
    province: "Florida",
    imageUrl: "/propertyImages/Lakefront Log Cabin.jpg",
    featuredRental: false,
  },
  {
    headline: "Luxury Beachfront Villa",
    numSleeps: 6,
    numBedrooms: 3,
    numBathrooms: 2,
    pricePerNight: 299.99,
    city: "Miami",
    province: "Florida",
    imageUrl: "/propertyImages/Luxury Beachfront Villa.jpg",
    featuredRental: false,
  },
  {
    headline: "Mountain View Chalet",
    numSleeps: 4,
    numBedrooms: 2,
    numBathrooms: 1.5,
    pricePerNight: 175.5,
    city: "Miami",
    province: "Florida",
    imageUrl: "/propertyImages/Mountain View Chalet.jpg",
    featuredRental: true,
  },
  {
    headline: "Downtown Loft in Historic District",
    numSleeps: 3,
    numBedrooms: 1,
    numBathrooms: 1,
    pricePerNight: 99.99,
    city: "Miami",
    province: "Florida",
    imageUrl: "/propertyImages/Downtown Loft.jpg",
    featuredRental: false,
  },
  {
    headline: "Seaside Cottage with Ocean Views",
    numSleeps: 5,
    numBedrooms: 2,
    numBathrooms: 1,
    pricePerNight: 149.95,
    city: "Tampa",
    province: "Florida",
    imageUrl: "/propertyImages/Seaside Cottage with Ocean Views.jpg",
    featuredRental: true,
  },
  {
    headline: "Spacious Countryside Retreat",
    numSleeps: 8,
    numBedrooms: 4,
    numBathrooms: 3,
    pricePerNight: 199.99,
    city: "Tampa",
    province: "Florida",
    imageUrl: "/propertyImages/Spacious Countryside Retreat.jpg", //no /assets/
    featuredRental: true,
  },
];

module.exports.getAllProperties = () => {
  return properties;
};

module.exports.getFeaturedRentals = () => {
  return properties.filter((property) => property.featuredRental === true);
}; //will be used in home page

module.exports.getRentalsByCityAndProvince = () => {
  const groupedRentals = {};

  properties.forEach((property) => {
    const { city, province } = property; //get the city+province from property
    const cityProvinceKey = `${city}, ${province}`;

    if (!groupedRentals[cityProvinceKey]) {
      groupedRentals[cityProvinceKey] = {
        cityProvince: cityProvinceKey,
        rentals: [],
      };
    }

    groupedRentals[cityProvinceKey].rentals.push(property);
  });

  const result = Object.values(groupedRentals);
  return result;
}; //will be used in rentals page
