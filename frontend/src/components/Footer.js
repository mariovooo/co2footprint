import './Footer.css';
import { Button, Grid } from '@mui/material';
import LangButton from './LangButton';

function Footer() {
    return (
        <footer>
        <Grid container spacing={2}>
          <Grid size={12}>
            <div>
              <Button className='whiteTextButton' disableElevation>Impressum</Button>
              <Button className='whiteTextButton' disableElevation>Datenschutzerklärung</Button>
            </div>
          </Grid>
          <Grid size={12}>
            <LangButton langCode="en" langName="Englisch"/>
            <LangButton langCode="ar" langName="Arabisch"/>
          </Grid>
          <Grid size={12}>
            <span>© CO₂-Footprint by Mario Vogel</span>
          </Grid>
        </Grid>
      </footer>
    )
}

export default Footer;