import Button from '@mui/material/Button';

function LangButton({langCode,langName}) {
  const handleChangeLanguage = () => {
    document.documentElement.lang = langCode;
    window.location.reload();
    localStorage.setItem('lang', langCode);
    console.log(localStorage);
  };

  return (
    <Button
      className="whiteTextButton"
      disableElevation
      onClick={handleChangeLanguage}
    >
      {langName}
    </Button>
  );
}

export default LangButton;