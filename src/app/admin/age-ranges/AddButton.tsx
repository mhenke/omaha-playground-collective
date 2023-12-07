"use client";
import { useRef, useTransition } from "react";

export default function AddButton({
  addTodo,
}: {
  addTodo: (todo: string) => Promise<void>;
}) {
  let [pending, startTransition] = useTransition();
  const todoRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input
        ref={todoRef}
        type="text"
        name="todo"
        className="rounded-lg border border-gray-300 px-4 py-4 text-base font-normal text-gray-600 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <button
        disabled={pending}
        onClick={async () => {
          startTransition(async () => {
            await addTodo(todoRef.current!.value);
          });
        }}
        className="inline-flex items-center justify-center rounded-full bg-blue-600 px-10 py-4 text-center text-base font-normal text-white hover:bg-opacity-90 disabled:bg-gray-500 lg:px-8 xl:px-10"
      >
        Add Todo
      </button>
    </div>
  );
}
