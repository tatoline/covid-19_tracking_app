# Covid-19 Tracking App v0.1.0

This application shows the real-time Covid-19 statistics with using the data of the World Health Organization (WHO). Tailwind CSS was used for styling. It's using a NodeJS/Express back-end proxy server for API key protection. Back-end codes can be reachable on here.

LIVE: https://covid.taylanmiroglu.com/

![](https://github.com/tatoline/covid-19_tracking_app/blob/master/view.gif)

- Shows total cases
- Shows continent based statistics
- Shows country statistics

## Statistics includes:
- Total Cases
- Total Recovered
- Total Deaths
- New Cases
- New Deaths
- Active Cases

### `DONE`
- [x] WHO's API implemented
- [x] 3 different pages and their components created
- [x] Animated world effect will be added to the World statistics page
- [x] When clicking the world image, it will be animated and zoomed fast, then instantly go to the continent statistics page
- [x] Continent statistics page will be updated as responsive
- [x] In the country statistics page, when a country searched is used, instead of requesting API again, it should search and show from the fetched data
- [x] Footer will be added for production

### `TODO`
- [ ] Last updated time will be shown and there will be an "Update" button to fetch data again from the API
- [ ] Appearance (CSS) will be updated
- [ ] "Loading" will be animated and made into a separate component
- [ ] Responsiveness should be improved for world and continent statistics.
  - World statistics' font size should be smaller on mobile
  - Continent box position should be fixed and the bottom of the map on mobile
  - (Optional) Country statistics page should be improved on mobile
- [ ] Release version number should be added to the footer
- [ ] "Click for Details" button on or next to earth image
- [ ] (Optional) Continent filter can be added to the country statistics page as a dropdown
- [ ] (Optional) When clicking a continent on the continent statistics page, the user can go to the country statistics page with the continent filter applied