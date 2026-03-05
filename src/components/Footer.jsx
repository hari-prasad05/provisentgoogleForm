import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-bg-soft pt-24 pb-12 border-t border-primary/10">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <div className="space-y-8">
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
                        <span className="text-2xl font-black text-gray-900 tracking-tight">Provisent <span className="text-primary italic">Edutech</span></span>
                    </div>
                    <p className="text-gray-600 font-medium leading-relaxed">
                        Leading the way in nationwide skill development and career guidance.
                    </p>
                    <div className="flex gap-4">
                        {[
                            { icon: Facebook, link: "https://www.facebook.com/profile.php?viewas=100000686899395&id=61588543630941" },
                            { icon: Linkedin, link: "https://www.linkedin.com/feed/?trk=sem-ga_campid.14650114788_asid.151761418507_crid.657403558733_kw.linkedin%20jobs_d.c_tid.kwd-1528692947_n.g_mt.e_geo.9182246" },
                            { icon: Instagram, link: "https://www.instagram.com/provisent_edutech/" },
                            { icon: Twitter, link: "https://x.com/provisent" }
                        ].map((social, i) => (
                            <a key={i} href={social.link} target="_blank" className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-black text-gray-900 mb-8">Quick Links</h4>
                    <ul className="space-y-4 font-bold text-gray-500 uppercase tracking-widest text-xs">
                        <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
                        <li><a href="#benefits" className="hover:text-primary transition-colors">Benefits</a></li>
                        <li><a href="https://www.provisent.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Main Website</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Apply</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-black text-gray-900 mb-8">Contact Us</h4>
                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <Mail className="text-primary flex-shrink-0" />
                            <span className="text-gray-600 font-medium">hrprovisentedutech@gmail.com</span>
                        </li>
                        <li className="flex gap-4">
                            <Phone className="text-primary flex-shrink-0" />
                            <span className="text-gray-600 font-bold">+91 82486 24427</span>
                        </li>
                        <li className="flex gap-4">
                            <MapPin className="text-primary flex-shrink-0" />
                            <a href="https://share.google/BowcV54Sf5Ulefj3b" target="_blank" className="text-gray-600 font-medium hover:text-primary">
                                Saravanampatti, Coimbatore, <br /> Tamil Nadu 641035
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="pt-12 border-t border-primary/10 text-center">
                <p className="text-gray-400 font-bold text-sm">
                    &copy; {new Date().getFullYear()} Provisent Edutech. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
