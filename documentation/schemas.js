/* eslint global-require: 0 */

import { fromJS } from 'immutable';

export default fromJS([
  // The "getting started" schema provides table-of-contents links
  // for the sections in src/client/introduction.js.  You are free
  // to customize or remove both the schema and the introduction component.
  require('./getting-started.json'),
  require('../types/address.schema.json'),
  require('../types/adwords.schema.json'),
  require('../types/aggregateRating.schema.json'),
  require('../types/airline.schema.json'),
  require('../types/airport.schema.json'),
  require('../types/autoRental.schema.json'),
  require('../types/baggage.schema.json'),
  require('../types/budget.schema.json'),
  require('../types/cells.schema.json'),
  require('../types/city.schema.json'),
  require('../types/country.schema.json'),
  require('../types/currencyConversion.schema.json'),
  require('../types/database.schema.json'),
  require('../types/dateLimit.schema.json'),
  require('../types/device.schema.json'),
  require('../types/discount.schema.json'),
  require('../types/error.schema.json'),
  require('../types/extraInfo.schema.json'),
  require('../types/fareNet.schema.json'),
  require('../types/fareTensor.schema.json'),
  require('../types/flexibleDate.schema.json'),
  require('../types/flight.schema.json'),
  require('../types/flightReservation.schema.json'),
  require('../types/frontComponents.schema.json'),
  require('../types/guest.schema.json'),
  require('../types/hotel.schema.json'),
  require('../types/insurance.schema.json'),
  require('../types/journey.schema.json'),
  require('../types/legs.schema.json'),
  require('../types/lounge.schema.json'),
  require('../types/loyaltyProgram.schema.json'),
  require('../types/offer.schema.json'),
  require('../types/parking.schema.json'),
  require('../types/passenger.schema.json'),
  require('../types/passengerDetails.schema.json'),
  require('../types/payment.schema.json'),
  require('../types/priceSpecification.schema.json'),
  require('../types/provider.schema.json'),
  require('../types/redemption.schema.json'),
  require('../types/region.schema.json'),
  require('../types/request.schema.json'),
  require('../types/response.schema.json'),
  require('../types/seat.schema.json'),
  require('../types/state.schema.json'),
  require('../types/theme.schema.json'),
  require('../types/webPage.schema.json'),
]);