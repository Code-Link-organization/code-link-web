/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import useFetch from "../../../../../CustomHooks/useFetch";
import { toFormData } from "../../../../../Functions/toFormData";
import { postOptions } from "../../../../../options";
import { addComment } from "../../../../../store/posts/postsSlice";
import ReactLoading from 'react-loading';
import { useDispatch } from 'react-redux';
import { fetchPosts } from "../../../../../store/posts/fetchPosts";

function CreateCommentForm({ id }) {
  const { fetchApi: createComment, loading } = useFetch(`http://localhost:8000/api/posts/${id}/comments/create`, postOptions);
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      const resData = await createComment(toFormData([{ name: 'content', value: comment }]));
      if (resData.ok) {
        dispatch(addComment({ comments: resData.data.comments, postId: id }));
        dispatch(fetchPosts())
      }
      setComment('')
    }
  };

  return (
    <form onSubmit={handleSubmit} className='border-t-[1.5px] border-t-[rgba(227,227,227,1)] mt-auto min-h-[70px] w-full flex'>
      <input
        type='text'
        value={comment}
        className="pl-[70px] flex-grow bg-transparent placeholder:text-sm !w-[calc(100%_-_50px)] focus:placeholder:text-customblack outline-none"
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment..."
      />
      {!loading ? (
        <button type='submit' className="pr-7 text-sm">Post</button>
      ) : (
        <div className="center-element element-center pr-[25px]">
          <ReactLoading className="mx-auto" type={'spin'} color={"#D9C6A4"} height={25} width={25} />
        </div>
      )}
    </form>
  );
}

export default CreateCommentForm;
