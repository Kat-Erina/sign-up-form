import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <main className="bg-[#FF7979] min-w-full h-dvh flex flex-row gap-12 justify-center items-center ">
      <section className="w-medium bg-slate-50 ">
        <p>Learn to code by watching others</p>
        <p>
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
