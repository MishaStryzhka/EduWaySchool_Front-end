import { useTranslation } from 'react-i18next';

const ChangeLanguage = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            <h1>{t('welcome')}</h1>
            <p>{t('change_language')}:</p>
            <button onClick={() => changeLanguage('en')}>🇺🇸 English</button>
            <button onClick={() => changeLanguage('uk')}>🇺🇦 Українська</button>
            <button onClick={() => changeLanguage('ru')}>🇷🇺 Русский</button>
            <button onClick={() => changeLanguage('cs')}>🇨🇿 Čeština</button>
        </div>
    );
};

export default ChangeLanguage;
