## Coe Major Exploration Game
### Cleo Golds, Derek Inman, and Lawrence Kim's Oregon State University Senior Capstone Project Sept 2023-June 2024
---
### Purpose
We are building a website to help incoming College of Engineering students choose a major.

---
### Installation

The overall process is to clone the repository files stored on GitHub to your local computer and then run them so they can be accessed in a web browser. There is certain software and configurations that need to be setup in order for this to take place.

### Preconfiguration - Necessary software and configuration of the system


Optional Configurations and Software (Recommended)
<br>
1. Create a folder on your local hard drive that will be used for your locally stored Git repositories.
2. Download and install your preferred default code editor. Potential options include:

<a href="https://code.visualstudio.com/">Visual Studio Code</a>	
<br>
<a href="https://notepad-plus-plus.org/">Notepad++</a>
<br>
<a href="https://www.sublimetext.com/">Sublime Text</a>		

### Install Node.js 
1. Download Node.js from https://nodejs.org/en/download
2. Select the LTS 64-bit .msi version for Windows or the LTS .pkg version for Mac. (Version 18.18 or higher for either).
3. Install the downloaded software.
4. During installation there will be an option to automatically install the necessary tools, do so when asked.
5. A PowerShell window will appear and run multiple installs.
6. It will take several minutes and will appear to stop, please wait until the window closes on its own or it asks you to type ENTER to end the installation.

### Install Git
1. Download Git for your OS from https://git-scm.com/downloads	
2. During the installation, you can choose a different default code editor.
3. Install using the default options and include any additional options when presented.

Once Node.js and Git have been installed, you will now clone a copy of the online repository to your local hard drive and run it from there. There are a few options available to do this, but these are two of the most common. Using GitHub Desktop is recommended as it does much of what is necessary during the installation process.

### Option 1 - To Install Using GitHub Desktop (Recommended)
1. Open a web browser and open the CoE Major Exploration page in GitHub located at https://github.com/cleog/CoEMajorExploration	
2. Click on <> Code
3. Under the Local tab, in the HTTPS section, copy the address which should be https://github.com/cleog/CoEMajorExploration.git	
4. Download GitHub Desktop from https://desktop.github.com/
5. Install the downloaded software.
6. During the installation, sign in using your GitHub account or create a new one.
7. Select the option to clone a repository from the Internet.
8. Select URL and enter the URL copied from GitHub which should be https://github.com/cleog/CoEMajorExploration.git
9. Select the location where you want to store your cloned Git repository.
10. Finish the installation.

### Option 2 - To Install Using Git Bash CLI
1. Open a web browser and open the CoE Major Exploration page in GitHub located at https://github.com/cleog/CoEMajorExploration	
2. Click on <> Code
3. Under the Local tab, in the HTTPS section, copy the address which should be https://github.com/cleog/CoEMajorExploration.git	
4. Click start and type git bash
5. Open Git Bash
6. In the Git Bash CLI, navigate to where you want to store your cloned Git repository
7. Type git clone followed by the web address and press enter. 
<br>Example: git clone https://github.com/cleog/CoEMajorExploration.git	
8. The online repository files will be cloned to that location.
9. Close Git Bash.

### Install NPM
1. Open a CLI such as Command Prompt or PowerShell
2. Navigate to ..\CoEMajorExploration\MajorExplNextJS
```
npm install
```

### To Run the Website
Once one of the methods described above has been completed and the CoE Major Exploration Game repository files have been downloaded to a local computer along with the necessary software installed, follow these instructions to initialize and access the website.

1. Open a CLI such as Command Prompt or PowerShell
2. Navigate to ..\CoEMajorExploration\MajorExplNextJS
```
npm run dev
```
You can now navigate to the web address presented in the CLI by using a web browser. Typically, http://localhost:3000
<br>
When you want to stop running the website locally, press ctrl+c in the command line to end the process.

---

### Built With

Tech Stack: MERN

[![Mongo][MongoDB]][Mongo-url]
<br>
[![Express][Express.js]][Express-url]
<br>
[![React][React.js]][React-url]
<br>
[![Node][Node.js]][Node-url]

---

### License

[![License-MIT][LicenseMIT]][LicenseMIT-URL]

---

### Contact

---

### Acknowledgements

---

<!-- MARKDOWN LINKS & IMAGES -->

[MongoDB]: https://img.shields.io/badge/MongoDB-20232A?style=for-the-badge&logo=mongodb&logoColor=47A248
[Mongo-url]: https://www.mongodb.com/

[Express.js]: https://img.shields.io/badge/Express-20232A?style=for-the-badge&logo=express&logoColor=000000
[Express-url]: https://expressjs.com/

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

[Node.js]: https://img.shields.io/badge/Node-20232A?style=for-the-badge&logo=Node.js&logoColor=339933
[Node-url]: https://nodejs.org/en/

[LicenseMIT]: https://img.shields.io/badge/License-MIT-yellow.svg
[LicenseMIT-URL]: https://github.com/cleog/CoEMajorExploration/blob/main/LICENSE.md
