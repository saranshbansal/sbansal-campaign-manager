# Campaign Manager App 

A web page, which contains 3 tabs (Upcoming Campaigns, Live Campaign, Past campaigns) as shown below.

![alt text](http://cdn3.bluestacks.com/Interviews/Front-end/Dashboard%402x.png "Mockup")

* Each tab shows relevant data based on the status of campaign (upcoming, live, past).
* The very first column show the time diff from today to that campaign's date. 
* You can reschedule a campaign by opening a calendar on clicking the **Schedule again** icon. 
* Once the date is changed of campaign. The campaign moves to the relevant Tab (Upcoming,Live,Past) , based on the date selected.
* Clicking on **View Pricing**  in the row shows a modal with relevant information of the campaign.
* **Entire UI is responsive.**.
* It support basic localization of strings in 2 languages.

# Additional Features

|Description | Execution steps | Expected output|
|--- | --- | ---|
|Localization |Select German language from Language selector dropdown | Header data,x days ago,x days ahead,Tabs text shown in german|
|Campaign Date change | Select today's date in Past Campaign tab for any campaign | The campaign is removed from Past campaign tab and appear in Live Campaign tab| 

# Specs

* Frontend: ReactJS
* Backend: Node/Express
* DB: MongoDB instance hosted on mLab and accessed via `mongoose` package.
* Sample data

```javascript

{
  "data": [{
      "name": "Test Whatsapp",
      "region": "US",
      "createdOn": 1559807714999,
      "price": "Price info of Test Whatsapp",
      "csv": "Some CSV link for Whatsapp",
      "report": "Some report link for Whatsapp",
      "image_url":"Some image url of the campaign" 
    },
    {
      "name": "Super Jewels Quest",
      "region": "CA, FR",
      "createdOn": 1559806715124,
      "price": "Price info of Super Jewels Quest",
      "csv": "Some CSV link for Super Jewels Quest",
      "report": "Some report link for Super Jewels Ques",
      "image_url":"Some image url of the campaign"
    },
    {
      "name": "Mole Slayer",
      "region": "FR",
      "createdOn": 1559806711124,
      "price": "Price info of Mole Slayer",
      "csv": "Some CSV link for Mole Slayer",
      "report": "Some report link for Mole Slayer",
      "image_url":"Some image url of the campaign"
    },
    {
      "name": "Mancala Mix",
      "region": "JP",
      "createdOn": 1559806680124,
      "price": "Price info of Mancala Mix",
      "csv": "Some CSV link for Mancala Mix",
      "report": "Some report link for Mancala Mix",
      "image_url":"Some image url of the campaign"
    }
  ]
}
```
