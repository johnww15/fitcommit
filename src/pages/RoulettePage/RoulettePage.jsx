import RouletteInputBar from "../../components/RouletteInputBar";
import RouletteResults from "../../components/RouletteResults";

export default function RoulettePage() {
  return (
    <section className="items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <RouletteInputBar />
      <RouletteResults />
    </section>
  );
}
