import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import imagenPala from '../img/softee.jpg'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="SOFTEE SPEED 3.0 ROYAL POWER"
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="194"
                image={imagenPala}
                alt="SOFTEE SPEED"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    esta es la pala speed tatatin
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Caracteristicas:</Typography>
                    <Typography paragraph>
                    Otra de las colecciones que aporta nuevos diseños es la colección Speed.
                    </Typography>
                    <Typography paragraph>
                    Sin lugar a dudas una gama de palas de alto nivel de juego que nuestra marca ha incorporado a su identidad desde
                    hace un par de temporadas y que sigue gustando a los jugadores más exigentes. 
                    </Typography>
                    <Typography paragraph>
                    Es una pala de potencia, para jugadores que buscan el máximo impulso de la pelota a la hora del juego.
                    </Typography>
                    <Typography>
                    Es una pala de potencia, para jugadores
                    que buscan el máximo impulso de la pelota a la hora del juego. Su acabado en relieve hexagonal aporta una mayor
                    precisión en los golpes. Las palas Speed son palas ligeras, fáciles de manipular y que se adaptan a las necesidades
                    de cada jugador. Cuentan con balance medio y un marco fabricado en carbono 100% de alta calidad.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
