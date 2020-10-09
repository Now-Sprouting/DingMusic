const devBaseURL = "http://47.92.6.241:4000";
const proBaseURL = "http://47.92.6.241:4000";
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 10000;
