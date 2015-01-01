minimumText [![GitHub version](http://img.shields.io/badge/version-0.0.1-brightgreen.svg)]()
===========

[![Node.js version](http://img.shields.io/badge/Node.js-%3E%200.10-brightgreen.svg)]() [![Built with Grunt](http://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)  [![License version](http://img.shields.io/badge/License-MIT-red.svg)]()

Hide specified number of character from the paragraph. When user will click the "readmore" or "continue" link. It will expand and user can see all the content.

###Dependencies - 
jQuery - 
We can achieve this functionality with native javascript as-well. But I did with jQuery. Because, Now a days everybody using jQuery.

###Link -
For more details, follow the link - [mnaresh2012.github.io](http://mnaresh2012.github.io/index.html)
```
To initialze the plugin -
$('#main p').minimumText(450, {
  'linkText': 'readmore',
  'mumberOfDots': 3,
  'linkColor': '#f00',
  'hoverColor': '#0f0',
  'countWhiteSpace': false
});
```
### Options (parameters) - 
| Command  |Task Performed                  |
| -------- | :------: | -------- | -------- |
| linkText  | Append the text to the last of the paragraph.      |
| mumberOfDots  | Number of dots want to show before the link text.      |
| linkColor  | Link text active color.      |
| hoverColor  | Link text's hover color.     |
| countWhiteSpace  | Include the white-space character to the count.      |


###Contributing -
Please feel free to contribute and edit as per your requirement.

### Licence
> MIT License

###Changelog -
> 0.0.1: BETA version

