# Project_README_Generator

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
  2. Now, in the CLI, type "node index.js".
  3. Follow the prompts in the CLI window. IMPORTANT: When entering the projects name, don't use spaces, use underscores or dashes etc.
  4. When you have finished answering the prompts a message in the CLI window should appear saying "Your README file has been created!".
  5. Nothing! You can choose to tweak the formatting of the outputted README file if you so choose to, things that i personally might change will be covered in the "Testing"          portion of this README.

  #### License ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT) 
 
  Project created using the MIT license.
  [Learn more...](https://opensource.org/licenses/MIT)

  ##### Contributing
  Please do contribute if you choose to!

  ###### Testing
  Most of the testing i have done has consisted of simply generating README files with this application.
  My testing has uncovered a few things that could be improved: 
  1. The project title that a user inputs can't contain spaces, this is because it used the title that is inputted to create the name of the file in the following format              <ProjectTitle>_README.md, this can be altered by simply changing the code in "index.js" if you choose to do so.
  2. When inputting long pieces of text in the CLI there is currently no way of adding a line break or starting a new line, as such users might have to manually format their          generated README afterwards. 
  3. When generating the user's contact information, as it's a checkbox input, the user is unable to enter text such as "Feel free to contact me at: " to accompany the outputted      links.
  4. There is currently no way to add screenshots to the README, this needs to be done manually.

  ###### Questions
  Should anyone have questions, feel free to contact me at: 
  GitHub: https://github.com/MyDryDay
  LinkedIn: https://www.linkedin.com/in/george-cope-633b761bb/
  Telegram: https://t.me/G_Cope97
