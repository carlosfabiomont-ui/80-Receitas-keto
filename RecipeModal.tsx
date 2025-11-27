
import React, { useState, useEffect } from 'react';
import { Recipe } from './types';
import { X, Clock, Flame, Lightbulb, ChefHat, Minus, Plus, ShoppingCart, Check } from 'lucide-react';

interface RecipeModalProps {
  recipe: Recipe | null;
  onClose: () => void;
  onAddToShoppingList: (ingredients: string[], recipeTitle: string) => void;
}

export const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, onClose, onAddToShoppingList }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [servings, setServings] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  
  useEffect(() => {
    if (recipe) {
      setIsLoaded(false);
      setServings(1); // Reset servings
      setAddedToCart(false);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [recipe]);

  if (!recipe) return null;

  // Helper to scale ingredient amounts
  const getScaledIngredient = (ingredient: string, scale: number) => {
    if (scale === 1) return ingredient;
    
    // Regex to find number at start of string (e.g. "2 Ovos", "1.5 kg", "1/2 cup")
    // This is a simple scaler that works for most standard formats in the data
    const match = ingredient.match(/^(\d+(?:[.,]\d+)?|\d+\/\d+)\s*(.*)/);
    
    if (match) {
      const numberPart = match[1];
      const restPart = match[2];
      
      let numericValue = 0;
      if (numberPart.includes('/')) {
        const [num, den] = numberPart.split('/').map(Number);
        numericValue = num / den;
      } else {
        numericValue = parseFloat(numberPart.replace(',', '.'));
      }

      // Format result (avoid long decimals)
      const scaledValue = numericValue * scale;
      const formattedValue = Number.isInteger(scaledValue) ? scaledValue : scaledValue.toFixed(1).replace('.0', '');
      
      return `${formattedValue} ${restPart}`;
    }
    
    return ingredient; // Return original if no number found
  };

  const handleAddToCart = () => {
    const scaledIngredients = recipe.ingredients.map(ing => getScaledIngredient(ing, servings));
    onAddToShoppingList(scaledIngredients, recipe.title);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300" onClick={onClose} />
      
      <div className="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col relative animate-in zoom-in-95 duration-300">
        
        {/* Header Image */}
        <div className="relative h-64 sm:h-80 shrink-0 bg-slate-900">
           {!isLoaded && <div className="absolute inset-0 bg-slate-800 animate-pulse z-0" />}
          
          <img 
            src={recipe.image}
            alt={recipe.title}
            className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsLoaded(true)}
          />
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/40 hover:bg-carnivore-600 text-white p-2.5 rounded-full backdrop-blur-md transition-all z-20 hover:rotate-90 duration-300"
          >
            <X size={24} />
          </button>
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent p-6 sm:p-8 pt-24">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-carnivore-600 text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg shadow-carnivore-600/30">
                {recipe.category}
              </span>
              {recipe.isFavorite && (
                <span className="flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/20">
                  <span className="text-red-400">♥</span> Favorita
                </span>
              )}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight drop-shadow-sm">{recipe.title}</h2>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 custom-scrollbar bg-slate-50 dark:bg-slate-900">
          
          {/* Stats Bar & Portion Control */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center text-center">
              <Clock className="text-carnivore-500 mb-1" size={20} />
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Tempo</span>
              <span className="font-bold text-slate-800 dark:text-slate-100">{recipe.prepTime}</span>
            </div>
            <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center text-center">
              <Flame className="text-orange-500 mb-1" size={20} />
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Calorias</span>
              <span className="font-bold text-slate-800 dark:text-slate-100">{recipe.calories * servings} kcal</span>
            </div>
            
            {/* Portion Calculator */}
            <div className="col-span-2 bg-carnivore-50 dark:bg-carnivore-900/20 p-3 rounded-2xl border border-carnivore-100 dark:border-carnivore-900/30 flex items-center justify-between px-6">
              <div className="flex flex-col">
                <span className="text-[10px] text-carnivore-800 dark:text-carnivore-300 uppercase font-bold tracking-wider">Porções</span>
                <span className="font-bold text-carnivore-900 dark:text-carnivore-100">
                  {servings} {servings === 1 ? 'Pessoa' : 'Pessoas'}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setServings(s => Math.max(1, s - 1))}
                  className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm text-slate-600 dark:text-slate-300 hover:bg-carnivore-200 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <button 
                  onClick={() => setServings(s => Math.min(12, s + 1))}
                  className="w-8 h-8 rounded-full bg-carnivore-600 flex items-center justify-center shadow-lg shadow-carnivore-600/30 text-white hover:bg-carnivore-500 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Ingredients Column */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 h-full flex flex-col">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 border-b border-slate-100 dark:border-slate-700 pb-3">
                  <div className="p-1.5 bg-carnivore-100 dark:bg-carnivore-900/30 rounded-lg">
                     <ChefHat className="text-carnivore-600" size={18} />
                  </div>
                  Ingredientes
                </h3>
                <ul className="space-y-4 mb-6 flex-1">
                  {recipe.ingredients.map((ing, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <div className="w-6 h-6 rounded-full border-2 border-slate-200 dark:border-slate-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-carnivore-500 transition-colors">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-500 group-hover:bg-carnivore-500 transition-colors" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-300 font-medium transition-all duration-300">
                        {getScaledIngredient(ing, servings)}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={handleAddToCart}
                  disabled={addedToCart}
                  className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                    addedToCart 
                      ? 'bg-green-500 text-white shadow-green-500/30' 
                      : 'bg-slate-900 dark:bg-slate-700 text-white hover:bg-slate-800 dark:hover:bg-slate-600 shadow-lg'
                  }`}
                >
                  {addedToCart ? (
                    <>
                      <Check size={18} /> Adicionado!
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={18} /> Adicionar à Lista
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Instructions Column */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                   <span className="w-8 h-1 bg-carnivore-500 rounded-full"></span>
                   Preparação
                </h3>
                <div className="space-y-6">
                  {recipe.instructions.map((inst, idx) => (
                    <div key={idx} className="flex gap-4 group">
                      <div className="flex flex-col items-center">
                        <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold shrink-0 border border-slate-200 dark:border-slate-700 group-hover:bg-carnivore-600 group-hover:text-white group-hover:border-carnivore-600 transition-all duration-300">
                          {idx + 1}
                        </span>
                        {idx !== recipe.instructions.length - 1 && (
                          <div className="w-0.5 h-full bg-slate-100 dark:bg-slate-800 my-2" />
                        )}
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed pt-0.5 pb-4">
                        {inst}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tips Section */}
              {recipe.tips && (
                <div className="bg-amber-50 dark:bg-amber-950/30 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/30 flex gap-4">
                  <div className="bg-amber-100 dark:bg-amber-900/50 p-3 rounded-full h-fit shrink-0">
                    <Lightbulb className="text-amber-600 dark:text-amber-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-900 dark:text-amber-400 uppercase tracking-wide text-sm mb-2">Dica do Chef</h4>
                    <p className="text-amber-800 dark:text-amber-200/80 leading-relaxed italic">
                      "{recipe.tips}"
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
