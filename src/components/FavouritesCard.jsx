export default function FavouritesCard() {
  return (
    <>
      <div className="flex flex-col rounded-lg text-sm px-5 py-2.5 m-2 bg-zinc-800 border border-jade-700">
        <img
          className="object-cover h-32 w-full"
          src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Exercise Name</div>
          <p>Category: Chest</p>
        </div>
        <div className="grid grid-cols-2 px-6 pt-4 pb-2 gap-5">
          <button className="bg-jade-500 px-1.5 py-1">+ Calendar</button>
          <button className="bg-zinc-500 text-zinc-200 hover:bg-zinc-600 px-1.5 py-1">
            Remove
          </button>
        </div>
      </div>
      <div className="flex flex-col rounded-lg text-sm px-5 py-2.5 m-2 bg-zinc-800 border border-jade-700">
        <img
          className="object-cover h-32 w-full"
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Exercise Name</div>
          <p>Category: Chest</p>
        </div>
        <div className="grid grid-cols-2 px-6 pt-4 pb-2 gap-5">
          <button className="bg-jade-500 px-1.5 py-1">+ Calendar</button>
          <button className="bg-zinc-500 text-zinc-200 hover:bg-zinc-600 px-1.5 py-1">
            Remove
          </button>
        </div>
      </div>
      <div className="flex flex-col rounded-lg text-sm px-5 py-2.5 m-2 bg-zinc-800 border border-jade-700">
        <img
          className="object-cover h-32 w-full"
          src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Exercise Name</div>
          <p>Category: Chest</p>
        </div>

        <div className="grid grid-cols-2 px-6 pt-4 pb-2 gap-5">
          <button className="bg-jade-500 px-1.5 py-1">+ Calendar</button>
          <button className="bg-zinc-500 text-zinc-200 hover:bg-zinc-600 px-1.5 py-1">
            Remove
          </button>
        </div>
      </div>
    </>
  );
}
