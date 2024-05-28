

export const LibreryIcon = ({ className, ...rest }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${className}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
    </svg>
);

export const UserIcon = ({ className, ...rest }) => (
    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={` ${className}`}>
        <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const HomeIcon = ({ className, ...rest }) => (
    <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={` ${className}`}>
        <path d="M3 9.5L12 4L21 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 13V19.4C19 19.7314 18.7314 20 18.4 20H5.6C5.26863 20 5 19.7314 5 19.4V13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const CalculatorIcon = ({ className, ...rest }) => (
    <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={` ${className}`}>
        <path d="M1 21V3C1 1.89543 1.89543 1 3 1H21C22.1046 1 23 1.89543 23 3V21C23 22.1046 22.1046 23 21 23H3C1.89543 23 1 22.1046 1 21Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15 7L17 7H19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 15.5H17L19 15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 18.5H17H19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 7H7M9 7H7M7 7V5M7 7V9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.58609 18.4142L7.0003 17M8.41452 15.5858L7.0003 17M7.0003 17L5.58609 15.5858M7.0003 17L8.41452 18.4142" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const UserClassicIcon = ({ className, ...rest }) => (
    <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={` ${className}`}>
        <path d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const LessThan = ({ className, stroke,...rest }) => (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="m17 4-8.33057 6.0405c-2.22591 1.614-2.2259 2.305 0 3.919l8.33057 6.0405" stroke={`${stroke}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className={` ${className}`}/>
    </svg>

);

export const GreaterThan = ({ className, stroke, ...rest }) => (
    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="m7 4 8.3306 6.0405c2.2259 1.614 2.2259 2.305 0 3.919l-8.3306 6.0405" stroke={`${stroke}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className={` ${className}`}/>
    </svg>

);





