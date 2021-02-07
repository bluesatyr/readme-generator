const licenseObj = {
    'Apache License':{badge:"[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]" , link:"https://opensource.org/licenses/Apache-2.0" },
    'GNU General Public License':{badge:"[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]" , link:"https://www.gnu.org/licenses/gpl-3.0" },
    'MIT License':{badge:"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]" , link:"https://opensource.org/licenses/MIT" }, 
    'BDS License':{badge:"[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]" , link:"https://opensource.org/licenses/BSD-3-Clause" }, 
    'Creative Commons Zero Universal':{badge:"[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]" , link:"http://creativecommons.org/publicdomain/zero/1.0/"}
};

// returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, licenseObj) {
    if (!license) {
        return "";
    } else if (license) {
    const licenseBadgeUrl = licenseObj[license].badge;
    const licenseLinkUrl = licenseObj[license].link;
    return `${licenseBadgeUrl}(${licenseLinkUrl})`;
    }  
};

// returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license, licenseObj) {
    if (!license) {
        return "";
    } else if (license) {
    const licenseLinkUrl = licenseObj[license].link;
    return licenseLinkUrl;
    }  
};

// returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, licenseObj) {
    if (!license) {
        return "";
    } else if (license) {
    const licenseLinkUrl = licenseObj[license].link;
    return `## License\n
This project uses the ${license}. More info about this license can be found at ${licenseLinkUrl}`;
    }  
};


const filterSections = sections => {
    // filter() those that exist
    const contentHeadingArr = sections.filter(item => {
        if (item[1]) {
            return true;
        } else if (!item[1]) {
            return false;
        }
    });
    return contentHeadingArr; 
};

// genrate section headings and content for optional info
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

// generate table of contents 
const generateTableOfContents = (sections, license) => {
    const contentHeadingArr = filterSections(sections);
    let tableOfContents = '## Table of Contents \n\n';
    for (let i = 0; i < contentHeadingArr.length; i++) {
        let sectionHeading = contentHeadingArr[i][0];
        let newHeading = `* [${sectionHeading}](#${sectionHeading.toLowerCase()})\n`;
        tableOfContents += newHeading;
    }
    if (license){
        tableOfContents += "* [License](#license)\n";
    }
    return tableOfContents;
};
  

// main function to generate markdown
module.exports = data => {
    // destructure page data by section
    const sections = [['Installation', data.installation], ['Usage', data.usage], ['Contribution', data.contribution], ['Tests', data.tests]];
    
    return `# ${data.title}

${renderLicenseBadge(data.license, licenseObj)}

## Description

${data.description}

${generateTableOfContents(sections, data.license)}
${generateSections(sections)}
${renderLicenseSection(data.license, licenseObj)}
    
## More Info

For additional information on this project contact me by email at ${data.email} or visit my GitHub page at https://github.com/${data.github}.`;
    
}



