# About
this contains some logic to parse data from the [Public Transportation Annual Performance Perport](https://www.pa.gov/content/dam/copapwp-pagov/en/penndot/documents/programs-and-doing-business/transit/informationandreports/annual-performance-reports/recent-reports-2017-present/penndot_bpt_annualperformancereport_2023-2024.pdf).

# Usage
```
node index.js
```

# Output
for each page we parse, an output like the following will be generated

```
{
  'Square Miles:': '1,221',
  'Population:': '1,238,090',
  '65+ Population:': '15,294',
  '% of Population 65 and older:': '23.7%',
  '65+ Trips:': '423,376',
  'PwD Trips:': '21,081',
  'Other Shared-Ride Trips:': '233,398',
  'Total Escorts:': '43,272',
  'Allegheny:': '19, 20, 21, 23, 24, 25, 27, 28, 30, 32, 33, 34, 35, 36, 38, 39, 40, 42, 44, 45, 46',
  'Allegheny:': '37, 38, 42, 43, 45',
  'Average Shared-Ride Fare:': '$24.74',
  'Average Shared-Ride Cost per Trip:': '$47.08',
  'Community Transportation:': '167'
}
```