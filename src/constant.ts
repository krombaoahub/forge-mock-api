export const DEVELOPMENT = 'development'
export const PRICINGS = [
    {
        type: 'Free',
        price: { 'monthly': '$0', 'annual': '$0' },
        subText: 'Perfect for getting started',
        buttonText: 'Get Started Free',
        mostPopular: false,
        features: [
            { include: true, feature: 'Dedicated Workspaces', tooltip: 'Organize all your related APIs and data within a single, focused environment.' },
            { include: true, feature: 'Structured Data Organization', tooltip: 'Easily categorize and manage your data with up to 3 distinct collections per project for improved workflow clarity.' },
            { include: true, feature: 'Rapid Prototyping', tooltip: 'Instantly simulate up to 3 different API behaviors per project to test integrations and build faster without a backend.' },
            { include: true, feature: 'Generous Daily Usage', tooltip: 'Test and interact with your mock APIs with a daily limit of 100 requests, sufficient for active development and testing cycles.' },
            { include: true, feature: 'Automatic Data Management', tooltip: 'Your test data is safely managed, persisting when actively used and automatically refreshing after 30 minutes of inactivity to keep your environment clean and current.' },
            { include: true, feature: 'Full Data Control', tooltip: 'Perform essential Create, Read, Update, and Delete (CRUD) operations effortlessly, giving you complete command over your mock data.' },
            { include: false, feature: 'Data Search & Filtering', tooltip: 'Quickly find and analyze specific data points using powerful filtering and search capabilities, saving you time and effort.' },
            { include: false, feature: 'Seamless Teamwork', tooltip: 'Share projects, collaborate in real-time, and streamline workflows with your team members for increased productivity.' },
            { include: false, feature: 'Change Theme', tooltip: 'Allow to change the theme of the site.' },
            { include: false, feature: 'Insightful Performance Tracking', tooltip: 'Gain deep insights into API usage and performance with advanced analytics to optimize your projects effectively.' },
        ]
    },
    {
        type: 'Standard',
        price: { 'monthly': '$19', 'annual': '$15' },
        subText: 'For growing teams',
        buttonText: 'Start Standard Plan',
        mostPopular: true,
        features: [
            { include: true, feature: 'Expanded Workspaces', tooltip: 'Manage up to 5 concurrent projects, allowing you to organize complex workflows and separate different client or team initiatives effortlessly.' },
            { include: true, feature: 'Enhanced Data Structuring', tooltip: 'Utilize up to 10 collections per project for granular organization, perfect for detailed testing scenarios and varied data models.' },
            { include: true, feature: 'Comprehensive API Simulation', tooltip: 'Accelerate development and testing with up to 10 unique, fully-functional mock APIs available for each project.' },
            { include: true, feature: 'High-Volume Usage', tooltip: 'Power through demanding testing cycles with a robust limit of 10,000 requests per day, ensuring consistent performance and scalability.' },
            { include: true, feature: 'Extended Data Persistence', tooltip: 'Keep your valuable mock data secure and accessible for 30 days, providing long-term consistency for ongoing development and review.' },
            { include: true, feature: 'Full Data Lifecycle Management', tooltip: 'Seamlessly perform all essential Create, Read, Update, and Delete (CRUD) operations for complete control over your mock data environment.' },
            { include: true, feature: 'Data Search & Filtering', tooltip: 'Instantly find and analyze specific data points with advanced filtering and search capabilities, saving significant time and effort.' },
            { include: true, feature: 'Streamlined Team Efficiency', tooltip: 'Collaborate with up to 5 team members, sharing insights and resources within dedicated, shared workspaces to boost collective productivity.' },
            { include: true, feature: 'Change Theme', tooltip: 'Allow to change the theme of the site.' },
            { include: false, feature: 'Insightful Performance Tracking', tooltip: 'Gain deep, data-driven understanding of API usage and performance through advanced analytics, enabling informed optimization and strategic decision-making.' },
        ]
    },
    {
        type: 'Pro',
        price: { 'monthly': '$49', 'annual': '$39' },
        subText: 'For large organization',
        buttonText: 'Start Pro Plan',
        mostPopular: false,
        features: [
            { include: true, feature: 'Infinite Scalability', tooltip: 'Create and manage an unlimited number of projects, ensuring your workspace scales seamlessly with your entire organization\'s needs.' },
            { include: true, feature: 'Unrestricted Data Structuring', tooltip: 'Organize complex, data-intensive projects without boundaries, allowing unlimited collections for any level of granularity or complexity.' },
            { include: true, feature: 'Comprehensive API Simulation', tooltip: 'Prototype, test, and run an unlimited number of mock APIs across all your projects to cover every development need instantly.' },
            { include: true, feature: 'Massive Volume Capacity', tooltip: 'Support enterprise-level demand and performance testing with a huge capacity of 1 million requests per day.' },
            { include: true, feature: 'Permanent Data Persistence', tooltip: 'Benefit from permanent data retention, ensuring all your mock data is secure, consistent, and readily available whenever you need it, indefinitely.' },
            { include: true, feature: 'Full Data Lifecycle Management', tooltip: 'Seamlessly perform essential Create, Read, Update, and Delete (CRUD) operations for complete, effortless control over your data.' },
            { include: true, feature: 'Powerful Data Discovery', tooltip: 'Instantly pinpoint critical information within vast datasets using sophisticated search and filtering tools, dramatically improving efficiency.' },
            { include: true, feature: 'Seamless Enterprise Teamwork', tooltip: 'Facilitate organization-wide collaboration with robust tools designed for large teams to work together efficiently and effectively.' },
            { include: true, feature: 'Change Theme', tooltip: 'Allow to change the theme of the site.' },
            { include: true, feature: 'Insightful Performance Tracking', tooltip: 'Gain deep, comprehensive understanding of API usage, performance, and trends across all projects to optimize operations and drive strategic decisions.' },
        ]
    }
]