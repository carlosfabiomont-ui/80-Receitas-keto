import React from 'react';
import { ShoppingItem } from './types';
import { X, Trash2, Check, Copy, ShoppingCart } from 'lucide-react';

interface ShoppingModalProps {
  items: ShoppingItem[];
  onToggleItem: (id: string) => void;
  onRemoveItem: (id: string) => void;
  onClearList: () => void;
  onClose: () => void;
}

export const ShoppingModal: React.FC<ShoppingModalProps> = ({ 
  items, 
  onToggleItem, 
  onRemoveItem, 
  onClearList,
  onClose 
}) => {
  
  const copyToClipboard = () => {
    const text = items
      .map(i => `${i.checked ? '[x]' : '[ ]'} ${i.text} (${i.recipeTitle})`)
      .join('\n');
    navigator.clipboard.writeText(text);
    alert('Lista copiada para a área de transferência!');
  };

  const progress = items.length > 0 
    ? Math.round((items.filter(i => i.checked).length / items.length) * 100) 
    : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300" onClick={onClose} />
      
      <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col relative animate-in zoom-in-95 duration-300 max-h-[85vh]">
        
        {/* Header */}
        <div className="bg-carnivore-600 p-6 flex justify-between items-center text-white">
          <div className="flex items-center gap-3">
            <ShoppingCart size={28} />
            <div>
              <h2 className="text-2xl font-black">Lista de Compras</h2>
              <p className="text-carnivore-100 text-sm">{items.length} itens na lista</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Progress Bar */}
        {items.length > 0 && (
          <div className="h-2 bg-slate-100 dark:bg-slate-800 w-full">
            <div 
              className="h-full bg-green-500 transition-all duration-500" 
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {/* List Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-50 dark:bg-slate-900 custom-scrollbar">
          {items.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              <ShoppingCart size={48} className="mx-auto mb-4 opacity-30" />
              <p className="text-lg font-medium">A tua lista está vazia.</p>
              <p className="text-sm">Adiciona ingredientes a partir das receitas.</p>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map(item => (
                <li 
                  key={item.id} 
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                    item.checked 
                      ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900/50 opacity-70' 
                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-sm'
                  }`}
                >
                  <div 
                    className="flex items-center gap-4 flex-1 cursor-pointer"
                    onClick={() => onToggleItem(item.id)}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      item.checked 
                        ? 'bg-green-500 border-green-500 text-white' 
                        : 'border-slate-300 dark:border-slate-500'
                    }`}>
                      {item.checked && <Check size={14} strokeWidth={3} />}
                    </div>
                    <div>
                      <span className={`font-medium block text-slate-800 dark:text-slate-200 ${item.checked ? 'line-through decoration-slate-400' : ''}`}>
                        {item.text}
                      </span>
                      {item.recipeTitle && (
                        <span className="text-xs text-carnivore-600 dark:text-carnivore-400 block mt-0.5">
                          Receita: {item.recipeTitle}
                        </span>
                      )}
                    </div>
                  </div>
                  <button 
                    onClick={() => onRemoveItem(item.id)}
                    className="text-slate-400 hover:text-red-500 p-2 transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer Actions */}
        {items.length > 0 && (
          <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex gap-3">
            <button 
              onClick={onClearList}
              className="px-4 py-3 rounded-xl border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 font-bold text-sm transition-colors"
            >
              Limpar Tudo
            </button>
            <button 
              onClick={copyToClipboard}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 dark:bg-slate-700 text-white hover:bg-slate-800 dark:hover:bg-slate-600 font-bold text-sm transition-colors shadow-lg"
            >
              <Copy size={18} />
              Copiar para WhatsApp/Notas
            </button>
          </div>
        )}
      </div>
    </div>
  );
};