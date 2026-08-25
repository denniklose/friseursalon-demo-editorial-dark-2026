import { bookingHref, services } from "../site-data";
import ServiceCard from "./ServiceCard";

export default function ServiceList() {
  return <div className="service-list">{services.map((service) => <ServiceCard key={service.slug} {...service} href={bookingHref} />)}</div>;
}
