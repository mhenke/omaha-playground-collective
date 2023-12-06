"use client";

import { useState } from "react";

const AgeRangesPage = ({}) => {
  const [name, setName] = useState("");

  const handleCreate = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      // Use the API route for form submission
      const response = await fetch("/api/ageRange/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      if (response.ok) {
        // Optionally, handle success on the client side
        // Reload the page or update the local state as needed
        console.log("Form submitted successfully");
      } else {
        // Handle server-side errors
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      if (error instanceof Error) {
        // Now TypeScript knows that `error` is an instance of `Error`
        console.error("Error submitting form:", error.message);
      } else {
        // If it's not an `Error`, we can't be sure what properties it has
        console.error("An error occurred:", error);
      }
    }
  };

  return (
    <div className="p-4">
      {/* ... existing code ... */}
      <form className="mt-4" onSubmit={handleCreate}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="mr-2 rounded border border-gray-300 p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          type="submit"
          className="rounded bg-green-500 px-2 py-1 text-white"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default AgeRangesPage;
