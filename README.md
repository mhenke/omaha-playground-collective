# Omaha Playground Collective app

- [Omaha Playground Collective app](#omaha-playground-collective-app)
  - [Project Summary](#project-summary)
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

## Project Summary

The Omaha Playground Collective is your ultimate source for all things playgrounds, parks + fun in Omaha, Nebraska. Our mission is to provide a comprehensive guide to help you discover the best recreational spaces for your family.

## Installation

You'll need a Supabase and GitHub account to run this app locally.

You'll need to clone the GitHub repo to your local machine.

You'll need to add the .env file with your DATABASE_URL, GITHUB_ID, GITHUB_SECRET, NEXTAUTH_URL, and NEXTAUTH_SECRET.

### Environment Variables

You'll need to add the following environment variables to your .env file. There is an example .env file in the root directory of the project called .env.example. You can copy this file and rename it to .env. You'll need to add your own values to the variables in the .env file.

#### DATABASE_URL

To use the Supabase database in the app, you'll need to add the [connection string](https://flaviocopes.com/postgresql-supabase-setup/) to your .env file. Here is an example of what that looks like:

```bash
# .env file
DATABASE_URL=postgres://postgres:<password>@local<your_supabase_url>.host:5432/postgres
```

#### Next Auth

- To use the app, you'll need to add the NEXTAUTH_SECRET and NEXTAUTH_URL in your .env file. You can [generate a new secret](https://next-auth.js.org/configuration/options#secret) on the command line with `openssl rand -base64 32` Here is an example of what that looks like:

```bash
# .env file
NEXTAUTH_SECRET=<your_nextauth_secret>
NEXTAUTH_URL="http://localhost:3000"
```

#### Github Provider

- To use Nextauth in the app, you'll need to add the Next Auth Github Provider to your .env file. Here is an example of what that looks like:

```bash
# .env file
GITHUB_ID=<your_github_id>
GITHUB_SECRET=<your_github_secret>
```

## Getting Started

NEED TO ADD INSTRUCTIONS FOR RUNNING THE APP

## License

This project is licensed under the terms of the [Creative Commons Zero v1.0 Universal](LICENSE.md).

# The Stories

## User Stories

### User Story 1

As a parent, I want to access playground information to discover suitable options for my family.

### User Story 2

As a parent, I want to find playgrounds for my family quickly based on criteria like appropriate options or playground surface type.

### User Story 3

As an administrator, I want to share playground information with other parents to use.

### User Story 4

As an administrator, I want to manage playground information to ensure it's up-to-date and accurate.

## Acceptance Criteria

### Acceptance Criteria 1

Given that I am a parent looking for playgrounds, when I access the playground information, then I should be able to view a list of playgrounds in my area with details such as location, facilities, and rating.

1. The system should display a user-friendly interface for accessing playground information.
2. Users should be able to easily browse and filter the list of playgrounds.
3. The playground information should be categorized by location, age range, rating, and playground surfaces.
4. Each playground entry should include details, including its name, address, age range, shade, and other relevant information.

### Acceptance Criteria 2

Given that I am a parent finding for a playground, when I perform a filter using the predefined critera, then I should receive relevant results based on my filter options.

1. The filter functionality should be easily accessible from the main interface.
1. Users should be able to enter filter by such as location, age range, surface area, and ada compliance.
1. The filter results should include playgrounds that match the filter criteria.
1. The results should be displayed in an organized and easily readable format.
1. Users should be able to click on a result to access more detailed information about the playground.

### Acceptance Criteria 3

Given that I am an administrator wanting to share playground information, when I create an entry, then I should be able to publish it to the app.

1. The system should provide a blog creation interface within the administrator's dashboard.
1. Administrators should be able to input relevant information about the playground, including its name, location, facilities, and any additional useful details.
1. Administrators should be able to format and structure the blog post, including adding text, images, and links.
1. Once the blog post is created, administrators should be able to publish it.
1. The published blog post should be accessible to other parents using the application

### Acceptance Criteria 4

Given that I am an administrator responsible for managing playground information, when I update playground details, then the changes should be reflected in the app, and the information should remain accurate.

1. The platform should provide an interface for administrators to edit, update, and delete playground information.
1. After making changes, the updated information should be displayed or removed from the application.
1. Users accessing the platform should see the most recent, active, and accurate playground details.
1. Any changes made by administrators should be tracked and documented for reference.

## Mis-user Stories

### Mis-user Story 1

As a hacker, I want to exploit vulnerabilities in the search feature to gain unauthorized access to the backend system.

### Mis-user Story 2

As an administrator, I accidentally delete or update playground information to provide incorrect details.

## Mitigation Criteria

### Mitigation Criteria 1

- Regularly conduct security assessments, including penetration testing and vulnerability using tools such as OWASP ZAP and SonarQube.
- Implement strong access controls and authentication mechanisms to prevent unauthorized access to data.
- Maintain audit logs to capture details of access attempts, user activities, and system changes.

### Mitigation Criteria 2

- Implement a content log that records all changes made by administrators, making it possible to track and reverse unauthorized modifications.
- Maintain a robust data recovery and backup system to ensure that data can be restored in the event of accidental deletion or modification.

# Diagrams

## Mockup

### Home page

![Home Page](/doc/homePage.png)

### Blog Page

![Blog Page](/doc/blogPage.png)

### Search Result Page

![Search Result Page](/doc/searchResultPage.png)

## Architecture Diagram

### Context Diagram

![Context Diagram](/doc/structurizr-SystemContext.png)

### Container Diagram

![Container Diagram](/doc/structurizr-Containers.png)

### Component Diagram

![Component Diagram](/doc/structurizr-Components.png)
