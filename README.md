# Beep-Boop

#### A program that accepts a numerical input and returns a range of numbers from 0 to the inputted number (with a few alterations).

#### By **Zach Weintraub**

## Description

A website created with HTML, CSS with Bootstrap, and JavaScript with jQuery. The site takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions (ordered by priority from least to greatest importance):

* Numbers that contain a 1: all digits are replaced with "Beep!"
* Numbers that contain a 2: all digits are replaced with "Boop!"
* Numbers that contain a 3: all digits are replaced with "I'm sorry, Dave. I'm afraid I can't do that."


### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Returns a range of numbers from 0 to the user-inputted number** | 3 | 0, 1, 2, 3 |
| **Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that."** | 3 | 0, 1, 2, "I'm sorry, Dave..." |
| **Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"**| 3 | 0, 1, "Boop!", "I'm sorry, Dave..." |
| **Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"**| 3 | 0, "Beep!", "Boop!", "I'm sorry, Dave..." |
| **Does not process non-numeric inputs** | test | "You call that a number, Dave?" |
| **Does not process inputs greater than 1000**| 1001 | "I'd rather not count that high, Dave." |

## Setup/Installation Requirements

1. Clone this repository.
2. Open the index.html file in your browser of choice.
3. Enjoy!

## Known Bugs
* No known bugs at this time.

## Technologies Used
* HTML
* CSS
  * Bootstrap
* JavaScript
  * jQuery

## Support and contact details

_Email me with any questions, comments, or concerns:_
zachweintraub@gmail.com

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2019 **_{Zach Weintraub}_**
