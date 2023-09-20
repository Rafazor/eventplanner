import EventListComponent from "@/modules/events/components/EventListComponent";
import CategoriesFilterComponent from "@/modules/events/components/CategoriesFilterComponent";
import UserEventsComponent from "@/modules/events/components/UserEventsComponent";
import { useFetchEvents } from "@/modules/events/hooks/useFetchEvents";
import { useUserEvents } from "@/modules/events/hooks/useUserEvents";
import { useCategoryFilter } from "@/modules/events/hooks/useCategoryFilter";

export default function CoreContainer() {
  const { isLoading, events, categories } = useFetchEvents();
  const { userEvents, subscribedEvents, handleSubscribe } =
    useUserEvents(events);
  const { eventsList, activeCategory, handleActiveCategory } =
    useCategoryFilter(events);

  if (isLoading) return <p>Loading...</p>;

  if (!eventsList || !events.length) return <p>No events</p>;

  return (
    <div className="flex flex-col gap-8">
      {userEvents.length > 0 && <UserEventsComponent events={userEvents} />}
      <CategoriesFilterComponent
        categories={categories}
        onChange={handleActiveCategory}
        activeCategory={activeCategory}
      />
      <EventListComponent
        events={eventsList}
        handleSubscribe={handleSubscribe}
        subscribedEvents={subscribedEvents}
      />
    </div>
  );
}
