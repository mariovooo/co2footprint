import { Box, Container, Grid } from '@mui/material';
import CustomTable from '../components/CustomTable'
import Emissionen from '../data/emissionen.json'
import CustomCard from '../components/CustomCard';
import BoltIcon from '@mui/icons-material/Bolt';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import FactoryIcon from '@mui/icons-material/Factory';
import RecyclingIcon from '@mui/icons-material/Recycling';
import CategoryIcon from '@mui/icons-material/Category';
import HeaderImage from '../components/HeaderImage';

function Home() {

    return (
        <>
            <Grid container spacing={4}>
                <HeaderImage url="./factory.jpg" title="Unser CO2-Fußabdruck und der Klimawandel" filter={true} />
                <Container>
                    <Box className="text">
                        <h2>Welche Länder und Unternehmen sind die größten Treibhausgasemittenten?</h2>
                        <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </p>
                    </Box>
                </Container>
                <Container>
                    <Box className="text">
                        <h2>Ausstoß (in Millionen Tonnen CO2)</h2>
                        <CustomTable data={Emissionen} />
                    </Box>
                </Container>
                <Grid container spacing={4} sx={{ mt: 4, mb: 4 }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            component="img"
                            sx={{
                                width: "100%",
                                maxHeight: { xs: 480, md: 720 },
                                maxWidth: { xs: 720, md: 1280 },
                            }}
                            alt="Green field"
                            src="./fieldstreet.jpg"
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Container>
                            <div className="text">
                                <h2>Was ist der CO2-Fußabdruck?</h2>
                                <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                </p>
                            </div>
                        </Container>
                    </Grid>
                </Grid>

                <Container>
                    <h2>Sektoren</h2>
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <CustomCard title="Energie" text="Dies ist ein informativer Text innerhalb der Card." icon={BoltIcon} />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <CustomCard title="Landwirtschaft" text="Dies ist ein informativer Text innerhalb der Card." icon={AgricultureIcon} />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <CustomCard title="Industrie" text="Dies ist ein informativer Text innerhalb der Card." icon={FactoryIcon} />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <CustomCard title="Abfall" text="Dies ist ein informativer Text innerhalb der Card." icon={RecyclingIcon} />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <CustomCard title="Sonstige Sektoren" text="Dies ist ein informativer Text innerhalb der Card." icon={CategoryIcon} />
                        </Grid>
                    </Grid>
                </Container>
                <Container>
                    <div className="text">
                        <h2>Wer hat den größten CO2-Fußabdruck?</h2>
                        <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="text">
                        <h2>Wer ist besonders betroffen?</h2>
                        <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="text">
                        <h2>Was können wir tun?</h2>
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </Container>
            </Grid>
        </>
    )
}

export default Home;