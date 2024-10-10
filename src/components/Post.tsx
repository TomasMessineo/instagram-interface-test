import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, X } from 'lucide-react';

interface Comment {
  id: number;
  username: string;
  text: string;
}

interface PostProps {
  username: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: Comment[];
}

const Post: React.FC<PostProps> = ({ username, imageUrl, caption, likes, comments }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [newComment, setNewComment] = useState('');

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      // In a real app, you would send this to an API
      console.log('New comment:', newComment);
      setNewComment('');
    }
  };

  return (
    <div className="border rounded-lg overflow-hidden relative">
      <div className="p-4 flex items-center">
        <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
        <span className="font-semibold">{username}</span>
      </div>
      <img src={imageUrl} alt="Post" className="w-full h-96 object-cover" />
      <div className="p-4">
        <div className="flex justify-between mb-2">
          <div className="flex space-x-4">
            <Heart className="w-6 h-6 cursor-pointer" />
            <MessageCircle className="w-6 h-6 cursor-pointer" onClick={() => setShowPreview(true)} />
            <Send className="w-6 h-6 cursor-pointer" />
          </div>
          <Bookmark className="w-6 h-6 cursor-pointer" />
        </div>
        <p className="font-semibold mb-1">{likes} likes</p>
        <p>
          <span className="font-semibold mr-2">{username}</span>
          {caption}
        </p>
      </div>

      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] flex">
            <div className="w-2/3">
              <img src={imageUrl} alt="Post" className="w-full h-full object-cover" />
            </div>
            <div className="w-1/3 flex flex-col">
              <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                    <span className="font-semibold">{username}</span>
                  </div>
                  <X className="w-6 h-6 cursor-pointer" onClick={() => setShowPreview(false)} />
                </div>
              </div>
              <div className="flex-grow overflow-y-auto p-4">
                <p className="mb-4">
                  <span className="font-semibold mr-2">{username}</span>
                  {caption}
                </p>
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <p key={comment.id}>
                      <span className="font-semibold mr-2">{comment.username}</span>
                      {comment.text}
                    </p>
                  ))}
                </div>
              </div>
              <div className="p-4 border-t">
                <form onSubmit={handleSubmitComment}>
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full border rounded p-2"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;