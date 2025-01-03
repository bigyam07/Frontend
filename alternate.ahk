; Alt + i for Up Arrow
!i::Send, {Up}

; Alt + j for Left Arrow
!j::Send, {Left}

; Alt + k for Down Arrow
!k::Send, {Down}

; Alt + l for Right Arrow
!l::Send, {Right}

; Ctrl + Alt + j to skip one word to the left
^!j::
Send, ^{Left} ; Move one word to the left
return

; Ctrl + Alt + l to skip one word to the right
^!l::
Send, ^{Right} ; Move one word to the right
return

; Shift + Alt + j to select the word on the left
+!j::
Send, ^+{Left} ; Select the word to the left
return

; Shift + Alt + l to select the word on the right
+!l::
Send, ^+{Right} ; Select the word to the right
return

; Ctrl + Alt + i to move cursor up
^!i::
Send, {Up} ; Move one line up
return

; Ctrl + Alt + k to move cursor down
^!k::
Send, {Down} ; Move one line down
return
