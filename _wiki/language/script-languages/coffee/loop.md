---
title: Loop
---

```coffee
eat food for food in ['toast', 'cheese', 'wine']
```

also with the index:

```coffee
courses = ['greens', 'caviar', 'truffles', 'roast', 'cake']
menu i + 1, dish for dish, i in courses
```

=>

```js
for (i = k = 0, len1 = courses.length; k < len1; i = ++k) {
  dish = courses[i];
  menu(i + 1, dish);
}
```

even more:

```coffee
foods = ['broccoli', 'spinach', 'chocolate']
eat food for food in foods when food isnt 'chocolate'
```

comprehension

```coffee
countdown = (num for num in [10..1])
```

with an object(dict)

```coffee
yearsOld = max: 10, ida: 9, tim: 11

ages = for child, age of yearsOld
  "#{child} is #{age}"
```

do something on the item:

```coffee
for filename in list
  do (filename) ->
    // xxx
```
