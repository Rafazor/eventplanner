import EventListComponent from "@/modules/events/components/EventListComponent";
import useEvents from "@/modules/events/hooks/useEvents";
import CategoriesFilterComponent from "@/modules/events/components/CategoriesFilterComponent";
import UserEventsComponent from "@/modules/events/components/UserEventsComponent";

export default function CoreContainer() {
  const {
    eventsList,
    isLoading,
    categories,
    handleActiveCategory,
    activeCategory,
    subscribedEvents,
    userEvents,
    handleSubscribe,
  } = useEvents();

  if (isLoading) return <p>Loading...</p>;

  if (!eventsList) return <p>No events</p>;

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
