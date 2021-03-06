# [Ω CanaryX Frontend](https://app.canaryxdao.com/)
This is the front-end repo for CanaryX that allows users be part of the future of Greece. 

**_ Note We're currently in the process of switching to TypeScript. Please read  this  guide on how to use TypeScript for this repository. https://github.com/CanaryXDAO/canaryx-frontend/wiki/TypeScript-Refactor-General-Guidelines _**

##  🔧 Setting up Local Development

Required: 
- [Node v14](https://nodejs.org/download/release/latest-v14.x/)  
- [Yarn](https://classic.yarnpkg.com/en/docs/install/) 
- [Git](https://git-scm.com/downloads)


```bash
$ git clone https://github.com/CanaryXDAO/canaryxdao.git
$ cd canaryxdao

# set up your environment variables
# read the comments in the .env files for what is required/optional
$ cp .env.example .env

# fill in your own values in .env, then =>
$ yarn
$ yarn start
```

The site is now running at `http://localhost:3000`!
Open the source code and start editing!

### Architecture/Layout
The app is written in [React](https://reactjs.org/) using [Redux](https://redux.js.org/) as the state container. 

The files/folder structure are a  **WIP** and may contain some unused files. The project is rapidly evolving so please update this section if you see it is inaccurate!

```
./src/
├── App.jsx       // Main app page
├── abi/          // Contract ABIs from etherscan.io
├── actions/      // Redux actions 
├── assets/       // Static assets (SVGs)
├── components/   // Reusable individual components
├── constants.js/ // Mainnet Addresses & common ABI
├── contracts/    // TODO: The contracts be here as submodules
├── helpers/      // Helper methods to use in the app
├── hooks/        // Shared reactHooks
├── themes/       // Style sheets for dark vs light theme
└── views/        // Individual Views
```


## 🚀 Deployment
Auto deployed on [Fleek.co](http://fleek.co/) fronted by [Cloudflare](https://www.cloudflare.com/). Since it is hosted via IPFS there is no running "server" component and we don't have server sided business logic. Users are served an `index.html` and javascript to run our applications. 

_**TODO**: TheGraph implementation/how/why we use it._


### Continuous deployment
Commits to the follow branches are automatically deployed to their respective URLs.
| Branch | URL |
| --- | --- |
| master | https://app.canaryxdao.com |
| deploy | https://staging.app.canaryxdao.com |

**Pull Requests**:
Each PR into master will get its own custom URL that is visible on the PR page. QA & validate changes on that URL before merging into the deploy branch. 


## 👏🏽 Contributing Guidelines 

We keep an updated list of bugs/feature requests in [Github Issues](https://github.com/CanaryXDAO/canaryxdao/issues). 


![GitHub issues](https://img.shields.io/github/issues/canaryxdao/canaryxdao?style=flat-square)

Filter by ["good first issue"](https://github.com/CanaryXDAO/canaryxdao/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) to get your feet wet!
Once you submit a PR, our CI will generate a temporary testing URL where you can validate your changes. Tag any of the gatekeepers on the review to merge them into master. 

*__NOTE__*: For big changes associated with feature releases/milestones, they will be merged onto the `develop` branch for more thorough QA before a final merge to `master`


**Defenders of the code**: 

Only the following people have merge access for the master branch. 
* [@Girth Brooks](https://github.com/dwjanus)
* [@Unbanksy](https://github.com/unbanksy)
* [@ZayenX](https://github.com/lolchocotaco)


## 🗣 Community

* [Join our Discord](https://discord.gg/gGZUMVDuhQ) and ask how you can get involved with the DAO!

