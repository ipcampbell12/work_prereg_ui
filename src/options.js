export const gradeLevels = [
    "Kindergarten",
    "1st Grade",
    "2nd Grade",
    "3rd Grade",
    "4th Grade",
    "5th Grade",
    "6th Grade",
    "7th Grade",
    "8th Grade",
    "9th Grade",
    "10th Grade",
    "11th Grade",
    "12th Grade"
];

export const schoolNames = [
    "Hogwarts School of Witchcraft and Wizardry",
    "Shermer High School",
    "East High School",
    "Springfield Elementary School",
    "Sunnydale High School"
];

export const languages = [
    "English",
    "Spanish",
    "Mam",
    "Chuj",
    "Russian",
    "Ukranian",
    "Popti",
    "Mixteco",
    "Q'anjob'al",
    "Arabic"
];


export const tags = {
    "504 Plan": "504",
    "Special Ed": "IEP",
    "Transition Meeting": "TM",
    "Needs ELPA Screener": "ELPA",
    "Out of State EL": "OSEL",
    "In State EL": "ISEL",
    "Overflow": "OF",
    "Health concern": "ROI",
    "Gaps in schooling": "SLIFE",
    "Dual language assessment required": "DLA"
};

export const copyToClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
};