minimumText [![GitHub version](http://img.shields.io/badge/version-0.0.1-brightgreen.svg)]()
===========

<!---
[![Node.js version](http://img.shields.io/badge/Node.js-%3E%200.10-brightgreen.svg)]() 
[![Built with Grunt](http://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)  
-->

Hide specified number of character from the paragraph. When user will click the "readmore" or "continue" link. It will redirect to the link or scroll to the scecify section.

###Dependencies -
We can achieve this functionality with Native javascript as-well. But I did with jQuery.

###Plugin Initialization -
To activate the plugin follow the below format.
Work best with paragraph content.
```
To initialze the plugin -
$('.container').minimumText({
  element: '.jumbotron p.description',
  'numsChar': 125,
  'url': 'www.yourwebsite.com',
  'dots': '....',
  'str': 'read more'
});
```

### Example -
```
$('.container').minimumText({
  element: '.jumbotron p.description',
  'numsChar': 125,
  'url': 'www.yourwebsite.com',
  'dots': '....',
  'str': 'read more'
});
```

### Options (parameters) - 
| Command  |Task Performed                  |
| -------- | :------: | -------- | -------- |
| element | Element Name. |
| numsChar  | Number of character |
| url  | link url |
| dots  | Number of dots.|
| str  | link string.|


###Contributing -
Please feel free to contribute and edit as per your requirement.

###Changelog -
> 0.0.1: BETA version

### Licence [![License version](http://img.shields.io/badge/License-MIT-red.svg)]()
> The MIT License (MIT)
