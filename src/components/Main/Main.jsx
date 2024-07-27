import Done from "../Icons/Done.jsx";

export default function Main() {
  return (
    <main>
      <section className="flex flex-col-reverse gap-14 max-w-full justify-between items-center md:p-[70px] p-3 text-[1.05rem] lg:text-[1.125rem] text-[#909193] font-medium lg:h-screen lg:flex-row">
        <div className="flex flex-col gap-8 mt-[50px] lg:mt-0">
          <p className="text-[#111729] uppercase dark:text-white">
            😎 Simple way to communicate
          </p>
          <h1 className="text-[2.9rem] lg:text-[3.75rem] text-[#223344] font-bold dark:text-white">
            Actions for Accessibility in Design
          </h1>
          <p>
            The fastest way to build and deploy websites with resusable
            components.
          </p>
          <div className="text-[1rem] flex gap-6 justify-start items-center font-semibold">
            <button className="bg-[#2a4dd0] text-white uppercase px-8 py-4 rounded-2xl">
              Get Started
            </button>
            <a href="#" className="text-[#2a4dd0] underline">
              Get live demo
            </a>
          </div>
          <aside className="text-[0.875rem]">
            <ul className="flex gap-6">
              <li className="flex justify-center items-center gap-2">
                <Done /> No credit card required
              </li>
              <li className="flex justify-center items-center gap-2">
                <Done /> No software to install
              </li>
            </ul>
          </aside>
        </div>
        <figure className="w-[90%]">
          <img
            src="/hero-image-simple-homepage.png"
            alt="hero"
            className="mt-[100px] md:mt-0"
          />
        </figure>
      </section>
    </main>
  );
}
