import { useEffect, useState } from "react";
import { ClickEvent } from "types/event";
import { PokemonSearch } from "components/pokemonsSearch/PokemonSearch";
import { Pokemon, PokemonType } from "types/pokemon";
import { Badge, BadgeWrapper } from "components/badge";
import { useTypeCheck } from "fooks/useTypeCheck";
import { Button } from "@mantine/core";
import { PokemonData } from "mock/pokemons";
import { Header } from "components/header";
import Head from "next/head";

type Types = {
  type: string;
  isIn: boolean;
};
const AllTypes: Types[] = [
  { type: "ノーマル", isIn: false },
  { type: "ほのお", isIn: false },
  { type: "みず", isIn: false },
  { type: "でんき", isIn: false },
  { type: "くさ", isIn: false },
  { type: "エスパー", isIn: false },
  { type: "かくとう", isIn: false },
  { type: "どく", isIn: false },
  { type: "じめん", isIn: false },
  { type: "ひこう", isIn: false },
  { type: "ドラゴン", isIn: false },
  { type: "むし", isIn: false },
  { type: "いわ", isIn: false },
  { type: "ゴースト", isIn: false },
  { type: "こおり", isIn: false },
];

const Home = () => {
  const [pokemonsList, setPokemonsList] = useState<PokemonType>([]);
  const [partyTypes, setPartyTypes] = useState(AllTypes);
  const [selected, setSelected] = useState("");

  const { typeCheck } = useTypeCheck();
  const handleAdd = (e: ClickEvent) => {
    e.preventDefault();

    if (pokemonsList.length >= 6) {
      alert("ポケモンは６匹までです");
      return;
    }

    if (pokemonsList.some((pokemon) => pokemon.name === selected)) {
      alert("同じポケモンは1匹まで");
      return pokemonsList;
    }

    PokemonData.map((pokemon) => {
      if (pokemon.name === selected) {
        const newArray = [
          ...pokemonsList,
          {
            ...pokemon,
          },
        ];
        setPokemonsList(newArray);
      }
    });
    setSelected("");
  };
  const handleEvolution = (e: ClickEvent, target: string) => {
    e.preventDefault();

    const [result] = pokemonsList.filter(
      (pokemon: Pokemon) => pokemon.name === target
    );

    if (
      pokemonsList.some((pokemon) => pokemon.name === result.afterEvolution)
    ) {
      alert("このポケモンの進化後はすでにパーティーに入っています");
      return;
    }

    if (result.afterEvolution === undefined) {
      alert("このポケモンは進化しません");
      return;
    }
    const [evolutionPokemon] = PokemonData.filter(
      (pokemon: Pokemon) => pokemon.name === result.afterEvolution
    );

    const newArray = [
      ...pokemonsList,
      {
        ...evolutionPokemon,
      },
    ].filter((pokemon) => pokemon.name !== result.name);

    setPokemonsList(newArray);
  };

  const handleClear = (e: ClickEvent, target: string) => {
    e.preventDefault();

    const result = pokemonsList.filter(
      (pokemon: Pokemon) => pokemon.name !== target
    );
    setPokemonsList(result);

    if (result.length === 0) {
      setPartyTypes((prev) => {
        return prev.map((type) => {
          return { ...type, isIn: false };
        });
      });
    }
    result.map((party) => {
      setPartyTypes((prev) => {
        return prev.map((type) => {
          if (type.type !== party.typeA) {
            return { ...type, isIn: false };
          }
          return type;
        });
      });
    });
  };

  useEffect(() => {
    const partyTypeCheck = (AB: "typeA" | "typeB") => {
      pokemonsList.map((party) => {
        setPartyTypes((prev) => {
          return prev.map((type) => {
            if (type.type === party[AB]) {
              return { ...type, isIn: true };
            }
            return type;
          });
        });
      });
    };
    partyTypeCheck("typeA");
    partyTypeCheck("typeB");
  }, [pokemonsList]);

  return (
    <>
      <Head>
        <title>パーティー</title>
      </Head>
      <Header />
      <div className="flex">
        <PokemonSearch selected={selected} setSelected={setSelected} />
        <Button onClick={handleAdd}>button</Button>
      </div>
      <ul className="flex flex-wrap border  border-solid border-black p-2">
        {pokemonsList.length === 0 ? (
          <li
            className="flex items-center border border-solid border-black p-2 shadow-lg"
            style={{ minHeight: "74px" }}
          >
            <span>ここに追加</span>
          </li>
        ) : (
          pokemonsList.map((pokemon: Pokemon) => {
            return (
              <li
                key={pokemon.number}
                className="m-1 min-w-[116px] border border-solid border-black p-2 shadow-lg"
              >
                <div className="flex flex-col items-center justify-center">
                  <span className="text-sm">{pokemon.name}</span>
                  <BadgeWrapper>
                    <Badge color={typeCheck(pokemon.typeA)}>
                      {pokemon.typeA}
                    </Badge>
                    {pokemon.typeB && (
                      <Badge color={typeCheck(pokemon.typeB)}>
                        {pokemon.typeB}
                      </Badge>
                    )}
                  </BadgeWrapper>
                  <div>
                    <button
                      onClick={(e) => handleEvolution(e, pokemon.name)}
                      className="mr-1 mt-1"
                    >
                      進化
                    </button>
                    <button onClick={(e) => handleClear(e, pokemon.name)}>
                      削除
                    </button>
                  </div>
                </div>
              </li>
            );
          })
        )}
      </ul>

      <h1>test</h1>
      <div className="flex justify-center">
        {partyTypes.map((type) => {
          return type.isIn ? (
            <Badge color={typeCheck(type.type)} key={type.type}>
              {type.type}
            </Badge>
          ) : (
            <Badge color={"bg-gray-500"} key={type.type}>
              {type.type}
            </Badge>
          );
        })}
      </div>
    </>
  );
};

export default Home;
