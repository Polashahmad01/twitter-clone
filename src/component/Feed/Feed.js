import React, { useState, useEffect } from 'react';

import './Feed.css';
import TweetBox from './TweetBox/TweetBox';
import Post from './Post/Post';
import db from '../Firebase/Firebase';
import FlipMove from 'react-flip-move';

const Feed = () => {
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => {
                return doc.data();
            }));
        });
    }, [])

    return (
        <div className="feed">
           <div className="feed__header">
                <h2>Home</h2>
           </div>
           <TweetBox />

            <FlipMove>
                {posts.map((post) => {
                    return <Post 
                                key={post.text}
                                dispalyName={post.displayName}
                                username={post.username}
                                verified={post.verified}
                                text={post.text}
                                avatar={post.avatar}           
                                image={post.image}
                            />
                })}
            </FlipMove>
        </div>
    );
};

export default Feed;