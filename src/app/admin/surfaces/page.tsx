"use client";

import { type Surface } from "@prisma/client";
import { useState } from "react";
import Loading from "~/app/_components/Loading";
import { api } from "~/trpc/react";
import AdminNav from "../AdminNav";

const Surfaces = () => {
  const surfacesQuery = api.surface.getAll.useQuery();
  const { data: surfaces } = surfacesQuery;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedSurface, setSelectedSurface] = useState<Surface | null>(null);

  const resetFormState = () => {
    setName("");
    setDescription("");
  };

  const handleCreateSuccess = async () => {
    resetFormState();
    handleCloseDialog();
    await surfacesQuery.refetch();
  };

  const createSurfaceMutation = api.surface.create.useMutation({
    onSuccess: handleCreateSuccess,
  });

  const updateSurfaceMutation = api.surface.update.useMutation({
    onSuccess: async () => {
      handleCloseDialog();
      await surfacesQuery.refetch();
    },
  });

  const deleteSurfaceMutation = api.surface.delete.useMutation({
    onSuccess: async () => {
      await surfacesQuery.refetch();
    },
  });

  const handleUpdateSurface = () => {
    if (selectedSurface) {
      updateSurfaceMutation.mutate({
        id: selectedSurface.id,
        name,
        description,
      });
    } else {
      createSurfaceMutation.mutate({ name, description });
    }
  };

  const handleDeleteSurface = (id: number) => {
    deleteSurfaceMutation.mutate({ id });
  };

  const handleCloseDialog = () => {
    document.getElementById("edit_modal")?.classList.remove("modal-open");
  };

  const openEditModal = (surface: Surface | null) => {
    setSelectedSurface(surface);
    setName(surface ? surface.name : "");
    setDescription(surface ? surface.description : "");
    document.getElementById("edit_modal")?.classList.add("modal-open");
  };

  return (
    <div>
      <AdminNav />
      <div className="min-h-screen px-4 py-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-2">
        <div className="flex flex-col sm:mx-auto sm:max-w-full md:max-w-full lg:max-w-full">
          <h1 className="mb-4 text-3xl font-bold">Manage Surfaces</h1>
          <div className="min-w-full">
            <button
              className="btn btn-primary mb-4 flex justify-end"
              onClick={() => openEditModal(null)} // Open modal for new surface
            >
              Add Surface
            </button>
          </div>
          {surfacesQuery.isLoading ? (
            <Loading />
          ) : (
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr>
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Description</th>
                  <th className="border p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {surfaces?.map((surfaceItem) => (
                  <tr key={surfaceItem.id}>
                    <td className="border p-2">{surfaceItem.name}</td>
                    <td className="border p-2">{surfaceItem.description}</td>
                    <td className="border p-2">
                      <button
                        className="btn btn-sm m-1"
                        onClick={() => openEditModal(surfaceItem)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-error btn-sm m-1"
                        onClick={() => handleDeleteSurface(surfaceItem.id)}
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
                {selectedSurface ? "Edit Surface" : "Add New Surface"}
              </h3>
              <div className="py-4">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded border p-2"
                />
              </div>
              <div className="py-4">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 w-full rounded border p-2"
                />
              </div>

              <div className="modal-action">
                <form method="dialog">
                  <div className="flex justify-end">
                    <button className="btn" onClick={handleCloseDialog}>
                      Cancel
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={handleUpdateSurface}
                    >
                      {selectedSurface ? "Update" : "Save"}
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

export default Surfaces;
