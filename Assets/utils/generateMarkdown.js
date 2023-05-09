// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## description
  ${data.description}
  
  ## table of Contents
  ${data.tableOfContents}
  
  ## installation
  ${data.installation}
  
  ## usage
  ${data.usage}
  
  ## license
  ${data.license}
  
  ## contributing
  ${data.contributing}
  
  ## tests
  ${data.tests}
  
  ## questions
  If you have any questions or feedback, feel free to reach out to me via [GitHub](https://github.com/${data.github}) or [email](${data.email}).
  
  `;
  }
  
  module.exports = generateMarkdown;
  

