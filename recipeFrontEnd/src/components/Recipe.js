import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
// import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import User from "./User"
import { withRouter } from "react-router-dom";

const styles = theme => ({
  card: {
    width: 150
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: "chocolate"
  },
  "@media (min-width: 600px)": {
    card: {
      width: 600
    }
  }
});
class Recipe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
      anchorEl: null,
      currentUser: ""
    };
  }
  componentDidMount() {
    this.fetchUser()
  }

  fetchUser = () => {
    fetch(`api/getUsers/` + this.props.recipe.user)
    .then(res => res.json())
    .then(res => this.setState({
      currentUser: res.user
    }))
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  handleOpenPostMenu = e => {
   e.stopPropagation();
   this.setState({ anchorEl: e.currentTarget });
  };

 handleClosePostMenu = e => {
   this.setState({ anchorEl: null });
 };

 handleDeletePost = e => {
   e.stopPropagation();
   this.props.deletePostAction(this.props._id, this.props.history);
   this.setState({ anchorEl: null });
 };
  // renderAvatar = () => {
  //   const {classes} = this.props;
  //     return (
  //       <User userId = {this.props.recipe.user} avatar = {classes.avatar} recipeId = {this.props.recipe._id}/>
  //     )
  // }

  render() {
  const { classes } = this.props;
  const { anchorEl } = this.state;


  return (

    <React.Fragment>
      <Card className={classes.card}>
        <CardActionArea>
          <CardHeader
            avatar= {
                    <Avatar aria-label="Post" className={classes.avatar}>
                      {this.state.currentUser.name}
                    </Avatar> }
            action={
              <IconButton> {/*Need to add delete function.*/}
                <MoreVertIcon
                  aria-owns={anchorEl ? "simple-menu" : null}
                  aria-haspopup="true"
                  onClick={this.handleDeletePost}
                />
              </IconButton>
            }
            title= {this.props.recipe.name}
          />
        {this.props.recipe.picture_url ? (
            <CardMedia
              className={classes.media}
              image={this.props.recipe.picture_url}
              title= {this.props.recipe.name}
            />
          ) : null}
          <CardContent>
            <Typography component="p">
              {this.props.recipe.description}
            </Typography>

          </CardContent>

        </CardActionArea>
        <CardActions className={classes.actions} disableActionSpacing>
          <Typography variant = "subtitle2" gutterBottom>
            Created By {this.state.currentUser.name}
          </Typography>
          {/* TODO: stretch goal share feature
          <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton> */}
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}

            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph variant="body2">
              {this.props.comments ? this.props.comments.length : 0} Comments
            </Typography>

          </CardContent>
        </Collapse>
      </Card>
    </React.Fragment>
  );
}
}
export default withRouter((withStyles(styles)(Recipe)));
