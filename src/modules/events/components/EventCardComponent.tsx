import { IEvent } from "@/modules/shared/types/IEvent";
import { isURL } from "@/modules/shared/utils/commonUtils";
import { formatDate } from "@/modules/events/utils/eventsUtil";

interface IProps {
  event: IEvent;
}

export default function EventCardComponent(props: IProps) {
  const { event } = props;

  const startDate = new Date(event.startDate);

  return (
    <div className="px-4 h-50 md:px-14 py-4 bg-gradient-to-r dark:from-purple-500 dark:to-purple-900 from-purple-500 to-purple-100 rounded-2xl">
      <div className="flex gap-5">
        <img
          className={"rounded-2xl w-28 h-32 object-cover"}
          src={isURL(event.image) ? event.image : "/placeholder.jpg"}
          alt={event.title}
        />
        <div>
          <p className="text-xl mb-1 font-bold text-ellipsis overflow-hidden line-clamp-1">
            {event.title}
          </p>
          <p className={"mb-3 text-ellipsis overflow-hidden line-clamp-2"}>
            {event.description} {event.description}
          </p>
          <p className="font-medium">
            {event.categories.map((category, index) =>
              index < event.categories.length - 1 ? `${category} | ` : category,
            )}
          </p>
        </div>
      </div>
      <div className="text-end ">
        <span className="bg-gray-700 dark:bg-purple-500 text-gray-100 dark:text-purple-800 px-5 py-1 rounded-full">
          {formatDate(startDate)}
        </span>
      </div>
    </div>
  );
}
