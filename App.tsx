
import React, { useState, useEffect, useMemo } from 'react';
import { recipes as initialRecipes, guideSections } from './data';
import { Recipe, Category, ViewState, ShoppingItem } from './types';
import { RecipeCard } from './RecipeCard';
import { RecipeModal } from './RecipeModal';
import { ShoppingModal } from './ShoppingModal';
import { Search, BookOpen, Utensils, Heart, Menu, X, Beef, Sun, Moon, ShoppingCart, Refrigerator, ShieldCheck, Mail } from 'lucide-react';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewState>('recipes');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'Todos'>('Todos');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  
  // URL and Storage Handling on Load
  useEffect(() => {
    // 1. Favorites - Robust Error Handling
    try {
      const savedFavs = localStorage.getItem('carnivoreFavorites');
      if (savedFavs) {
        setFavorites(JSON.parse(savedFavs));
      }
    } catch (error) {
      console.error("Erro ao carregar favoritos:", error);
      localStorage.removeItem('carnivoreFavorites'); // Reset corrupted data
    }

    // 2. Shopping List - Robust Error Handling
    try {
      const savedList = localStorage.getItem('carnivoreShoppingList');
      if (savedList) {
        setShoppingList(JSON.parse(savedList));
      }
    } catch (error) {
      console.error("Erro ao carregar lista de compras:", error);
      localStorage.removeItem('carnivoreShoppingList'); // Reset corrupted data
    }

    // 3. Theme - Robust Error Handling
    try {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
      if (savedTheme) {
        setTheme(savedTheme);
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      }
    } catch (error) {
      console.error("Erro ao carregar tema:", error);
    }

    // 4. URL Handling (Shareable Links)
    try {
      const params = new URLSearchParams(window.location.search);
      const recipeId = params.get('recipe');
      if (recipeId) {
        const recipeToOpen = initialRecipes.find(r => r.id === recipeId);
        if (recipeToOpen) {
          setSelectedRecipe(recipeToOpen);
        }
      }
    } catch (error) {
      console.error("Erro ao processar URL:", error);
    }
    
    // Check if disclaimer was already accepted
    try {
      const disclaimerAccepted = localStorage.getItem('disclaimerAccepted');
      if (disclaimerAccepted) {
        setShowDisclaimer(false);
      }
    } catch (error) {
      // Ignore
    }
  }, []);

  // Update URL when recipe opens/closes
  useEffect(() => {
    try {
      if (selectedRecipe) {
        const url = new URL(window.location.href);
        url.searchParams.set('recipe', selectedRecipe.id);
        window.history.pushState({}, '', url.toString());
      } else {
        const url = new URL(window.location.href);
        url.searchParams.delete('recipe');
        window.history.pushState({}, '', url.toString());
      }
    } catch (e) {
      console.error("Erro ao atualizar URL", e);
    }
  }, [selectedRecipe]);

  // Persist Shopping List
  useEffect(() => {
    try {
      localStorage.setItem('carnivoreShoppingList', JSON.stringify(shoppingList));
    } catch (e) {
      console.error("Erro ao salvar lista", e);
    }
  }, [shoppingList]);

  // Apply Theme
  useEffect(() => {
    try {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', theme);
    } catch (e) {
      console.error("Erro ao salvar tema", e);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const acceptDisclaimer = () => {
    try {
      localStorage.setItem('disclaimerAccepted', 'true');
    } catch (e) {
      console.error("Erro ao salvar aceite", e);
    }
    setShowDisclaimer(false);
  };

  // Logic: Add to Shopping List
  const addToShoppingList = (ingredients: string[], recipeTitle: string) => {
    const newItems: ShoppingItem[] = ingredients.map(text => ({
      id: Math.random().toString(36).substr(2, 9),
      text,
      checked: false,
      recipeTitle
    }));
    setShoppingList(prev => [...prev, ...newItems]);
  };

  const toggleShoppingItem = (id: string) => {
    setShoppingList(prev => prev.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const removeShoppingItem = (id: string) => {
    setShoppingList(prev => prev.filter(item => item.id !== id));
  };

  const clearShoppingList = () => {
    if (confirm('Tem a certeza que quer apagar toda a lista?')) {
      setShoppingList([]);
    }
  };

  // Toggle favorite logic
  const toggleFavorite = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const newFavorites = favorites.includes(id) 
      ? favorites.filter(fid => fid !== id)
      : [...favorites, id];
    setFavorites(newFavorites);
    try {
      localStorage.setItem('carnivoreFavorites', JSON.stringify(newFavorites));
    } catch (e) {
      console.error("Erro ao salvar favoritos", e);
    }
  };

  // Filter recipes logic
  const filteredRecipes = useMemo(() => {
    let result = initialRecipes.map(r => ({
      ...r,
      isFavorite: favorites.includes(r.id)
    }));

    if (activeView === 'favorites') {
      result = result.filter(r => r.isFavorite);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(r => 
        r.title.toLowerCase().includes(q) || 
        r.ingredients.some(i => i.toLowerCase().includes(q))
      );
    }

    if (selectedCategory !== 'Todos' && activeView !== 'favorites') {
      result = result.filter(r => r.category === selectedCategory);
    }

    return result;
  }, [searchQuery, selectedCategory, favorites, activeView]);

  const categories = ['Todos', ...Object.values(Category)];

  // Helper for Sidebar Link
  const NavLink = ({ view, icon: Icon, label, badge }: { view: ViewState, icon: any, label: string, badge?: number }) => (
    <button
      onClick={() => {
        setActiveView(view);
        setIsSidebarOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      className={`flex items-center gap-3 w-full p-3 rounded-lg transition-colors relative ${
        activeView === view 
          ? 'bg-carnivore-600 text-white shadow-md' 
          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
      }`}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
      {badge !== undefined && badge > 0 && (
        <span className="absolute right-3 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </button>
  );

  // Pantry Filters
  const applyPantryFilter = (ingredient: string) => {
    setSearchQuery(ingredient);
    setActiveView('recipes');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300 flex flex-col">
      
      {/* MEDICAL DISCLAIMER MODAL (Mandatory for Hotmart) */}
      {showDisclaimer && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-md animate-in fade-in duration-500">
          <div className="bg-white dark:bg-slate-800 w-full max-w-lg rounded-3xl shadow-2xl p-8 border-t-4 border-carnivore-600 relative animate-in zoom-in-95 duration-500">
            <div className="flex flex-col items-center text-center space-y-6">
              
              <div className="w-16 h-16 bg-carnivore-100 dark:bg-carnivore-900/30 rounded-full flex items-center justify-center">
                <ShieldCheck className="text-carnivore-600 w-8 h-8" />
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Aviso Importante de Saúde</h2>
                <div className="text-slate-600 dark:text-slate-300 text-sm text-left bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 max-h-60 overflow-y-auto custom-scrollbar leading-relaxed">
                  <p className="mb-3 font-bold">Por favor, leia com atenção antes de prosseguir:</p>
                  <p className="mb-2">1. Este produto é apenas para fins informativos e educacionais. Não substitui aconselhamento médico profissional, diagnóstico ou tratamento.</p>
                  <p className="mb-2">2. Sempre consulte o seu médico ou outro profissional de saúde qualificado antes de iniciar qualquer nova dieta, especialmente se tiver condições médicas pré-existentes.</p>
                  <p className="mb-2">3. Os resultados variam de pessoa para pessoa e não são garantidos.</p>
                  <p>Ao continuar, você confirma que leu e compreendeu este aviso.</p>
                </div>
              </div>

              <button 
                onClick={acceptDisclaimer}
                className="w-full py-4 bg-carnivore-600 hover:bg-carnivore-500 text-white font-bold rounded-xl shadow-lg shadow-carnivore-600/30 transition-all hover:-translate-y-1"
              >
                Concordo e Quero Começar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-white dark:bg-slate-800 shadow-sm sticky top-0 z-30 border-b border-slate-100 dark:border-slate-700">
        <div className="flex items-center gap-2">
          <Beef className="text-carnivore-600" size={28} />
          <h1 className="font-bold text-lg tracking-tight text-slate-800 dark:text-white">80+ Receitas Keto</h1>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button 
            onClick={() => setActiveView('shopping')}
            className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 relative"
          >
            <ShoppingCart size={24} />
            {shoppingList.length > 0 && (
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-white dark:border-slate-800"></span>
            )}
          </button>
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Layout Grid */}
      <div className="flex max-w-7xl mx-auto flex-1 w-full">
        
        {/* Sidebar */}
        <aside className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 transform transition-transform duration-300 lg:translate-x-0 lg:static lg:h-screen lg:sticky lg:top-0
          ${isSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
        `}>
          <div className="p-6 h-full flex flex-col">
            <div className="hidden lg:flex items-center gap-2 mb-8">
              <div className="bg-carnivore-600 p-2 rounded-lg shadow-lg shadow-carnivore-500/20">
                <Beef className="text-white" size={24} />
              </div>
              <div>
                <h1 className="font-bold text-xl leading-none text-slate-900 dark:text-white">80+ Receitas</h1>
                <h1 className="font-bold text-xl leading-none text-carnivore-600">Keto Carnívoras</h1>
              </div>
            </div>

            <div className="flex justify-between items-center lg:hidden mb-6">
              <span className="font-bold text-lg text-slate-900 dark:text-white">Menu</span>
              <button onClick={() => setIsSidebarOpen(false)} className="text-slate-500 dark:text-slate-400">
                <X size={24} />
              </button>
            </div>

            <nav className="space-y-2 flex-1">
              <NavLink view="recipes" icon={Utensils} label="Receitas" />
              <NavLink view="favorites" icon={Heart} label="Favoritos" />
              <NavLink view="shopping" icon={ShoppingCart} label="Lista de Compras" badge={shoppingList.length} />
              <NavLink view="guide" icon={BookOpen} label="Curso & Guia" />
            </nav>

            <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-700 space-y-4">
              {/* Desktop Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-600"
              >
                <span className="text-sm font-medium">Modo {theme === 'dark' ? 'Escuro' : 'Claro'}</span>
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <div className="bg-carnivore-50 dark:bg-carnivore-900/20 p-4 rounded-xl border border-carnivore-100 dark:border-carnivore-900/30">
                <p className="text-xs font-semibold text-carnivore-800 dark:text-carnivore-200 uppercase mb-2">Dica do Dia</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 italic">"Comer carne é natural. Complicar é opcional."</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8 min-h-screen flex flex-col">
          
          {/* Header Area */}
          <div className="mb-8">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-2 text-slate-900 dark:text-white tracking-tight">
              {activeView === 'recipes' && 'Catálogo de Receitas'}
              {activeView === 'favorites' && 'Minhas Favoritas'}
              {activeView === 'guide' && 'Curso Completo'}
              {activeView === 'shopping' && 'Lista de Compras'}
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              {activeView === 'recipes' && `Explora ${filteredRecipes.length} receitas carnívoras testadas.`}
              {activeView === 'favorites' && 'A tua coleção pessoal de pratos aprovados.'}
              {activeView === 'guide' && 'Aprende os fundamentos para o sucesso.'}
              {activeView === 'shopping' && 'Organiza a tua ida ao supermercado.'}
            </p>
          </div>

          {/* Render based on view */}
          {activeView === 'guide' ? (
            <div className="space-y-6 max-w-3xl">
              {guideSections.map((section) => (
                <div key={section.id} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 transition-colors">
                  <h3 className="text-xl font-bold mb-3 text-carnivore-600 dark:text-carnivore-400">{section.title}</h3>
                  <div className="prose dark:prose-invert text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {/* Search and Filter */}
              <div className="sticky top-[73px] lg:top-8 z-20 bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-md py-4 mb-6 space-y-4 transition-colors rounded-b-2xl">
                <div className="relative max-w-xl">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input 
                    type="text" 
                    placeholder="Procurar receitas, ingredientes..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-carnivore-500 focus:border-transparent outline-none transition-all shadow-sm"
                  />
                </div>

                {/* Pantry / Quick Filters - ONLY SHOW IN RECIPES VIEW */}
                {activeView === 'recipes' && (
                  <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar">
                    <div className="flex items-center gap-1 text-slate-400 text-xs font-bold uppercase shrink-0 mr-2">
                      <Refrigerator size={14} /> Frigorífico:
                    </div>
                    {['Ovos', 'Bacon', 'Carne Picada', 'Frango', 'Manteiga'].map(item => (
                      <button
                        key={item}
                        onClick={() => applyPantryFilter(item)}
                        className="whitespace-nowrap px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium hover:bg-carnivore-100 dark:hover:bg-carnivore-900/30 hover:text-carnivore-700 dark:hover:text-carnivore-300 border border-slate-200 dark:border-slate-700 transition-colors"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}

                {/* Category Filters - ONLY SHOW IN RECIPES VIEW */}
                {activeView === 'recipes' && (
                  <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat as any)}
                        className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          selectedCategory === cat
                            ? 'bg-carnivore-600 text-white shadow-lg shadow-carnivore-600/20 scale-105'
                            : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-carnivore-300 hover:text-carnivore-600 dark:hover:text-carnivore-400'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Grid */}
              {activeView !== 'shopping' && (
                filteredRecipes.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-10">
                    {filteredRecipes.map(recipe => (
                      <RecipeCard 
                        key={recipe.id} 
                        recipe={recipe} 
                        onClick={() => setSelectedRecipe(recipe)}
                        onToggleFavorite={(e) => toggleFavorite(e, recipe.id)}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <div className="bg-slate-100 dark:bg-slate-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                      <Utensils className="text-slate-400" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300">Nenhuma receita encontrada</h3>
                    <p className="text-slate-500 dark:text-slate-500 mt-2">Tenta ajustar os filtros ou a pesquisa para encontrares o que procuras.</p>
                  </div>
                )
              )}
            </>
          )}

        </main>
      </div>

      {/* FOOTER (Essential for Hotmart Trust & Compliance) */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Keto Carnívora Premium</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                © {new Date().getFullYear()} Todos os direitos reservados.
              </p>
            </div>
            
            <div className="flex gap-6 text-xs text-slate-500 dark:text-slate-400">
              <a href="#" className="hover:text-carnivore-600 transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-carnivore-600 transition-colors">Política de Privacidade</a>
              <div className="flex items-center gap-1 cursor-pointer hover:text-carnivore-600 transition-colors">
                <Mail size={12} />
                <span>contato@ketocarnivoro.com</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
            <p className="text-[10px] text-slate-400 text-center leading-relaxed max-w-4xl mx-auto">
              AVISO LEGAL: As informações contidas neste produto digital são apenas para fins informativos e educacionais. 
              Este conteúdo não deve ser interpretado como aconselhamento médico, diagnóstico ou tratamento. 
              Os resultados obtidos podem variar de acordo com o indivíduo. Consulte sempre um profissional de saúde antes de iniciar qualquer dieta.
            </p>
          </div>
        </div>
      </footer>

      {/* Recipe Modal */}
      <RecipeModal 
        recipe={selectedRecipe} 
        onClose={() => setSelectedRecipe(null)}
        onAddToShoppingList={addToShoppingList}
      />

      {/* Shopping List Modal */}
      {activeView === 'shopping' && (
        <ShoppingModal 
          items={shoppingList}
          onToggleItem={toggleShoppingItem}
          onRemoveItem={removeShoppingItem}
          onClearList={clearShoppingList}
          onClose={() => setActiveView('recipes')}
        />
      )}

    </div>
  );
}

export default App;
