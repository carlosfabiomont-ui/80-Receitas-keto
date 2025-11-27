import React, { useState } from 'react';
import { Recipe } from './types';
import { Clock, Flame, Heart } from 'lucide-react';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
  onToggleFavorite: (e: React.MouseEvent) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick, onToggleFavorite }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      onClick={onClick}
      className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer group flex flex-col h-full"
    >
      <div className="h-48 bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
        {/* Placeholder while loading */}
        {!isLoaded && <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700 animate-pulse" />}

        {/* Image Layer */}
        <img 
          src={recipe.image}
          alt={recipe.title}
          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 relative z-10 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
        />
        
        {/* Favorite Button */}
        <div className="absolute top-2 right-2 z-20">
           <button 
            onClick={onToggleFavorite}
            className={`p-2 rounded-full ${recipe.isFavorite ? 'bg-red-500 text-white shadow-red-500/50' : 'bg-black/30 text-white hover:bg-red-500 hover:text-white'} transition-all shadow-sm backdrop-blur-md`}
           >
             <Heart size={16} fill={recipe.isFavorite ? "currentColor" : "none"} />
           </button>
        </div>
        
        {/* Category Badge */}
        <div className="absolute bottom-3 left-3 z-20">
          <span className="text-[10px] font-bold text-white uppercase tracking-widest bg-black/50 backdrop-blur-md px-2 py-1 rounded-md border border-white/20">
            {recipe.category}
          </span>
        </div>
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-2 leading-tight line-clamp-2">
          {recipe.title}
        </h3>
        
        <div className="mt-auto flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-700 pt-3">
          <div className="flex items-center gap-1.5">
            <Clock size={14} />
            <span>{recipe.prepTime}</span>
          </div>
          <div className="flex items-center gap-1.5 text-carnivore-600 dark:text-carnivore-400">
            <Flame size={14} />
            <span>{recipe.calories} kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};