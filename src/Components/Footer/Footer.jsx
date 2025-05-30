import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="w-full bg-red-600 text-white px-6 py-1  h-[15vh]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                    <h2 className="text-lg font-semibold mb-2">{t("contact_us")}</h2>
                    <p><a href="mailto:samvel197801@gmail.com">Email: samvel197801@gmail.com</a></p>
                    <p><a href="tel:+420 777 345 079">Phone: +420 777 345 079</a></p>
                    <p>Mon - Fri: 9:00 - 17:00</p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-2">{t("quick_links")}</h2>
                    <ul className="space-y-1">
                        <li><a href="/contact" className="hover:underline">Contact</a></li>
                        <li><a href="/privacyPolicy" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="/termsOfService" className="hover:underline">Terms of Service</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-2">{t("stay_connected")}</h2>
                    {/*<p>Follow us on social media for updates and behind-the-scenes content:</p>*/}
                    <div className="flex space-x-4 mt-2">
                        <a href="#" className="hover:underline">Facebook</a>
                        <a href="#" className="hover:underline">Instagram</a>
                        <a href="#" className="hover:underline">Twitter</a>
                    </div>
                    <div className="mt-2 text-center text-xs text-gray-200">
                        &copy; {new Date().getFullYear()} Karate. All rights reserved.
                    </div>
                </div>
            </div>


        </footer>
    );
};

export default Footer;
