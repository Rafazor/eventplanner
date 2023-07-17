import { IEvent } from "@/shared/types/IEvent";
import EventCardComponent from "@/modules/events/components/EventCardComponent";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface IProps {
  events: IEvent[];
}

const responsive = {
  size: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

export default function UserEventsComponent(props: IProps) {
  const { events } = props;

  return (
    <div>
      <p className="font-medium mb-2 text-lg">Your next events:</p>
      <Carousel
        keyBoardControl={true}
        key={events.length}
        responsive={responsive}
        arrows={false}
        showDots={true}
        autoPlay={true}
        infinite={events.length > 1}
      >
        {events.map((event) => (
          <EventCardComponent event={event} key={event.id} />
        ))}
      </Carousel>
    </div>
  );
}
