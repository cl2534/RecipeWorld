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

const styles = (theme) => ({
  card: {
    height: '100%',
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
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  }
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
      <Grid item style = {{margin: "auto 8px"}}>
        <Card className={classes.card}>
          {this.renderAvatar()}
          <CardActionArea>
          <CardMedia
            component="img"
            className={classes.media}
            table align = 'center'
          />
          <Image
            src= {this.props.recipe.picture_url}
            height={ 300 }
            width={ 300 }
          />
          <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {this.props.recipe.name}
          </Typography>
          <div className="meta">
            <span className="description"> {this.props.recipe.description}</span>
            <br />
          </div>
        </CardContent>
      </CardActionArea>
      </Card>
      </Grid>
    );
  }
}
export default withStyles(styles)(Recipe);
