import CharacterList from "@/components/characters/CharacterList";
import { EmptyPlaceholder } from "@/components/EmptyPlaceholder";
import { getFollowedCharacters } from "@/queries/followedCharacters";

export const getServerSideProps = async () => {
  const followedCharacters = await getFollowedCharacters();
  return { props: { followedCharacters } };
};
export default function Page({ followedCharacters }) {
  if (!followedCharacters.length) {
    return <EmptyPlaceholder />;
  } else {
    return <CharacterList characters={followedCharacters} />;
  }
}
