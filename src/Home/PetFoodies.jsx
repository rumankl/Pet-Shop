import React, { useState } from "react";
import Cat from "./Cat";
import Dog from "./Dog";
import Bird from "./Bird";

const PetFoodies = () => {
  const [active, setActive] = useState("dog");
  const animals = ["dog", "cat", "bird"];

  return (
    <div>
      <div className="flex justify-between items-center gap-6 text-2xl">
        <div className="text-5xl text-center font-bold text-orange-400">
          <h1>PetFoodies</h1>
        </div>

        <div className="flex justify-between items-center gap-6 font-bold text-gray-700 text-2xl underline underline-offset-8 hover:cursor-pointer">
          {animals.map((animal) => (
            <a
              key={animal}
              className={`hover:text-red-600 ${active === animal ? "text-red-600" : ""
                }`}
              onClick={() => setActive(animal)}
            >
              {animal.charAt(0).toUpperCase() + animal.slice(1)}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-10 mb-10">
        {active === "dog" && <Dog />}
        {active === "cat" && <Cat />}
        {active === "bird" && <Bird />}
      </div>
    </div>
  );
};

export default PetFoodies;
