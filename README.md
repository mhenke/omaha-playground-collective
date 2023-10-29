# Omaha Playground Collective app

- [Omaha Playground Collective app](#omaha-playground-collective-app)
- [Project Summary](#project-summary)
  - [Executive Summary](#executive-summary)
  - [Installation](#installation)
  - [Getting Started](#getting-started)
  - [License](#license)
- [The Stories](#the-stories)
  - [User Stories](#user-stories)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Mis-user Stories](#mis-user-stories)
  - [Mitigation Criteria](#mitigation-criteria)
- [Diagrams](#diagrams)
  - [Mockup](#mockup)
  - [Architecture Diagram](#architecture-diagram)

# Project Summary

## Executive Summary

The Omaha Playground Collective is your ultimate source for all things playgrounds, parks + fun in Omaha, Nebraska. Our mission is to provide a comprehensive guide to help you discover the best recreational spaces for your family.

## Installation

```bash
docker compose build
```

## Getting Started

To run my awesome app simply,

```bash
docker compose up -d
```

See in-app menus for help with using specific features.

## License

This project is licensed under the terms of the [Creative Commons Zero v1.0 Universal](LICENSE.md).

# The Stories

What features do you want to have? What do the users want to do? What would someone who likes your project want to use it for?

## User Stories

### User Story 1

As a parent, I want to access playground information to discover suitable options for my family.

### User Story 2

As a parent, I want to search for playgrounds to quickly find appropriate options for my family.

### User Story 3

As an administrator, I want to share playground information with other parents to use.

### User Story 4

As an administrator, I want to manage playground information to ensure it's up to date and accurate.

## Acceptance Criteria

### Acceptance Criteria 1

Given that I am a parent looking for playground information, when I access the playground information feature, then I should be able to view a list of playgrounds in my area with details such as location, facilities, and user ratings.

1. The system should display a user-friendly interface for accessing playground information.
1. The playground information should be categorized by location, age or XXXX.
1. Each playground entry should include essential details, including its name, address, XXXXX.
1. Users should be able to easily browse and filter the list of playgrounds.

### Acceptance Criteria 2

Given that I am a parent searching for a playground, when I perform a search using the search feature, then I should receive relevant results based on my search query.

1. The search functionality should be easily accessible from the main interface.
1. Users should be able to enter search queries, such as location or facility names.
1. The search results should include playgrounds that match the search criteria.
1. The results should be displayed in an organized and easily readable format.
1. Users should be able to click on a result to access more detailed information about the playground.

### Acceptance Criteria 3

Given that I am an administrator wanting to share playground information, when I initiate the sharing process via a blog, then I should be able to create a blog post containing the relevant playground information and share it with other parents.

1. The system should provide a blog creation interface within the administrator's dashboard.
1. Administrators should be able to input relevant information about the playground, including its name, location, facilities, and any additional useful details.
1. Administrators should be able to format and structure the blog post, including adding text, images, and links.
1. Once the blog post is created, administrators should be able to publish it.
1. The published blog post should be accessible to other parents using the platform.
1. Other parents should be able to view the blog post and access the playground information.

### Acceptance Criteria 4

Given that I am an administrator responsible for managing playground information, when I update playground details, then the changes should be reflected in the platform, and the information should remain accurate.

1. The platform should provide an interface for administrators to edit and update playground information.
1. After making changes, the updated information should be displayed on the platform.
1. Users accessing the platform should see the most recent and accurate playground details.
1. Any changes made by administrators should be tracked and documented for reference.

## Mis-user Stories

In addition to the user stories identify the ways in which users might be able to mis-use your app. Mis-user stories are just like user stories except the user, goal, and rationale are malicious.

## Mitigation Criteria

For each mis-user story identify at least one mitigation criteria. The mitigation criteria define the set of requirements that tell you when you are done protecting against the mis-user story

# Diagrams

## Mockup

This should be an interface design that shows off the different views that a user will see when they interact with your app. You should tie the mockup views to specific user stories where possible.

## Architecture Diagram

In addition to the mockup, I want you to create three architecture diagrams using the C4 architecting modeling paradigm discussed in class. See http://static.codingthearchitecture.com/c4.pdf for a quick reference.
