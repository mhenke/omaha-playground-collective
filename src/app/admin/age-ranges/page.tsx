import { revalidatePath } from "next/cache";
import { api } from "~/trpc/server";
import AddButton from "./AddButton";
const todos = ["Learn React"];

const AgeRangesPage = async () => {
  const ageRanges = await api.ageRange.getAll.query();

  console.log(ageRanges);

  async function addAgeRange(todo: string) {
    "use server";

    await new Promise((resolve) => setTimeout(resolve, 3000));

    todos.push(todo);
    revalidatePath("/admin/age-ranges");
  }

  return (
    <main className="p-5">
      <h1 className="text-4xl font-bold">Todos</h1>
      <ul>
        {ageRanges.map((ageRangeItem, _index) => (
          <li key={ageRangeItem.id}>{ageRangeItem.name}</li>
        ))}
      </ul>
      <AddButton addTodo={addAgeRange} />
    </main>
  );
};

export default AgeRangesPage;
