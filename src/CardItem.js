import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
	root: {
	  minWidth: 275,
	  width: 360,
	  padding: 5,
	  margin: 20,
	  borderRadius: 10,
	},
	title: {
	  fontSize: 28,
	},
	pos: {
	  marginBottom: 12,
	},
	body: {
		textAlign: 'left',
	}
	// media: {
	// 	height: 540,
	// }
  });
export default function CardItem(props) {
	const classes = useStyles();
	return (
		<Card className={classes.root} variant="outlined" >
		 {/* <CardMedia
          className={classes.media}
          image={props.postImg}
          title="Contemplative Reptile"
        /> */}
		<CardContent>
		  <Typography className={classes.title} color="textSecondary" gutterBottom style={{fontFamily: 'Roboto Mono'}}>
			{props.postTitle}
		  </Typography>
		  <Typography variant="p" component="p" className={classes.body} style={{fontFamily: 'Roboto Mono', lineHeight: 1.5}}>
			{props.postBody}
		  </Typography>
				<Typography variant="body2" component="p">
					<br />
			<i>{props.postQuote}</i>
		  </Typography>
		</CardContent>
		<CardActions>
		<Button size="small" href={props.postLink} target="_blank">View</Button>
		</CardActions>
		</Card>
	);
  }
