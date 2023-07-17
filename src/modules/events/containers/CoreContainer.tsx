import EventListComponent from "@/modules/events/components/EventListComponent";
import useEvents from "@/modules/events/hooks/useEvents";
import CategoriesFilterComponent from "@/modules/events/components/CategoriesFilterComponent";

export default function CoreContainer() {
  const {
    eventsList,
    isLoading,
    categories,
    handleActiveCategory,
    activeCategory,
  } = useEvents();

  if (isLoading) return <p>Loading...</p>;

  if (!eventsList) return <p>No events</p>;

  return (
    <>
      <CategoriesFilterComponent
        categories={categories}
        onChange={handleActiveCategory}
        activeCategory={activeCategory}
      />
      <EventListComponent events={eventsList} />
    </>
  );
}
