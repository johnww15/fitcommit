import { useState } from "react";
import RouletteInputBar from "../../components/RouletteInputBar";
import RouletteResults from "../../components/RouletteResults";
import exercisesByMuscle from "../../assets/exercisesByMuscle";

export default function RoulettePage() {
  const [rouletteResults, setRouletteResults] = useState("");

  const fetchByMuscle = exercisesByMuscle.filter(
    (item) => item.muscle === "Legs"
  );
  console.log(fetchByMuscle);

  return (
    <section className="items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <RouletteInputBar />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {fetchByMuscle.map((item, idx) => (
          <RouletteResults key={idx} item={item} />
        ))}
      </div>
    </section>
  );
}
