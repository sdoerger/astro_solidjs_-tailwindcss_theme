export default function (props: { title: string; subtitle: string }) {
  return (
    <>
      <h1 class="font-sans text-4xl font-bold text-gray-200 max-w-5xl lg:text-7xl lg:pr-24 md:text-6xl">
        {props.title}
      </h1>
      <div class="h-10"></div>
      <h2 class="max-w-2xl font-serif text-xl text-gray-400 md:text-2xl">
        {props.subtitle}
      </h2>
      <div class="h-32 md:h-40"></div>
    </>
  );
}
