import { Plus, Package, Eye, ShoppingBag } from 'lucide-react';
import { products } from '../../data/mockData';

const CoopDashboard = () => {
    // Simulate logged in coop (ID 1: Toudarte)
    const myProducts = products.filter(p => p.coopId === 1);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Mon Espace Coopérative</h1>
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg flex items-center shadow-lg shadow-emerald-500/20 transition-all">
                    <Plus size={20} className="mr-2" /> Nouveau Produit
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Produits en ligne</h3>
                        <Package className="text-emerald-500" />
                    </div>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white">{myProducts.length}</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Vues du profil</h3>
                        <Eye className="text-blue-500" />
                    </div>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white">1,234</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Clics WhatsApp</h3>
                        <ShoppingBag className="text-amber-500" />
                    </div>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white">45</p>
                </div>
            </div>

            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Mes Produits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {myProducts.map(product => (
                    <div key={product.id} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 overflow-hidden flex flex-col">
                        <div className="h-48 overflow-hidden relative">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                            <div className="absolute top-2 right-2 flex space-x-1">
                                <button className="p-1.5 bg-white/90 rounded-lg text-slate-600 hover:text-emerald-600 shadow-sm">
                                    <span className="sr-only">Modifier</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                </button>
                            </div>
                        </div>
                        <div className="p-4 flex-grow">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-slate-900 dark:text-white">{product.name}</h3>
                                <span className="font-bold text-emerald-600">{product.price} DH</span>
                            </div>
                            <p className="text-sm text-slate-500 mb-4">{product.category}</p>
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-700 flex justify-between text-xs text-slate-500">
                            <span>Modifié il y a 2j</span>
                            <span className="text-emerald-600 font-medium">Actif</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoopDashboard;
