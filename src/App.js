import React from 'react';
import CardItem from './CardItem'
import Title from './Title'
import data from './data'
import Box from '@material-ui/core/Box';

const App = () => {
return (
	<div>
		<Title />
	<Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
		{
		data.map(d => (
	<CardItem
	postTitle={d.postTitle} 
	postBody={d.postBody}
	postLink={d.postLink}
	postImg={d.postImg}
	/> 
		))
			}
		</Box>
	</div>
  )
}
export default App;