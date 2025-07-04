import React, { useState } from 'react';
import { Search } from 'lucide-react';

const Pokemon = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const pokemonData = [
    {
      id: 1,
      name: "Bulbasaur",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      height: "0.7m",
      weight: "6.9kg",
      xp: 64,
      types: ["poison", "grass"]
    },
    {
      id: 2,
      name: "Ivysaur",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
      height: "1m",
      weight: "13kg",
      xp: 142,
      types: ["poison", "grass"]
    },
    {
      id: 3,
      name: "Venusaur",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
      height: "2m",
      weight: "100kg",
      xp: 236,
      types: ["poison", "grass"]
    },
    {
      id: 4,
      name: "Charmander",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      height: "0.6m",
      weight: "8.5kg",
      xp: 62,
      types: ["fire"]
    },
    {
      id: 5,
      name: "Charmeleon",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
      height: "1.1m",
      weight: "19kg",
      xp: 142,
      types: ["fire"]
    },
    {
      id: 6,
      name: "Charizard",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      height: "1.7m",
      weight: "90.5kg",
      xp: 240,
      types: ["fire", "flying"]
    },
    {
      id: 7,
      name: "Squirtle",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      height: "0.5m",
      weight: "9kg",
      xp: 63,
      types: ["water"]
    },
    {
      id: 8,
      name: "Wartortle",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
      height: "1m",
      weight: "22.5kg",
      xp: 142,
      types: ["water"]
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      poison: "bg-purple-500",
      grass: "bg-green-500",
      fire: "bg-orange-500",
      water: "bg-blue-500",
      flying: "bg-gray-400"
    };
    return colors[type as keyof typeof colors] || "bg-gray-500";
  };

  const filteredPokemon = pokemonData.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-orange-500 mb-8">
            Pokémon Collection
          </h1>
          
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search Pokémon..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Pokemon Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPokemon.map((pokemon) => (
            <div
              key={pokemon.id}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-t-4 border-orange-400"
            >
              {/* Pokemon Image */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-700 dark:to-slate-600 p-6 text-center">
                <img
                  src={pokemon.image}
                  alt={pokemon.name}
                  className="w-32 h-32 mx-auto object-contain"
                />
              </div>

              {/* Pokemon Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">
                  {pokemon.name}
                </h3>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500 dark:text-gray-400 font-medium">Height:</span>
                    <span className="ml-2 text-gray-800 dark:text-white">{pokemon.height}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400 font-medium">XP:</span>
                    <span className="ml-2 text-gray-800 dark:text-white">{pokemon.xp}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400 font-medium">Weight:</span>
                    <span className="ml-2 text-gray-800 dark:text-white">{pokemon.weight}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400 font-medium">Type:</span>
                  </div>
                </div>

                {/* Type Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {pokemon.types.map((type) => (
                    <span
                      key={type}
                      className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${getTypeColor(type)}`}
                    >
                      {type}
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-6 rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredPokemon.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No Pokémon found matching "{searchTerm}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pokemon;