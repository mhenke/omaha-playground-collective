workspace {

    model {
        admin = person "Administrator" "An administrator who manages the playground information."
        parent = person "Parent" "A parent who accesses and views playground information."

        softwareSystem = softwareSystem "Omaha Playground Collective Application" "Web application for the playground information" {
            singlePageApplication = container "Single-Page Application" "Provides all of the playground applilcation functionality to customers via their web browser." "JavaScript, CSS, HTML" "Web Browser"

            webApplication = container "Web Application" "Delivers the playground content and the Omaha Playground Collective application." "NextJS" {
                securityComponent = component "Security Component" "Provides functionality related to signing in, sessions, etc." "NextAuth.js"
                loggingComponent = component "Logging Component"
                searchComponent = component "Search Playground Information Component"
                displayComponent = component "Display Playground Information Component"
                manageComponent = component "Manage Playground Information Component"
            }

            apiApplication = container "API" "TRCP" {
                trpcComponent = component "TRCP"
                authComponent = component "auth"

             }

             database = container "Database" "Stores playground information, credentials, access logs, etc." "Supabase Database Schema" "Database"
        }

        # relationships between people and software systems
        parent -> singlePageApplication "Uses"
        admin -> singlePageApplication "Uses"

        webApplication -> singlePageApplication "Delivers to the parent/user information web browser"
        apiApplication -> database "Reads from and writes to"

        singlePageApplication -> securityComponent "Uses"
        singlePageApplication -> searchComponent "Uses"
        singlePageApplication -> displayComponent "Uses"

        webApplication -> apiApplication "Uses"

        securityComponent -> loggingComponent "Uses"
        manageComponent -> loggingComponent "Uses"
        searchComponent -> loggingComponent "Uses"
        displayComponent -> loggingComponent "Uses"
        securityComponent -> manageComponent "Uses"

        securityComponent -> apiApplication "Calls"
        manageComponent -> apiApplication "Calls"
        displayComponent -> apiApplication "Calls"
        searchComponent -> apiApplication "Calls"
    }

    views {

        systemcontext softwareSystem "SystemContext" {
            include *

            autoLayout
            description "The system context diagram for the Omaha Playground Collective Application"
            properties {
                structurizr.groups false
            }
        }

         container softwareSystem "Containers" {
            include *

            autoLayout
            description "The container diagram for the Omaha Playground Collective Application."
        }

        component webApplication "Components" {
            include *

             autoLayout
            description "The component diagram for the Web Application."
        }

        styles {
            element "Database" {
                shape Cylinder
            }
            element "Web Browser" {
                shape WebBrowser
            }
        }

        theme default
    }

}
