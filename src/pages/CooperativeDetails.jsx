import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Star, ShieldCheck, Mail, Phone, ExternalLink } from 'lucide-react';
import { cooperatives, products } from '../data/mockData';
import { motion } from 'framer-motion';

const CooperativeDetails = () => {
    const { id } = useParams();
    const coop = cooperatives.find(c => c.id === parseInt(id));

    // If not found, standard not found UI (omitted for brevity, handled by simple return)
    if (!coop) return <div className="p-20 text-center">Coopérative non trouvée.</div>;

    const coopProducts = products.filter(p => p.coopId === coop.id);

    return (
        <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-20">
            {/* Header / Cover */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                <img src={coop.cover} alt={coop.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-md flex-shrink-0 bg-white">
                            <img src={coop.logo} alt="Logo" className="w-full h-full object-cover" />
                        </div>

                        <div className="flex-grow">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 uppercase tracking-wide">
                                            {coop.category}
                                        </span>
                                        {coop.verified && (
                                            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 flex items-center">
                                                <ShieldCheck size={12} className="mr-1" /> Vérifié
                                            </span>
                                        )}
                                    </div>
                                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{coop.name}</h1>
                                    <div className="flex items-center text-slate-600 dark:text-slate-400 gap-4 text-sm">
                                        <span className="flex items-center">
                                            <MapPin size={16} className="mr-1" /> {coop.city}
                                        </span>
                                        <span className="flex items-center">
                                            <Star size={16} className="mr-1 text-amber-500 fill-amber-500" /> {coop.rating} (120 avis)
                                        </span>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <button className="px-4 py-2 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-500/20">
                                        Contacter
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabs / Content */}
                    <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            <section>
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">À propos</h2>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    {coop.description}
                                    <br /><br />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Nos Produits ({coopProducts.length})</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {coopProducts.map((product) => (
                                        <div key={product.id} className="flex bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                                            <div className="w-20 h-20 rounded-lg overflow-hidden bg-white shrink-0">
                                                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="ml-4 flex-grow">
                                                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{product.name}</h4>
                                                <p className="text-xs text-slate-500 mb-2">{product.category}</p>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-emerald-600 font-bold">{product.price} DH</span>
                                                    <button className="text-xs bg-white text-slate-700 border border-slate-200 px-2 py-1 rounded hover:bg-slate-50">
                                                        Voir
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                                <h3 className="font-bold text-slate-900 dark:text-white mb-4">Informations de contact</h3>
                                <ul className="space-y-4 text-sm">
                                    <li className="flex items-center text-slate-600 dark:text-slate-400">
                                        <Phone size={18} className="mr-3 text-emerald-500" />
                                        +212 5 22 00 00 00
                                    </li>
                                    <li className="flex items-center text-slate-600 dark:text-slate-400">
                                        <Mail size={18} className="mr-3 text-emerald-500" />
                                        contact@{coop.slug}.ma
                                    </li>
                                    <li className="flex items-center text-slate-600 dark:text-slate-400">
                                        <ExternalLink size={18} className="mr-3 text-emerald-500" />
                                        www.{coop.slug}.ma
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-xl border border-amber-100 dark:border-amber-800/30">
                                <h3 className="font-bold text-amber-900 dark:text-amber-100 mb-2">Pourquoi cette coopérative ?</h3>
                                <p className="text-sm text-amber-800 dark:text-amber-200/80">
                                    Cette coopérative respecte les standards de qualité et contribue au développement durable de sa région.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CooperativeDetails;
