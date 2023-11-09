import exp from "constants";

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

export interface SalaryEntity {
    current: string;
    expected: string;
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
    salary: SalaryEntity;
}


export const MyResume: ResumeEntity = {
    "name": "Anggraeni Wisono",
    "role": "Senior QA Engineer",
    "profile": "Senior QA Engineer with over 12 years of experience in travel agent industry and e-Taxation Indonesia, with a proven track record in testing complex systems both manually and automatically. ",
    "educations": [
        {
            "title": "Studying S1 Computer Science",
            "university": "Universitas Terbuka",
            "year": "2022-current"
        },
        {
            "title": "Diploma",
            "university": "Polytechnic Of Bandung",
            "year": "1995-1998"
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
            "title": "Senior QA Engineer",
            "company": "Qualysoft",
            "dates": "2022-Current",
            "responsibilities": [
                "Prepare Test Cases for new system at DJP .",
                "Prepare and maintain automated script for all created test cases"

            ],
            "location": "Central Jakarta, Indonesia"
        },
        {
            "title": "Business Analyst and QA ",
            "company": "Sentra Solusi Informatika",
            "dates": "April 2012-June 2022",
            "responsibilities": [
                "Designed new features, communicated with stakeholder, and prepared documentations.",
                "Prepared Test Cases and run testing for every deployment.",
                "Involved in developing new system for Web Based such as Travelite, Fix Asset Management System, Sales and Purchase System, and School Administration System."
            ],
            "location": "Centra Jakarta, Indonesia"
        },
        {
            "title": "Head Of Accounting",
            "company": "Nongsapura Terminal",
            "dates": "2011-2012",
            "responsibilities": [
                "Prepared monthly and quaterly Management Report .",
                "Managing daily accounting transactions, coordinate annual budget and forecast preparation, submission and presentation.",
                "Established a robust monitoring and alerting system using prometheus and grafana to track key performance indicators, promptly identifying and resolving potential performance bottlenecks.",
            ],
            "location": "Batam, Indonesia"
        },

        {
            "title": "Finance and Accounting",
            "company": "Panasia Group",
            "dates": "1999-2004",
            "responsibilities": [
                "Responsible as Finance and AR Accounting.",
            ],
            "location": "Bandung, Indonesia"
        }
    ],
    "expertise": [
        "QA Manual & Automation : To ensure product quality, plan and do testing up to 70% coverage",
        "Product Management: Follow the best practice of agile and scrum activity"
    ],
    "skills": [
        "Jira",
        "Confluence",
        "Git",
        "C#",
        "javascript",
        "Jenkins",
        "MySQL",
        "Cypress.io",
        "Selenium",
        "BDD",
        "Gherkin: cucumber, specflow ",
        "UML",

    ],
    "contact": {
        "email": "anggraeniwisono@gmail.com",
        "phone": "+6283872989393",
        "linkedIn": "https://id.linkedin.com/in/anggraeni-wisono-48544746"
    },
    "salary": {
        "current": "Rp. 20.700.000,-",
        "expected": "Rp. 21.700.000,-",
    },
};