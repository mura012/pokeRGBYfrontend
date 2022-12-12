import { Button } from "@mantine/core";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ClickEvent } from "types/event";

const POKEAPI_URL = "https://pokeapi.co/api/v2/pokemon";

// const Home = () => {
//   const [pokemons, setPokemons] = useState<any>([]);
//   const [selected, setSelected] = useState("");
//   const [pokemonsList, setPokemonsList] = useState<any>([]);

//   const getPokemon = async () => {
//     for (let i = 0; i < 30; i++) {
//       const result = await fetch(`${POKEAPI_URL}/${i + 1}`);
//       const json = await result.json();
//       setPokemons((prev) => [...prev, json]);
//     }
//   };
//   useEffect(() => {
//     getPokemon();
//   }, []);

//   const handleClick = (e: ClickEvent) => {
//     e.preventDefault();
//     console.log(pokemons);
//     pokemons.map((pokemon) => {
//       if (pokemon.name === selected) {
//         if (pokemonsList.length < 6) {
//           console.log("中");
//           setPokemonsList((prev) => [...prev, { name: pokemon.name }]);
//         } else {
//           alert("ポケモンは６匹までです");
//         }
//       }
//     });
//   };

//   return (
//     <>
//       <select value={selected} onChange={(e) => setSelected(e.target.value)}>
//         <option value="---">---</option>;
//         {pokemons.map((pokemon) => {
//           return (
//             <option value={pokemon.name} key={pokemon.id}>
//               {pokemon.name}
//             </option>
//           );
//         })}
//       </select>
//       <Button onClick={handleClick}>ボタン</Button>
//       <ul>
//         {pokemonsList.map((pokemon) => {
//           return (
//             <li key={pokemon.name}>
//               <span>{pokemon.name}</span>
//             </li>
//           );
//         })}
//       </ul>
//       <ul className="flex flex-wrap">
//         {pokemons.map((pokemon) => {
//           return (
//             <li key={pokemon.id}>
//               <span>{pokemon.name}</span>
//               <Image
//                 src={pokemon.sprites.front_default}
//                 height={30}
//                 width={30}
//                 alt="test"
//               />
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// };

// export default Home;

// const POKEAPI_URL = "https://pokeapi.co/api/v2/pokemon";

// const Home = ({ pokemons }: any) => {
//   const [selected, setSelected] = useState("");
//   const [pokemonsList, setPokemonsList] = useState<any>([]);

//   const handleClick = (e: ClickEvent) => {
//     e.preventDefault();
//     pokemons.map((pokemon: any) => {
//       if (pokemon.name === selected) {
//         if (pokemonsList.length < 6) {
//           setPokemonsList((prev: any) => [...prev, { name: pokemon.name }]);
//         } else {
//           alert("ポケモンは６匹までです");
//         }
//       }
//     });
//   };

//   return (
//     <>
//       <select value={selected} onChange={(e) => setSelected(e.target.value)}>
//         <option value="---">---</option>;
//         {pokemons.map((pokemon: any) => {
//           return (
//             <option value={pokemon.name} key={pokemon.id}>
//               {pokemon.name}
//             </option>
//           );
//         })}
//       </select>
//       <Button onClick={handleClick}>ボタン</Button>
//       <ul>
//         {pokemonsList.map((pokemon: any) => {
//           return (
//             <li key={pokemon.name} className="flex ">
//               <span>{pokemon.name}</span>
//             </li>
//           );
//         })}
//       </ul>
//       <ul className="flex flex-wrap">
//         {pokemons.map((pokemon: any) => {
//           return (
//             <li key={pokemon.id}>
//               <span>{pokemon.name}</span>
//               <Image
//                 src={pokemon.sprites.front_default}
//                 height={30}
//                 width={30}
//                 alt="test"
//               />
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// };

// export default Home;

import { ApolloProvider } from "@apollo/client";
import { client } from "graphql/apolloClient";
import { PokemonPullDown } from "components/pokemonsPullDown/PokemonPullDown";

const Home = ({ pokemons }: any) => {
  // const Home = () => {
  // const pokemons = [
  //   { id: 1, name: "abc" },
  //   { id: 2, name: "def" },
  //   { id: 3, name: "name" },
  // ];
  const [pokemonsList, setPokemonsList] = useState<any>([]);

  const handleClear = (e: ClickEvent, name: number) => {
    e.preventDefault();
    const result = pokemonsList.filter((pokemon: any) => pokemon.name !== name);
    console.log(result);

    setPokemonsList(result);
  };

  return (
    <ApolloProvider client={client}>
      <>
        <PokemonPullDown
          pokemons={pokemons}
          pokemonsList={pokemonsList}
          setPokemonsList={setPokemonsList}
        />
        <ul className="flex space-x-2">
          {pokemonsList.map((pokemon: any) => {
            return (
              <li key={pokemon.name} className="w-fit">
                <div className="flex">
                  <span>{pokemon.name}</span>
                  <button onClick={(e) => handleClear(e, pokemon.name)}>
                    削除
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </>
    </ApolloProvider>
  );
};

export const getStaticProps = async () => {
  let pokemons = [];
  for (let i = 0; i < 151; i++) {
    const result = await fetch(`${POKEAPI_URL}/${i + 1}`);
    const json = await result.json();
    await pokemons.push(json);
  }

  return {
    props: {
      pokemons,
    },
  };
};

export default Home;
