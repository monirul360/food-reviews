import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div>
            <div className="blog">
                <h2>What is context API?</h2>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className="blog">
                <h2>ami ekjon web developer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, magnam?</p>
            </div>
        </div>
    );
};

export default Blogs;