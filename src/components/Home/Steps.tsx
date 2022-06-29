import { For } from "solid-js";

function idxColor(idx: number): string {
  const index = Number(idx + 1);

  let color = "text-green-400 bg-green-800";
  if (index % 2 === 0) color = "text-indigo-400 bg-indigo-800";
  if (index % 3 === 0) color = "text-teal-400 bg-teal-800";
  return color;
}

export default function (props: {
  items: { title?: string; description: string }[];
}) {
  return (
    <>
      <div class="grid gap-4 md:grid-cols-3">
        <For each={props.items}>
          {(item, i) => (
            <div class="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-br from-gray-900 to-black">
              <div class="lg:flex lg:justify-start lg:items-center">
                <p
                  class={
                    idxColor(i()) +
                    " " +
                    "flex items-center justify-center text-4xl font-semibold text-green-400 bg-green-800 rounded-full shadow-lg w-14 h-14"
                  }
                >
                  {i() + 1}
                </p>
                <h2
                  class={
                    idxColor(i()) +
                    " " +
                    "mt-5 lg:mt-0 lg:ml-5 font-sans text-xl font-medium text-transparent bg-clip-text"
                  }
                >
                  {item.title}
                </h2>
              </div>
              <div class="h-6"></div>
              <p class="font-serif text-3xl">{item.description}</p>
            </div>
          )}
        </For>
      </div>
      <div class="lg:h-40"></div>
    </>
  );
}
