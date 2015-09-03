---
title: modify
---


# modify

## set
```c++
bool xml_node::set_name(const char_t* rhs);
bool xml_node::set_value(const char_t* rhs);
bool xml_attribute::set_name(const char_t* rhs);
bool xml_attribute::set_value(const char_t* rhs);
```

attribute can use different type other than string:

```c++
bool xml_attribute::set_value(int rhs);
bool xml_attribute::set_value(unsigned int rhs);
bool xml_attribute::set_value(double rhs);
bool xml_attribute::set_value(float rhs);
bool xml_attribute::set_value(bool rhs);
bool xml_attribute::set_value(long long rhs);
bool xml_attribute::set_value(unsigned long long rhs);
xml_attribute& xml_attribute::operator=(const char_t* rhs);
xml_attribute& xml_attribute::operator=(int rhs);
xml_attribute& xml_attribute::operator=(unsigned int rhs);
xml_attribute& xml_attribute::operator=(double rhs);
xml_attribute& xml_attribute::operator=(float rhs);
xml_attribute& xml_attribute::operator=(bool rhs);
xml_attribute& xml_attribute::operator=(long long rhs);
xml_attribute& xml_attribute::operator=(unsigned long long rhs);
```
## add/remove
node:

```c++
xml_node xml_node::append_child(xml_node_type type = node_element);
xml_node xml_node::prepend_child(xml_node_type type = node_element);
xml_node xml_node::insert_child_after(xml_node_type type, const xml_node& node);
xml_node xml_node::insert_child_before(xml_node_type type, const xml_node& node);
// node_element with tagname name
xml_node xml_node::append_child(const char_t* name);
xml_node xml_node::prepend_child(const char_t* name);
xml_node xml_node::insert_child_after(const char_t* name, const xml_node& node);
xml_node xml_node::insert_child_before(const char_t* name, const xml_node& node);
```

attr:

```c++
xml_attribute xml_node::append_attribute(const char_t* name);
xml_attribute xml_node::prepend_attribute(const char_t* name);
xml_attribute xml_node::insert_attribute_after(const char_t* name, const xml_attribute& attr);
xml_attribute xml_node::insert_attribute_before(const char_t* name, const xml_attribute& attr);
```

remove:

```c++
bool xml_node::remove_attribute(const xml_attribute& a);
bool xml_node::remove_attribute(const char_t* name);
bool xml_node::remove_child(const xml_node& n);
bool xml_node::remove_child(const char_t* name);
```

example:

```c++
// delete all nodes with specified name
while (node.remove_child("tool"));
```

## clone
node:

```c++
xml_node xml_node::append_copy(const xml_node& proto);
xml_node xml_node::prepend_copy(const xml_node& proto);
xml_node xml_node::insert_copy_after(const xml_node& proto, const xml_node& node);
xml_node xml_node::insert_copy_before(const xml_node& proto, const xml_node& node);
```

attr:

```c++
xml_attribute xml_node::append_copy(const xml_attribute& proto);
xml_attribute xml_node::prepend_copy(const xml_attribute& proto);
xml_attribute xml_node::insert_copy_after(
  const xml_attribute& proto,
  const xml_attribute& attr
);
xml_attribute xml_node::insert_copy_before(
  const xml_attribute& proto,
  const xml_attribute& attr
);
```

## move node
copy the node and remove the origin.
But this is expensive.
The following API avoid that.

```c++
xml_node xml_node::append_move(const xml_node& moved);
xml_node xml_node::prepend_move(const xml_node& moved);
xml_node xml_node::insert_move_after(const xml_node& moved, const xml_node& node);
xml_node xml_node::insert_move_before(const xml_node& moved, const xml_node& node);
```
