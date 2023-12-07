import { revalidatePath } from "next/cache";
import { api } from "~/trpc/server";
import AdminNav from "../AdminNav";
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
    <div>
      <AdminNav />
      <div className="min-h-screen px-4 py-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-2">
        <div className="flex flex-col sm:mx-auto sm:max-w-full md:max-w-full lg:max-w-full">
          <h1 className="mb-4 text-3xl font-bold">Manage Age Ranges</h1>
          <div>
            <ul>
              {ageRanges.map((ageRangeItem, _index) => (
                <li key={ageRangeItem.id}>{ageRangeItem.name}</li>
              ))}
            </ul>
            <AddButton addTodo={addAgeRange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeRangesPage;
