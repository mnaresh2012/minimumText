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

###Changelog -
> 0.0.1: BETA version

### Licence
> The MIT License (MIT)

Copyright (c) 2015 mr. naresh kumar

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

