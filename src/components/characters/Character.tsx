import Image from "next/image";
import { followCharacter } from "@/mutations/follow";
import { useEffect, useState } from "react";
import { getFollowedCharacters } from "@/queries/followedCharacters";
import Spinner from "../Spinner";

export const Character = ({ character, id }) => {
  const { image, name, status, location, gender, species, type, origin } =
    character;

  const [isFollowed, setIsFollowed] = useState(null);
  const [isPending, setIsPending] = useState("");

  useEffect(() => {
    const isFollowed = async (id) => {
      const data = await getFollowedCharacters();
      const isCharacterFollowed = data.find((item) => item.id === id);
      if (isCharacterFollowed) {
        setIsFollowed(true);
      } else {
        setIsFollowed(false);
      }
    };
    isFollowed(id);
  }, [id]);

  const followCharacter_ = async () => {
    setIsPending("cursor-not-allowed");
    const status = await followCharacter({ id });
    if (status === "sucess") {
      setIsFollowed(true);
    } else {
      setIsFollowed(false);
    }
    setIsPending("");
  };

  return (
    <div className="p-4 h-full w-full flex flex-row flex-wrap gap-4 justify-center">
      <Image
        src={image}
        className="flex-1 h-full w-full"
        alt={name}
        height={700}
        width={500}
      />
      <div className="flex-1 flex flex-col font-black text-xl">
        <div>
          Name: <span className="italic font-normal">{name}</span>
        </div>
        <div>
          Status: <span className="italic font-normal">{status}</span>
        </div>
        <div>
          Gender: <span className="italic font-normal">{gender}</span>
        </div>
        <div>
          Species: <span className="italic font-normal">{species}</span>
        </div>
        <div>
          Type: <span className="italic font-normal">{type || "N/A"}</span>
        </div>
        <div>
          Location:
          <span className="italic font-normal">{location.name}</span>
        </div>
        <div>
          Origin: <span className="italic font-normal">{origin.name}</span>
        </div>
        <span>
          {isFollowed === true ? (
            <button className="flex px-1 bg-gray-400 rounded cursor-not-allowed">
              unfollow
            </button>
          ) : isFollowed === false ? (
            <button
              onClick={followCharacter_}
              className={`flex px-1 follow-btn ${isPending}`}
            >
              Follow
            </button>
          ) : (
            <Spinner />
          )}
        </span>
      </div>
    </div>
  );
};
