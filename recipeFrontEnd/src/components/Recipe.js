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
      anchorEl: null
    };
  }

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
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={this.handleClosePostMenu}
      >
        <MenuItem onClick={this.handleDeletePost}>Delete Post</MenuItem>
        <MenuItem onClick={this.handleAddFriend}>Add Friend</MenuItem>
        {/* <MenuItem onClick={this.handleFollowPost}>Follow Post</MenuItem> */}
      </Menu>
      <Card className={classes.card}>
        <CardActionArea
          className={classes.card}
          onClick={this.handleCardArea}
        >
          <CardHeader
            avatar={
              <Avatar aria-label="Post" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon
                  aria-owns={anchorEl ? "simple-menu" : null}
                  aria-haspopup="true"
                  onClick={this.handleOpenPostMenu}
                />
              </IconButton>
            }
            title= "hi"
          />
          {this.props.imgUrl ? (
            <CardMedia
              className={classes.media}
              image={this.props.picture_url}
              title="Dogs"
            />
          ) : null}
          <CardContent>
            <Typography component="p">

              "hi"
            </Typography>
            <Typography component="p">

            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Comment" >

          </IconButton>
          <IconButton aria-label="Like" >
            <FavoriteIcon/>
          </IconButton>
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
