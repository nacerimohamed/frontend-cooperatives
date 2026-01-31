import { Link } from 'react-router-dom';
import { Store, User, Mail, Lock, Phone, MapPin, Upload } from 'lucide-react';

const RegisterCoop = () => {
    return (
        <div className="bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Inscription Coopérative</h1>
                    <p className="mt-2 text-slate-600 dark:text-slate-400">
                        Rejoignez notre réseau et commencez à vendre vos produits en ligne.
                    </p>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-800">
                    <div className="bg-emerald-600 px-6 py-4">
                        <h3 className="text-white font-bold text-lg flex items-center">
                            <Store className="mr-2" size={20} /> Informations de la Coopérative
                        </h3>
                    </div>

                    <form className="p-8 space-y-8" onSubmit={(e) => e.preventDefault()}>
                        {/* Section 1: Info Coop */}
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Nom de la Coopérative</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Ex: Coopérative Toudarte" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Catégorie Principale</label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none">
                                        <option>Choisir une catégorie...</option>
                                        <option>Alimentaire</option>
                                        <option>Cosmétique</option>
                                        <option>Artisanat</option>
                                        <option>Agriculture</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Description</label>
                                <textarea rows="3" className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none resize-none" placeholder="Décrivez votre coopérative, son histoire et ses valeurs..."></textarea>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Ville / Région</label>
                                    <div className="flex">
                                        <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-slate-300 bg-slate-50 text-slate-500">
                                            <MapPin size={18} />
                                        </span>
                                        <input type="text" className="w-full px-4 py-3 rounded-r-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Agadir" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Logo</label>
                                    <div className="flex items-center justify-center w-full">
                                        <label className="flex flex-col items-center justify-center w-full h-12 border-2 border-slate-300 border-dashed rounded-lg cursor-pointer bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700">
                                            <div className="flex flex-row items-center pt-1 pb-1">
                                                <Upload className="w-5 h-5 text-slate-500 mr-2" />
                                                <p className="text-sm text-slate-500">Uploader le logo</p>
                                            </div>
                                            <input type="file" className="hidden" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="border-slate-200 dark:border-slate-700" />

                        {/* Section 2: Contact Info */}
                        <div>
                            <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center"><User className="mr-2 text-emerald-600" size={18} /> Responsable & Accès</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="email@coop.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Téléphone / WhatsApp</label>
                                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="+212 6..." />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Mot de passe</label>
                                    <input type="password" className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="••••••••" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Confirmer Mot de passe</label>
                                    <input type="password" className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="••••••••" />
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-emerald-500/30 text-lg">
                                Soumettre ma demande
                            </button>
                            <p className="text-center text-sm text-slate-500 mt-4">
                                Après inscription, votre compte sera en attente de validation par l'administrateur.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterCoop;
