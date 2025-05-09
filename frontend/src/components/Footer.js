import { Button, Grid } from '@mui/material';

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
            <span>© CO2-Footprint by Mario Vogel</span>
          </Grid>
        </Grid>
      </footer>
    )
}

export default Footer;