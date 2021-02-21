# README_Generator

  # Description
  A simple command-line application that generates GitHub project README files based on user inputs

  ## Contents
  Section                       | Description
  ----------------------------- | --------------------------------------------------
  [Installation](#Installation) | How To Install & Dependancies
  [Usage](#Usage)               | How To Use The Application
  [Contributing](#Contributing) | Information For Those That Wish To Contribute
  [Testing](#Testing)           | Information Regarding Tests I've Carried Out
  [Questions](#Questions)       | Contact Information For Those That Have Questions

  ## Installation
  1. Clone or download a copy of this repository.
  2. Ensure you have node.js installed and that it can access your PATH. 

  ### Usage
  1. Once you have cloned or downloaded the repository, navigate to it using a CLI of your choice.
  2. Open the repository in a text editor of your choice.
  3. Alter line 41 to remove my contact information and add your own information, you can add to the list of options too. 
  4. Save the "index.js" file.
  5. Now, in the CLI, type "node index.js".
  6. Follow the prompts in the CLI window. IMPORTANT: When entering the projects name, don't use spaces, use underscores or dashes etc.
  7. When you have finished answering the prompts a message in the CLI window should appear saying "Your README file has been created!".
  8. Nothing! You can choose to tweak the formatting of the outputted README file if you so choose to, things that i personally might change will be covered in the "Testing"          portion of this README.
  9. (OPTIONAL) Alter line 44 of "index.js" to change the name of the outputted file. It will output a filename of "<ProjectName>_README.md" by default.
  10. (OPTIONAL) Navigate and open the "generateMarkdown.js" file & you are able to add/remove license link/badge options. Additionally, here you can change how the generated         README.md file is formatted by altering lines 107 - 134.

  A short video showing typica user flow can be found [here](https://drive.google.com/file/d/1buNzn_uut3EGx4RMdR6jpC7oGbIPZcPu/view?usp=sharing)

  ### License ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT) 
 
  Project created using the MIT license.
  [Learn more...](https://opensource.org/licenses/MIT)

  ### Contributing
  Please do contribute if you choose to!

  ### Testing
  Most of the testing i have done has consisted of simply generating README files with this application.
  My testing has uncovered a few things that could be improved: 
  1. The project title that a user inputs can't contain spaces, this is because it used the title that is inputted to create the name of the file in the following format              <ProjectTitle>_README.md, this can be altered by simply changing the code in "index.js" if you choose to do so.
  2. When inputting long pieces of text in the CLI there is currently no way of adding a line break or starting a new line, as such users might have to manually format their          generated README afterwards. 
  3. When generating the user's contact information, as it's a checkbox input, the user is unable to enter text such as "Feel free to contact me at: " to accompany the outputted      links. This, of course, can be altered within the "index.js".
  4. There is currently no way to add screenshots to the README, this needs to be done manually.

  ### Future Considerations
  1. I thought having a multi-selection prompt for contact information was a good idea as a user wouldn't have to do several inputs to include all their contact information,          however this mean the user must first edit the "index.js" file to reflect their own contact information and not mine.
  2. I'd like to implement more concise functions for generating the GitHub license links and badges, as they are now their quite inelegant.
  3. An option to include screenshots would be cool.
  4. Fixing the formatting issues in the generated README.md files would be beneficial & having a table of contents generate along with the rest of the file would be nice too.

  ### Questions
  Should anyone have questions, feel free to contact me at:  
  GitHub: https://github.com/MyDryDay  
  LinkedIn: https://www.linkedin.com/in/george-cope-633b761bb/  
  Telegram: https://t.me/G_Cope97
