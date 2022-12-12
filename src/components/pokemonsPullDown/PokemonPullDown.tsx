import { Button } from "@mantine/core";
import { PokemonData } from "mock/pokemons";
import { useState, Dispatch, SetStateAction } from "react";
import { ClickEvent } from "types/event";
import { Pokemon, PokemonType } from "types/pokemon";

type Props = {
  pokemonsList: PokemonType;
  setPokemonsList: Dispatch<SetStateAction<PokemonType>>;
};

export const PokemonPullDown = ({ pokemonsList, setPokemonsList }: Props) => {
  const [selected, setSelected] = useState("");
  console.log(selected);

  const handleClick = (e: ClickEvent) => {
    e.preventDefault();

    if (pokemonsList.length >= 6) {
      alert("ポケモンは６匹までです");
      return;
    }

    if (pokemonsList.some((pokemon) => pokemon.name === selected)) {
      alert("同じポケモンは1匹まで");
      return pokemonsList;
    }

    const selectPokemon = PokemonData.map((pokemon) => {
      if (pokemon.name === selected) {
        const newArray = [
          ...pokemonsList,
          {
            number: pokemon.number,
            name: pokemon.name,
            typeA: pokemon.typeA,
            typeB: pokemon.typeB,
          },
        ];
        setPokemonsList(newArray);
      }
    });

    return selectPokemon;
  };

  return (
    <>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option value="---">---</option>
        {PokemonData.map((pokemon: Pokemon) => {
          return (
            <option value={pokemon.name} key={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      <Button onClick={handleClick}>button</Button>
    </>
  );
};
