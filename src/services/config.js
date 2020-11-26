const devBaseURL = "http://81.70.17.129:3001";
const proBaseURL = "http://81.70.17.129:3001";
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 10000;
