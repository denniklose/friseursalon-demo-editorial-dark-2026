import { bookingHref, salonConfig } from "../site-data";

export default function BookingOverview() {
  const booking = salonConfig.content.booking;
  const steps = salonConfig.content.home.bookingSteps;
  return <div className="booking-overview"><p className="planner-kicker">{booking.overviewKicker}</p><h3>{booking.overviewTitle}</h3><p>{booking.overviewIntro}</p><ol>{steps.map((step) => <li key={step.number}>{step.title}</li>)}</ol><a className="button button-primary planner-submit" href={bookingHref}>{booking.primaryCtaLabel}</a><p className="form-privacy">{booking.note}</p></div>;
}
