---
title: wildcard
---

List<? extends T>
======================

```java
List<? extends Number> foo3 = new ArrayList<Number>();  // Number "extends" Number (in this context)
List<? extends Number> foo3 = new ArrayList<Integer>(); // Integer extends Number
List<? extends Number> foo3 = new ArrayList<Double>();  // Double extends Number
```

Reading
-------

* You can read a Number because any of the lists that could be assigned to foo3 contain a Number or a subclass of Number.
* You can't read an Integer because foo3 could be pointing at a List<Double>.
* You can't read a Double because foo3 could be pointing at a List<Integer>

Writing
-------

* You can't add an Integer because foo3 could be pointing at a List<Double>.
* You can't add a Double because foo3 could be pointing at a List<Integer>.
* You can't add a Number because foo3 could be pointing at a List<Integer>

You can't add any object to List<? extends T>
because you can't guarantee what kind of List it is really pointing to,
so you can't guarantee that the object is allowed in that List.
The only "guarantee" is that you can only read from it and you'll get a T or subclass of  T.


List <? super T >
=================

```java
List<? super Integer> foo3 = new ArrayList<Integer>();  // Integer is a "superclass" of Integer (in this context)
List<? super Integer> foo3 = new ArrayList<Number>();   // Number is a superclass of Integer
List<? super Integer> foo3 = new ArrayList<Object>();   // Object is a superclass of Integer
```

Reading
-------

* You aren't guaranteed an Integer because foo3 could be pointing at a List<Number> or List<Object>.
* You aren't guaranteed an Number because foo3 could be pointing at a List<Object>.
* The only guarantee is that you will get an instance of an Object or subclass of Object (but you don't know what subclass).

Writing
-------

* You can add an Integer because an Integer is allowed in any of above lists.
* You can add an instance of a subclass of Integer because an instance of a subclass of Integer is allowed in any of the above lists.
* You can't add a Double because foo3 could be pointing at a ArrayList<Integer>.
* You can't add a Number because foo3 could be pointing at a ArrayList<Integer>.
* You can't add a Object because foo3 could be pointing at a ArrayList<Integer>

PECS: Producer Extends, Consumer Super
======================================

* `Producer Extends`:
If you need a List to produce T values (you want to read Ts from the list), you need to declare it with ? extends T, e.g. List<? extends Integer>. But you cannot add to this list.
* `Consumer Super`:
If you need a List to consume T values (you want to write Ts into the list), you need to declare it with ? super T, e.g. List<? super Integer>. But there are no guarantees what type of object you may read from this list.
* If you need to both read from and write to a list, you need to declare it exactly with no wildcards, e.g. List<Integer>.

Example
=======

```java
public class Collections {
  public static <T> void copy(List<? super T> dest, List<? extends T> src)
  {
      for (int i=0; i<src.size(); i++)
        dest.set(i,src.get(i));
  }
}
```

Acknowledge
===========
http://stackoverflow.com/questions/4343202/difference-between-super-t-and-extends-t-in-java
