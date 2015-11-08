---
title: mark
---
* `C-SPC`: set-mark-command
* `C-@`: set-mark-command
* `C-x C-x`: exchange-point-and-mark

* `M-@`: `mark-word`. Set mark at the end of word, but do not move point.
* `C-M-@`: `mark-sexp`. Set mark at the end of following balanced expression.
* `M-h`: `mark-paragraph`.
Move point to beginning of current paragraph,
and set mark at the end of the paragraph.
* `C-M-h`: `mark-defun`.
Move point to the beginning of current defun,
and set mark at the end of the defun.
* `C-x C-p`: `mark-page`.
Move point to the beginning of current page,
and set mark at the end of the page.
* `C-x h`: mark-whole-buffer


# Region operation
* `C-w`: kill-region
* `M-w`: kill-ring-save
* `C-x C-l`: downcase-region
* `C-x C-u`: upcase-region

## trick
* `C-u C-/`: undo in region.

# the mark ring
* `C-SPC C-SPC`: set the mark, push it to mark ring, without activating it.
* `C-u C-SPC`: Move point to where the mark was.
Current point will be the end of mark ring.
Can do multiple times.

if `set-mark-command-repeat-pop` is non-nil,
then immediately after you type C-u C-SPC,
you can type C-SPC instead of C-u C-SPC to cycle through the mark ring.

# global mark ring
The ordinary mark ring is associated with each buffer.
There's a global mark ring, defaults to size 16,
can remember position and their buffer.

* `C-x C-SPC`: pop-global-mark
