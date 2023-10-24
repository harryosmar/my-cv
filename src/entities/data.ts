export interface WorkExperienceEntity {
    title: string;
    company: string;
    dates: string;
    responsibilities?: string[];
}

export interface EducationEntity {
    title: string;
    university: string;
    year: string;
}

export interface LanguageEntity {
    name: string;
    progress: number;
}

export interface ContactEntity {
    phone: string;
    email: string,
    linkedIn: string;
}

export interface ResumeEntity {
    name: string;
    role: string;
    profile: string;
    languages?: LanguageEntity[];
    educations?: EducationEntity[],
    experiences?: WorkExperienceEntity[],

    expertise?: string[],
    skills?: string[],
    contact: ContactEntity,
}


export const MyResume: ResumeEntity = {
    name: "Harry Osmar Sitohang",
    role: "Senior Principle Engineer",
    profile: "Experienced engineering leader with a proven track record in designing and implementing complex systems across [specific industry or domain]. Adept at driving innovation, managing cross-functional teams, and delivering high-impact solutions. Demonstrated expertise in [key technical skills or technologies], coupled with a deep understanding of industry best practices. Known for optimizing processes, reducing costs, and enhancing overall efficiency. Strong communicator and collaborator with a passion for mentoring and developing talent.",
    educations: [
        {
            title: "Bachelor's Degree in Computer Science",
            university: "BINUS University",
            year: "2012-2015",
        },
        {
            title: "Diploma",
            university: "Del Polytechnic of Informatics",
            year: "2007-2010",
        },
    ],
    languages: [
        {
            name: "Bahasa",
            progress: 100,
        },
        {
            name: "English",
            progress: 85,
        },
    ],
    experiences: [
        {
            "title": "Senior Principle Engineer",
            "company": "Prakerja",
            "dates": "2021-2023",
            "responsibilities": [
                "Successfully engineered and maintained systems handling a staggering 47 million registered users over the past three years. This involved [briefly describe the key responsibilities and challenges you faced]",
                "Successfully designed and implemented a microservices architecture that effortlessly scales, ensuring robust performance and easy maintenance, even during periods of rapid growth.",
                "Led the development of a centralized logging and monitoring solution for microservices, utilizing [mention specific tools, e.g., ELK stack, Prometheus], providing real-time insights into system health and performance.",
            ],
        },
        {
            "title": "Senior Fullstack Engineer",
            "company": "Wayfair",
            "dates": "2018-2019",
            "responsibilities": [
                "Engineered and managed a high-traffic, multi-server platform catering to a diverse global user base across various timezones. This involved overseeing [briefly describe the key responsibilities and challenges you faced].",
                "Championed a culture of test-first development, resulting in a unit test coverage of 70% across the codebase and a significant reduction in bug reports and an overall increase in software reliability. This shift led to a [specific metric, e.g., 30% decrease in post-release bug reports].",
            ],
        },
        {
            "title": "Technical Lead Engineer",
            "company": "OLX",
            "dates": "2014-2018",
            "responsibilities": [
                "Orchestrated the technical infrastructure to accommodate a daily influx of up to 100,000 active users across web, Android, and iOS applications. This entailed [briefly describe the key responsibilities and challenges you faced].",
                "Established a robust monitoring and alerting system to track key performance indicators, promptly identifying and resolving potential performance bottlenecks.",
                "Successfully initiated the adoption of Docker in our production environment, revolutionizing our deployment process. This transition led to streamlined, consistent, and efficient deployments, significantly reducing downtime and ensuring a more resilient and agile production environment.",
            ],
        },
    ],
    expertise: [
        "Microservices Architecture: proficient in designing and implementing microservices architectures, emphasizing scalability, resilience, and maintainability.",
        "DevOps and CI/CD: Deep understanding of DevOps practices and tools. Experienced Implemented robust CI/CD pipelines to automate build, test, and deployment processes.",
        "Monitoring and Alerting: Experienced implemented comprehensive monitoring and alerting solutions systems.",
        "Team Leadership and Mentoring: Providing technical direction and mentorship. Fostered a culture of technical excellence, knowledge sharing, and continuous learning.",
    ],
    skills: [
        "golang",
        "java",
        "php",
        "nodejs",
        "kubernetes",
        "prometheus grafana",
        "ELK datadog",
        "Aliyun AWS GCP",
        "S3 OSS",
        "istio",
        "kong",
        "kafka NSQ SNS SQS rabbitmq",
        "redis memcached",
        "elastic solr",
        "react",
        "grpc restapi",
        "TDD BDD selenium",
        "Jenkins ansible",
        "Design Pattern SOLID Clean Code"
    ],
    contact: {
        email: "harryosmarsitohang@gmail.com",
        phone: "+6281397738684",
        linkedIn: "https://bit.ly/3FrxiSW",
    },
};