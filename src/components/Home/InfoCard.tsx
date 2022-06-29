import { For } from "solid-js";

export default function (props: {
  title: string;
  subtitle: string;
  description: string;
  items: { title: string; description: string }[];
}) {
  return (
    <div class="grid gap-8 md:grid-cols-3">
      <div class="flex flex-col justify-center md:col-span-2">
        <p class="self-start inline font-sans text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-teal-600">
          {props.title}
        </p>
        <h2 class="text-4xl font-bold">{props.subtitle}</h2>
        <div class="h-6"></div>
        <p class="font-serif text-xl text-gray-400 md:pr-10">
          {props.description}
        </p>
        <div class="h-8"></div>
        <div class="grid gap-6 pt-8 border-t border-gray-800 lg:grid-cols-3 mb-12">
          <For each={props.items}>
            {(item, i) => (
              <div>
                <p class="font-semibold text-gray-400">{item.title}</p>
                <div class="h-4"></div>
                <p class="font-serif text-gray-400">{item.description}</p>
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  );
}
