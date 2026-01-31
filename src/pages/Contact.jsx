import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Contactez-nous</h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    Une question ? Une suggestion ? Notre équipe est à votre écoute pour vous accompagner.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-emerald-600 text-white rounded-2xl p-8 sm:p-12 shadow-xl"
                >
                    <h2 className="text-2xl font-bold mb-8">Informations</h2>

                    <div className="space-y-8">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center shrink-0">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Téléphone</h3>
                                <p className="text-emerald-100 mt-1">+212 5 22 33 44 55</p>
                                <p className="text-emerald-100 text-sm">Lun-Ven de 9h à 18h</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center shrink-0">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Email</h3>
                                <p className="text-emerald-100 mt-1">contact@coopma.ma</p>
                                <p className="text-emerald-100 text-sm">Réponse sous 24h</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Adresse</h3>
                                <p className="text-emerald-100 mt-1">
                                    123 Avenue Mohammed V,<br />
                                    Rabat, Maroc
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white dark:bg-slate-800 rounded-2xl p-8 sm:p-12 shadow-sm border border-slate-100 dark:border-slate-700"
                >
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Nom</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-shadow" placeholder="Votre nom" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Prénom</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-shadow" placeholder="Votre prénom" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                            <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-shadow" placeholder="exemple@email.com" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                            <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-shadow resize-none" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                        </div>

                        <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center">
                            <Send size={20} className="mr-2" /> Envoyer le message
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
