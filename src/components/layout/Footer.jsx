import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center space-x-2">
                            <div className="h-8 w-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                                C
                            </div>
                            <span className="text-xl font-bold text-white">CoopMa</span>
                        </Link>
                        <p className="text-sm leading-relaxed text-slate-400">
                            La première plateforme digitale dédiée à la promotion des coopératives marocaines. Découvrez l'authenticité de nos produits locaux.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="hover:text-emerald-400 transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-emerald-400 transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-emerald-400 transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="hover:text-emerald-400 transition-colors">Accueil</Link></li>
                            <li><Link to="/cooperatives" className="hover:text-emerald-400 transition-colors">Nos Coopératives</Link></li>
                            <li><Link to="/products" className="hover:text-emerald-400 transition-colors">Boutique</Link></li>
                            <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><Link to="/login" className="hover:text-emerald-400 transition-colors">Espace Membre</Link></li>
                            <li><Link to="/register-coop" className="hover:text-emerald-400 transition-colors">Inscrire une coopérative</Link></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Politique de confidentialité</a></li>
                            <li><a href="#" className="hover:text-emerald-400 transition-colors">Conditions d'utilisation</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                                <span className="text-sm">123 Avenue Mohammed V, Rabat, Maroc</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={20} className="text-emerald-500 shrink-0" />
                                <span className="text-sm">+212 5 22 33 44 55</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={20} className="text-emerald-500 shrink-0" />
                                <span className="text-sm">contact@coopma.ma</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} CoopMa. Tous droits réservés.</p>
                    <p className="mt-2 md:mt-0">Fait avec <span className="text-red-500">♥</span> au Maroc</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
