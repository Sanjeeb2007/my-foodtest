import React, { useState } from "react";
import { 
  FaUtensils, FaAward, FaStar, FaMapMarkerAlt, FaClock, 
  FaFire, FaLeaf, FaFish, FaPizzaSlice, FaCookieBite 
} from "react-icons/fa";

const culinaryTeam = [
  {
    name: 'Chef Isabella Romano',
    role: 'Executive Chef & Culinary Director',
    specialty: 'Italian Cuisine Master',
    experience: '15+ Years',
    location: 'Naples, Italy',
    description: 'Trained under Michelin-starred chefs in Tuscany. Specializes in handmade pasta and traditional Italian techniques. Passionate about farm-to-table cooking.',
    achievements: ['Michelin Star 2022', 'Best Chef Award NYC', 'Italian Culinary Institute Graduate'],
    cookingStyle: 'Traditional Italian with Modern Twist',
    imageUrl: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    cuisineIcon: <FaPizzaSlice className="text-red-500" />,
    signatureDish: 'Truffle Risotto with Parmesan Foam',
    availability: 'Available for Private Events',
    rating: 4.9,
    reviews: 127
  },
  {
    name: 'Chef Marcus Chen',
    role: 'Head of Asian Fusion',
    specialty: 'Pan-Asian & Sushi Master',
    experience: '12+ Years',
    location: 'Tokyo, Japan',
    description: 'Expert in Japanese, Thai, and Chinese cuisines. Certified sushi master with expertise in molecular gastronomy. Creates innovative fusion dishes.',
    achievements: ['Sushi World Champion 2021', 'Asian Culinary Award', 'Michelin Recommended'],
    cookingStyle: 'Contemporary Asian Fusion',
    imageUrl: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    cuisineIcon: <FaFish className="text-blue-500" />,
    signatureDish: 'Omakase Experience with Seasonal Sushi',
    availability: 'Booked 2 months ahead',
    rating: 4.8,
    reviews: 89
  },
  {
    name: 'Chef Amara Johnson',
    role: 'Pastry Chef & Dessert Artist',
    specialty: 'French Pastry & Chocolates',
    experience: '10+ Years',
    location: 'Paris, France',
    description: 'Le Cordon Bleu graduate specializing in French pastries, artisanal chocolates, and wedding cakes. Creates edible art with seasonal ingredients.',
    achievements: ['World Chocolate Masters Finalist', 'Pastry Chef of the Year 2023', 'Le Cordon Bleu Gold Medal'],
    cookingStyle: 'Classic French with Artistic Flair',
    imageUrl: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    cuisineIcon: <FaCookieBite className="text-pink-500" />,
    signatureDish: 'Chocolate Soufflé with Gold Leaf',
    availability: 'Available for Custom Orders',
    rating: 4.9,
    reviews: 156
  },
  {
    name: 'Chef Diego Rodriguez',
    role: 'Grill Master & BBQ Specialist',
    specialty: 'Spanish & Latin Grill',
    experience: '18+ Years',
    location: 'Barcelona, Spain',
    description: 'Expert in traditional Spanish grilling techniques and Latin American flavors. Master of wood-fired cooking and meat preparation.',
    achievements: ['BBQ World Championship Winner', 'Best Grill Restaurant 2022', 'Asador Master Certification'],
    cookingStyle: 'Fire-Cooked & Smoked Specialties',
    imageUrl: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    cuisineIcon: <FaFire className="text-orange-500" />,
    signatureDish: 'Wood-Fired Iberian Pork with Romesco',
    availability: 'Available for Catering',
    rating: 4.7,
    reviews: 203
  },
  {
    name: 'Chef Sophie Laurent',
    role: 'Plant-Based Cuisine Expert',
    specialty: 'Vegan & Vegetarian Gourmet',
    experience: '8+ Years',
    location: 'California, USA',
    description: 'Pioneer in plant-based gourmet cooking. Creates innovative vegan dishes that rival traditional fine dining. Expert in fermentation and plant proteins.',
    achievements: ['Green Chef Award 2023', 'Best Vegan Restaurant USA', 'Plant-Based Culinary Institute Graduate'],
    cookingStyle: 'Innovative Plant-Based Cuisine',
    imageUrl: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    cuisineIcon: <FaLeaf className="text-green-500" />,
    signatureDish: 'Jackfruit Wellington with Truffle Sauce',
    availability: 'Available for Consultation',
    rating: 4.8,
    reviews: 94
  },
  {
    name: 'Chef Antonio Benedetti',
    role: 'Master of Ceremonies & Events',
    specialty: 'International Fine Dining',
    experience: '20+ Years',
    location: 'Rome, Italy',
    description: 'Veteran chef with experience in Michelin-starred restaurants worldwide. Specializes in luxury events and private dining experiences.',
    achievements: ['Michelin 3-Star Experience', 'World Gourmet Summit Award', 'International Chef Federation President'],
    cookingStyle: 'Luxury International Cuisine',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    cuisineIcon: <FaAward className="text-purple-500" />,
    signatureDish: 'White Truffle Tasting Menu',
    availability: 'Available for Exclusive Events',
    rating: 5.0,
    reviews: 78
  }
]

export default function Team() {
  // const [selectedChef, setSelectedChef] = useState(null);
  const [filter, setFilter] = useState('All');

  const specialties = ['All', 'Italian', 'Asian', 'French', 'Spanish', 'Plant-Based', 'International'];
  
  const filteredChefs = filter === 'All' 
    ? culinaryTeam 
    : culinaryTeam.filter(chef => chef.specialty.includes(filter) || filter === 'All');

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 py-24 sm:py-32">
      {/* Header Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-6">
            <FaUtensils className="text-4xl text-orange-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Meet Our Culinary Masters
            </h2>
            <FaUtensils className="text-4xl text-orange-500" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Award-winning chefs from around the world, each bringing their unique expertise 
            and passion to create extraordinary dining experiences
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {specialties.map((specialty) => (
            <button
              key={specialty}
              onClick={() => setFilter(specialty)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === specialty
                  ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-orange-100 hover:text-orange-600 shadow-md'
              }`}
            >
              {specialty}
            </button>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-500 mb-2">6</div>
            <div className="text-gray-600">Master Chefs</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
            <div className="text-gray-600">Years Combined</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-500 mb-2">15</div>
            <div className="text-gray-600">Awards Won</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-500 mb-2">4.8</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {filteredChefs.map((chef, index) => (
            <div 
              key={chef.name}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Chef Image & Header */}
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 relative overflow-hidden">
                  <img
                    src={chef.imageUrl}
                    alt={chef.name}
                    className="w-full h-full object-cover mix-blend-overlay opacity-90"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                    {chef.cuisineIcon}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {chef.experience} Experience
                  </div>
                </div>
              </div>

              {/* Chef Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {chef.name}
                    </h3>
                    <p className="text-orange-600 font-semibold text-sm">
                      {chef.role}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full">
                    <FaStar className="text-yellow-500 text-xs" />
                    <span className="text-yellow-700 font-bold text-sm">
                      {chef.rating}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {chef.description}
                </p>

                {/* Specialty & Location */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <FaUtensils className="text-orange-500" />
                    <span className="text-gray-700 font-medium">
                      {chef.specialty}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaMapMarkerAlt className="text-red-500" />
                    <span className="text-gray-600">
                      {chef.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaClock className="text-blue-500" />
                    <span className="text-gray-600">
                      {chef.availability}
                    </span>
                  </div>
                </div>

                {/* Signature Dish */}
                <div className="bg-orange-50 rounded-lg p-3 mb-4">
                  <h4 className="text-xs font-semibold text-orange-700 mb-1">
                    SIGNATURE DISH
                  </h4>
                  <p className="text-sm text-gray-800 font-medium">
                    {chef.signatureDish}
                  </p>
                </div>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-500 mb-2">
                    ACHIEVEMENTS
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {chef.achievements.map((achievement, idx) => (
                      <span 
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200">
                    View Profile
                  </button>
                  <button className="flex-1 border border-orange-500 text-orange-500 hover:bg-orange-50 py-2 px-4 rounded-lg font-medium transition-colors duration-200">
                    Book Consultation
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-white rounded-3xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Work with Our Culinary Masters?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Whether you're planning a private event, need catering services, or want to learn from the best, 
            our award-winning chefs are here to create unforgettable culinary experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Book a Chef
            </button>
            <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              View All Services
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}