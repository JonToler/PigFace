README.md

# _PigFace_

#### _Used branching logic to display different elements on a webpage 08.17.2016_

#### By _**David Bethune and Jon Toler**_

## Description
Converting to pig latin:

1. For words beginning with a vowel, add "ay" to the end.
_EXAMPLE_
input: and
ouput: anday

2. For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
_EXAMPLE_
input: tree
output: eetray

3. If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
_EXAMPLE_
input: quality
output: alityquay

4. For words beginning with "y", treat "y" as a consonant.
_EXAMPLE_
input: yes
output: esyay

5. The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
_EXAMPLE_
input: 1
output: 1


## Known Bugs

_N/A_

## Technologies Used

_Atom_
_HTML_
_CSS_
_Javascript_
_jQuery_

### License

_This software is licensed under the MIT license._

Copyright (c) 2016 David Bethune and Jon Toler All Rights Reserved.
