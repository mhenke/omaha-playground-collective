"use client";

import { type AgeRange } from "@prisma/client"; // Assuming AgeRange is the correct import
import { useState } from "react";
import Loading from "~/app/_components/Loading";
import { api } from "~/trpc/react";
import AdminNav from "../AdminNav";

const AgeRange = () => {
  const ageRangesQuery = api.ageRange.getAll.useQuery();
  const { data: ageRanges } = ageRangesQuery;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedAgeRange, setSelectedAgeRange] = useState<AgeRange | null>(
    null,
  );

  const resetFormState = () => {
    setName("");
    setDescription("");
  };

  const handleCreateSuccess = async () => {
    resetFormState();
    handleCloseDialog();
    await ageRangesQuery.refetch();
  };

  const createAgeRangeMutation = api.ageRange.create.useMutation({
    onSuccess: handleCreateSuccess,
  });

  const updateAgeRangeMutation = api.ageRange.update.useMutation({
    onSuccess: async () => {
      handleCloseDialog();
      await ageRangesQuery.refetch();
    },
  });

  const deleteAgeRangeMutation = api.ageRange.delete.useMutation({
    onSuccess: async () => {
      await ageRangesQuery.refetch();
    },
  });

  const handleUpdateAgeRange = () => {
    if (selectedAgeRange) {
      updateAgeRangeMutation.mutate({
        id: selectedAgeRange.id,
        name,
        description,
      });
    } else {
      createAgeRangeMutation.mutate({ name, description });
    }
  };

  const handleDeleteAgeRange = (id: number) => {
    deleteAgeRangeMutation.mutate({ id });
  };

  const handleCloseDialog = () => {
    document.getElementById("edit_modal")?.classList.remove("modal-open");
  };

  const openEditModal = (ageRange: AgeRange | null) => {
    setSelectedAgeRange(ageRange);
    setName(ageRange ? ageRange.name : "");
    setDescription(ageRange ? ageRange.description : "");
    document.getElementById("edit_modal")?.classList.add("modal-open");
  };

  return (
    <div>
      <AdminNav />
      <div className="min-h-screen px-4 py-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-2">
        <div className="flex flex-col sm:mx-auto sm:max-w-full md:max-w-full lg:max-w-full">
          <h1 className="mb-4 text-3xl font-bold">Manage Age Ranges</h1>
          <div className="min-w-full">
            <button
              className="btn btn-primary mb-4 flex justify-end"
              onClick={() => openEditModal(null)} // Open modal for new age range
            >
              Add Age Range
            </button>
          </div>
          {ageRangesQuery.isLoading ? (
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
                {ageRanges?.map((ageRangeItem) => (
                  <tr key={ageRangeItem.id}>
                    <td className="border p-2">{ageRangeItem.name}</td>
                    <td className="border p-2">{ageRangeItem.description}</td>
                    <td className="border p-2">
                      <button
                        className="btn btn-sm m-1"
                        onClick={() => openEditModal(ageRangeItem)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-error btn-sm m-1"
                        onClick={() => handleDeleteAgeRange(ageRangeItem.id)}
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
                {selectedAgeRange ? "Edit Age Range" : "Add New Age Range"}
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
                    <button className="btn ml-1" onClick={handleCloseDialog}>
                      Cancel
                    </button>
                    <button
                      className="btn btn-primary ml-1"
                      onClick={handleUpdateAgeRange}
                    >
                      {selectedAgeRange ? "Update" : "Save"}
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

export default AgeRange;
