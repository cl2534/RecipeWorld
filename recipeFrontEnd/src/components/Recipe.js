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
    maxWidth: 345,
    padding: 1,
    display: 'block',
    margin: '1 2px'
  },
  media: { // 16:9
    objectFit: 'cover',

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
    super(props) //recipe
  }

  // handleLike = () => {
  //   fetch('', {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type':'application/json'
  //     },
  //     body: JSON.stringify({likes: this.props.recipe.likes + 1})
  //   }).then(res => res.json()).then(json => this.setState({
  //     likes: this.props.post.likes++,
  //     likedAlready: true
  //   }))
  // }

  render() {
    const {classes} = this.props;
    return (
      <Grid item style = {{margin: "auto 8px"}}>
        <Card className={classes.card}>
          <User className="user-blurb" userId = {this.props.recipe.user} />
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
