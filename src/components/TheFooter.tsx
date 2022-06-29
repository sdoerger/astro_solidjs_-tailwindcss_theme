import { For } from "solid-js";

export default function (props: { content: any }) {
  const TheFooter = props.content;

  return (
    <div class="grid gap-4 md:grid-cols-4">
      <ul class="space-y-1 text-gray-400">
        <li class="pb-4 font-serif text-gray-400">Social networks</li>

        <For each={TheFooter.social}>
          {(item) => (
            <li>
              <a href={item.link} class="hover:underline" target="_blank">
                {item.name}
              </a>
            </li>
          )}
        </For>
      </ul>
      <ul class="space-y-1 text-gray-400">
        <li class="pb-4 font-serif text-gray-400">Über</li>
        <For each={TheFooter.company}>
          {(item) => (
            <li>
              <a href={item.link} class="hover:underline">
                {item.name}
              </a>
            </li>
          )}
        </For>
      </ul>
      <ul class="space-y-1 text-gray-400">
        <li class="pb-4 font-serif text-gray-400">Kontakt</li>
        <For each={TheFooter.contact}>
          {(item) => (
            <li>
              <a href={item.link} class="hover:underline">
                {item.name}
              </a>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}
