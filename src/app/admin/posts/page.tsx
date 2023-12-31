"use client";

import { type Playground } from "@prisma/client";
import { useEffect, useState } from "react";
import Loading from "~/app/_components/Loading";
import { api } from "~/trpc/react";
import AdminNav from "../AdminNav";

const Posts = () => {
  const postsQuery = api.post.getAll.useQuery({}, {});
  const playgroundsQuery = api.playground.getAll.useQuery();

  const { data: posts } = postsQuery;
  const { data: playgrounds } = playgroundsQuery;

  const handleCreateSuccess = async () => {
    resetFormState();
    handleCloseDialog();
    await postsQuery.refetch();
  };

  const createPostMutation = api.post.create.useMutation({
    onSuccess: handleCreateSuccess,
  });
  const updatePostMutation = api.post.update.useMutation({
    onSuccess: async () => {
      handleCloseDialog();
      await postsQuery.refetch();
    },
  });
  const deletePostMutation = api.post.delete.useMutation({
    onSuccess: async () => {
      handleCloseDialog();
      await postsQuery.refetch();
    },
  });
  type PostWithAuthor = {
    id: number;
    title: string;
    content: string;
    authorId: string;
    playgroundId: number | null;
    createdAt: Date;
    updatedAt: Date;
    instagram_id: string | null;
    author: {
      name: string;
    };
  };
  const [selectedPost, setSelectedPost] = useState<PostWithAuthor | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [selectedPlayground, setSelectedPlayground] = useState<number | null>(
    null,
  );

  useEffect(() => {
    if (selectedPost) {
      setTitle(selectedPost.title);
      setContent(selectedPost.content);
      setAuthor(selectedPost.author.name);
      setSelectedPlayground(selectedPost.playgroundId ?? null);
    } else {
      resetFormState();
    }
  }, [selectedPost]);

  const resetFormState = () => {
    setTitle("");
    setContent("");
    setAuthor("");
    setSelectedPlayground(null);
  };

  const handleDeletePost = (id: number) => {
    deletePostMutation.mutate({ id });
  };

  const handleUpdatePost = () => {
    const postData = {
      title,
      content,
      playgroundId: selectedPlayground,
    };

    const filteredData = Object.fromEntries(
      Object.entries(postData).filter(([value]) => value !== null),
    );

    if (selectedPost) {
      updatePostMutation.mutate({
        id: selectedPost.id,
        title: title || "",
        content: content || "",
        ...filteredData,
      });
    } else {
      createPostMutation.mutate({
        title: title || "",
        content: content || "",
        ...filteredData,
      });
    }
  };

  const handleCloseDialog = () => {
    const modal = document.getElementById("edit_modal");
    modal?.classList.remove("modal-open");
  };

  const openEditModal = (post: PostWithAuthor | null) => {
    setSelectedPost(post);
    // Set other fields as needed
    const modal = document.getElementById("edit_modal");
    modal?.classList.add("modal-open");
  };

  return (
    <div>
      <AdminNav />
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
                <button
                  className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
                  onClick={handleCloseDialog}
                >
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

              <div className="py-4">
                <label className="block text-sm font-medium text-gray-700">
                  Playground:
                </label>
                <select
                  value={selectedPlayground ?? ""}
                  onChange={(e) =>
                    setSelectedPlayground(parseInt(e.target.value))
                  }
                  className="select mt-1 w-full max-w-xs rounded border p-2"
                >
                  <option disabled value="">
                    Pick a playground
                  </option>
                  {playgrounds?.map((playground: Playground) => (
                    <option key={playground.id} value={playground.id}>
                      {playground.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="py-4">
                <label className="block text-sm font-medium text-gray-700">
                  Content
                </label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="mt-1 w-full rounded border p-2"
                />
              </div>
              <div className="py-4">
                <p>Author: {author}</p>
              </div>
              <div className="py-4">
                <p>Created:</p>
              </div>
              <div className="py-4">
                <p>Updated:</p>
              </div>

              <div className="modal-action">
                <form method="dialog">
                  <div className="flex justify-end">
                    <button className="btn ml-1" onClick={handleCloseDialog}>
                      Cancel
                    </button>
                    <button
                      className="btn btn-primary ml-1"
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
