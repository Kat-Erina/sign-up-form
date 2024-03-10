import Form from "./components/Form";

function App() {
  return (
    <main className="bg-pink min-w-full min-h-screen flex flex-col gap-12 justify-center items-center  bg-mobile-image bg-cover bg-center md:bg-desktop-image  md:flex-row">
      <section className="flex flex-col justify-center w-full text-center pt-22 md: w-92  md:pt-0 md:w-[525px] ">
        <p className=" text-white text-lg2 h-20 font-bold mx-6 mb-4 md:text-5xl md:mb-12  md:text-start">
          Learn to code by watching others
        </p>
        <p className=" text-white text-base leading-26  font-normal mx-6 md:text-start ">
          See how experienced developers solve problems in real-time.Watching
          scripted tutorial is great,but understanding how developers think is
          invaluable
        </p>
      </section>
      <Form />
    </main>
  );
}

export default App;
