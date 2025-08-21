# About
this contains some logic to parse data from the [Public Transportation Annual Performance Perport](https://www.pa.gov/content/dam/copapwp-pagov/en/penndot/documents/programs-and-doing-business/transit/informationandreports/annual-performance-reports/recent-reports-2017-present/penndot_bpt_annualperformancereport_2023-2024.pdf).

# Usage
```
node index.js
```

# Output
after running the above command, you will get a file called `results.json` with content like below:

```
  {
    "name": "prt",
    "demo": {
      "Square Miles:": "775",
      "Population:": "1,238,090",
      "Total Passengers:": " 37,128,174 ",
      "Senior Passengers:": " 3,643,286 ",
      "Revenue Vehicle Miles:": " 21,697,618 ",
      "Revenue Vehicle Hours:": " 1,684,347 ",
      "Section 1513 Allocation:": "$280,382,707 ",
      "Required Local Match:": "$42,057,406 ",
      "Street Car Rail/Light Rail:": "81",
      "Fixed Route Base:": "$2.75",
      "Last Base Fare Increase:": "January 2022"
    },
    "community": {
      "65+ Population:": "15,294",
      "% of Population 65 and older:": "23.7%",
      "65+ Trips:": "423,376",
      "PwD Trips:": "21,081",
      "Other Shared-Ride Trips:": "233,398",
      "Total Escorts:": "43,272",
      "Average Shared-Ride Cost per Trip:": "$47.08"
    }
  },
```

# annual profiles
 - [PRT profile](https://www.transit.dot.gov/sites/fta.dot.gov/files/transit_agency_profile_doc/2023/30022.pdf)
 - [SEPTA profile](http://transit.dot.gov/sites/fta.dot.gov/files/transit_agency_profile_doc/2023/30019.pdf))
 - [Allentown profile](https://www.transit.dot.gov/sites/fta.dot.gov/files/transit_agency_profile_doc/2023/30010.pdf)
 - [Johnstown profile](https://www.transit.dot.gov/sites/fta.dot.gov/files/transit_agency_profile_doc/2023/30012.pdf)
 - [Red Rose profile](https://www.transit.dot.gov/sites/fta.dot.gov/files/transit_agency_profile_doc/2016/30018.pdf)
 - [Indiana County profile](https://www.transit.dot.gov/sites/fta.dot.gov/files/transit_agency_profile_doc/2023/30177.pdf)