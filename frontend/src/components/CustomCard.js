import { Card, Box, Typography, CardContent } from '@mui/material';

function CustomCard ({ title, text, icon: IconComponent }) {

    return (
        <Card sx={{ maxWidth: 400, display: 'flex', alignItems: 'center', padding: 2 }}>
        <Box sx={{ marginRight: 2 }}>
          <IconComponent color="primary" fontSize="large" />
        </Box>
        <CardContent>
          <Typography variant="h6" component="div">{title}</Typography>
          <Typography variant="body2" color="text.secondary">{text}</Typography>
        </CardContent>
      </Card>
    )
}

export default CustomCard;