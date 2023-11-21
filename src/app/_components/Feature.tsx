import { api } from "~/trpc/server";

export const Feature = async () => {
  const ageRange = await api.ageRange.getAll.query(undefined, {});
  const surface = await api.surface.getAll.query(undefined, {});

  return (
    <div className="grid gap-8 sm:mx-auto sm:max-w-sm md:max-w-full md:grid-cols-2 lg:max-w-full lg:grid-cols-3">
      <div className="">
        <div className="dropdown">
          <label tabIndex={0} className="btn m-1">
            Surface
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box z-[1] w-52 bg-base-100 p-2 shadow"
          >
            {surface.map((surface) => (
              <li key={surface.id}>
                <a>{surface.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="join ">
        {ageRange.map((age) => (
          <div className="tooltip" data-tip={age.description} key={age.id}>
            <input
              className="btn join-item"
              type="radio"
              name="options"
              aria-label={age.name}
              key={age.id}
            />
          </div>
        ))}
      </div>

      <div className="form-control w-52 ">
        <label className="label cursor-pointer">
          <span className="label-text">Accessible</span>
          <input type="checkbox" className="toggle toggle-primary" />
        </label>
      </div>
    </div>
  );
};
