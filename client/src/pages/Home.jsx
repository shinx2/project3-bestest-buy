import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//material-ui imports
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";

//To configure material-ui
const useStyles = makeStyles({
    root: {
        maxWidth: 300,
    },
    media: {
        height: 200,
    },
});

export default function Home() {
    const [Category, setCategory] = useState([]);
    const [categories, setCategories] = useState({});
    useEffect(() => {
        axios.get("/productsbackend").then((res) => {
            console.log(res.data);
            setCategory(res.data);
        }).catch((error) => {
            console.log(error);
        })
    }, []);
    const handleClick = (event) => {
        event.preventDefault();
        console.log("Go to category page");
    }
    const classes = useStyles();

    return (
        <>
            <h4>Your shopping spree starts now.</h4>
            <Button>Shop now</Button>

            <Grid container spacing={4} justify="center">
                {Category.map((categories) => {
                    return (
                        <Grid item sm={4} md={3} >
                            <Card className={classes.root}>
                                <CardActionArea onClick={handleClick}>
                                    <Link to={`/products/${categories.category}`} >
                                        <CardMedia
                                            className={classes.media}
                                            image="https://i.ibb.co/rtTVqkd/b5ccba14af09af98586d57eafeed9563.jpg"
                                            title={categories.category}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {categories.category}
                                            </Typography>
                                        </CardContent>
                                    </Link>
                                    <CardActions>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
            <Button>Scroll up</Button>
        </>
    )
}
