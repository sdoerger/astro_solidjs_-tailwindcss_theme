import { createSignal, Show, For } from "solid-js";

export const [showNavi, setShowNavi] = createSignal(false);

export default function (props: { pages }) {
  return (
    <>
      <div
        onclick={() => setShowNavi(!showNavi())}
        class="fixed z-10 top-7 right-10  lg:top-10
        lg:right-10 cursor-pointer self-start px-3 py-2 leading-none inline font-sans text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-teal-600"
      >
        <div class="mt-2 min-w-8 min-h-8 right-6 z-30 absolute">
          <Show when={!showNavi()}>
            <div class="w-8 border-b-4 mb-0.5 border-sdDarkGrey-800"></div>
            <div class="w-8 border-b-4 mb-0.5 border-sdDarkGrey-800"></div>
            <div class="w-8 border-b-4 mb-0.5 border-sdDarkGrey-800"></div>
            <div class="w-8 border-b-4 mb-0.5 border-sdDarkGrey-800"></div>
            <div class="w-8 border-b-4 mb-0.5 border-sdDarkGrey-800"></div>
          </Show>
          <Show when={showNavi()}>
            <div class="h-8 w-8 absolute right-0.5" style="">
              <div class="w-8 border-b-4 mb-1 border-sdDarkGrey-800 transform -rotate-45 relative top-4"></div>
              <div class="w-8 border-b-4 mb-1 border-sdDarkGrey-800 transform rotate-45 relative top-2"></div>
            </div>
          </Show>
        </div>
      </div>
      <Show when={showNavi()}>
        <div class="fixed top-0 right-0 p-20 w-screen h-screen bg-gradient-to-br from-teal-400 to-teal-700">
          <nav class="flex flex-col justify-start items-center flex-wrap space-x-3 space-y-12">
            <For each={props.pages}>
              {(page) => (
                <a
                  class="font-sans text-2xl font-bold text-gray-200 max-w-5xl lg:text-7xl lg:pr-24 md:text-6xl"
                  href={page?.url === "" ? "/" : page?.url}
                >
                  {page?.frontmatter?.navTitle}
                </a>
              )}
            </For>
          </nav>
        </div>
      </Show>
    </>
  );
}
