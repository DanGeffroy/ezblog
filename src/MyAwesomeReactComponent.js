import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const MyAwesomeReactComponent = () => (
  <Card>
   <CardHeader
     title="URL Avatar"
     subtitle="Subtitle"
     avatar="https://images.unsplash.com/profile-1443951664260-3bd2d54fd875?dpr=1.25&auto=compress,format&fit=crop&w=64&h=64&q=80&cs=tinysrgb&crop=faces&bg=fff"
   />
   <CardMedia
     overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
   >
     <img src="https://images.unsplash.com/photo-1461353789837-8eb180f968d2?dpr=1.25&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg=" />
   </CardMedia>
   <CardTitle title="Card title" subtitle="Card subtitle" />
   <CardText>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
     Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
     Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
   </CardText>
   <CardActions>
     <FlatButton label="Action1" />
     <FlatButton label="Action2" />
   </CardActions>
 </Card>
);

export default MyAwesomeReactComponent;
