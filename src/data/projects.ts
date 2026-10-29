import type { Project } from "../types/project";

export const projects: Project[] = [
    {
        title: "AWS Cloud Infrastructure & Web Deployment",
        category: "Cloud / Infrastructure",
        overview:
            "A cloud architecture I designed and deployed on AWS for a web application across two Availability Zones: static assets delivered through CloudFront and S3, an auto-scaled EC2 tier behind a load balancer, and a database isolated in private subnets.",
        image: "/projects/aws-infrastructure.svg",
        imageAlt:
            "AWS architecture diagram: users reach Route 53 and CloudFront, which serves static assets from S3 and forwards traffic to an Application Load Balancer and an EC2 Auto Scaling group in public subnets across two Availability Zones, with Amazon RDS in private subnets.",
        imageFit: "contain",
        technologies: [
            "Route 53",
            "CloudFront",
            "S3",
            "VPC",
            "Application Load Balancer",
            "EC2 Auto Scaling",
            "RDS",
        ],
        metrics: [
            "EC2 Auto Scaling behind an Application Load Balancer across two Availability Zones",
            "RDS database isolated in private subnets with no direct internet access",
            "Static assets served from S3 through CloudFront, with DNS on Route 53",
        ],
        kind: "personal",
        challenge:
            "Design the infrastructure for a web application that keeps running if an entire Availability Zone goes down, scales with traffic, keeps its data off the public internet, and serves static content quickly to users wherever they are.",
        solution:
            "I designed and deployed a VPC in us-west-2 (Oregon) that spans two Availability Zones, each with a public and a private subnet. Route 53 resolves the domain to CloudFront, which serves static assets from S3 and forwards dynamic requests to an Application Load Balancer. The load balancer distributes traffic across an EC2 Auto Scaling group in the public subnets of both zones. The RDS database lives in the private subnets with a standby in the second zone, and security groups only accept database traffic from the application tier. IAM controls which resources each component can access.",
        results: [
            "No single Availability Zone is a point of failure: the load balancer, compute tier and database span both zones",
            "The database has no route to or from the internet and is reachable only from the application tier",
            "Static content is cached at CloudFront edge locations, taking load off the EC2 instances",
            "A working deployment on AWS, not just a diagram: hands-on experience with VPC networking, subnets and security groups that I apply when shipping frontend applications",
        ],
    },

    {
        title: "GuitarLA – Guitar Store",
        category: "Frontend / E-commerce",
        overview:
            "An online guitar store with a shopping cart built in React and TypeScript: customers add guitars, adjust quantities and see the total update instantly, and the cart persists between visits.",
        image: "/projects/guitarla.jpg",
        imageAlt:
            "GuitarLA store home page showing the 'Nuestra Colección' catalog of guitars, each with its price and an 'Add to cart' button.",
        technologies: [
            "React",
            "TypeScript",
            "useReducer",
            "Vite",
            "CSS",
            "Netlify",
        ],
        metrics: [
            "Cart state managed with useReducer and typed actions",
            "Cart persisted in localStorage between visits",
            "Quantity limits and live total calculation",
        ],
        kind: "personal",
        liveUrl: "https://tienda-guitarrasla.netlify.app/",
        challenge:
            "Build a shopping cart that stays consistent as customers add, remove and update products, without losing their selection when they leave and come back.",
        solution:
            "I centralized the cart logic in a reducer with typed actions for adding, removing, increasing, decreasing and clearing items, so every change goes through one predictable place. Quantities are limited to between 1 and 5 per guitar, the total is derived from the cart state instead of being stored separately, and the cart is synced to localStorage so it is restored on the next visit. The app is built with Vite and deployed on Netlify.",
        results: [
            "Predictable cart behavior: every update goes through a single typed reducer",
            "The cart survives page reloads and return visits",
            "A live, deployed store that anyone can try",
        ],
    },
];
