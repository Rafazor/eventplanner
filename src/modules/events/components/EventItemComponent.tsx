import { IEvent } from "@/shared/types/IEvent";
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
      data-testid="event-item"
      className={clsx(
        "cursor-pointer gap-5 md:gap-10 bg-purple-100 dark:bg-purple-400 hover:bg-purple-300 dark:hover:bg-purple-500 flex items-center justify-between rounded-3xl px-4 py-2 shadow-md",
        className,
      )}
      onClick={() => handleSubscribe(event.id)}
    >
      <div className="flex gap-4 md:gap-10 items-center">
        <img
          className={"rounded-full object-cover w-8 h-9"}
          src={isURL(event.image) ? event.image : "/placeholder.jpg"}
          alt={event.title}
        />
        <p className={"text-lg text-black"}>{event.title}</p>
      </div>
      <div>
        {isSubscribed ? (
          <IoStar
            data-testid="subscribed-icon"
            size={30}
            className={"text-purple-700"}
          />
        ) : (
          <IoStarOutline
            data-testid="unsubscribed-icon"
            size={30}
            className={"text-black"}
          />
        )}
      </div>
    </div>
  );
}
