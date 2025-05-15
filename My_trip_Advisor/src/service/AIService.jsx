
import {GoogleGenerativeAI} from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {text: "generate Travel Plan for location :Las Vegas,for 3 days for a couple with a cheap budget ,give me a Hotels options list with HotelName,Hotel address,Price ,hotel image url ,geo coordinates ,rating ,descriptions, and suggest itinerary with PlaceName,PlaceDetails,Place Image Url,Geo Coordinates,ticket Pricing,rating,Time travel each of location for 3 days with each day plan with best time to visit in JSON Format. give me all data in online please without replace or anything please and replace as you like others prices or images .... "},
      ],
    },
    {
      role: "model",
      parts: [
        {text: `{
  "TripDetails": {
    "Destination": "Las Vegas, Nevada",
    "Duration": "3 Days",
    "Budget": "Budget-Friendly",
    "Travelers": "Couple"
  },
  "Hotels": [
    {
      "HotelName": "Excalibur Hotel & Casino",
      "HotelAddress": "3850 S Las Vegas Blvd, Las Vegas, NV 89109",
      "Price": "From $30/night (prices vary)",
      "HotelImageUrl": "https://www.excalibur.com/content/dam/excalibur/hotel/property/facade-night-16x9.jpg/_jcr_content/renditions/cq5dam.thumbnail.1440.960.jpg",
      "GeoCoordinates": {
        "Latitude": 36.0954,
        "Longitude": -115.1762
      },
      "Rating": 3.5,
      "Description": "Medieval-themed hotel and casino with affordable rooms and various entertainment options."
    },
    {
      "HotelName": "Luxor Hotel and Casino",
      "HotelAddress": "3900 S Las Vegas Blvd, Las Vegas, NV 89119",
      "Price": "From $40/night (prices vary)",
      "HotelImageUrl": "https://www.luxor.com/content/dam/luxor/property/hotel/exterior/luxor-exterior-night-01.jpg",
      "GeoCoordinates": {
        "Latitude": 36.0935,
        "Longitude": -115.1763
      },
      "Rating": 3.5,
      "Description": "Iconic pyramid-shaped hotel with affordable rooms, a casino, and various dining options."
    },
    {
      "HotelName": "Circus Circus Hotel, Casino & Theme Park",
      "HotelAddress": "2880 S Las Vegas Blvd, Las Vegas, NV 89109",
      "Price": "From $35/night (prices vary)",
      "HotelImageUrl": "https://www.circuscircus.com/content/dam/circus/property/exterior/circus-property-exterior-aerial-01.jpeg",
      "GeoCoordinates": {
        "Latitude": 36.12,
        "Longitude": -115.16
      },
      "Rating": 3,
      "Description": "Family-friendly hotel with a casino, circus acts, and an indoor amusement park."
    }
  ],
  "Itinerary": {
    "Day1": {
      "BestTimeToVisit": "Afternoon and Evening",
      "Plan": [
        {
          "PlaceName": "Welcome to Las Vegas Sign",
          "PlaceDetails": "Iconic photo opportunity.",
          "PlaceImageUrl": "https://i0.wp.com/blog.vegas.com/wp-content/uploads/2019/06/las-vegas-sign-wide-2.jpeg?fit=1024%2C576&ssl=1",
          "GeoCoordinates": {
            "Latitude": 36.08,
            "Longitude": -115.17
          },
          "TicketPricing": "Free",
          "Rating": 4.5,
          "TimeTravel": "1 Hour"
        },
        {
          "PlaceName": "Fremont Street Experience",
          "PlaceDetails": "Downtown Las Vegas' pedestrian mall with a light show.",
          "PlaceImageUrl": "https://www.vegasexperience.com/wp-content/uploads/2017/05/Slotzilla_Main.jpg",
          "GeoCoordinates": {
            "Latitude": 36.17,
            "Longitude": -115.14
          },
          "TicketPricing": "Free (shows)",
          "Rating": 4,
          "TimeTravel": "2-3 Hours"
        },
        {
          "PlaceName": "High Roller Observation Wheel",
          "PlaceDetails": "Giant Ferris wheel with panoramic views.",
          "PlaceImageUrl": "https://assets.simpleviewinc.com/sites/caesars/image/fetch/c_limit,f_auto,q_auto:eco,w_750/https://assets.simpleview-content.com/simpleview/image/upload/crm/lasvegas/High-Roller-Evening_d0c1eb7a-b5de-4a05-8605-907b4623d76a.jpg",
          "GeoCoordinates": {
            "Latitude": 36.11,
            "Longitude": -115.17
          },
          "TicketPricing": "From $30 (prices vary)",
          "Rating": 4.5,
          "TimeTravel": "1-2 Hours"
        }
      ]
    },
    "Day2": {
      "BestTimeToVisit": "Daytime",
      "Plan": [
        {
          "PlaceName": "Red Rock Canyon National Conservation Area",
          "PlaceDetails": "Hiking and scenic drives.",
          "PlaceImageUrl": "https://www.redrockcanyonlv.org/wp-content/uploads/2019/12/DSC_2666-scaled.jpg",
          "GeoCoordinates": {
            "Latitude": 36.08,
            "Longitude": -115.42
          },
          "TicketPricing": "$15 per vehicle",
          "Rating": 4.5,
          "TimeTravel": "Half-Day or Full-Day"
        }
      ]
    },
    "Day3": {
      "BestTimeToVisit": "Anytime",
      "Plan": [
        {
          "PlaceName": "The Strip (Las Vegas Boulevard)",
          "PlaceDetails": "Walk the Strip, explore themed hotels, and catch free shows.",
          "PlaceImageUrl": "https://www.visitlasvegas.com/-/media/images/visitlasvegas/content-hub/hero-shot/las-vegas-strip-night.jpg?la=en&hash=8A46079AFD19665A646D6DC658755343D657454F",
          "GeoCoordinates": {
            "Latitude": 36.11,
            "Longitude": -115.17
          },
          "TicketPricing": "Free (walking, window shopping)",
          "Rating": 4,
          "TimeTravel": "Half-Day or Full-Day"
        },
        {
          "PlaceName": "Bellagio Conservatory & Botanical Garden",
          "PlaceDetails": "Stunning floral displays.",
          "PlaceImageUrl": "https://www.bellagio.com/content/dam/bellagio/property/amenities/conservatory-botanical-garden/bellagio-conservatory-botanical-garden-winter-display-exterior-wide-shot-16x9.jpg",
          "GeoCoordinates": {
            "Latitude": 36.11,
            "Longitude": -115.17
          },
          "TicketPricing": "Free",
          "Rating": 4.5,
          "TimeTravel": "1-2 Hours"
        }
      ]
    }
  }
}`}
      ],
    },
  ],
});