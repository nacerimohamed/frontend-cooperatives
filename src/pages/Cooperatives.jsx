import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Star, ShieldCheck, Filter } from 'lucide-react';
import { cooperatives } from '../data/mockData';
import { motion } from 'framer-motion';

const Cooperatives = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', ...new Set(cooperatives.map(c => c.category))];

    const filteredCoops = cooperatives.filter(coop => {
        const matchesSearch = coop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            coop.city.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || coop.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Nos Coopératives Partenaires</h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    Explorez les meilleures coopératives du Maroc, découvrez leur histoire et leurs produits certifiés.
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
                        placeholder="Rechercher une coopérative, une ville..."
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
            {filteredCoops.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCoops.map((coop, index) => (
                        <motion.div
                            key={coop.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link to={`/cooperatives/${coop.id}`} className="group block bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                <div className="relative h-56 overflow-hidden">
                                    <div className="absolute inset-0 bg-slate-200 animate-pulse" /> {/* Placeholder while loading */}
                                    <img
                                        src={coop.cover}
                                        alt={coop.name}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                    <div className="absolute top-4 left-4 bg-white dark:bg-slate-900 p-2 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800">
                                        <img src={coop.logo} alt="Logo" className="w-10 h-10 object-cover rounded-lg" />
                                    </div>
                                    {coop.verified && (
                                        <div className="absolute top-4 right-4 bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center shadow-lg border border-emerald-400/50">
                                            <ShieldCheck size={14} className="mr-1.5" /> Vérifié
                                        </div>
                                    )}
                                </div>

                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="flex justify-between items-start mb-3">
                                        <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                                            {coop.category}
                                        </span>
                                        <div className="flex items-center">
                                            <Star size={16} className="text-amber-400 fill-amber-400 mr-1" />
                                            <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{coop.rating}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 transition-colors">
                                        {coop.name}
                                    </h3>

                                    <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm mb-4">
                                        <MapPin size={16} className="mr-1.5 text-slate-400" />
                                        {coop.city}
                                    </div>

                                    <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-6 flex-grow">
                                        {coop.description}
                                    </p>

                                    <div className="pt-5 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
                                        <span className="text-slate-500 text-sm flex items-center">
                                            <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
                                            {coop.productsCount} Produits disponibles
                                        </span>
                                        <span className="text-emerald-600 font-medium text-sm group-hover:underline">Visiter &rarr;</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
                    <Filter size={48} className="mx-auto text-slate-300 mb-4" />
                    <h3 className="text-lg font-medium text-slate-900 dark:text-white">Aucune coopérative trouvée</h3>
                    <p className="text-slate-500">Essayez de modifier vos filtres ou votre recherche.</p>
                    <button
                        onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                        className="mt-4 text-emerald-600 font-medium hover:text-emerald-700"
                    >
                        Réinitialiser les filtres
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cooperatives;
