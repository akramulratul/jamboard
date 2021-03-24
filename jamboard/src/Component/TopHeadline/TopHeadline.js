import React, { useEffect } from 'react';
import { useState } from 'react';
import News from '../News';


const TopHeadline = () => {
    const [articles, setArticles] = useState([]);
    useEffect( () => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=3f412bd1982747a1b7f23e0f25bdab87';
       fetch(url)
       .then(res => res.json())
       .then(data => setArticles(data.articles))
    }, [])
    return (
        <div>
            <h1>Top Headlines:{articles.length}</h1>
            {
                articles.map(article => <News article ={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;