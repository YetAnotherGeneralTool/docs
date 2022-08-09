---
sidebarDepth: 1
---

# Changelog

## 1.0.0-beta.17 (2023-01-26)
### Added
- New permissions for shoutouts and read goals.
- Alerts: Variation setting and variation selection are now sticky.
- Donation: Added all supported paypal currencies.

### Fixed
- Chatbot: Fixed aliases for timers.
- Chatbot: Disabled commands have overwritten timer aliases.
- Donation: Fixed tip page.
- Donation: Fixed redirect if user has blocked popups.

### Removed
- Alerts: Removed bottom right sticky test variation button (it's now obsolete with new UI change).

## 1.0.0-beta.16 (2022-12-28)
### Added
- First version of alerts with alert chat messages are now available.

### Improved
- OBS will now save the login beyond the session.

### Fixed
- Chatbot: Variables in default commands.
- Chatbot: The first argument for {query} was missing.
- Bot Module: Global cooldown not work for bot modules.
- Dashboard: Fixed notification text in event list.
- Browser Source: Fixed background color in browser sources.
- Prevent loading lists twice.

## [1.0.0-beta.15] - 2022-12-17
### Added
- Media library to upload files for alerts, sound board and other features where files can be selected.
- Redirect the acting user to first available page if the user has no permission for the active page.

### Changed
- Widgets: Increase minimum and maximum height for Twitch Bot and Stream Settings widget.
- Widgets: Title input box in Stream Settings will now autogrow.

### Fixed
- Remove empty group menu item title for acting user.

## [1.0.0-beta.14] - 2022-12-07
### Added
- Grant permission menu item to grant all required permissions.
- Track chatters watch time.
- Popout for dashboard widgets (and support for the OBS Docks System).
- Settings menu with an overview of the social connections.

### Changed
- Better grouping of menu items. All streaming menu items have now been the same parent menu item.
- Bot Modules have been split into multiple menu items.

### Fixed
- Tweet Displayer: Widget URL has not worked.

## [1.0.0-beta.13] - 2022-11-16
### Added
- Song Request and Donation: Auto save if using the enable/disable button in Song Request or Donation.
- Donation: Hide Message field in donation page if max message length is zero (disabled).
- Tweet Displayer: Color fields has now color pickers.
- Release Date is now visible in the What's New modal.
- Confirm dialogs are no longer use the browser default style and now have real messages.

### Changed
- Giveaways: Reduced max length for giveaway name from 255 to 64.
- Changed the style of all UI elements.

### Fixed
- Commands: Custom commands will not be reloaded when switching from default to custom list.

## [1.0.0-beta.12] - 2022-10-16
### Added
- Commands and Timers: Added variables user.views, target.views, touser.views, channel.views, channel.viewers, channel.subpoints and channel.subs.
- Commands and Timers: Added functions repeat, random.pick and random.number
- Commands and Timers: Added modifiers tolower, toupper, ucfirst, lcfirst and repeat.
- Markers: Support all commands and timers variables.
- Chatbot: Support internationalization.
- Chatbot: Arguments can be passed without "args.", e.g. "{args.0}" and "{0}" is now the same.
- Added native browser color picker.

### Improved
- All error messages are better readable.

### Fixed
- Chatbot: Pipe (|) characters will not been longer removed in chat messages.
- Importer: Fixed empty aliases in for all importer.

## [1.0.0-beta.11] - 2022-09-25
### Added
- Commands: Default commands to show game, title, command list and to manage commands, game and title.
- Commands and Timers: Added new variables: links.tip, links.overview, links.commands and links.tip to replace the variable with a link to the specific page.
- Added modal for the newest updates.

### Changed
- Hide toggle checkbox instead of disable it if user has no permission.
- Markers: Optimized error message if a marker created twice.

### Fixed
- Commands: Deleting a command only had an effect when the bot restarted or rejoined the channel.
- Commands: touser or target variables can now detect usernames with a starting at symbol (@).

## [1.0.0-beta.10] - 2022-09-21
### Added
- Landing Page: Public commands list.

## [1.0.0-beta.9] - 2022-09-11
### Added
- Timers: No overlap setting to prevent execute 2 or more timers per minute.
- Timers: Allow 0 for chat lines.
- Commands and Timers: Support for /announceblue, /announcepurple, /announcegreen and /announceorange.

## [1.0.0-beta.8] - 2022-08-31
### Added
- Song Requests: Spotify Song Request with channel points (Twitch affiliate/partner only).

### Changed
- Chatbot: Twitch bot will only join your channel if the streamer go the first time live or use the join channel button in dashboard.

### Fixed
- Dashboard: Bot Control widget has wrong permission check.
- Timers: Fixed line counting to trigger the timers.
- Login: Twitch Events wouldn't subscribe for new users.

## [1.0.0-beta.7] - 2022-08-19
### Added
- German Translation
- Giveaways: Redirect to giveaway entry page after creation.
- Timers: Variables can now used in timers.

### Fixed
- Timers: Couldn't be updated if no aliases has been set.

## [1.0.0-beta.6] - 2022-08-13
### Added
- Chatbot: Bot will automatically join the channel if the stream goes online.

### Fixed
- Dashboard: Widgets could not be loaded.

## [1.0.0-beta.5] - 2022-08-12
### Added
- User-friendly error messages and error pages.

### Changed
- Importer: Progress bar is only visible if a service is selected.
- Giveaways: Default for enabled is now active.

## [1.0.0-beta.4] - 2022-08-07
### Added
- Keyword and Active Users Giveaways.
- Aliases help text to add an alias.

### Changed
- Permission Selection changed to toggle buttons.

### Fixed
- Display for long command or timer names.

## 1.0.0-beta.3 (2022-07-31)
### Added
- Aliases in commands and timers.
- User cooldown to commands.
- List preloading.
- Own user to user menu if acting as another user to switch easier back to own user.

### Changed
- Optimized commands and timers list and moved actions to left.

## [1.0.0-beta.2] - 2022-07-30
### Added
- Bot Module: Chat Counting
- Save button in bot modules.
- Pagination for commands and timers.

### Changed
- Optimized Importer JavaScript (replaced alert box with prompt box, the access token can be copied in chrome).

### Fixed
- Disabled `de` language and use `en` as fallback.
- Some Categories have an invalid background image in widget.

## [1.0.0-beta.1] - 2022-07-28
### Changed
- Dashboard widgets will only save if any widget has been moved or resized.