import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { cooperatives, products } from '../data/mockData';

const Home = () => {
    const featuredCoops = cooperatives.slice(0, 3);

    return (
        <div className="space-y-20 pb-20">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-slate-900 text-white py-24 sm:py-32">
                <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&h=1080&fit=crop')] bg-cover bg-center" />
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 font-medium text-sm mb-6 border border-emerald-500/30">
                            Plateforme nationale des coopératives
                        </span>
                        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight">
                            Découvrez l'authenticité <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                                Du Terroir Marocain
                            </span>
                        </h1>
                        <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-lg">
                            Soutenez les producteurs locaux et accédez directement aux produits uniques de nos régions. Une initiative pour valoriser le savoir-faire marocain.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <Link
                                to="/products"
                                className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2"
                            >
                                Explorer la boutique <ArrowRight size={18} />
                            </Link>
                            <Link
                                to="/register-coop"
                                className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium rounded-xl transition-all flex items-center justify-center"
                            >
                                J'ai une coopérative
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Pourquoi choisir CoopMa ?</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Notre plateforme garantit une relation directe et transparente entre les coopératives et les consommateurs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6">
                            <ShieldCheck size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Produits Certifiés</h3>
                        <p className="text-slate-600 dark:text-slate-300">
                            Toutes nos coopératives sont vérifiées et certifiées pour garantir l'authenticité des produits.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center text-amber-600 dark:text-amber-400 mb-6">
                            <Users size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Commerce Équitable</h3>
                        <p className="text-slate-600 dark:text-slate-300">
                            100% des revenus vont directement aux coopératives. Soutenez l'économie locale et sociale.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-xl flex items-center justify-center text-teal-600 dark:text-teal-400 mb-6">
                            <Star size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Qualité Premium</h3>
                        <p className="text-slate-600 dark:text-slate-300">
                            Une sélection rigoureuse des meilleurs produits du terroir marocain.
                        </p>
                    </div>
                </div>
            </div>

            {/* Featured Cooperatives */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Coopératives en vedette</h2>
                        <p className="text-slate-600 dark:text-slate-400">Découvrez nos partenaires les plus populaires</p>
                    </div>
                    <Link to="/cooperatives" className="hidden sm:flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
                        Voir tout <ArrowRight size={16} className="ml-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredCoops.map((coop) => (
                        <Link key={coop.id} to={`/cooperatives/${coop.id}`} className="group block bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300">
                            <div className="relative h-48 overflow-hidden">
                                <img src={coop.cover} alt={coop.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-4 left-4 bg-white dark:bg-slate-900 p-2 rounded-lg shadow-md">
                                    <img src={coop.logo} alt="Logo" className="w-8 h-8 object-cover rounded" />
                                </div>
                                {coop.verified && (
                                    <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs px-2 py-1 rounded-full flex items-center shadow-lg">
                                        <ShieldCheck size={12} className="mr-1" /> Vérifié
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide mb-1">{coop.category}</p>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">{coop.name}</h3>
                                    </div>
                                    <div className="flex items-center bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded-lg">
                                        <Star size={14} className="text-amber-500 mr-1 fill-amber-500" />
                                        <span className="text-sm font-bold text-amber-700 dark:text-amber-400">{coop.rating}</span>
                                    </div>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-4">
                                    {coop.description}
                                </p>
                                <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center text-sm text-slate-500">
                                    <span>{coop.city}</span>
                                    <span>{coop.productsCount} Produits</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-8 text-center sm:hidden">
                    <Link to="/cooperatives" className="inline-flex items-center text-emerald-600 font-medium">
                        Voir toutes les coopératives <ArrowRight size={16} className="ml-1" />
                    </Link>
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-emerald-600 rounded-3xl p-8 sm:p-16 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] hover:opacity-20 transition-opacity"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Vous gérez une coopérative ?</h2>
                        <p className="text-emerald-100 max-w-2xl mx-auto text-lg mb-8">
                            Rejoignez CoopMa aujourd'hui et donnez à vos produits la visibilité qu'ils méritent. Inscription gratuite et simplifiée.
                        </p>
                        <Link to="/register-coop" className="inline-block px-8 py-4 bg-white text-emerald-600 font-bold rounded-xl hover:bg-emerald-50 transition-colors shadow-xl">
                            Créer mon compte vendeur
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
