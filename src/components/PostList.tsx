import React from 'react';
import Post from './Post';

const posts = [
  {
    id: 1,
    username: 'johndoe',
    imageUrl: 'https://source.unsplash.com/random/800x800?beach',
    caption: 'Beautiful day at the beach! 🏖️',
    likes: 123,
    comments: [
      { id: 1, username: 'janedoe', text: 'Looks amazing!' },
      { id: 2, username: 'bobsmith', text: 'Wish I was there!' },
    ],
  },
  {
    id: 2,
    username: 'janedoe',
    imageUrl: 'https://source.unsplash.com/random/800x800?city',
    caption: 'Exploring the city 🏙️',
    likes: 89,
    comments: [
      { id: 3, username: 'johndoe', text: 'Great shot!' },
      { id: 4, username: 'sarahlee', text: 'Which city is this?' },
    ],
  },
  {
    id: 3,
    username: 'bobsmith',
    imageUrl: 'https://source.unsplash.com/random/800x800?food',
    caption: 'Delicious homemade pasta 🍝',
    likes: 56,
    comments: [
      { id: 5, username: 'foodlover', text: 'Recipe please!' },
      { id: 6, username: 'chefjamie', text: 'Looks delicious!' },
    ],
  },
];

const PostList: React.FC = () => {
  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostList;