import { Button } from "@mantine/core";
import { useState } from "react";
import { ClickEvent } from "types/event";

export const PokemonPullDown = ({
  pokemons,
  pokemonsList,
  setPokemonsList,
}: any) => {
  const [selected, setSelected] = useState("");

  const handleClick = (e: ClickEvent) => {
    e.preventDefault();
    if (pokemonsList.length >= 6) {
      alert("ポケモンは６匹までです");
      return;
    }

    setPokemonsList((prev: any) => {
      if (prev.some((item: any) => item.name === selected)) {
        alert("同じポケモンは1匹まで");
        return prev;
      }
      console.log(prev);
      console.log(selected);

      const newArray = [...prev, { name: selected }];
      return newArray;
    });
  };

  return (
    <>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        {pokemons.map((pokemon: any) => {
          return (
            <option value={pokemon.name} key={pokemon.id}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      <Button onClick={handleClick}>button</Button>
    </>
  );
};
