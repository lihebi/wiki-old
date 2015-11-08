---
title: date & time
---

# timestamp
| shortcut  | command                  | description                                    |
|-----------+--------------------------+------------------------------------------------|
| `C-c` .   | `org-time-stamp`         | prompt                                         |
| `C-c C-o` | `org-open-at-point`      | access agenda for the date given at cursor     |
| `S-left`  | `org-timestamp-down-day` | change date at cursor down a day               |
| `S-right` | `org-timestamp-up-day`   | change date at cursor up a day                 |
| `S-up`    | `org-timestamp-up`       | change the item(party of a date, like year) up |
| `S-down`  | `org-timestamp-down`     |                                                |

在prompt中可以随意填，基本都可以识别。比如`2015/01/03, 02/05/2014, 14:30pm, fri`.
默认会认为是future.

Can also use relative, say `+3d` is 3 days later, `-wed` is last wensday.

control the calendar from minibuffer
| shortcut    | action                          |
|-------------+---------------------------------|
| `S-right`   | day forward                     |
| `S-left`    | day backward                    |
| `S-down`    | week                            |
| `S-up`      |                                 |
| `M-S-right` | month forward                   |
| `M-S-left`  |                                 |
| `>`         | Scroll forward calendar a month |
| `<`         |                                 |
| `M-v`       | scroll forward 3 months         |
| `C-v`       | backward                        |
| `M-S-down`  | scroll forward a year           |
| `M-S-up`    |                                 |

# deadline & schedule
schedule: plan to start working on that task

```
DEADLINE: <time>
SCHEDULED: <time>
```

| shortcut  | command                 | description              |
|-----------+-------------------------+--------------------------|
| `C-c C-d` | `org-deadline`          | create deadline          |
| `C-c C-s` | `org-schedule`          | create schedule          |
| `C-c / d` | `org-check-deadlines`   | sparse tree for deadline |
| `C-c / b` | `org-check-before-date` |                          |
| `C-c / s` | `org-check-after-date`  |                          |

# timer
| shortcut    | command               | description                   |
|-------------+-----------------------+-------------------------------|
| `C-c C-x 0` | `org-timer-start`     | Start or reset a timer        |
| `C-c C-x ;` | `org-timer-set-timer` | start a countdown timer       |
| `C-c C-x .` | `org-timer`           | insert current value of timer |
