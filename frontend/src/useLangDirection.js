const rtlLanguages = [
    "ar", "arc", "ckb", "dv", "fa", "glk", "he", "ku", "mzn",
    "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"
  ];

    function useLangDirection() {

    const lang = document.documentElement.lang;
    const isRTL = rtlLanguages.includes(lang);
    if (isRTL) {
      document.body.dir = "rtl";
    } else {
      document.body.dir = "ltr";
    }

    return (
        document.body.dir
    )
  }

  export default useLangDirection