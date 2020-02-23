## [4.2.0] - 23/02/2020

### Added

- When a time notification is ready, the google maps photo is sent and the notification message is attached as the photo's caption, instead of sending 2 separate messages
- 'zoom' parameter in /globe command

### Fixed

- Added google maps photo to the Islamabad time notification

### Changed

- It is possible to use the /globe command with spaces

## [4.1.5] - 14/02/2020

### Fixed

- Notification on 4:20
- /next command

## [4.1.0] - 13/02/2020

### Fixed

- Google Maps photos

## [4.0.0] - 13/02/2020

### Added

- Command to test bot availability '/ping' to which it replies with 'Pong!' (kaidey)
- Message on the use of the keyword 'depressao' (kaidey)
- '/help' command to give a list of all the commands available
- '/globe' command to give a Google Maps view of a city

### Changed

- Refactoring of all the code to use Typescript (kaidey)
- The 4:20 notification has an image of the city
- The 4:20 notification now has the country of the city

Thank you kaidey for your contributions to this version! You can find him in https://github.com/Kaidey

## [3.0.0] - 12/02/2020

### Added

- Message on mention
- '/next' command to give how much time is left to the next 4:20

### Changed

- Refatoring of the code in multiple files
- Added Riga as a main city in UTC+2
- Message of UTC+2

## [2.0.0] - 11/02/2020

### Added

- '/cities' command that gives the main cities of each timezone

### Fixed

- Fixed the setInterval time to avoid double notifications
- Notification in the alarm hour
- City in UTC+11 timezone was wrong (changed to Norfolk Island)
- Typo in Kiribati (was Kirimati)

## [1.0.0] - 09/02/2020

### Added

- Notifications for the timezones until UTC+16 in the native languages