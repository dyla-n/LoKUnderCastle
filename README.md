# LoKUnderCastle

get your player ID/Access token:


Log into the game and go to the map.

in Web Browser press f12 to open the dev tools.

in the header choose "Network"

click an empty gathering node on the map.

there will be two "info" commands that appear under the name section.

	like so: https://gyazo.com/11aa7b49a82b4b04caaea87201ecf28f

click the one NOT labeled as pre-flight. 

Something like this will open (https://gyazo.com/908359c909d2cea7de2cac264750b654)

In the headers section scroll down until you see "x-access-token"

Copy and paste that value. You will need this to send commands from the server. 
Your access token resets each time you logout/login so you'll need to do this everytime.

In that same pane go to the "Payload" section and copy/paste the value in fromID: " --- VALUE HERE --- "
you can save this for next time. it shouldn't change.



USE THE THING:


Now just paste the player id and access token into their respective fields, put in cords, set your troops and you're good to go.

You don't have to send the info command (first button) to march but it looks less bot-like if you do it that way.

Clicking march will send your troops to march. Only work if all the input spaces are filled. If you did it right then it should work.
