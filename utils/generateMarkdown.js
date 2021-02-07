const testData = {
  github: 'bluesatyr',
  email: 'shawnevans.music@gmail.com',
  title: 'README generator',
  description: 'generates readme files from user input',
  installation: 'make sure you install this',
  usage: 'answer all the questions to generate a README.md file',
  contribution: '',
  tests: '',
  license: 'MIT License'
}


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    
    //license badge url
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


const filterSections = sections => {
    // filter() those that exist then map() to generate text
    const contentHeadingArr = sections.filter(item => {
        if (item[1]) {
            return true;
        } else if (!item[1]) {
            return false;
        }
    });
    return contentHeadingArr; 
};

const generateSections = sections => {
    const contentHeadingArr = filterSections(sections);
    let sectionsContent = '\n';
    for (let i = 0; i < contentHeadingArr.length; i++) {
        let sectionHeading = contentHeadingArr[i][0];
        let sectionContent = contentHeadingArr[i][1];
        let section = `## ${sectionHeading}\n\n${sectionContent}\n\n`;
        sectionsContent += section;
    }
    return sectionsContent;
};

// TODO function to generate table of contents 
const generateTableOfContents = sections => {
    const contentHeadingArr = filterSections(sections);
    let tableOfContents = '## Table of Contents \n\n';
    for (let i = 0; i < contentHeadingArr.length; i++) {
        let sectionHeading = contentHeadingArr[i][0];
        let newHeading = `* [${sectionHeading}](#${sectionHeading.toLowerCase()})\n`;
        tableOfContents += newHeading;
    }
    return tableOfContents;
};
  

// TODO: Create a function to generate markdown for README
// module.exports = data => 
const generateMarkdown = data => {
    // destructure page data by section
    const sections = [['Installation', data.installation], ['Usage', data.usage], ['Contribution', data.contribution], ['Tests', data.tests]];
    
    console.log(`# ${data.title}

## Description

${data.description}

${generateTableOfContents(sections)}
${generateSections(sections)}

`   );
    
}

generateMarkdown(testData);

//[![License](https://img.shields.io/badge/License-${licenseBadgeURL})](https://${licenseLink})
