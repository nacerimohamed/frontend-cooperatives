import { ShieldCheck, Users, AlertCircle, Check } from 'lucide-react';
import { cooperatives } from '../../data/mockData';

const AdminDashboard = () => {
    const pendingCoops = cooperatives.filter(c => !c.verified && c.id === 4); // Mock data has id 4 as unverified
    const verifiedCoops = cooperatives.filter(c => c.verified);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Tableau de bord Administrateur</h1>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Coopératives</h3>
                        <Users className="text-emerald-500" />
                    </div>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white">{cooperatives.length}</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">En attente</h3>
                        <AlertCircle className="text-amber-500" />
                    </div>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white">{pendingCoops.length}</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Vues</h3>
                        <ShieldCheck className="text-blue-500" />
                    </div>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white">12.5k</p>
                </div>
            </div>

            {/* Pending Validation */}
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Demandes d'inscription en attente</h2>
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 overflow-hidden mb-12">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 text-xs uppercase">
                        <tr>
                            <th className="px-6 py-4 font-medium">Coopérative</th>
                            <th className="px-6 py-4 font-medium">Ville</th>
                            <th className="px-6 py-4 font-medium">Catégorie</th>
                            <th className="px-6 py-4 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                        {pendingCoops.length > 0 ? pendingCoops.map(coop => (
                            <tr key={coop.id}>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 rounded-lg bg-slate-100 overflow-hidden mr-3">
                                            <img src={coop.logo} alt="" className="h-full w-full object-cover" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-slate-900 dark:text-white">{coop.name}</div>
                                            <div className="text-xs text-slate-500">{coop.description.substring(0, 30)}...</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{coop.city}</td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded text-xs text-slate-600 dark:text-slate-300">{coop.category}</span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm mr-4">Approuver</button>
                                    <button className="text-red-500 hover:text-red-600 font-medium text-sm">Refuser</button>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="4" className="px-6 py-8 text-center text-slate-500">Aucune demande en attente.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* List Verified */}
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Coopératives Actives</h2>
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 text-xs uppercase">
                        <tr>
                            <th className="px-6 py-4 font-medium">Coopérative</th>
                            <th className="px-6 py-4 font-medium">Statut</th>
                            <th className="px-6 py-4 font-medium text-right">Produits</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                        {verifiedCoops.map(coop => (
                            <tr key={coop.id}>
                                <td className="px-6 py-4 text-slate-900 dark:text-white font-medium">{coop.name}</td>
                                <td className="px-6 py-4">
                                    <span className="flex items-center text-emerald-600 text-sm">
                                        <Check size={14} className="mr-1" /> Actif
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right text-slate-600 dark:text-slate-300">
                                    {coop.productsCount}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDashboard;
