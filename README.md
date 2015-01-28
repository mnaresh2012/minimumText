minimumText [![GitHub version](http://img.shields.io/badge/version-0.0.1-brightgreen.svg)]()
===========

<!---
[![Node.js version](http://img.shields.io/badge/Node.js-%3E%200.10-brightgreen.svg)]() 
[![Built with Grunt](http://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)  
-->

Hide specified number of character from the paragraph. When user will click the "readmore" or "continue" link. It will expand and user can see all the content.

###Dependencies - 
jQuery - We can achieve this functionality with Native javascript as-well. But I did with jQuery.

###Plugin Initialization -
To activate the plugin follow the below format.
Work best with paragraph content.
```
To initialze the plugin -
$('#main p').minimumText(numOfChar, {
  'linkText': 'readmore',
  'mumberOfDots': 3,
  'linkColor': '#f00',
  'hoverColor': '#0f0',
  'countWhiteSpace': false (default)
});
```
### Options (parameters) - 
| Command  |Task Performed                  |
| -------- | :------: | -------- | -------- |
| numOfChar | Number of character to show. |
| linkText  | Append the text to the last of the paragraph.      |
| numberOfDots  | Number of dots want to show before the link text.      |
| linkColor  | Link text active color.      |
| hoverColor  | Link text's hover color.     |
| countWhiteSpace  | Include the white-space character to the count.      |


###Contributing -
Please feel free to contribute and edit as per your requirement.

###Changelog -
> 0.0.1: BETA version

### Licence [![License version](http://img.shields.io/badge/License-MIT-red.svg)]()
> The MIT License (MIT)
