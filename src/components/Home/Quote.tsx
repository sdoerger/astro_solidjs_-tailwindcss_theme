export default function (props: { title: string; subtitle: string }) {
  return (
    <>
      <div class="h-32 md:h-40"></div>
      <p class="font-serif text-4xl">
        <span class="text-gray-400">{props.title}</span>

        <span class="text-gray-600 pl-2">{props.subtitle}</span>
      </p>
      <div class="h-32 md:h-40"></div>
    </>
  );
}
