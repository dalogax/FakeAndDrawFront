# MANAGER
* Home: _game-create_
    * Create game
    * waiting
* Game home:  _game-created_, _user-added_ ({ userId: 1, nickname: "User", avatarUrl: "" })
    * Waiting for all players to join
    * Allow to start match
* Match home: _match-started_??? _drawing-started_ _drawing-added_
    * Waiting for users drawing (show the status for each user: wether draw is submitted or not)
* Match round: _start-round_, _voting-start_, _title-guess_, _round-results_
    * Waiting for users to type titles
    * Waiting for users to vote
    * Show match scoreboard
* End match: _match-results_
    * Show final scoreboard
    * Wait for user to start a new match 

# PLAYER
* Logon: _new-user_
    * not logged
    * waiting
* Create drawing: _title-assign_, _drawing-submit_
    * drawing
    * wating
* Type a drawing title: _start-round_, _title-guess_, _title-guess-result_
    * typing
    * waiting
* Select a title: _voting-start_, _vote_
    * selecting
    * waiting
* End game: _match-results_
    * personal scoreboard



## Sprint 3
### MANAGER
* Match home
    * Load thie view upon "drawings-started" message (only timestamp)
    * Wait for users to submit their drawings (message "drawing-added", { userId: 1, nickname: "User", avatarUrl: "" })
    * Manage timeout
    * Navigate to next view upon "start-round" message
### PLAYER
* Draw paiting view
    * Load this view upong "title-assign" message
    * Submit a new drawing ("drawing-submit" message)
    * Wait for other players to submit their drawings 
    * Navigate to next view upon "title-guess" message

