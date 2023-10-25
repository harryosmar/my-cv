export interface WorkExperienceEntity {
    title: string;
    company: string;
    location?: string;
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
    "name": "Harry Osmar Sitohang",
    "role": "Senior Principle Engineer",
    "profile": "Senior Principle Engineer with over 12 years of experience in classified, e-commerce, public sector service, with a proven track record in designing and implementing complex systems. Adept at driving innovation, managing cross-functional teams, and delivering high-impact solutions. Demonstrated expertise in \"microservices architecture, DevOps & CI/CD, Monitoring & Alerting\" coupled with a deep understanding of industry best practices. Always iterate for optimizing processes, reducing costs, and enhancing overall efficiency. Strong communicator and collaborator with a passion for mentoring and developing talent.",
    "educations": [
        {
            "title": "Bachelor's Degree in Computer Science",
            "university": "BINUS University",
            "year": "2012-2015"
        },
        {
            "title": "Diploma",
            "university": "Del Polytechnic of Informatics",
            "year": "2007-2010"
        }
    ],
    "languages": [
        {
            "name": "Bahasa",
            "progress": 100
        },
        {
            "name": "English",
            "progress": 85
        }
    ],
    "experiences": [
        {
            "title": "Senior Principle Engineer",
            "company": "Prakerja",
            "dates": "2021-2023",
            "responsibilities": [
                "Successfully engineered and maintained government public service systems handling a staggering 100 million registered users over the past three years, and 47 million transactions. This involved optimize the platform performance. Achieved by microservice architecture easy to scale and maintained and use of robust programming language Go(use of concurrent).",
                "Successfully integrated with partners digital platforms(Tokopedia, Bukalapak, PijarMahir), 251 learning platforms, job platforms(JobStreet, topKarir, Karir.com), payment platform(BNI, BCA, OVO, DANA, GoPay, LinkAja).",
                "Successfully designed and implemented a microservices architecture that effortlessly scales based on utilization, ensuring robust performance and easy maintenance, even during periods of rapid growth.",
                "Completed development of a centralized logging and monitoring solution for microservices, utilizing  ELK stack, Prometheus, Up Time Robot, providing real-time insights into resources, application health and performance."
            ],
            "location": "Central Jakarta"
        },
        {
            "title": "Senior Fullstack Engineer",
            "company": "Wayfair",
            "dates": "2018-2019",
            "responsibilities": [
                "Engineered and managed a high-traffic for e-commerce platform, multi-server platform catering to a diverse global user base across various timezones, US and Europe. This involved overseeing handle localization and internationalization problems.",
                "Achieved a culture of test-first development/TDD, resulting in a unit test coverage of 70% across the codebase and a significant reduction in bug reports and an overall increase in software reliability. This shift led to up to 50% decrease in post-release bug reports.",
                "Achieved implementation of SOLID principles and use of design patterns, resulting in a codebase characterized by high cohesion and low coupling, enabling easier maintenance and extensibility. Enforced coding standards, guidelines and code reviews as a cornerstone of the development process, emphasizing adherence to clean code principles and anti-pattern avoidance."
            ],
            "location": "Berlin"
        },
        {
            "title": "Technical Lead Engineer",
            "company": "OLX",
            "dates": "2014-2018",
            "responsibilities": [
                "Orchestrated and optimized the technical infrastructure to accommodate a daily influx of up to 100,000 active users for classified platform across web, Android, and iOS applications. Achieved by leveraging use of caching layer and autoscaling infrastructure.",
                "Successfully completed the migration of our existing framework and database to a team global framework. This involved meticulous planning, coordination with cross-functional teams, and ensuring seamless transition without disrupting ongoing operations. The migration resulted in improved efficiency, alignment with industry best practices, and enhanced compatibility with global systems.",
                "Established a robust monitoring and alerting system using prometheus and grafana to track key performance indicators, promptly identifying and resolving potential performance bottlenecks.",
            ],
            "location": "South Jakarta"
        }
    ],
    "expertise": [
        "Microservices Architecture: proficient in designing and implementing microservices architectures, emphasizing scalability, resilience, and maintainability.",
        "DevOps and CI/CD: Deep understanding of DevOps practices and tools. Experienced Implemented robust CI/CD pipelines to automate build, test, and deployment processes.",
        "Monitoring and Alerting: Experienced implemented comprehensive monitoring and alerting solutions systems.",
        "Team Leadership and Mentoring: Providing technical direction and mentorship. Fostered a culture of technical excellence, knowledge sharing, and continuous learning.",
    ],
    "skills": [
        "golang",
        "java",
        ".NET Core",
        "php",
        "nodejs",
        "kubernetes",
        "prometheus grafana",
        "ELK datadog",
        "Aliyun AWS GCP",
        "S3 OSS",
        "Service Mesh istio",
        "Api Gateway kong",
        "kafka NSQ SNS SQS rabbitmq",
        "redis memcached",
        "MySQL PostgreSQL SQLServer MongoDB elasticsearch solr",
        "react",
        "grpc restapi",
        "TDD BDD selenium",
        "Jenkins ansible",
        "Design Pattern SOLID Clean Code"
    ],
    "contact": {
        "email": "harryosmarsitohang@gmail.com",
        "phone": "+6281397738684",
        "linkedIn": "https://bit.ly/3FrxiSW"
    }
};