import React, { useState } from "react";
import { 
  FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendar, 
  FaBriefcase, FaGraduationCap, FaStar, FaHeart, FaShareAlt,
  FaCamera, FaEdit, FaChevronDown, FaChevronUp, FaAward,
  FaUtensils, FaFire, FaCookieBite, FaLeaf, FaFish
} from "react-icons/fa";
import SectionCard from "../components/information/SectionCard";

// Import the fixed SectionCard component


export default function Information() {
  const [activeSection, setActiveSection] = useState(null);

// Sample user data
  const userData = {
    basicInfo: {
      name: "Chef Isabella Romano",
      username: "@isabellaromano",
      avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      coverImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      bio: "Award-winning Italian chef specializing in handmade pasta and traditional techniques.",
      location: "Naples, Italy",
      email: "isabella@culinarymasters.com",
      phone: "+39 333 123 4567",
      joinDate: "January 2020"
    },
    professional: {
      title: "Executive Chef & Culinary Director",
      experience: "15+ Years",
      specialties: ["Italian Cuisine", "Handmade Pasta", "Farm-to-Table"],
      achievements: ["Michelin Star 2022", "Best Chef Award NYC", "Italian Culinary Institute Graduate"],
      currentRole: "Head Chef at Trattoria Bella Vista"
    },
    personal: {
      birthDate: "March 15, 1985",
      nationality: "Italian",
      languages: ["Italian", "English", "French"],
      hobbies: ["Gardening", "Wine Tasting", "Traveling", "Photography"],
      favoriteCuisines: ["Italian", "French", "Japanese"]
    },
    stats: {
      recipesCreated: 247,
      happyClients: 1893,
      eventsCatered: 156,
      avgRating: 4.9
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="relative mb-8 rounded-3xl overflow-hidden shadow-2xl">
          {/* Cover Image */}
          <div className="h-48 bg-gradient-to-r from-orange-400 to-red-500 relative">
            <img 
              src={userData.basicInfo.coverImage} 
              alt="Cover" 
              className="w-full h-full object-cover mix-blend-overlay opacity-60"
            />
          </div>
          
          {/* Profile Info */}
          <div className="relative px-6 pb-6">
            <div className="flex items-end gap-4 -mt-16">
              {/* Avatar */}
              <div className="relative">
                <img 
                  src={userData.basicInfo.avatar} 
                  alt={userData.basicInfo.name}
                  className="w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover"
                />
              </div>
              
              {/* Basic Info */}
              <div className="flex-1 pb-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-1">
                  {userData.basicInfo.name}
                </h1>
                <p className="text-orange-600 font-medium">
                  {userData.basicInfo.username}
                </p>
              </div>
            </div>
            
            {/* Bio */}
            <p className="text-gray-700 mt-4 leading-relaxed">
              {userData.basicInfo.bio}
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: <FaUtensils className="text-orange-500" />, label: "Recipes", value: userData.stats.recipesCreated },
            { icon: <FaHeart className="text-red-500" />, label: "Clients", value: userData.stats.happyClients },
            { icon: <FaAward className="text-purple-500" />, label: "Events", value: userData.stats.eventsCatered },
            { icon: <FaStar className="text-yellow-500" />, label: "Rating", value: userData.stats.avgRating }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-2xl">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Expandable Sections - Updated to pass props correctly */}
        <div className="space-y-4">
          <SectionCard 
            title="Professional Information" 
            icon={<FaBriefcase />}
            sectionKey="professional"
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Current Position</h4>
                <p className="text-gray-700">{userData.professional.currentRole}</p>
                <p className="text-sm text-gray-500">{userData.professional.experience} experience</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {userData.professional.specialties.map((specialty, index) => (
                    <span key={index} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard 
            title="Personal Details" 
            icon={<FaUser />}
            sectionKey="personal"
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Basic Info</h4>
                <div className="space-y-2 text-sm">
                  <p><span className="text-gray-500">Birth Date:</span> {userData.personal.birthDate}</p>
                  <p><span className="text-gray-500">Nationality:</span> {userData.personal.nationality}</p>
                  <p><span className="text-gray-500">Languages:</span> {userData.personal.languages.join(', ')}</p>
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard 
            title="Contact Information" 
            icon={<FaEnvelope />}
            sectionKey="contact"
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-orange-500" />
                <span>{userData.basicInfo.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-orange-500" />
                <span>{userData.basicInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-orange-500" />
                <span>{userData.basicInfo.location}</span>
              </div>
            </div>
          </SectionCard>
        </div>
      </div>
    </div>
  )
}