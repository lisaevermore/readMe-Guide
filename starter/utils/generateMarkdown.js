/// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## By: ${data.creator}

  ## Table of Contents
  - [Description](#description)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license) 
  
  
## Description 
${data.description}

## Usage
${data.usage}

## Contributing
If you would like to contribute to the project, please follow the Contributor Covenant Code of Conduct.


## Tests
 ${data.tests}

## Questions
If you have any questions or would like to reach out for more information, please feel free to contact me at ${data.email}. You can also visit my GitHub profile at ${data.gitHub}(https://github.com/${data.gitHub}).

## License

This application is covered under the ${data.license} License.

[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})


`;
}

module.exports = generateMarkdown;

