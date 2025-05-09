import { Box } from '@mui/material';

function HeaderImage({ url,title,filter }) {

    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "50vh",
                    display: 'flex',
                    textAlign: 'center',
                    maxHeight: { xs: 480, md: 720, lg: 1080 },
                    maxWidth: { xs: 720, md: 1280, lg: 1920 },
                    backgroundImage:  `url(${url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
                className="headerImage"
                title="Photo: Myrabella / Wikimedia Commons"
                role="img"
                aria-label="Green field"
            >
                <Box className="headerImageOverlay"
                    sx={{
                        width: "100%",
                        alignContent: 'center',
                        color: '#fff',
                        backdropFilter: filter ? 'blur(3px) brightness(0.67)' : 'none',
                        fontSize: 48
                    }}>
                    {title}
                </Box>
            </Box>
        </>
    )
}

export default HeaderImage;