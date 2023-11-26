"use client";

const Modal = () => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-outline btn-primary"
        onClick={() => {
          const modal: any = document.getElementById("my_modal_5");
          if (modal) {
            modal.showModal();
          }
        }}
      >
        Create Post
      </button>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
