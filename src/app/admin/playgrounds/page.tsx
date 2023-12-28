"use client";

import { type Playground } from "@prisma/client";
import { useEffect, useState } from "react";
import Loading from "~/app/_components/Loading";
import { api } from "~/trpc/react";
import AdminNav from "../AdminNav";

const Playgrounds = () => {
  const playgroundsQuery = api.playground.getAll.useQuery();

  const { data: playgrounds } = playgroundsQuery;

  const ageRangesQuery = api.ageRange.getAll.useQuery();

  const { data: ageRanges } = ageRangesQuery;

  const surfacesQuery = api.surface.getAll.useQuery();

  const { data: surfaces } = surfacesQuery;

  const [selectedPlayground, setSelectedPlayground] =
    useState<Playground | null>(null);
  const [name, setName] = useState("");

  const [address, setAddress] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [state, setState] = useState<string | null>(null);
  const [zip, setZip] = useState<string | null>(null);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [restrooms, setRestrooms] = useState(false);
  const [picnicAreas, setPicnicAreas] = useState(false);
  const [benches, setBenches] = useState(false);
  const [shade, setShade] = useState(false);
  const [accessibleEquip, setAccessibleEquip] = useState(false);
  const [adaCompliance, setAdaCompliance] = useState(false);
  const [selectedSurface, setSelectedSurface] = useState<string | null>(null);
  const [selectedAgeRange, setSelectedAgeRange] = useState<string | null>(null);

  const resetFormState = () => {
    setName("");
    setAddress("");
    setCity("");
    setState("");
    setZip("");
    setLatitude(null);
    setLongitude(null);
    setRestrooms(false);
    setPicnicAreas(false);
    setBenches(false);
    setShade(false);
    setAccessibleEquip(false);
    setAdaCompliance(false);
    setSelectedSurface("");
    setSelectedAgeRange("");
  };

  useEffect(() => {
    if (selectedPlayground) {
      setName(selectedPlayground.name);
      setSelectedAgeRange(selectedPlayground.ageRangeId?.toString() ?? "");
      setSelectedSurface(selectedPlayground.surfaceId?.toString() ?? "");
      setAddress(selectedPlayground?.address);
      setCity(selectedPlayground.city);
      setState(selectedPlayground.state);
      setZip(selectedPlayground.zip);
      setLatitude(selectedPlayground.latitude);
      setLongitude(selectedPlayground.longitude);
      setRestrooms(!!selectedPlayground.restrooms);
      setPicnicAreas(!!selectedPlayground.picnicAreas);
      setBenches(!!selectedPlayground.benches);
      setShade(!!selectedPlayground.shade);
      setAccessibleEquip(!!selectedPlayground.accessibleEquip);
      setAdaCompliance(!!selectedPlayground.adaCompliance);
    } else {
      resetFormState();
    }
  }, [selectedPlayground]);

  const handleCreateSuccess = async () => {
    resetFormState();
    handleCloseDialog();
    await playgroundsQuery.refetch();
  };

  const createPlaygroundMutation = api.playground.create.useMutation({
    onSuccess: handleCreateSuccess,
  });

  const updatePlaygroundMutation = api.playground.update.useMutation({
    onSuccess: async () => {
      handleCloseDialog();
      await playgroundsQuery.refetch();
    },
  });

  const deletePlaygroundMutation = api.playground.delete.useMutation({
    onSuccess: () => playgroundsQuery.refetch,
  });

  const handleDeletePlayground = (id: number) => {
    deletePlaygroundMutation.mutate({ id });
  };

  const handleUpdatePlayground = () => {
    if (selectedPlayground) {
      updatePlaygroundMutation.mutate({
        id: selectedPlayground.id,
        name,
        accessibleEquip,
        adaCompliance,
        address,
        benches,
        city,
        latitude,
        longitude,
        picnicAreas,
        restrooms,
        shade,
        state,
        zip,
        rating: null,
      });
    } else {
      createPlaygroundMutation.mutate({
        name,
        accessibleEquip,
        adaCompliance,
        address,
        benches,
        city,
        latitude,
        longitude,
        picnicAreas,
        restrooms,
        shade,
        state,
        zip,
        rating: null,
      });
    }
  };

  const handleCloseDialog = () => {
    document.getElementById("edit_modal")?.classList.remove("modal-open");
  };

  const openEditModal = (playgroundItem: Playground | null) => {
    setSelectedPlayground(playgroundItem);
    setName(playgroundItem ? playgroundItem.name : "");
    setSelectedAgeRange(playgroundItem?.ageRangeId?.toString() ?? "");
    setSelectedSurface(playgroundItem?.surfaceId?.toString() ?? "");
    // Set other fields as needed
    document.getElementById("edit_modal")?.classList.add("modal-open");
  };

  return (
    <div>
      <AdminNav />
      <div className="min-h-screen px-4 py-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-2">
        <div className="flex flex-col sm:mx-auto sm:max-w-full md:max-w-full lg:max-w-full">
          <h1 className="mb-4 text-3xl font-bold">Manage Playgrounds</h1>
          <div className="min-w-full">
            <button
              className="btn btn-primary mb-4 flex justify-end"
              onClick={() => openEditModal(null)}
            >
              Add Playground
            </button>
          </div>
          {playgroundsQuery.isLoading ? (
            <Loading />
          ) : (
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr>
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {playgrounds?.map((playgroundItem) => (
                  <tr key={playgroundItem.id}>
                    <td className="border p-2">{playgroundItem.name}</td>
                    <td className="border p-2">
                      <button
                        className="btn btn-sm m-1"
                        onClick={() => openEditModal(playgroundItem)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-error btn-sm m-1"
                        onClick={() =>
                          handleDeletePlayground(playgroundItem.id)
                        }
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
                {selectedPlayground ? "Edit Playground" : "Add New Playground"}
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
                  Age Range
                </label>
                <select
                  value={selectedAgeRange ?? ""}
                  onChange={(e) => setSelectedAgeRange(e.target.value)}
                  className="select mt-1 w-full max-w-xs rounded border p-2"
                >
                  <option disabled value="">
                    Pick an age range
                  </option>
                  {ageRanges?.map((ageRange) => (
                    <option key={ageRange.id} value={ageRange.id}>
                      {ageRange.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="py-4">
                <label className="block text-sm font-medium text-gray-700">
                  Surface
                </label>
                <select
                  value={selectedSurface ?? ""}
                  onChange={(e) => setSelectedSurface(e.target.value)}
                  className="select mt-1 w-full max-w-xs rounded border p-2"
                >
                  <option disabled value="">
                    Pick a surface
                  </option>
                  {surfaces?.map((surface) => (
                    <option key={surface.id} value={surface.id}>
                      {surface.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="py-4">
                <p>Author Name: NAME GOES HERE</p>
              </div>
              <div className="py-4">
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  value={address ?? ""}
                  onChange={(e) => setAddress(e.target.value)}
                  className="mt-1 w-full rounded border p-2"
                />
              </div>
              <div className="py-4">
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  value={city ?? ""}
                  onChange={(e) => setCity(e.target.value)}
                  className="mt-1 w-full rounded border p-2"
                />
              </div>
              <div className="py-4">
                <label className="block text-sm font-medium text-gray-700">
                  State
                </label>
                <input
                  type="text"
                  value={state ?? ""}
                  onChange={(e) => setState(e.target.value)}
                  className="mt-1 w-full rounded border p-2"
                />
              </div>
              <div className="py-4">
                <label className="block text-sm font-medium text-gray-700">
                  ZIP
                </label>
                <input
                  type="text"
                  value={zip ?? ""}
                  onChange={(e) => setZip(e.target.value)}
                  className="mt-1 w-full rounded border p-2"
                />
              </div>
              <div className="py-4">
                <label className="block text-sm font-medium text-gray-700">
                  Latitude
                </label>
                <input
                  type="number"
                  value={latitude ?? ""}
                  onChange={(e) => setLatitude(parseFloat(e.target.value))}
                  className="mt-1 w-full rounded border p-2"
                />
              </div>
              <div className="py-4">
                <label className="block text-sm font-medium text-gray-700">
                  Longitude
                </label>
                <input
                  type="number"
                  value={longitude ?? ""}
                  onChange={(e) => setLongitude(parseFloat(e.target.value))}
                  className="mt-1 w-full rounded border p-2"
                />
              </div>
              <div className="py-4">
                <label className="block text-sm font-medium text-gray-700">
                  Restrooms
                </label>
                <input
                  type="checkbox"
                  checked={restrooms}
                  onChange={() => setRestrooms(!restrooms)}
                  className="mt-1"
                />
              </div>
              <div className="py-4">
                <label className="block text-sm font-medium text-gray-700">
                  Picnic Areas
                </label>
                <input
                  type="checkbox"
                  checked={picnicAreas}
                  onChange={() => setPicnicAreas(!picnicAreas)}
                  className="mt-1"
                />
              </div>
              <div className="py-4">
                <label className="block text-sm font-medium text-gray-700">
                  Benches
                </label>
                <input
                  type="checkbox"
                  checked={benches}
                  onChange={() => setBenches(!benches)}
                  className="mt-1"
                />
              </div>
              <div className="py-4">
                <label className="block text-sm font-medium text-gray-700">
                  Shade
                </label>
                <input
                  type="checkbox"
                  checked={shade}
                  onChange={() => setShade(!shade)}
                  className="mt-1"
                />
              </div>
              <div className="py-4">
                <label className="block text-sm font-medium text-gray-700">
                  Accessible Equipment
                </label>
                <input
                  type="checkbox"
                  checked={accessibleEquip}
                  onChange={() => setAccessibleEquip(!accessibleEquip)}
                  className="mt-1"
                />
              </div>
              <div className="py-4">
                <label className="block text-sm font-medium text-gray-700">
                  ADA Compliance
                </label>
                <input
                  type="checkbox"
                  checked={adaCompliance}
                  onChange={() => setAdaCompliance(!adaCompliance)}
                  className="mt-1"
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
                      onClick={handleUpdatePlayground}
                    >
                      {selectedPlayground ? "Update" : "Save"}
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

export default Playgrounds;
