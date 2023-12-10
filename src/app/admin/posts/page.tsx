"use client";

import { Playground, Post as PostType } from "@prisma/client";
import { useEffect, useState } from "react";
import Loading from "~/app/_components/Loading";
import { api } from "~/trpc/react";
import AdminNav from "../AdminNav";

const Posts = () => {
  const postsQuery = api.post.getAll;

  useEffect(() => {
    // Fetch posts and playgrounds when the component mounts
    const { data: posts } = postsQuery.useQuery({}, {});

    const playgroundsQuery = api.playground.getAll.useQuery();
    const { data: playgrounds } = playgroundsQuery.useQuery();

    setPosts(posts);
    setPlaygrounds(playgrounds);
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const createPostMutation = api.post.create.useMutation({
    onSuccess: handleMutationSuccess(postsQuery.useQuery({}, {}).refetch),
  });
  const updatePostMutation = api.post.update.useMutation({
    onSuccess: handleMutationSuccess(postsQuery.useQuery({}, {}).refetch),
  });
  const deletePostMutation = api.post.delete.useMutation({
    onSuccess: handleMutationSuccess(postsQuery.useQuery({}, {}).refetch),
  });

  const [selectedPost, setSelectedPost] = useState<PostType | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedPlayground, setSelectedPlayground] = useState("");
  const [playgrounds, setPlaygrounds] = useState<Playground[]>([]);
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    // Fetch posts and playgrounds when the component mounts
    const postsQuery = api.post.getAll.useQuery({}, {});
    const playgroundsQuery = api.playground.getAll.useQuery();

    const { data: posts } = postsQuery;
    const { data: playgrounds } = playgroundsQuery;

    setPosts(posts);
    setPlaygrounds(playgrounds);
  }, []); // Empty dependency array means this effect runs once when the component mounts

  useEffect(() => {
    if (selectedPost) {
      setTitle(selectedPost.title);
      setContent(selectedPost.content);
      setSelectedPlayground(selectedPost.playgroundId?.toString() || "");
    } else {
      resetFormState();
    }
  }, [selectedPost]);

  function handleMutationSuccess(refetch: () => void) {
    return async () => {
      handleCloseDialog();
      await refetch();
    };
  }

  const resetFormState = () => {
    setTitle("");
    setContent("");
    setSelectedPlayground("");
  };

  const handleDeletePost = (id: number) => {
    deletePostMutation.mutate({ id });
  };

  const handleUpdatePost = () => {
    if (selectedPost) {
      updatePostMutation.mutate({
        id: selectedPost.id,
        title,
        content,
      });
    } else {
      createPostMutation.mutate({
        title,
        content,
      });
    }
  };

  const handleCloseDialog = () => {
    const modal = document.getElementById("edit_modal");
    modal?.classList.remove("modal-open");
  };

  const openEditModal = (post: PostType | null) => {
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
                  value={selectedPlayground || ""}
                  onChange={(e) => setSelectedPlayground(e.target.value)}
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
                <p>Author Name: NAME GOES HERE</p>
              </div>

              <div className="modal-action">
                <form method="dialog">
                  <div className="flex justify-end">
                    <button className="btn" onClick={handleCloseDialog}>
                      Cancel
                    </button>
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
