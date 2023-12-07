"use client";

import { useState } from "react";
import Loading from "~/app/_components/Loading";
import { api } from "~/trpc/react";

const Posts = () => {
  const postsQuery = api.post.getAll.useQuery({});
  const { data: posts } = postsQuery;

  const [title, setTitle] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);

  const resetFormState = () => {
    setTitle("");
  };

  const handleCreateSuccess = () => {
    resetFormState();
    document.getElementById("edit_modal").classList.remove("modal-open");
    postsQuery.refetch();
  };

  const createPostMutation = api.post.create.useMutation({
    onSuccess: handleCreateSuccess,
  });

  const updatePostMutation = api.post.update.useMutation({
    onSuccess: () => {
      document.getElementById("edit_modal").classList.remove("modal-open");
      postsQuery.refetch();
    },
  });

  const deletePostMutation = api.post.delete.useMutation({
    onSuccess: postsQuery.refetch,
  });

  const handleUpdatePost = () => {
    if (selectedPost) {
      updatePostMutation.mutate({
        id: selectedPost.id,
        title,
      });
    } else {
      createPostMutation.mutate({ title });
    }
  };

  const handleDeletePost = (id) => {
    deletePostMutation.mutate({ id });
  };

  const openEditModal = (post) => {
    setSelectedPost(post);
    setTitle(post ? post.title : "");
    document.getElementById("edit_modal").showModal();
  };

  return (
    <div>
      {/* Your AdminNav component goes here */}
      <div className="min-h-screen px-4 py-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-2">
        <div className="flex flex-col sm:mx-auto sm:max-w-full md:max-w-full lg:max-w-full">
          <h1 className="mb-4 text-3xl font-bold">Manage Posts</h1>
          <div className="min-w-full">
            <button
              className="btn btn-primary mb-4 flex justify-end"
              onClick={() => openEditModal(null)}
            >
              Add Post
            </button>
          </div>
          {postsQuery.isLoading ? (
            <Loading />
          ) : (
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr>
                  <th className="border p-2">Title</th>
                  <th className="border p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts?.map((postItem) => (
                  <tr key={postItem.id}>
                    <td className="border p-2">{postItem.title}</td>
                    <td className="border p-2">
                      <button
                        className="btn btn-sm m-1"
                        onClick={() => openEditModal(postItem)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-error btn-sm m-1"
                        onClick={() => handleDeletePost(postItem.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <dialog
            id="edit_modal"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <form method="dialog" className="flex justify-end">
                <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="text-lg font-bold">
                {selectedPost ? "Edit Post" : "Add New Post"}
              </h3>
              <div className="py-4">
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 w-full rounded border p-2"
                />
              </div>

              <div className="modal-action">
                <form method="dialog">
                  <div className="flex justify-end">
                    <button className="btn">Cancel</button>
                    <button
                      className="btn btn-primary"
                      onClick={handleUpdatePost}
                    >
                      {selectedPost ? "Update" : "Save"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Posts;
