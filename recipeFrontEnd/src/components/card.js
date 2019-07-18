
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
