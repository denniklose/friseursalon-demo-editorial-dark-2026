import { salonConfig, type RouteKey } from "../config/salon";

const routePaths: Record<RouteKey, string> = {
  home: "/",
  team: "/team/",
  salon: "/salon/",
  featuredService: `/leistungen/${salonConfig.featuredService.slug}/`,
  about: "/ueber-uns/",
  contact: "/oeffnungszeiten/",
  booking: "/termin-buchen/",
  imprint: "/impressum/",
  privacy: "/datenschutz/",
};

const addressSecondLine = [salonConfig.identity.postalCode, salonConfig.identity.city].filter(Boolean).join(" ");

export const site = {
  ...salonConfig.identity,
  address: [salonConfig.identity.street, addressSecondLine] as [string, string],
};

export const navigation = salonConfig.navigation.flatMap((item) => {
  if (item.route === "featuredService" && !salonConfig.featuredService.enabled) return [];
  return [{ label: item.route === "featuredService" ? salonConfig.featuredService.navLabel : item.label, href: routePaths[item.route] }];
});

export const services = salonConfig.services.filter((service) => service.enabled);
export const hours = salonConfig.hours;
export const featuredServiceHref = routePaths.featuredService;

const phoneFallback = salonConfig.identity.phoneHref || "/oeffnungszeiten/";
const configuredBookingHref =
  salonConfig.booking.mode === "phone"
    ? phoneFallback
    : salonConfig.booking.mode === "disabled"
      ? "/oeffnungszeiten/"
      : salonConfig.booking.url;

export const bookingHref = configuredBookingHref || "/termin-buchen/";
export const bookingLabel = salonConfig.booking.label;
export const hasOnlineBooking = salonConfig.booking.mode === "external";
export const phoneHref = phoneFallback;
export const directionsHref = salonConfig.links.directionsUrl || "#kartenhinweis";
export const emailHref = salonConfig.identity.emailHref || "/oeffnungszeiten/";
export const isExternal = (href: string) => /^https?:\/\//i.test(href);
export const pageCopy = salonConfig.content;
export const getRoutePath = (route: RouteKey) => routePaths[route];
export { salonConfig };
