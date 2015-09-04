---
title: traversal
---

# traversal
node:

```c++
xml_node xml_node::parent() const;
xml_node xml_node::first_child() const;
xml_node xml_node::last_child() const;
xml_node xml_node::next_sibling() const;
xml_node xml_node::previous_sibling() const;
xml_node xml_node::root() const;
// tag name
xml_node xml_node::child(const char_t* name) const;
xml_node xml_node::next_sibling(const char_t* name) const;
xml_node xml_node::previous_sibling(const char_t* name) const;
// find by attr
xml_node xml_node::find_child_by_attribute(
  const char_t* name,
  const char_t* attr_name,
  const char_t* attr_value
);
xml_node xml_node::find_child_by_attribute(
  const char_t* attr_name,
  const char_t* attr_value
);
```

attr:

```c++
xml_attribute xml_node::first_attribute() const;
xml_attribute xml_node::last_attribute() const;
xml_attribute xml_attribute::next_attribute() const;
xml_attribute xml_attribute::previous_attribute() const;
// tag name
xml_attribute xml_node::attribute(const char_t* name) const;
```

Attributes do not have a link to their parent nodes because of memory consumption reasons.

## range based loop(C++11)
```c++
implementation-defined-type xml_node::children() const;
implementation-defined-type xml_node::children(const char_t* name) const;
implementaiton-defined-type xml_node::attributes() const;
```

example

```c++
for (pugi::xml_node tool : tools.children("Tool")) {
  // ...
}
```

## iterators
API:

```c++
class xml_node_iterator;
class xml_attribute_iterator;

typedef xml_node_iterator xml_node::iterator;
iterator xml_node::begin() const;
iterator xml_node::end() const;

typedef xml_attribute_iterator xml_node::attribute_iterator;
attribute_iterator xml_node::attributes_begin() const;
attribute_iterator xml_node::attributes_end() const;
```

example

```c++
for (pugi::xml_node_iterator it=tools.begin();it!=tools.end();it++) {
  // it->xxx
}
```

## xml_tree_walker
API:

```c++
class xml_tree_walker {
public:
  virtual bool begin(xml_node& node);
  virtual bool for_each(xml_node& node) = 0;
  virtual bool end(xml_node& node);
  int depth() const;
};
bool xml_node::traverse(xml_tree_walker& walker);
```

* `begin` is called with root
* `for_each` is called for all nodes in Depth First Order, except root.
* `end` is called with root

if `begin`, `end`, or any of `for_each` return false,
the traversal terminates and return false.

example

```c++
struct simple_walker : pugi::xml_tree_walker {
  virtual bool for_each(pugi::xml_node& node) {
    // node
    return true; // continue
  }
};
simple_walker walker;
doc.traverse(walker);
```

## simple path
```c++
string_t xml_node::path(char_t delimiter = '/') const;
xml_node xml_node::first_element_by_path(
  const char_t* path,
  char_t delimiter = '/'
);
```

path can be relative or absolute(start with delimiter).
