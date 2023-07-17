import { IEvent } from "@/shared/types/IEvent";
import Image from "next/image";
import { isURL } from "@/shared/utils/commonUtils";
import clsx from "clsx";
import { IoStar, IoStarOutline } from "react-icons/io5";

interface IProps {
  event: IEvent;
  handleSubscribe: (eventId: string) => void;
  isSubscribed: boolean;
  className?: string;
}

export default function EventItemComponent(props: IProps) {
  const { event, handleSubscribe, isSubscribed, className } = props;

  return (
    <div
      className={clsx(
        "cursor-pointer bg-purple-100 dark:bg-purple-400 hover:bg-purple-300 dark:hover:bg-purple-500 flex items-center justify-between rounded-3xl px-4 py-2 shadow-md",
        className,
      )}
      onClick={() => handleSubscribe(event.id)}
    >
      <div className="flex gap-10 items-center">
        <img
          className={"rounded-full bg-cover w-8 h-9"}
          src={isURL(event.image) ? event.image : "/placeholder.jpg"}
          alt={event.title}
        />
        <p className={"text-lg text-black"}>{event.title}</p>
      </div>
      {isSubscribed ? (
        <IoStar size={30} className={"text-purple-700"} />
      ) : (
        <IoStarOutline size={30} className={"text-black"} />
      )}
    </div>
  );
}
