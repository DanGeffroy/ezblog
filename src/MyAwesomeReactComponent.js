import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Markdown from 'react-remarkable';

var input = `An h1 header
============

Paragraphs are separated by a blank line.

2nd paragraph. *Italic*, **bold**, and "monospace". Itemized lists
look like:

  * this one
  * that one
  * the other one

Note that --- not considering the asterisk --- the actual text
content starts at 4-columns in.

> Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.

Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., "it's all
in chapters 12--14"). Three dots ... will be converted to an ellipsis.
Unicode is supported. ☺



An h2 header
------------

Here's a numbered list:

 1. first item
 2. second item
 3. third item

Note again how the actual text starts at 4 columns in (4 characters
from the left side). Here's a code sample:

    # Let me re-iterate ...
    for i in 1 .. 10 { do-something(i) }

As you probably guessed, indented 4 spaces. By the way, instead of
indenting the block, you can use delimited blocks, if you like:

~~~
define foobar() {
    print "Welcome to flavor country!";
}
~~~

(which makes copying & pasting easier). You can optionally mark the
delimited block for Pandoc to syntax highlight it:

~~~python
import time
# Quick, count to ten!
for i in range(10):
    # (but not *too* quick)
    time.sleep(0.5)
    print i
~~~



### An h3 header ###

Now a nested list:

 1. First, get these ingredients:

      * carrots
      * celery
      * lentils

 2. Boil some water.

 3. Dump everything in the pot and follow
    this algorithm:

        find wooden spoon
        uncover pot
        stir
        cover pot
        balance wooden spoon precariously on pot handle
        wait 10 minutes
        goto first step (or shut off burner when done)

    Do not bump wooden spoon or it will fall.

Notice again how text always lines up on 4-space indents (including
that last line which continues item 3 above).

Here's a link to [a website](http://foo.bar), to a [local
doc](local-doc.html), and to a [section heading in the current
doc](#an-h2-header). Here's a footnote [^1].

[^1]: Footnote text goes here.

Tables can look like this:

size  material      color
----  ------------  ------------
9     leather       brown
10    hemp canvas   natural
11    glass         transparent

Table: Shoes, their sizes, and what they're made of

(The above is the caption for the table.) Pandoc also supports
multi-line tables:

--------  -----------------------
keyword   text
--------  -----------------------
red       Sunsets, apples, and
          other red or reddish
          things.

green     Leaves, grass, frogs
          and other things it's
          not easy being.
--------  -----------------------

A horizontal rule follows.

***

Here's a definition list:

apples
  : Good for making applesauce.
oranges
  : Citrus!
tomatoes
  : There's no "e" in tomatoe.

Again, text is indented 4 spaces. (Put a blank line between each
term/definition pair to spread things out more.)

Here's a "line block":

| Line one
|   Line too
| Line tree

and images can be specified like so:

![example image](https://images.unsplash.com/photo-1427477321886-abc24e8ce923?dpr=1.25&auto=compress,format&fit=crop&w=1199&h=800&q=80&cs=tinysrgb&crop=&bg= "An exemplary image")

Inline math equations go in like so: $\omega = d\phi / dt$. Display
math should get its own line and be put in in double-dollarsigns:

$$I = \int \rho R^{2} dV$$

And note that you can backslash-escape any punctuation characters
which you wish to be displayed literally, ex.: \`foo\`, \*bar\*, etc.
`;
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
   <Markdown source={input}/>
   </CardText>
   <CardActions>
     <FlatButton label="Action1" />
     <FlatButton label="Action2" />
   </CardActions>
 </Card>
);

export default MyAwesomeReactComponent;
