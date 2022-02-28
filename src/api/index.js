import axios from 'axios';

const config = {
    baseUrl: 'http://api.hnpwa.com/v0/'
}

function fetchNewsList() {
    return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

async function fetchAskList() {
    try {
        const response = await axios.get(`${config.baseUrl}ask/1.json`);    
        return response;
    } catch (error) {
        console.log(error)
    }
    
}

function fetchUserInfo(userId) {
    const url = `${config.baseUrl}/user/${userId}.json`;
    return axios.get(url);
}

function fetchCommentItem(itemId) {
    return axios.get(`${config.baseUrl}/item/${itemId}.json`);
}

function fetchList(pageName) {
    return axios.get(`${config.baseUrl}${pageName}/1.json`)
}

export {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchUserInfo,
    fetchCommentItem,
    fetchList
}