import React from 'react';
import {useTranslation} from "react-i18next";

const Languages = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    }

    return (
        <div>
            <div className="bg-red-600">
                <h1>Tarberak 1</h1>
                <h1>{t('hello')}</h1>
                <p>{t('thank')}</p>
                <button
                    onClick={()=>{
                        changeLanguage('hy')
                    }}
                >Arm</button>
                <button
                    onClick={()=>{
                        changeLanguage('en')
                    }}
                >Eng</button>
            </div>
            <div
            className='bg-blue-600'>
            <h1>  Tarberak 2</h1>
                <p>
                    {t("welcome")}
                </p>

                <button
                    onClick={()=>{
                        changeLanguage('hy')
                    }}
                >Arm</button>
                <button
                    onClick={()=>{
                        changeLanguage('en')
                    }}
                >Eng</button>
            </div>

        </div>
    );
};

export default Languages;