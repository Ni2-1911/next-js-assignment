import { Character } from "@/components/characters/Character";
import { getCharacterById } from "@/queries/characterById";
import { getCharacters } from "@/queries/characters";

export const getStaticPaths = async () => {
  const { characters } = await getCharacters();
  const params = characters.results.map((item) => ({
    params: { id: item.id },
  }));
  return {
    paths: params,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const id = params.id;
  const { character } = await getCharacterById({ id });
  return { props: { character, id } };
};

export default function Page({ character, id }) {
  return <Character character={character} id={id} />;
}
