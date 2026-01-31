import { useState } from 'react';
import { Search, ShoppingBag, Filter, ArrowUpRight } from 'lucide-react';
import { products, cooperatives } from '../data/mockData';
import { motion } from 'framer-motion';

const Products = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', ...new Set(products.map(p => p.category))];

    // Join product with coop info
    const enrichedProducts = products.map(product => {
        const coop = cooperatives.find(c => c.id === product.coopId);
        return { ...product, coop };
    });

    const filteredProducts = enrichedProducts.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (product.coop?.name || '').toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const handleWhatsAppOrder = (product) => {
        // Generate WhatsApp link
        // Message: Bonjour, je suis intéressé par votre produit [Nom]
        const message = `Bonjour, je suis intéressé par votre produit ${product.name} vu sur CoopMa.`;
        // Using a dummy phone number for demo or the coop's phone if available in data
        // For now, assuming a generic admin or coop number. Prompt said "WhatsApp -> redirection vers admin" OR "Coop has phone".
        // Prompt says: "Client ... Cliquer sur Bouton WhatsApp pour commander".
        // "Coopérative ... Téléphone / WhatsApp".
        // Let's assume we send to admin OR coop. Let's send to a placeholder number.
        window.open(`https://wa.me/212600000000?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Boutique Solidaire</h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    Des produits authentiques, directement du producteur au consommateur.
                </p>
            </div>

            {/* Filters & Search */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                <div className="relative w-full md:w-96">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Rechercher un produit..."
                        className="block w-full pl-10 pr-3 py-3 border border-slate-300 dark:border-slate-700 rounded-xl leading-5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm transition-shadow shadow-sm hover:shadow-md focus:shadow-md"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                    <Filter size={18} className="text-slate-500 mr-2 shrink-0" />
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === cat
                                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
                                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
                        >
                            <div className="relative aspect-square overflow-hidden bg-slate-100">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                {product.oldPrice && (
                                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
                                        Promo
                                    </div>
                                )}
                            </div>

                            <div className="p-4 flex-grow flex flex-col">
                                <div className="text-xs text-emerald-600 font-medium mb-1">{product.category}</div>
                                <h3 className="font-bold text-slate-900 dark:text-white mb-1 line-clamp-1" title={product.name}>{product.name}</h3>
                                <p className="text-xs text-slate-500 mb-3">{product.coop?.name}</p>

                                <div className="flex items-end justify-between mt-auto">
                                    <div className="flex flex-col">
                                        {product.oldPrice && (
                                            <span className="text-xs text-slate-400 line-through">{product.oldPrice} DH</span>
                                        )}
                                        <span className="text-lg font-bold text-emerald-600">{product.price} DH</span>
                                    </div>
                                    <button
                                        onClick={() => handleWhatsAppOrder(product)}
                                        className="p-2 bg-emerald-100 text-emerald-700 rounded-lg hover:bg-emerald-600 hover:text-white transition-colors"
                                        title="Commander via WhatsApp"
                                    >
                                        <ShoppingBag size={20} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <ShoppingBag size={48} className="mx-auto text-slate-300 mb-4" />
                    <h3 className="text-lg font-medium text-slate-900 dark:text-white">Aucun produit trouvé</h3>
                    <p className="text-slate-500">Essayez de modifier vos filtres.</p>
                </div>
            )}
        </div>
    );
};

export default Products;
