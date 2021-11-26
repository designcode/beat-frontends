

# Beat Frontends

## Introduction
This is my implementation of THA from beat. Before we jump into Architectural and implementation details, I'd like to explain the approach I took when implementing.

I consider THAs as something more of a POC rather than actual product/project. With an actual Product Implementation, 
you have people from other domains (Business, Product, Testing etc) to clarify requirements, however with a POC/THA, you don't have that luxury.
The way I balance this limitation

- Focus on completion.
- Although it's a POC/THA, it should have good quality code.
- Keeping scalibilty in mind: make it so it can be refactored/scaled into an actual product.

Keeping above items in mind, I'd like to emphasis that my primary focus while implementing this THA was on scalability. How it can be used as an actual Product later and how multiple devs can contribute to it.

Also I am not React Expert, I have 9 years of AngularJS / Angular experience so the reviwer might come across something that's totally against React rules. Having said that I did spent good amount of time reading about how setup basic things in React.

Another important factor here, I spent close to 24 hours on the implementation, that roughly translates to 3 days of a dev work.

## Github
This project is hosted on Github as private project.
https://github.com/designcode/beat-frontends

If you wanna see the commit history, you can request access. I really like to make atomic commits, makes it easier to track back (if something went wrong) or generate backlog etc.

## Frameworks
### NX
I've used NX to create Apps and Libraries. It let's you organize and make libraries re-usable. More on NX in Architecture section.

### React
Since it was a requirement, I used React as the main application framework. Last time I wrote code in React was a couple of years ago. It's crazy how fast you can develop with React.

### React Redux
I used React Redux Toolkit to manage state.

### CSS
I've used styled components and scss for global styles. I didn't spend too much on researching on what's the best option.

## Architecture
This project uses NX to manage it's libraries and apps. NX is a smart, extensible build framework. When working with big distributed teams, it can come in quite handy, the reasons I love it the most 

- One Repository, every project gets to share the good parts
- Helps with brining same standards across all the your front-end projects
- One package.json, makes it easy to maintain dependencies, makes you conscious of your dependencies (do you really need lodash to just use cloneDeep?)
- Dependency graph!

Although, it can be a little overwhelming to see a lot of config files and src/libs folder, but once you find your way around it, it gets very smooth.

I'd start review from `apps/webapp/src`

### Domain Driven Libraries
In this project, I've taken domain driven libraries. For example: **Ride** is a domain/feature that can be used in 

- a webapp for users
- a dashboard for monitoring team

Keeping this in mind, you write self sustainable libraries.

### UI Library
There is a small UI library that I've created that contains dumb/presentation components.

### Shared
When working on large code base, you always need to share functionality between projects, `utils`, `apiClient` and what not, I've created some shared libraries as well.

## Caveats
- No tests :cry:
- Api calls should be made via a client as opposed to directly using `fetch` in slices
- No i18n
- No a11y
- No the best stylig implementation

## Let's run it

`npm install`
and then
`npx nx start webapp`

That starts both json-api server and webapp.
