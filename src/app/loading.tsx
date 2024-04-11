export default function Loading() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center h-[calc(100vh-245px-88px)] sm:h-[calc(100vh-125px-72px)]">
      <div className="flex animate-pulse gap-2">
        <div className="h-6 aspect-square bg-white rounded-full animate-bounce" />
        <div className="h-6 aspect-square bg-white rounded-full delay-150 animate-bounce" />
        <div className="h-6 aspect-square bg-white rounded-full delay-300 animate-bounce" />
      </div>
      <p className="animate-pulse text-sm">Loading..</p>
    </div>
  );
}
