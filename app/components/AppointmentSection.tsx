import BookingOverview from "./BookingOverview";
import EditorialHeading from "./EditorialHeading";
import { bookingHref, bookingLabel, pageCopy, salonConfig, site } from "../site-data";

export default function AppointmentSection() {
  const steps = salonConfig.content.home.bookingSteps;
  return (
    <>
      <section className="process-section" aria-labelledby="process-title">
        <div className="section-heading">
          <p className="section-kicker">Ihr Termin</p>
          <h2 id="process-title">Wunsch besprechen. <em className="heading-accent">Termin</em> finden. Loslegen.</h2>
          <p>{pageCopy.home.processIntro}</p>
        </div>
        <ol className="process-list">{steps.map((step) => <li key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.copy}</p></div></li>)}</ol>
        <div className="phone-pair"><a href={site.phoneHref || bookingHref}><small>Kontaktweg</small><strong>{site.phoneHref ? site.phoneDisplay : bookingLabel}</strong></a><a href={bookingHref}><small>Termin</small><strong>{bookingLabel}</strong></a></div>
      </section>
      <section className="planner-section" id="terminwunsch" aria-labelledby="planner-title">
        <div className="planner-copy"><p className="section-kicker">Ihr Termin</p><EditorialHeading id="planner-title" title={salonConfig.claims.booking} /><p>{pageCopy.home.processIntro}</p></div>
        <BookingOverview />
      </section>
    </>
  );
}
