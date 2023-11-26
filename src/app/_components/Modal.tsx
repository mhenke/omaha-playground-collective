"use client";

import { api } from "~/trpc/react";
import { useModalStore } from "../_store/modalStore";

const Modal = () => {
  const isWriteModalOpen = useModalStore((state) => state.isWriteModalOpen);
  const setIsWriteModalOpen = useModalStore(
    (state) => state.setIsWriteModalOpen,
  );

  const toggleModal = () => {
    setIsWriteModalOpen(!isWriteModalOpen);
  };

  // Define your form fields
  type FormFields = {
    title: string;
    // other fields...
  };

  const mutation = api.post.create.useMutation();

  // Then, in your form submit handler:
  const onSubmit = () => {
    const title = "Henke was here";
    mutation.mutate({ title });
  };

  return (
    <div>
      <button className="btn btn-outline btn-primary" onClick={toggleModal}>
        Create Post
      </button>

      <input
        type="checkbox"
        id="my_modal_6"
        className="modal-toggle"
        checked={isWriteModalOpen}
        onChange={() => setIsWriteModalOpen(isWriteModalOpen)}
      />
      <dialog className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">This modal works with a hidden checkbox!</p>
          <div>
            <form onSubmit={onSubmit} className="grid grid-cols-1 gap-y-2">
              <div className="flex flex-col">
                <label htmlFor="title" className="text-sm font-semibold">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="rounded-md border border-gray-300 px-2 py-1"
                />
              </div>
            </form>
          </div>
          <div className="modal-action">
            <button className="btn" onClick={onSubmit}>
              save
            </button>
            <button className="btn" onClick={toggleModal}>
              Close!
            </button>
          </div>

          {mutation.error && (
            <div role="alert" className="alert alert-error">
              <span>Something went wrong! {mutation.error.message}</span>
            </div>
          )}
          {mutation.isSuccess && (
            <div role="alert" className="alert alert-success">
              <span>Something went correct! {mutation.data.id}</span>
            </div>
          )}
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
