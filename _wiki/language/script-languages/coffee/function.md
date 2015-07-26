---
title: function
---

No need to return. The last statement will be automatically returned.

```coffee
square = (x) -> x * x
```

becomes:

```js
square = function(x) {
  return x * x;
};
```

splats

```coffee
race = (winner, runners...) ->
  print winner, runners
```

becomes:

```js
race = function() {
  var runners, winner;
  winner = arguments[0], runners = 2 <= arguments.length ? slice.call(arguments, 1) : [];
  return print(winner, runners);
};
```

this scope
==========

Use fat arrow `=>` to define a function,
`this` will bind to the current value of `this`.

```coffee
Account = (customer, cart) ->
  @customer = customer
  @cart = cart

  $('.shopping_cart').on 'click', (event) =>
    @customer.purchase @cart
```
