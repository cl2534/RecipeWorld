import React, {Component} from 'react';
import User from './User';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Image from 'react-image-resizer'
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
  card: {
    height: '300px',
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
  },
  media: { // 16:9
    paddingTop: '56.25%', // 16:9

  },
  actions: {
    display: 'flex'
  },
  root: {
    width: '100%'
  },
  cardContent: {
    flexGrow: 1,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },

});

class Recipe extends Component{
  constructor(props) {
    super(props)
  }

  renderAvatar = () => {
    const {classes} = this.props;
      return (
        <User userId = {this.props.recipe.user} avatar = {classes.avatar} recipeId = {this.props.recipe._id}/>
      )
  }

  render() {
    const {classes} = this.props;
    return (
      <div className = "card">
      <Grid item style = {{margin: "auto 8px"}}>
        <Card className={classes.card}>
          {this.renderAvatar()}
          <CardActionArea>
          <CardMedia table = "true"
            image = {this.props.recipe.picture_url}
            className={classes.media}
            
          />
        <CardContent className = {classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {this.props.recipe.name}
          </Typography>
          <Typography className = 'description'>
              {this.props.recipe.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            View Details
          </Button>
        </CardActions>
      </CardActionArea>
      </Card>
      </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(Recipe);
