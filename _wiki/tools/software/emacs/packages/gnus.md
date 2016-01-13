---
title: gnus
---

set the source:

```
(setq gnus-select-method '(nntp "news.gmane.org"))
```


Three kinds of buffers:

# Group

| Key-binding | command                              | desc                            |
|-------------+--------------------------------------+---------------------------------|
| AA          | gnus-group-list-active               | list all groups for subscribe   |
| u           | gnus-group-unsubscribe-current-group | subscribe/unsubscribe(zombie)   |
| L           | gnus-group-list-all-groups           | back to *Group*                 |
| l           | gnus-group-list-groups               | back to group, only list unread |
| C-k         | gnus-group-kill-group                | remove it from *Group*          |
| g           | gnus-group-get-new-news              |                                 |


# Summary
 
| key-binding | command                             | desc                   |
|-------------+-------------------------------------+------------------------|
| a           | gnus-summary-post-news              | post new thread        |
| f           | gnus-summary-followup               | follow up a thread     |
| F           | gnus-summary-followup-with-original | cite the original post |
| r           | gnus-summary-reply                  |                        |
| R           | gnus-summary-reply-with-original    |                        |
| d           | gnus-summary-mark-as-read-forward   |                        |
| /o          | gnus-summary-insert-old-articles    | show read articles     |
| g           | gnus-summary-show-article           | refresh?               |
| SPC         | gnus-summary-next-page              |                        |
| DEL         | gnus-summary-prev-page              |                        |
| c           | gnus-summary-catchup-and-exit       | mark all as read       |
|             |                                     |                        |

As usual, `C-c C-c` send, `C-c C-k` cancel.

