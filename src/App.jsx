import CrossIcon from "./components/CrossIcon";
import MoonIcon from "./components/MoonIcon";

const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat min-h-screen bg-gray-200">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-2xl font-bold tracking-[0.5em]">Todo</h1>
          <button><MoonIcon fill="#fff" /></button>
        </div>
        <form className="bg-white rounded-md mt-8 overflow-hidden py-4 flex gap-4 items-center px-4">
          <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
          <input type="text" className="w-full text-gray-400 outline-none" placeholder="Create a new todo..." />
        </form>
      </header>
      <main className="container mx-auto mt-8 px-4">
        <div className="bg-white rounded-md [&>article]:p-4">
          <article className="flex gap-4 border-b border-b-gray-400">
            <button className="flex-none rounded-full border-gray-300 border-2 w-5 h-5 inline-block"></button>
            <p className="text-gray-600 grow">Complete online javascript course</p>
            <button className="flex-none"><CrossIcon /></button>
          </article>
          <article className="flex gap-4 border-b border-b-gray-400">
            <button className="flex-none rounded-full border-gray-300 border-2 w-5 h-5 inline-block"></button>
            <p className="grow">Complete online javascript course</p>
            <button className="flex-none"><CrossIcon /></button>
          </article>
          <article className="flex gap-4 border-b border-b-gray-400">
            <button className="flex-none rounded-full border-gray-300 border-2 w-5 h-5 inline-block"></button>
            <p className="grow">Complete online javascript course</p>
            <button className="flex-none"><CrossIcon /></button>
          </article>
          <article className="flex gap-4 border-b border-b-gray-400">
            <button className="flex-none rounded-full border-gray-300 border-2 w-5 h-5 inline-block"></button>
            <p className="grow">Complete online javascript course</p>
            <button className="flex-none"><CrossIcon /></button>
          </article>
          <article className="flex gap-4 border-b border-b-gray-400">
            <button className="flex-none rounded-full border-gray-300 border-2 w-5 h-5 inline-block"></button>
            <p className="grow">Complete online javascript course</p>
            <button className="flex-none"><CrossIcon /></button>
          </article>
          <section className="py-4 px-4 flex justify-between">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear completed</button>
          </section>
        </div>
      </main>
      <section className="container mx-auto mt-8 px-4">
        <div className="bg-white flex justify-center gap-4 rounded-md p-4">
          <button className="text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>
      <section className="text-center mt-8">Drag and drop to reorder list</section>
    </div>
  );
};

export default App;
