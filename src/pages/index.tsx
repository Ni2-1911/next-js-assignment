import { getCharacters } from "@/queries/characters";
import CharacterList from "@/components/characters/CharacterList";

export const getStaticProps = async () => {
  const { characters } = await getCharacters();
  return { props: { characters: characters.results } };
};

export default function index({ characters }) {
  return <CharacterList characters={characters} />;
}
