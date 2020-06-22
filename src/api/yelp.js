import React from 'react'
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer UxKHTsaZqTAIHnUSPbU1rtpadv2Nb4k1ObWvdBO3u2KE8pduKfpZEXeoq-6dqdIP5obQSb5VbnpUcfki1TqWxEHrhPVZIVzqLr5t4WPJ-cG7OKM3Lqd3Hrob6XepXnYx'
    }
})